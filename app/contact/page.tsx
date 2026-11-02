import type { Metadata } from "next";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
          {/* Contact Form Presentation */}
          <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-semibold text-white">
                Project Inquiry
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below to initiate a conversation.
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.2em] text-slate-300"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Alex Smith"
                  className="bg-black/50 border-white/15 text-slate-100 placeholder:text-slate-600 focus-visible:ring-slate-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.2em] text-slate-300"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  className="bg-black/50 border-white/15 text-slate-100 placeholder:text-slate-600 focus-visible:ring-slate-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.2em] text-slate-300"
                >
                  Project Details / Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project requirements, scope, or timeline..."
                  rows={5}
                  className="bg-black/50 border-white/15 text-slate-100 placeholder:text-slate-600 focus-visible:ring-slate-300 resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-slate-100 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black hover:bg-white active:scale-[0.99] transition"
                >
                  Send Inquiry
                </Button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                Form delivery integration is being prepared for upcoming verification.
              </p>
            </form>
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
