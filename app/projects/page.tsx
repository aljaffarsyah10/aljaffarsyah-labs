import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects } from "../../lib/projects";

export const metadata: Metadata = {
  title: "Projects | DEV.SOLO",
  description: "Curated project archive for DEV.SOLO engineering work.",
};

const projects = getAllProjects();

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-slate-200 selection:text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            DEV.SOLO
          </Link>
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.28em] text-slate-300">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/projects" className="text-white">
              Projects
            </Link>
            <a href="#archive" className="transition-colors hover:text-white">
              Archive
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
          <Link
            href="/#contact"
            className="rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:opacity-90 active:scale-[0.98]"
          >
            Start a Project
          </Link>
        </div>
      </nav>

      <main className="pt-24">
        <section className="mx-auto max-w-[1200px] px-6 pb-12 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                All Projects
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                A curated archive of high-performance engineering, digital
                products, and experimental open-source software.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              {projects.length} featured projects.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pb-16 sm:px-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/10 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <label className="block text-sm uppercase tracking-[0.28em] text-slate-400">
                Search projects
              </label>
              <input
                type="text"
                placeholder="Search systems, frameworks, or names..."
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-slate-300 focus:ring-2 focus:ring-slate-300/10"
              />
            </div>
            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3">
              {[
                "All Projects",
                "SaaS",
                "Web Apps",
                "Open Source",
                "Infrastructure",
              ].map((label) => (
                <button
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-slate-100 transition hover:border-slate-300 hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="archive"
          className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="glass-card flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-xl shadow-black/10"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-slate-300">
                      {project.category}
                    </span>
                    <span className="text-slate-500 text-xs uppercase tracking-[0.24em]">
                      {project.tags.length} tags
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition hover:text-secondary"
                    >
                      {project.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-slate-400">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 bg-black/80 px-8 py-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-8"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Ready to build?
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Start your next project with DEV.SOLO.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m accepting select collaborations for Q4 2024. Let&apos;s
              design and ship a product that feels premium, performs
              beautifully, and scales effortlessly.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-full bg-slate-100 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:opacity-90"
              >
                Start a Project
              </Link>
              <a
                href="#"
                className="rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.24em] text-slate-100 transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
