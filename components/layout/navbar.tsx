"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 border-b border-white/10 shadow-lg shadow-black/40 backdrop-blur-md"
          : "bg-black/60 border-b border-white/5 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-8"
      >
        <Link
          href="/"
          className="text-xl sm:text-2xl font-black tracking-tight text-white hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded"
        >
          ALJAFFARSYAH<span className="text-slate-400 font-light">.LABS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-white py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded ${
                  isActive
                    ? "text-white font-bold border-b-2 border-white"
                    : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-slate-200 hover:shadow-md hover:shadow-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Hamburger Sheet */}
        <div className="flex md:hidden items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[320px] bg-black border-l border-white/10 text-white p-6"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-lg font-black tracking-tight text-white">
                  ALJAFFARSYAH<span className="text-slate-400 font-light">.LABS</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 text-sm uppercase tracking-[0.24em]">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`py-2 transition-colors hover:text-white ${
                        isActive ? "text-white font-bold" : "text-slate-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white"
                  >
                    Let&apos;s Talk
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

