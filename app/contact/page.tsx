import type { Metadata } from "next";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aljaffarsyah Labs for project inquiries, consulting, and collaboration.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
      <div className="fixed top-0 right-[20%] h-[500px] w-[500px] blur-[120px] glow-accent pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 space-y-16">
        {/* Header */}
        <section className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-slate-300">
            Get in Touch
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Let&apos;s build something exceptional.
          </h1>
          <p className="text-base sm:text-lg leading-7 text-slate-400">
            Have a project in mind or looking for technical collaboration? Send
            a message and we will respond promptly.
          </p>
        </section>

        {/* Content Layout: Form & Info */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Active Contact Form Component */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Details & Guidelines */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl border border-white/10 p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Direct Email
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    For direct inquiries and RFP documents:
                  </p>
                  <p className="text-sm text-slate-200 mt-2 font-mono">
                    contact@aljaffarsyah.com
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Response Window
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Typically responds within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Collaboration Scope
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Specialized in MVP architecture, SaaS product engineering,
                    and modern frontend performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
