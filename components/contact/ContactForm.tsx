"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { submitContactInquiry, type ContactActionResult } from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState<ContactActionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await submitContactInquiry(formData);
      setResult(res);
      if (res.success) {
        form.reset();
      }
    } catch {
      setResult({
        success: false,
        error: "Terjadi kesalahan yang tidak terduga. Silakan coba kembali.",
      });
    } finally {
      setIsPending(false);
    }
  };

  if (result?.success) {
    return (
      <div className="glass-card rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 sm:p-12 text-center space-y-6">
        <div className="mx-auto inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-white">Inquiry Terkirim</h3>
          <p className="text-sm leading-6 text-slate-300">{result.message}</p>
        </div>
        <div className="pt-2">
          <Button
            type="button"
            onClick={() => setResult(null)}
            className="rounded-full bg-slate-100 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-white"
          >
            Kirim Pesan Lain
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10 space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-xl font-semibold text-white">Project Inquiry</h2>
        <p className="text-xs text-slate-400 mt-1">
          Kirimkan gambaran proyek atau pertanyaan Anda di bawah ini.
        </p>
      </div>

      {result?.error && (
        <div className="flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-300 text-xs leading-5">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold block">Gagal Mengirim Inquiry:</span>
            <span>{result.error}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Anti-spam honeypot field (hidden from legitimate users) */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website_url">Leave this empty</label>
          <input
            id="website_url"
            name="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[0.2em] text-slate-300"
          >
            Nama Lengkap <span className="text-rose-400">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Alex Smith"
            required
            disabled={isPending}
            className="bg-black/50 border-white/15 text-slate-100 placeholder:text-slate-600 focus-visible:ring-slate-300"
          />
          {result?.fieldErrors?.name && (
            <p className="text-[11px] text-rose-400">
              {result.fieldErrors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[0.2em] text-slate-300"
          >
            Alamat Email <span className="text-rose-400">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="alex@company.com"
            required
            disabled={isPending}
            className="bg-black/50 border-white/15 text-slate-100 placeholder:text-slate-600 focus-visible:ring-slate-300"
          />
          {result?.fieldErrors?.email && (
            <p className="text-[11px] text-rose-400">
              {result.fieldErrors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-xs uppercase tracking-[0.2em] text-slate-300"
          >
            Detail Proyek / Pesan <span className="text-rose-400">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Jelaskan kebutuhan produk, ruang lingkup, estimasi timeline, atau pertanyaan Anda..."
            rows={5}
            required
            disabled={isPending}
            className="bg-black/50 border-white/15 text-slate-100 placeholder:text-slate-600 focus-visible:ring-slate-300 resize-none"
          />
          {result?.fieldErrors?.message && (
            <p className="text-[11px] text-rose-400">
              {result.fieldErrors.message[0]}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full rounded-full bg-slate-100 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-black hover:bg-white active:scale-[0.99] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            {isPending ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Mengirimkan Pesan...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                Kirim Inquiry
              </span>
            )}
          </Button>
        </div>

        <p className="text-[11px] text-center text-slate-500">
          Form dilindungi oleh proteksi anti-spam dan verifikasi server.
        </p>
      </form>
    </div>
  );
}

