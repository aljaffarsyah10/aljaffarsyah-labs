import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Aljaffarsyah Labs | Software & SaaS Portfolio",
  description:
    "Engineering-led portfolio and showcase of high-performance SaaS products and software solutions.",
};

const skills = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "TAILWIND CSS",
  "POSTGRESQL",
  "SYSTEM ARCHITECTURE",
  "REST APIS",
];

export default function HomePage() {
  const featuredProjects = getAllProjects().slice(0, 3);

  return (
    <div className="relative overflow-hidden pt-20">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 left-[25%] h-[500px] w-[500px] blur-[100px] glow-accent pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-6 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building the next{" "}
              <span className="text-slate-200 italic font-serif">generation</span> of
              SaaS.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              Aljaffarsyah Labs specializes in creating high-performance,
              engineering-led digital products that scale cleanly. From system
              architecture to polished aesthetic.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white hover:scale-[0.99] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:bg-white/5 hover:scale-[0.99] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="overflow-hidden border-y border-white/10 py-12 bg-black/40 backdrop-blur-sm">
        <div className="marquee-track space-x-16 px-6 text-2xl sm:text-3xl font-black uppercase tracking-[0.16em] text-slate-600 sm:px-8">
          {skills.concat(skills).map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="opacity-40 transition-opacity hover:opacity-100 whitespace-nowrap"
            >
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
              <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Selected Work
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.24em] text-slate-300 transition hover:border-slate-300 hover:text-white"
            >
              All Projects ({getAllProjects().length})
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono uppercase tracking-wider text-[11px] text-slate-200">
                    {project.category}
                  </span>
                  <div className="rounded-full p-1.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-300"
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

      {/* About Teaser Section */}
      <section className="bg-white/[0.02] border-y border-white/10 px-6 py-24 sm:px-8" id="about">
        <div className="mx-auto max-w-[1200px] grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              The Engineering Approach
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Focused on reliable systems and modern developer experience.
            </h2>
            <p className="text-base leading-7 text-slate-400">
              Aljaffarsyah Labs combines scalable backend architectures with
              responsive, accessible frontends. Every product is developed with
              attention to detail, strict type safety, and minimal latency.
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Next.js App Router & Server Components optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Modern TypeScript and schema-validated data flow</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Strict security practices and server-side verification</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:text-slate-300"
              >
                Learn More About The Lab
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">
                Core Philosophy
              </span>
              <h3 className="text-xl font-bold text-white">
                Engineering-Led SaaS
              </h3>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              We believe software should be lean, resilient, and fast. By
              removing unnecessary abstractions and prioritizing type safety, we
              build digital products that are dependable in production.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
              <div>
                <span className="block font-semibold text-white">Framework</span>
                Next.js & React 19
              </div>
              <div>
                <span className="block font-semibold text-white">Language</span>
                TypeScript Strict
              </div>
              <div>
                <span className="block font-semibold text-white">Styling</span>
                Tailwind CSS
              </div>
              <div>
                <span className="block font-semibold text-white">Deployment</span>
                Vercel & Edge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-24 sm:px-8" id="contact">
        <div className="mx-auto max-w-[1000px] rounded-[2.5rem] border border-white/10 bg-white/5 p-12 sm:p-16 text-center shadow-2xl shadow-black/40 backdrop-blur-2xl space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Start a Conversation
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to ship your next product?
            </h2>
            <p className="mx-auto max-w-xl text-base text-slate-400">
              Let&apos;s discuss how we can bring your software ideas to life with
              clean architecture, speed, and precision.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-slate-100 px-10 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white hover:scale-[0.99] active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
