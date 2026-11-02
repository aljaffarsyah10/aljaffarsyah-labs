import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering philosophy, core technologies, and technical approach behind Aljaffarsyah Labs.",
};

const principles = [
  {
    icon: Code2,
    title: "End-to-End Product Engineering",
    description:
      "Bridging the gap between robust system architecture and polished, responsive user interfaces without bloated dependencies.",
  },
  {
    icon: Cpu,
    title: "High Performance & Scalability",
    description:
      "Crafted with modern server-side rendering, strict static optimization, and lightweight client runtimes for sub-second page loads.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Type Safety",
    description:
      "End-to-end type safety from database schemas to client forms with thorough server-side validation and secure secret management.",
  },
  {
    icon: Layers,
    title: "Maintainable Architectures",
    description:
      "Modular components and clean separation of concerns, ensuring software products can evolve smoothly as features grow.",
  },
];

const techStackGroups = [
  {
    category: "Frontend & UI",
    items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    category: "Backend & Runtime",
    items: ["Node.js", "Server Actions", "REST APIs", "Zod"],
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "Supabase", "Redis", "Schema Design"],
  },
  {
    category: "Tooling & Delivery",
    items: ["Git & GitHub", "Vercel", "Docker", "Turbopack", "ESLint"],
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 left-[20%] h-[500px] w-[500px] blur-[120px] glow-accent pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 space-y-20">
        {/* Header / Intro */}
        <section className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-slate-300">
            About the Lab
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Engineering digital products with precision.
          </h1>
          <p className="text-lg leading-8 text-slate-400">
            Aljaffarsyah Labs is an independent software engineering showcase
            dedicated to crafting robust web applications, modern SaaS
            platforms, and developer tooling.
          </p>
        </section>

        {/* Philosophy & Approach */}
        <section className="grid gap-8 md:grid-cols-2">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl border border-white/10 p-8 space-y-4 hover:border-white/20 transition-colors"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 text-white border border-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Technical Competencies */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Stack & Capabilities
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Core Technologies
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStackGroups.map((group) => (
              <div
                key={group.category}
                className="glass-card rounded-2xl border border-white/10 p-6 space-y-4"
              >
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 border-b border-white/10 pb-3">
                  {group.category}
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {group.items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="glass-card rounded-[2rem] border border-white/10 p-10 sm:p-14 text-center space-y-6">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Interested in collaborating?
          </h2>
          <p className="mx-auto max-w-xl text-base text-slate-400">
            Explore the project showcase or reach out to discuss your software
            requirements and system design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

