import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPublishedProjectSlugs, getProjectBySlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPublishedProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study was not found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasValidDemo = project.demoUrl && project.demoUrl !== "#";
  const hasValidGithub = project.githubUrl && project.githubUrl !== "#";

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 left-[20%] h-[500px] w-[500px] blur-[120px] glow-accent pointer-events-none -z-10" />

      {/* Back button & Breadcrumb */}
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 pb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>
      </div>

      <main className="mx-auto max-w-[1200px] px-6 sm:px-8 space-y-16">
        {/* Project Header */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-slate-300">
            {project.category}
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl max-w-4xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl leading-8 text-slate-400">
            {project.overview}
          </p>

          {(hasValidDemo || hasValidGithub) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {hasValidDemo && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {hasValidGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
                >
                  Source Code
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </section>

        {/* Problem & Solution Cards */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10 space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-rose-400 font-mono">
              The Challenge
            </span>
            <h2 className="text-2xl font-bold text-white">The Problem</h2>
            <p className="text-sm sm:text-base leading-7 text-slate-400">
              {project.problem}
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10 space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-emerald-400 font-mono">
              The Approach
            </span>
            <h2 className="text-2xl font-bold text-white">The Solution</h2>
            <p className="text-sm sm:text-base leading-7 text-slate-400">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Key Engineering Highlights
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-sm leading-6 text-slate-300"
                >
                  <span className="font-mono text-xs text-slate-500 block mb-2">
                    0{index + 1}
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack Breakdown */}
        {project.techStack && project.techStack.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Technologies & Infrastructure
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.techStack.map((group) => (
                <div
                  key={group.title}
                  className="glass-card rounded-2xl border border-white/10 p-6 space-y-3"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="glass-card rounded-[2.5rem] border border-white/10 p-12 text-center shadow-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Interested in building something similar?
          </p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Let&apos;s talk about your system architecture.
          </h2>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-slate-100 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white"
            >
              Contact Developer
            </Link>
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/15 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
            >
              Browse More Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
