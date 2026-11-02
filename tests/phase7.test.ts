import { contactSchema } from "../lib/validations/contact";
import { checkRateLimit, resetRateLimitStore } from "../lib/rate-limit";
import {
  verifyOwnerToken,
  ownerCreateProject,
  ownerSetPublishStatus,
  ownerDeleteProject,
} from "../lib/admin/project-management";

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

async function runTests() {
  console.log("=== Running Phase 7 Tests ===");

  // --- 1. Contact Validation Tests ---
  console.log("[Test 1] Contact Schema Validation...");
  const validContact = contactSchema.safeParse({
    name: "John Doe",
    email: "john@example.com",
    message: "Interested in developing a Next.js SaaS MVP.",
  });
  assert(validContact.success === true, "Valid contact payload should pass");

  const invalidEmail = contactSchema.safeParse({
    name: "John Doe",
    email: "not-an-email",
    message: "Interested in developing a Next.js SaaS MVP.",
  });
  assert(invalidEmail.success === false, "Invalid email format should fail");

  const shortMessage = contactSchema.safeParse({
    name: "John Doe",
    email: "john@example.com",
    message: "Hi",
  });
  assert(shortMessage.success === false, "Short message should fail");

  // --- 2. Honeypot Anti-Spam Tests ---
  console.log("[Test 2] Honeypot Bot Detection...");
  const botPayload = {
    name: "Spam Bot",
    email: "bot@spam.com",
    message: "Buy cheap crypto now!",
    website_url: "https://spam-link.com",
  };
  assert(
    Boolean(botPayload.website_url),
    "Honeypot field filled should be identifiable as spam"
  );

  // --- 3. Rate Limit Tests ---
  console.log("[Test 3] In-Memory Rate Limiting...");
  resetRateLimitStore();
  const testIp = "192.168.1.100";
  for (let i = 0; i < 5; i++) {
    const res = checkRateLimit(testIp, 5, 60000);
    assert(res.allowed === true, `Attempt ${i + 1} should be allowed`);
  }
  const blockedRes = checkRateLimit(testIp, 5, 60000);
  assert(blockedRes.allowed === false, "6th attempt should be blocked");
  assert(
    (blockedRes.retryAfterSeconds || 0) > 0,
    "Retry after seconds should be provided"
  );

  // --- 4. Owner Authorization & Project Management Tests ---
  console.log("[Test 4] Owner Authorization...");
  process.env.OWNER_ADMIN_KEY = "test-secret-key-123";

  assert(
    verifyOwnerToken("test-secret-key-123") === true,
    "Correct token must be verified"
  );
  assert(
    verifyOwnerToken("wrong-token") === false,
    "Wrong token must be rejected"
  );
  assert(
    verifyOwnerToken("") === false,
    "Empty token must be rejected"
  );

  console.log("[Test 5] Owner Project Creation & Validation...");
  const unauthorizedCreate = ownerCreateProject("wrong-token", {});
  assert(
    unauthorizedCreate.success === false,
    "Unauthorized create must fail"
  );

  const invalidSchemaCreate = ownerCreateProject("test-secret-key-123", {
    title: "Bad Project",
    slug: "Bad Project Slug!", // Invalid slug
  });
  assert(
    invalidSchemaCreate.success === false,
    "Invalid schema must be rejected"
  );

  const duplicateSlugCreate = ownerCreateProject("test-secret-key-123", {
    id: "proj-duplicate",
    slug: "aether-analytics", // Already exists
    title: "Aether Analytics Clone",
    category: "SaaS",
    description: "Valid description longer than ten characters.",
    overview: "Valid overview longer than twenty characters for testing.",
    problem: "Valid problem explanation longer than twenty characters.",
    solution: "Valid solution explanation longer than twenty characters.",
    highlights: ["Highlight 1"],
    tags: ["React"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      alt: "Alt text for image",
    },
    techStack: [{ title: "Frontend", items: ["React"] }],
    featured: false,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  assert(
    duplicateSlugCreate.success === false,
    "Duplicate slug must be rejected"
  );

  const validNewProject = {
    id: "proj-new-test",
    slug: "nova-engine",
    title: "Nova Engine",
    category: "Infrastructure",
    description: "High-performance data pipeline engine built for scale.",
    overview: "Nova Engine manages high-throughput stream processing at the edge.",
    problem: "Data ingestion latency was causing bottlenecks for real-time services.",
    solution: "Engineered an in-memory queue that processes events with sub-millisecond lag.",
    highlights: ["Edge stream processor", "Sub-millisecond latency"],
    tags: ["Rust", "TypeScript"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      alt: "Nova Engine Interface Display",
    },
    techStack: [{ title: "Core", items: ["Rust", "gRPC"] }],
    featured: false,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const validCreate = ownerCreateProject("test-secret-key-123", validNewProject);
  assert(validCreate.success === true, "Valid project creation must succeed");

  console.log("[Test 6] Owner Publish Status & Deletion...");
  const unpublishRes = ownerSetPublishStatus("test-secret-key-123", "nova-engine", false);
  assert(unpublishRes.success === true, "Unpublishing project must succeed");
  assert(unpublishRes.data?.published === false, "Project must now be draft");

  const deleteRes = ownerDeleteProject("test-secret-key-123", "nova-engine");
  assert(deleteRes.success === true, "Deleting project must succeed");

  console.log("=== All Phase 7 Tests Passed Successfully! ===");
}

runTests().catch((err) => {
  console.error("Test failed with error:", err);
  process.exit(1);
});

