import { z } from "zod";

export const projectCategorySchema = z.enum([
  "SaaS",
  "Web App",
  "Open Source",
  "Infrastructure",
]);

export const projectTechGroupSchema = z.object({
  title: z.string().trim().min(1, "Judul grup teknologi wajib diisi."),
  items: z.array(z.string().trim().min(1)).min(1, "Minimal 1 teknologi per grup."),
});

export const projectMetricSchema = z.object({
  label: z.string().trim().min(1, "Label metrik wajib diisi."),
  value: z.string().trim().min(1, "Nilai metrik wajib diisi."),
});

export const projectSchema = z.object({
  id: z.string().trim().min(1, "Project ID wajib diisi."),
  slug: z
    .string()
    .trim()
    .min(2, "Slug minimal 2 karakter.")
    .max(100, "Slug maksimal 100 karakter.")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug harus huruf kecil dan tanda minus (kebab-case)."),
  title: z.string().trim().min(2, "Judul proyek minimal 2 karakter.").max(120),
  category: projectCategorySchema,
  description: z.string().trim().min(10, "Deskripsi singkat minimal 10 karakter.").max(300),
  overview: z.string().trim().min(20, "Overview studi kasus minimal 20 karakter."),
  problem: z.string().trim().min(20, "Penjelasan masalah minimal 20 karakter."),
  solution: z.string().trim().min(20, "Penjelasan solusi minimal 20 karakter."),
  highlights: z.array(z.string().trim().min(5)).min(1, "Minimal 1 highlight."),
  tags: z.array(z.string().trim().min(1)).min(1, "Minimal 1 tag."),
  heroImage: z.object({
    src: z.string().trim().url("URL cover image harus valid."),
    alt: z.string().trim().min(5, "Alt text cover image minimal 5 karakter."),
  }),
  techStack: z.array(projectTechGroupSchema).min(1, "Minimal 1 grup tech stack."),
  metrics: z.array(projectMetricSchema).optional(),
  demoUrl: z.string().trim().url("Demo URL harus berformat URL valid.").optional().or(z.literal("")),
  githubUrl: z.string().trim().url("GitHub URL harus berformat URL valid.").optional().or(z.literal("")),
  featured: z.boolean(),
  published: z.boolean(),
  createdAt: z.string().datetime("Format createdAt harus ISO datetime."),
  updatedAt: z.string().datetime("Format updatedAt harus ISO datetime."),
});

export type ProjectInput = z.infer<typeof projectSchema>;

