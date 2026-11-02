import { projects } from "@/lib/projects";
import type { Project } from "@/types/project";
import { projectSchema, type ProjectInput } from "@/lib/validations/project";

export type OperationResult<T = unknown> = {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
};

/**
 * Verify owner credentials using environment secret.
 */
export function verifyOwnerToken(token?: string): boolean {
  const ownerKey = process.env.OWNER_ADMIN_KEY || "dev-owner-secret-key";
  if (!token || !ownerKey) {
    return false;
  }
  return token === ownerKey;
}

/**
 * Owner-restricted project creation with strict schema validation.
 */
export function ownerCreateProject(
  token: string,
  payload: unknown
): OperationResult<Project> {
  // 1. Owner authorization check
  if (!verifyOwnerToken(token)) {
    return {
      success: false,
      error: "Unauthorized: Operasi ini hanya diizinkan untuk pemilik (owner).",
    };
  }

  // 2. Strict payload validation
  const validation = projectSchema.safeParse(payload);
  if (!validation.success) {
    const errorDetails = validation.error.issues
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join("; ");
    return {
      success: false,
      error: `Validasi gagal: ${errorDetails}`,
    };
  }

  const newProject = validation.data as Project;

  // 3. Slug uniqueness check
  const slugExists = projects.some((p) => p.slug === newProject.slug);
  if (slugExists) {
    return {
      success: false,
      error: `Slug "${newProject.slug}" sudah digunakan oleh proyek lain.`,
    };
  }

  // 4. Persistence validation (memory simulation for source-controlled MVP)
  projects.push(newProject);

  return {
    success: true,
    message: `Proyek "${newProject.title}" berhasil dibuat.`,
    data: newProject,
  };
}

/**
 * Owner-restricted project update.
 */
export function ownerUpdateProject(
  token: string,
  slug: string,
  updates: Partial<ProjectInput>
): OperationResult<Project> {
  if (!verifyOwnerToken(token)) {
    return {
      success: false,
      error: "Unauthorized: Operasi ini hanya diizinkan untuk pemilik (owner).",
    };
  }

  const existingIndex = projects.findIndex((p) => p.slug === slug);
  if (existingIndex === -1) {
    return {
      success: false,
      error: `Proyek dengan slug "${slug}" tidak ditemukan.`,
    };
  }

  const existingProject = projects[existingIndex];
  const merged = {
    ...existingProject,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  const validation = projectSchema.safeParse(merged);
  if (!validation.success) {
    const errorDetails = validation.error.issues
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join("; ");
    return {
      success: false,
      error: `Validasi update gagal: ${errorDetails}`,
    };
  }

  projects[existingIndex] = validation.data as Project;

  return {
    success: true,
    message: `Proyek "${projects[existingIndex].title}" berhasil diperbarui.`,
    data: projects[existingIndex],
  };
}

/**
 * Owner-restricted publish / unpublish toggle.
 */
export function ownerSetPublishStatus(
  token: string,
  slug: string,
  published: boolean
): OperationResult<Project> {
  if (!verifyOwnerToken(token)) {
    return {
      success: false,
      error: "Unauthorized: Operasi ini hanya diizinkan untuk pemilik (owner).",
    };
  }

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      success: false,
      error: `Proyek dengan slug "${slug}" tidak ditemukan.`,
    };
  }

  // Prevent publishing if crucial content is empty
  if (published && (!project.overview || !project.problem || !project.solution)) {
    return {
      success: false,
      error: "Konten studi kasus belum lengkap (overview/problem/solution kosong). Tidak dapat dipublikasikan.",
    };
  }

  project.published = published;
  project.updatedAt = new Date().toISOString();

  return {
    success: true,
    message: `Status publikasi proyek "${project.title}" diubah menjadi: ${published ? "Published" : "Draft"}.`,
    data: project,
  };
}

/**
 * Owner-restricted project deletion.
 */
export function ownerDeleteProject(
  token: string,
  slug: string
): OperationResult<{ slug: string }> {
  if (!verifyOwnerToken(token)) {
    return {
      success: false,
      error: "Unauthorized: Operasi ini hanya diizinkan untuk pemilik (owner).",
    };
  }

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return {
      success: false,
      error: `Proyek dengan slug "${slug}" tidak ditemukan.`,
    };
  }

  projects.splice(index, 1);

  return {
    success: true,
    message: `Proyek dengan slug "${slug}" telah dihapus.`,
    data: { slug },
  };
}

