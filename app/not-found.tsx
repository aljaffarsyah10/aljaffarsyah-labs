import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6 py-24 sm:px-8 overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 h-[450px] w-[450px] blur-[120px] glow-accent pointer-events-none -z-10" />

      <div className="glass-card max-w-lg w-full rounded-3xl border border-white/10 p-10 sm:p-14 text-center space-y-8 shadow-2xl">
        <div className="mx-auto inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300">
          <Compass className="h-8 w-8" />
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Page or Project Not Found
          </h1>
          <p className="text-sm sm:text-base leading-6 text-slate-400">
            The case study or page you are looking for does not exist, has been
            relocated, or is currently unpublished.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Explore Projects
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

