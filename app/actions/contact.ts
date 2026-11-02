"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";

export type ContactActionResult = {
  success: boolean;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactInquiry(
  formData: FormData
): Promise<ContactActionResult> {
  // Extract fields
  const rawData = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    message: formData.get("message")?.toString() || "",
    website_url: formData.get("website_url")?.toString() || "",
  };

  // 1. Anti-spam honeypot detection
  if (rawData.website_url) {
    // A bot filled the hidden honeypot field
    return {
      success: false,
      error: "Permintaan Anda terdeteksi sebagai spam otomatis.",
    };
  }

  // 2. Server-side validation with Zod
  const validation = contactSchema.safeParse(rawData);
  if (!validation.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of validation.error.issues) {
      const field = issue.path[0]?.toString() || "form";
      if (!fieldErrors[field]) {
        fieldErrors[field] = [];
      }
      fieldErrors[field].push(issue.message);
    }

    return {
      success: false,
      error: "Data yang dimasukkan tidak valid. Mohon periksa kembali formulir.",
      fieldErrors,
    };
  }

  const { name, email, message } = validation.data;

  // 3. Rate limiting check based on client IP
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const realIp = headerList.get("x-real-ip");
  const clientIp = (forwardedFor ? forwardedFor.split(",")[0].trim() : realIp) || "127.0.0.1";

  const rateCheck = checkRateLimit(clientIp, 5, 10 * 60 * 1000);
  if (!rateCheck.allowed) {
    return {
      success: false,
      error: `Terlalu banyak permintaan dari koneksi Anda. Silakan tunggu ${rateCheck.retryAfterSeconds || 60} detik sebelum mencoba lagi.`,
    };
  }

  // 4. Provider delivery verification (Resend)
  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@aljaffarsyah.com";

  if (!resendApiKey) {
    // Explicit rejection: Acceptance criteria mandates no false success states
    return {
      success: false,
      error:
        "Layanan email belum dikonfigurasi (RESEND_API_KEY belum disetel di server). Silakan kirimkan inquiry Anda langsung ke email resmi: contact@aljaffarsyah.com",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aljaffarsyah Labs <onboarding@resend.dev>",
        to: [receiverEmail],
        reply_to: email,
        subject: `New Inquiry from ${name} via Aljaffarsyah Labs`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      // Do not log user personal data or raw secrets to logs
      return {
        success: false,
        error:
          errorData?.message ||
          "Gagal mengirim pesan melalui penyedia layanan email. Silakan coba kembali nanti.",
      };
    }

    const data = await res.json();
    if (!data.id) {
      return {
        success: false,
        error: "Respons provider tidak valid. Mohon hubungi administrator.",
      };
    }

    return {
      success: true,
      message:
        "Terima kasih! Pesan dan inquiry Anda telah berhasil dikirimkan. Kami akan segera merespons.",
    };
  } catch {
    return {
      success: false,
      error:
        "Terjadi kendala jaringan saat menghubungkan ke penyedia layanan email. Silakan coba kembali.",
    };
  }
}

