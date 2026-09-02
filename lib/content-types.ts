export type SiteSettings = {
  headline: string;
  tagline: string;
  aboutParagraphs: string[];
  email: string;
  location: string;
  githubUrl: string;
  linkedinUrl?: string;
  whatsapp?: string;
  seoDescription: string;
};

export type ProjectStatus = "completed" | "in-development" | "learning";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  tag?: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  keyFeatures: string[];
  whatILearned: string;
  githubUrl?: string;
  demoUrl?: string;
  screenshotUrl?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  isCurrentlyLearning: boolean;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  whoFor: string;
  includes: string[];
  deliverables: string[];
  technologies: string[];
};

export type Experience = {
  role: string;
  org: string;
  location?: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  org: string;
  year: string;
};
