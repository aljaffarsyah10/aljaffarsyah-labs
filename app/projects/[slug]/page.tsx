import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "../../../lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | DEV.SOLO",
      description: "Project not found.",
    };
  }

  return {
    title: `${project.title} | DEV.SOLO`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

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
            <Link
              href="/projects"
              className="transition-colors hover:text-white"
            >
              Projects
            </Link>
            <a href="#details" className="transition-colors hover:text-white">
              Details
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
          <Link
            href="/projects"
            className="rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:opacity-90 active:scale-[0.98]"
          >
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,86,214,0.1),_transparent_40%)] opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-[1200px] px-6 pb-12 pt-12 sm:px-8">
            <div className="flex flex-col gap-6 text-slate-300">
              <span className="text-sm uppercase tracking-[0.28em] text-secondary">
                {project.category}
              </span>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-slate-400">
                {project.overview}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={project.demoUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:opacity-90"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm uppercase tracking-[0.24em] text-slate-100 transition hover:bg-white/5"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pb-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-12">
              <article
                id="details"
                className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20"
              >
                <div>
                  <h2 className="text-3xl font-semibold text-white">
                    Project Details
                  </h2>
                  <p className="mt-4 text-slate-400 leading-8">
                    {project.description}
                  </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4 rounded-3xl border border-white/10 bg-black/70 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      The Problem
                    </h3>
                    <p className="text-slate-400 leading-7">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-4 rounded-3xl border border-white/10 bg-black/70 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      The Solution
                    </h3>
                    <p className="text-slate-400 leading-7">
                      {project.solution}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Highlights
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-slate-400">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Metrics</h3>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-3xl border border-white/10 bg-black/70 p-6 text-center"
                      >
                        <p className="text-4xl font-black text-white">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
                <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                <div className="mt-6 space-y-6">
                  {project.techStack.map((group) => (
                    <div key={group.title}>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                        {group.title}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/70 px-3 py-2 text-[12px] uppercase tracking-[0.28em] text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/80 p-8 shadow-2xl shadow-black/20">
                <h3 className="text-xl font-semibold text-white">
                  Project Navigation
                </h3>
                <div className="mt-6 flex flex-col gap-4">
                  {getAllProjects()
                    .filter((item) => item.slug !== project.slug)
                    .slice(0, 2)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/projects/${item.slug}`}
                        className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-300 transition hover:border-slate-300 hover:text-white"
                      >
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-slate-400">
                          {item.category}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
