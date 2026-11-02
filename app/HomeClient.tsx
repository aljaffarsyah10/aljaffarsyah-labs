"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "TAILWIND",
  "POSTGRES",
  "AWS",
];

const projects = [
  {
    title: "Nexus Analytics",
    year: "2023",
    category: "SaaS",
    stack: "Next.js",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    alt: "Dark analytics dashboard layout in a premium design.",
  },
  {
    title: "Vault Protocol",
    year: "2024",
    category: "Security",
    stack: "Rust",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern security product interface with strong contrast.",
  },
  {
    title: "Solaris UI",
    year: "2024",
    category: "Design System",
    stack: "React",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant mobile interface with glassmorphism styling.",
  },
];

export default function HomeClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-slate-200 selection:text-slate-950">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 border-b border-white/10 shadow-black/30"
            : "bg-black/60 border-b border-white/5"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-8">
          <div className="text-2xl font-black tracking-tight text-slate-100">
            DEV.SOLO
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.28em] text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-100 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:opacity-90 active:scale-[0.98]"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <main className="relative overflow-hidden pt-20" id="home">
        <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
        <div className="fixed top-0 left-[25%] h-[500px] w-[500px] blur-[100px] glow-accent pointer-events-none -z-10" />

        <section className="min-h-[90vh] flex items-center px-6 py-20 sm:px-8">
          <div className="mx-auto w-full max-w-5xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.28em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-slate-200 animate-pulse" />
              Available for new projects
            </div>

            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
                Building the next{" "}
                <span className="text-slate-200 italic">generation</span> of
                SaaS.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                Independent full-stack engineer specialized in creating
                high-performance, engineering-led digital products that scale
                with your vision. From architecture to aesthetic.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-10 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:scale-[0.98]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:bg-white/5 hover:scale-[0.98]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-white/10 py-20">
          <div className="marquee-track space-x-20 px-6 text-4xl font-black uppercase tracking-[0.08em] text-slate-500 sm:px-8">
            {skills.map((label) => (
              <span
                key={label}
                className="opacity-20 transition hover:opacity-100"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="marquee-track space-x-20 px-6 text-4xl font-black uppercase tracking-[0.08em] text-slate-500 sm:px-8">
            {skills.map((label) => (
              <span
                key={`${label}-copy`}
                className="opacity-20 transition hover:opacity-100"
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8" id="projects">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Work
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Selected Projects
                </h2>
              </div>
              <a
                href="#"
                className="hidden rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-slate-300 transition hover:border-slate-300 hover:text-white md:inline-flex"
              >
                See Archive
              </a>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="group space-y-4">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 transition duration-500 group-hover:-translate-y-1">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-3 text-white backdrop-blur-sm">
                        ↗
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                        <span className="rounded-full bg-white/5 px-2 py-1">
                          {project.category}
                        </span>
                        <span className="rounded-full bg-white/5 px-2 py-1">
                          {project.stack}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      {project.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/5 px-6 py-20 sm:px-8" id="about">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr] items-center">
            <div className="relative">
              <div className="glass-card relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                  alt="Professional Portrait"
                  className="h-full w-full object-cover grayscale opacity-90"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 h-64 w-64 blur-[80px] glow-accent" />
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  The Developer
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Focused on building products that people love to use.
                </h2>
              </div>
              <div className="space-y-4 text-slate-400">
                <p>
                  I am a solo SaaS developer with over 8 years of experience
                  building scalable web applications. I believe that engineering
                  and design are not separate disciplines, but two sides of the
                  same coin.
                </p>
                <p>
                  My approach is meticulous—I don&apos;t just write code; I
                  architect systems that last. Whether it&apos;s a fintech
                  dashboard or a consumer social platform, I bring a level of
                  technical depth and aesthetic polish that is rare to find in
                  the wild.
                </p>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-100 transition hover:text-white"
              >
                Read the full story
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8" id="contact">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="relative z-10 space-y-8 text-center">
              <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Contact
              </span>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Ready to ship?
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
                Currently accepting select projects for Q3 2024. Let&apos;s
                discuss how we can bring your next idea to life with precision
                and speed.
              </p>
              <a
                href="#"
                className="inline-flex rounded-full bg-slate-100 px-12 py-5 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:scale-[0.98]"
              >
                Book a Strategy Call
              </a>
            </div>
            <div className="pointer-events-none absolute inset-0 glow-accent opacity-20" />
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] border-t border-white/10">
        <div className="mx-auto flex flex-col gap-8 px-6 py-12 text-sm text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">
            DEV.SOLO
          </div>
          <p className="text-slate-500">
            © 2024 DEV.SOLO. Built for performance.
          </p>
          <div className="flex flex-wrap gap-6">
            {["Github", "LinkedIn", "Twitter", "Privacy"].map((label) => (
              <a
                key={label}
                href="#"
                className="transition hover:text-slate-100"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
