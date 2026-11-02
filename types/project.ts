export type ProjectTechGroup = {
  title: string;
  items: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  tags: string[];
  heroImage: string;
  techStack: ProjectTechGroup[];
  metrics: ProjectMetric[];
  demoUrl: string;
  githubUrl: string;
};
