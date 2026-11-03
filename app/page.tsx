import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, Terminal, Zap, Shield, Sparkles } from "lucide-react";
import { getFeaturedProjects, getPublishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Aljaffarsyah Labs | Software & SaaS Portfolio",
  description:
    "Engineering-led portfolio and showcase of high-performance SaaS products, Rust systems, and modern web architectures.",
};

const skills = [
  "RUST",
  "NEXT.JS 16",
  "REACT 19",
  "TYPESCRIPT",
  "NODE.JS",
  "REDIS",
  "POSTGRESQL",
  "TAILWIND CSS",
  "SIMD & PARALLEL",
  "SYSTEM ARCHITECTURE",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const allProjectsCount = getPublishedProjects().length;

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 left-[20%] h-[550px] w-[550px] blur-[130px] glow-accent pointer-events-none -z-10 opacity-70" />
      <div className="fixed top-1/3 right-[15%] h-[400px] w-[400px] blur-[120px] bg-blue-500/5 pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-6 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-md shadow-inner">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for SaaS Engineering & Strategic Collaborations</span>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
              High-performance systems &{" "}
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                engineering-led SaaS.
              </span>
            </h1>
            <p className="max-w-2xl text-base sm:text-xl leading-relaxed text-slate-300 font-normal">
              Aljaffarsyah Labs engineers ultra-fast web products, low-latency
              Rust runtimes, and scalable digital architectures. Built with
              relentless attention to performance, security, and developer clarity.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-black transition-all hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              Explore Projects ({allProjectsCount})
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-slate-200 transition-all hover:bg-white/10 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              Start Conversation
            </Link>
          </div>

          {/* Quick Pillars */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Sub-second Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-sky-400" />
              <span>Rust & Next.js 16</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Type-Safe Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>Production Proven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="overflow-hidden border-y border-white/10 py-10 bg-black/60 backdrop-blur-md">
        <div className="marquee-track space-x-14 px-6 text-xl sm:text-2xl font-bold uppercase tracking-wider text-slate-400 sm:px-8">
          {skills.concat(skills).map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="opacity-60 transition-opacity hover:opacity-100 whitespace-nowrap flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Selected Featured Projects */}
      <section className="px-6 py-24 sm:px-8" id="projects">
        <div className="mx-auto max-w-[1200px] space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300">
                Selected Work
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-200 transition-all hover:bg-white hover:text-black"
            >
              View All Archive ({allProjectsCount})
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Featured Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group glass-card flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                <div className="space-y-4">
                  {/* Thumbnail Cover */}
                  {project.heroImage?.src && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                      <Image
                        src={project.heroImage.src}
                        alt={project.heroImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-200 border border-white/10 shadow-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 rounded-full bg-black/70 backdrop-blur-md p-1.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-all border border-white/10">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Section */}
      <section className="bg-white/[0.02] border-y border-white/10 px-6 py-24 sm:px-8" id="about">
        <div className="mx-auto max-w-[1200px] grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300">
              The Engineering Approach
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineered for predictable scale, speed, and maintainability.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Aljaffarsyah Labs combines scalable backend architectures (Rust,
              Node.js, Redis, PostgreSQL) with responsive, highly accessible
              frontends. Every system is built with strict type safety, zero
              unnecessary bloat, and predictable latency.
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Next.js 16 App Router & React 19 Server Components</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Rust native microservices & parallel processing engines</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero-trust security practices & server-verified data pipelines</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:text-slate-300"
              >
                Learn More About The Lab
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-white/15 p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">
                Core Specializations
              </span>
              <h3 className="text-2xl font-bold text-white">
                Full-Stack Systems & SaaS
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              From building high-throughput transcoding runtimes like OmniConvert
              to modern link attribution engines like Linkly, our work prioritizes
              measurable performance metrics over cosmetic complexity.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div>
                <span className="block font-semibold text-white">Web Platform</span>
                Next.js 16, React 19, TypeScript
              </div>
              <div>
                <span className="block font-semibold text-white">Systems Core</span>
                Rust, Tokio Concurrency, SIMD
              </div>
              <div>
                <span className="block font-semibold text-white">Data & Caching</span>
                PostgreSQL, Redis, Edge Storage
              </div>
              <div>
                <span className="block font-semibold text-white">Deployment</span>
                Vercel, Docker, AWS ECS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-24 sm:px-8" id="contact">
        <div className="mx-auto max-w-[1000px] rounded-[2.5rem] border border-white/15 bg-white/[0.04] p-12 sm:p-16 text-center shadow-2xl shadow-black/50 backdrop-blur-2xl space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-300">
              Start a Conversation
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to ship your next high-performance product?
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-300">
              Let&apos;s discuss how we can turn your requirements into scalable
              software architectures with speed and precision.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-10 py-4 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-slate-200 hover:shadow-xl hover:shadow-white/10 active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
