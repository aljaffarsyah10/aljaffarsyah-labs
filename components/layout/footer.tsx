import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-slate-400">
      <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              ALJAFFARSYAH<span className="text-slate-400 font-light">.LABS</span>
            </Link>
            <p className="text-xs text-slate-500 max-w-sm">
              Engineering-led portfolio and showcase of high-performance SaaS
              products.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.24em]">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="transition hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Aljaffarsyah Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for select projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

