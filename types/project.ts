export type ProjectTechGroup = {
  title: string;
  items: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectCategory = "SaaS" | "Web App" | "Open Source" | "Infrastructure";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  tags: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  techStack: ProjectTechGroup[];
  metrics?: ProjectMetric[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};
