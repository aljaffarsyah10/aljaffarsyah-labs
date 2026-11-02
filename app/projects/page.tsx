import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedProjects } from "@/lib/projects";
import { ProjectsCatalogClient } from "@/components/project/ProjectsCatalogClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated project archive of software engineering and SaaS products by Aljaffarsyah Labs.",
};

export default function ProjectsPage() {
  const publishedProjects = getPublishedProjects();

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 left-[20%] h-[500px] w-[500px] blur-[120px] glow-accent pointer-events-none -z-10" />

      {/* Page Header */}
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
            {publishedProjects.length} Public Projects
          </div>
        </div>
      </section>

      {/* Interactive Catalog (Filter, Search, Grid, Empty State) */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-8">
        <ProjectsCatalogClient initialProjects={publishedProjects} />
      </section>

      {/* Bottom CTA Banner */}
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
              className="inline-flex rounded-full bg-slate-100 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
