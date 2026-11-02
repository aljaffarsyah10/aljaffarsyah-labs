import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "aether-analytics",
    title: "Aether Analytics",
    category: "SaaS",
    description:
      "A next-generation enterprise telemetry engine built for high-throughput data visualization and predictive modeling.",
    overview:
      "Aether Analytics combines real-time market signal processing with a modular analytics layer for institutional clients.",
    problem:
      "Existing tools fragmented liquidity and introduced long synchronization delays, causing costly slippage for traders.",
    solution:
      "We built a distributed event pipeline with Rust edge workers and a resilient micro-frontend interface to keep all markets in sync with sub-150ms latency.",
    highlights: [
      "Low-latency WebSocket sync across global regions",
      "Modular plugin architecture for asset class expansion",
      "Integrated security with multi-signature authentication",
    ],
    tags: ["TypeScript", "Next.js", "Rust"],
    heroImage:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
    techStack: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Backend",
        items: ["Rust", "Node.js", "gRPC", "PostgreSQL"],
      },
      {
        title: "Infrastructure",
        items: ["AWS Lambda", "Docker", "Redis", "Terraform"],
      },
    ],
    metrics: [
      { label: "Latency Reduction", value: "98%" },
      { label: "Volume Processed", value: "$1.2B" },
      { label: "Average Tick Delay", value: "15ms" },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "nexus-core",
    title: "Nexus Core",
    category: "Open Source",
    description:
      "A lightweight state management library optimized for ultra-low latency and complex reactive application trees.",
    overview:
      "Nexus Core is a tiny open-source runtime for building highly reactive interfaces without bloated dependencies.",
    problem:
      "Developers were forced to choose between heavy frameworks and brittle custom solutions for high-performance UI state.",
    solution:
      "We shipped a minimal API with observable primitives, enabling fast renders and safe hydration on any platform.",
    highlights: [
      "Zero-dependency reactive engine",
      "Predictable state transitions with snapshotting",
      "Optimized for modern web and edge deployments",
    ],
    tags: ["WASM", "Go", "Redis"],
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    techStack: [
      {
        title: "Runtime",
        items: ["WebAssembly", "Go", "Redis"],
      },
      {
        title: "Tooling",
        items: ["TypeScript", "ESM", "Vite"],
      },
      {
        title: "Deployment",
        items: ["Netlify", "Cloudflare Workers"],
      },
    ],
    metrics: [
      { label: "Bundle Size", value: "< 5KB" },
      { label: "Startup Time", value: "< 16ms" },
      { label: "GitHub Stars", value: "6.3K" },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "lumina-workspace",
    title: "Lumina Workspace",
    category: "Web App",
    description:
      "A productivity suite for design-led engineering teams with live collaborative prototyping.",
    overview:
      "Lumina Workspace blends project management, code collaboration, and visual design in one elegant interface.",
    problem:
      "Teams were using too many disconnected tools, leading to poor handoffs and slower product cycles.",
    solution:
      "We created a unified workspace where design systems, code previews, and team workflows share the same canvas.",
    highlights: [
      "Live collaborative editing",
      "Design system-driven component library",
      "Priority-based developer workflow",
    ],
    tags: ["React", "Tailwind", "Framer Motion"],
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    techStack: [
      {
        title: "Frontend",
        items: ["React", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Data",
        items: ["Firebase", "Supabase", "WebSockets"],
      },
      {
        title: "DevOps",
        items: ["Vercel", "Cypress", "Jest"],
      },
    ],
    metrics: [
      { label: "Collaboration Uptime", value: "99.9%" },
      { label: "Team Adoption", value: "512 teams" },
      { label: "Feature Velocity", value: "2x faster" },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "vault-x",
    title: "Vault-X",
    category: "Infrastructure",
    description:
      "Decentralized key management and secret storage built on hardware-level encryption.",
    overview:
      "Vault-X delivers enterprise-grade security for distributed systems and developer workflows.",
    problem:
      "Secrets were scattered across services, making rotation and access control difficult to maintain.",
    solution:
      "We designed an encrypted secrets vault with policy-driven access and audit logging for every transaction.",
    highlights: [
      "Hardware-backed key storage",
      "Fine-grained access policies",
      "Built-in audit trail and rotation engine",
    ],
    tags: ["C++", "Docker", "gRPC"],
    heroImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    techStack: [
      {
        title: "Core",
        items: ["C++", "gRPC", "OpenSSL"],
      },
      {
        title: "Infrastructure",
        items: ["Docker", "Kubernetes", "Terraform"],
      },
      {
        title: "Storage",
        items: ["PostgreSQL", "Vault", "Redis"],
      },
    ],
    metrics: [
      { label: "Secrets Managed", value: "1.4M" },
      { label: "Access Policies", value: "380" },
      { label: "Compliance", value: "SOC 2 Ready" },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "prism-dashboard",
    title: "Prism Dashboard",
    category: "Web App",
    description:
      "A dashboard for large-scale log aggregation and anomaly detection with custom visualization.",
    overview:
      "Prism Dashboard provides engineers with a single pane for monitoring complex infrastructure and user behavior.",
    problem:
      "Existing monitoring tools were slow and difficult to customize for enterprise workflows.",
    solution:
      "We built a WebGL-powered interface with dynamic filters and real-time signal analysis.",
    highlights: [
      "Custom visualization engine",
      "Noise-filtered anomaly alerts",
      "Adaptive dashboard templates",
    ],
    tags: ["Three.js", "Elastic", "Node.js"],
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    techStack: [
      {
        title: "Visualization",
        items: ["Three.js", "D3", "WebGL"],
      },
      {
        title: "Engine",
        items: ["Node.js", "Elastic", "Kafka"],
      },
      {
        title: "Ops",
        items: ["Docker", "Prometheus", "Grafana"],
      },
    ],
    metrics: [
      { label: "Alerts Delivered", value: "12K / day" },
      { label: "Dashboard Load", value: "< 180ms" },
      { label: "Retention", value: "98%" },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "velocity-hr",
    title: "Velocity HR",
    category: "SaaS",
    description:
      "Enterprise human capital management platform powered by AI-driven team insights.",
    overview:
      "Velocity HR helps growing organizations align hiring, performance, and culture in one central platform.",
    problem:
      "HR teams were locked into slow legacy systems with poor analytics and opaque reporting.",
    solution:
      "We implemented AI scoring for hiring and a workflow-driven performance review system with real-time feedback.",
    highlights: [
      "AI-powered people insights",
      "Automated review workflows",
      "Scalable org modeling",
    ],
    tags: ["PyTorch", "Vue 3", "PostgreSQL"],
    heroImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80",
    techStack: [
      {
        title: "AI",
        items: ["PyTorch", "Python", "FastAPI"],
      },
      {
        title: "Frontend",
        items: ["Vue 3", "Tailwind CSS", "Pinia"],
      },
      {
        title: "Data",
        items: ["PostgreSQL", "Redis", "Airflow"],
      },
    ],
    metrics: [
      { label: "Team Efficiency", value: "+34%" },
      { label: "Time Saved", value: "1.6M hrs" },
      { label: "Adoption", value: "76%" },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
