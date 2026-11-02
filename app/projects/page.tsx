import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated project archive of software engineering and SaaS products by Aljaffarsyah Labs.",
};

const projects = getAllProjects();

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 left-[20%] h-[500px] w-[500px] blur-[120px] glow-accent pointer-events-none -z-10" />

      {/* Header */}
      <section className="mx-auto max-w-[1200px] px-6 pb-12 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-slate-300 mb-4">
              Portfolio Archive
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              All Projects
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400">
              A curated archive of high-performance software engineering, SaaS
              products, and modern web applications.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-300 self-start md:self-auto">
            {projects.length} Total Projects
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group glass-card flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono uppercase tracking-wider text-[11px] text-slate-200">
                    {project.category}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500">
                    {project.tags.length} technologies
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded"
                  >
                    {project.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} details`}
                  className="rounded-full p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="glass-card rounded-[2.5rem] border border-white/10 p-12 text-center shadow-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Have a project in mind?
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Start your next product with Aljaffarsyah Labs.
          </h2>
          <p className="mx-auto max-w-xl text-base text-slate-400">
            Let&apos;s build software that performs beautifully and scales
            effortlessly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-slate-100 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
