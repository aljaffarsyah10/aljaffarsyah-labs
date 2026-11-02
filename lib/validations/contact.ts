import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal harus 2 karakter.")
    .max(100, "Nama maksimal 100 karakter."),
  email: z
    .string()
    .trim()
    .email("Format alamat email tidak valid.")
    .max(255, "Alamat email terlalu panjang."),
  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal harus 10 karakter.")
    .max(3000, "Pesan maksimal 3000 karakter."),
  website_url: z.string().optional(), // Honeypot field for bot detection
});

export type ContactFormData = z.infer<typeof contactSchema>;

