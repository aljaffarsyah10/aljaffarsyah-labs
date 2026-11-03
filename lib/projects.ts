import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "proj-rust-converter",
    slug: "rust-converter",
    title: "OmniConvert Engine (Rust)",
    category: "Infrastructure",
    description:
      "High-throughput multi-threaded file conversion engine written in Rust for parallel audio, video, document, and image processing.",
    overview:
      "OmniConvert Engine is an ultra-fast file conversion runtime engineered in Rust. Designed to handle heavy multi-format transcoding workloads with sub-50ms startup times, parallel batching, and an exceptionally small memory footprint.",
    problem:
      "Existing conversion microservices in the industry relied on legacy wrapper scripts that suffered from excessive memory leaks, slow cold starts, and unstable concurrency during peak transcoding queue spikes.",
    solution:
      "Re-engineered the conversion pipeline natively in Rust utilizing Tokio asynchronous concurrency, SIMD acceleration for image transcoding, and streaming chunk buffers to prevent out-of-memory crashes on large files.",
    highlights: [
      "Native streaming transcode pipeline handling 500MB+ files with <60MB RAM footprint",
      "Parallel batch conversion scaling linearly across multi-core CPU architectures",
      "Zero-copy buffer allocation for ultra-low latency document and media transforms",
    ],
    tags: ["Rust", "Tokio", "WebAssembly", "FFmpeg", "SIMD"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
      alt: "Rust file converter architecture and high-performance server telemetry",
    },
    techStack: [
      {
        title: "Frontend & Sandbox",
        items: ["Next.js", "React", "Tailwind CSS", "Web Workers"],
      },
      {
        title: "Core Conversion Engine",
        items: ["Rust", "Tokio", "Rayon", "SIMD"],
      },
      {
        title: "Infrastructure & Queue",
        items: ["Docker", "AWS ECS", "Redis Queue"],
      },
    ],
    featured: true,
    published: true,
    createdAt: "2025-04-10T00:00:00.000Z",
    updatedAt: "2025-09-15T00:00:00.000Z",
  },
  {
    id: "proj-linkly",
    slug: "linkly",
    title: "Linkly — Smart Shortlinks",
    category: "SaaS",
    description:
      "Modern link management & enterprise shortlink platform with real-time analytics, custom branded domains, and geo-targeting.",
    overview:
      "Linkly is a high-performance URL shortening and marketing analytics platform engineered to deliver sub-15ms redirects worldwide alongside deep edge telemetry, UTM builders, and campaign tracking.",
    problem:
      "Traditional URL shorteners provided clunky dashboards, sluggish redirection times, and lacked granular geo-filtering and privacy-respecting attribution.",
    solution:
      "Engineered an edge-routed redirection architecture with Upstash Redis cache-ahead reads, PostgreSQL persistence, and an interactive real-time telemetry dashboard.",
    highlights: [
      "Sub-15ms global edge redirect latency powered by distributed key-value caching",
      "Real-time clickstream analytics with referrer, device, and geographic breakdowns",
      "Dynamic UTM builder, QR code generation, and custom branded domain routing",
    ],
    tags: ["Next.js", "TypeScript", "Redis", "PostgreSQL", "Tailwind CSS"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      alt: "Linkly URL shortener analytics dashboard showing click tracking charts",
    },
    techStack: [
      {
        title: "Frontend & Dashboard",
        items: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
      },
      {
        title: "Backend & Edge",
        items: ["Server Actions", "Upstash Redis", "Zod"],
      },
      {
        title: "Database & Storage",
        items: ["PostgreSQL", "Prisma", "Vercel Edge"],
      },
    ],
    featured: true,
    published: true,
    createdAt: "2025-02-01T00:00:00.000Z",
    updatedAt: "2025-10-01T00:00:00.000Z",
  },
  {
    id: "proj-01",
    slug: "aether-analytics",
    title: "Aether Analytics",
    category: "SaaS",
    description:
      "Enterprise telemetry engine built for high-throughput data visualization and predictive modeling.",
    overview:
      "Aether Analytics combines real-time signal processing with a modular analytics layer for high-throughput institutional applications.",
    problem:
      "Existing tools fragmented data ingestion and introduced long synchronization delays, creating costly visibility gaps.",
    solution:
      "Engineered an event pipeline with edge workers and a resilient micro-frontend architecture to maintain sub-150ms stream latency.",
    highlights: [
      "Low-latency WebSocket synchronization across distributed edge regions",
      "Modular plugin architecture for extensible data visualization",
      "End-to-end auditability and role-based access control",
    ],
    tags: ["TypeScript", "Next.js", "Rust", "WebSocket"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
      alt: "Dark telemetry interface showing analytical chart breakdowns",
    },
    techStack: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Backend & Systems",
        items: ["Rust", "Node.js", "gRPC", "PostgreSQL"],
      },
      {
        title: "Infrastructure",
        items: ["Docker", "Redis", "Cloudflare Workers", "AWS"],
      },
    ],
    featured: true,
    published: true,
    createdAt: "2025-01-15T00:00:00.000Z",
    updatedAt: "2025-06-20T00:00:00.000Z",
  },
  {
    id: "proj-02",
    slug: "nexus-core",
    title: "Nexus Core",
    category: "Open Source",
    description:
      "A lightweight reactive state engine optimized for ultra-low latency and deterministic state trees.",
    overview:
      "Nexus Core is a zero-dependency open-source library for managing reactive UI tree state across modern browser runtimes.",
    problem:
      "Developers faced significant runtime bloat and hydration mismatches when using heavy monolithic state frameworks.",
    solution:
      "Designed an observable-driven reactive primitive that eliminates redundant re-renders and provides predictable time-travel debugging.",
    highlights: [
      "Zero-dependency reactive core with bundle size under 5KB",
      "Deterministic state transitions with snapshotting",
      "First-class TypeScript ergonomics and strict immutability",
    ],
    tags: ["TypeScript", "WebAssembly", "Reactive", "Open Source"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
      alt: "Clean code structure and system architecture diagram",
    },
    techStack: [
      {
        title: "Runtime",
        items: ["TypeScript", "ESM", "WebAssembly"],
      },
      {
        title: "Testing & Tooling",
        items: ["Vitest", "Vite", "ESLint"],
      },
      {
        title: "Distribution",
        items: ["npm", "GitHub Packages"],
      },
    ],
    featured: true,
    published: true,
    createdAt: "2024-11-10T00:00:00.000Z",
    updatedAt: "2025-04-12T00:00:00.000Z",
  },
  {
    id: "proj-03",
    slug: "lumina-workspace",
    title: "Lumina Workspace",
    category: "Web App",
    description:
      "Collaborative project canvas blending design systems, real-time code previews, and developer workflows.",
    overview:
      "Lumina Workspace combines project specification with live interactive component sandboxing in one central view.",
    problem:
      "Design-to-code handoffs suffered from fragmented tools, out-of-sync documentation, and manual specification reviews.",
    solution:
      "Created a shared multiplayer canvas where design tokens, rendered React components, and user stories synchronize continuously.",
    highlights: [
      "Multiplayer collaboration with operational transformation",
      "Live component compiler inside isolated worker sandbox",
      "Automated token export to CSS variables and Tailwind config",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "WebSockets"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      alt: "Modern workspace interface highlighting design tokens and code preview",
    },
    techStack: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "Tailwind CSS"],
      },
      {
        title: "Real-Time Engine",
        items: ["WebSockets", "Node.js", "Redis"],
      },
      {
        title: "Deployment",
        items: ["Vercel", "Docker"],
      },
    ],
    featured: true,
    published: true,
    createdAt: "2025-03-01T00:00:00.000Z",
    updatedAt: "2025-08-14T00:00:00.000Z",
  },
  {
    id: "proj-04",
    slug: "vault-x",
    title: "Vault-X",
    category: "Infrastructure",
    description:
      "Decentralized secrets management and cryptographic key rotation engine for distributed cloud services.",
    overview:
      "Vault-X provides zero-trust secrets storage and policy-driven credential rotation across multi-cloud environments.",
    problem:
      "Static environment keys leaked across CI/CD pipelines and manual key rotations caused unpredictable service downtime.",
    solution:
      "Built a secure proxy with short-lived dynamic credentials, automated rotation triggers, and immutable audit logs.",
    highlights: [
      "Dynamic short-lived token generation with automated expiration",
      "Hardware-backed encryption and policy enforcement",
      "Comprehensive compliance audit logs streamed via secure gRPC",
    ],
    tags: ["Rust", "Docker", "gRPC", "PostgreSQL"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
      alt: "Security visualization representing encrypted data streams",
    },
    techStack: [
      {
        title: "Core Service",
        items: ["Rust", "OpenSSL", "gRPC"],
      },
      {
        title: "Storage",
        items: ["PostgreSQL", "Redis"],
      },
      {
        title: "Infrastructure",
        items: ["Docker", "Kubernetes", "Terraform"],
      },
    ],
    featured: false,
    published: true,
    createdAt: "2024-08-19T00:00:00.000Z",
    updatedAt: "2025-02-18T00:00:00.000Z",
  },
  {
    id: "proj-05",
    slug: "prism-dashboard",
    title: "Prism Dashboard",
    category: "Web App",
    description:
      "High-throughput log aggregation and anomaly detection dashboard with customizable filtering pipelines.",
    overview:
      "Prism Dashboard provides observability into microservice performance with instant anomaly alerts and noise reduction.",
    problem:
      "Distributed server logs generated overwhelming volumes of noise, making it difficult to pinpoint root causes during outages.",
    solution:
      "Developed a stream processing interface that clusters error patterns and calculates baseline variance in real-time.",
    highlights: [
      "Sub-second log filtering over millions of event records",
      "Noise-suppression heuristics for incident alerting",
      "Customizable layout widgets with persisted workspace state",
    ],
    tags: ["React", "TypeScript", "Node.js", "Elastic"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      alt: "Observability dashboard display with real-time log graphs",
    },
    techStack: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Processing Engine",
        items: ["Node.js", "Kafka", "Elasticsearch"],
      },
      {
        title: "Monitoring",
        items: ["Prometheus", "Grafana", "Docker"],
      },
    ],
    featured: false,
    published: true,
    createdAt: "2024-05-14T00:00:00.000Z",
    updatedAt: "2024-12-05T00:00:00.000Z",
  },
  {
    id: "proj-06",
    slug: "velocity-hr",
    title: "Velocity HR",
    category: "SaaS",
    description:
      "Human capital management SaaS platform with automated performance review pipelines and organizational modeling.",
    overview:
      "Velocity HR replaces cumbersome review cycles with continuous structured feedback, team alignment, and milestone tracking.",
    problem:
      "Organizations struggled with fragmented spreadsheet reviews and lack of visibility into team goals and skill progression.",
    solution:
      "Shipped a unified portal with automated review triggers, 360-degree feedback workflows, and organization hierarchy modeling.",
    highlights: [
      "Structured 360-degree review workflows with multi-role permissions",
      "Dynamic team hierarchy tree with drag-and-drop reorganization",
      "Granular notification preferences and calendar synchronization",
    ],
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    heroImage: {
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80",
      alt: "Clean enterprise interface showing organizational performance metrics",
    },
    techStack: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Backend & Data",
        items: ["Node.js", "PostgreSQL", "Prisma/Drizzle"],
      },
      {
        title: "Cloud & Security",
        items: ["Vercel", "AWS S3", "Auth0"],
      },
    ],
    featured: false,
    published: true,
    createdAt: "2024-02-10T00:00:00.000Z",
    updatedAt: "2024-11-20T00:00:00.000Z",
  },
];

// Verify integrity at initialization time
const slugs = new Set<string>();
for (const p of projects) {
  if (slugs.has(p.slug)) {
    throw new Error(`Duplicate project slug detected: "${p.slug}"`);
  }
  slugs.add(p.slug);
}

/**
 * Get all published projects.
 */
export function getPublishedProjects(): Project[] {
  return projects.filter((project) => project.published);
}

/**
 * Get featured projects for homepage showcase.
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.published && project.featured);
}

/**
 * Get a specific published project by slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.published && project.slug === slug);
}

/**
 * Get all valid published slugs for static generation.
 */
export function getAllPublishedProjectSlugs(): string[] {
  return getPublishedProjects().map((project) => project.slug);
}

/**
 * Legacy alias for backwards compatibility.
 */
export function getAllProjects(): Project[] {
  return getPublishedProjects();
}
