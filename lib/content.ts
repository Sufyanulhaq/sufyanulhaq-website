import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";
import {
  siteSettingsQuery,
  projectsQuery,
  projectBySlugQuery,
  skillGroupsQuery,
  servicesQuery,
  experienceQuery,
  educationQuery,
} from "@/sanity/lib/queries";
import {
  seedSiteSettings,
  seedProjects,
  seedSkillGroups,
  seedServices,
  seedExperience,
  seedEducation,
} from "@/sanity/seed-data";
import type {
  SiteSettings,
  Project,
  SkillGroup,
  Service,
  Experience,
  Education,
} from "./content-types";

const REVALIDATE_SECONDS = 60;

async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  return client.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return seedSiteSettings;

  const result = await sanityFetch<{
    headline?: string;
    tagline?: string;
    aboutText?: string;
    email?: string;
    location?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    whatsapp?: string;
    cvUrl?: string;
    photoUrl?: string;
    seoDescription?: string;
  } | null>(siteSettingsQuery);

  if (!result) return seedSiteSettings;

  return {
    headline: result.headline || seedSiteSettings.headline,
    tagline: result.tagline || seedSiteSettings.tagline,
    aboutParagraphs: result.aboutText
      ? result.aboutText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
      : seedSiteSettings.aboutParagraphs,
    email: result.email || seedSiteSettings.email,
    location: result.location || seedSiteSettings.location,
    githubUrl: result.githubUrl || seedSiteSettings.githubUrl,
    linkedinUrl: result.linkedinUrl || seedSiteSettings.linkedinUrl,
    whatsapp: result.whatsapp || seedSiteSettings.whatsapp,
    cvUrl: result.cvUrl,
    photoUrl: result.photoUrl,
    seoDescription: result.seoDescription || seedSiteSettings.seoDescription,
  };
}

export async function getProjects(): Promise<Project[]> {
  if (!isSanityConfigured) return seedProjects;
  const result = await sanityFetch<Project[]>(projectsQuery);
  return result?.length ? result : seedProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (!isSanityConfigured) {
    return seedProjects.find((p) => p.slug === slug);
  }
  const result = await sanityFetch<Project | null>(projectBySlugQuery, { slug });
  return result ?? undefined;
}

export function getCompletedProjects(projects: Project[]) {
  return projects.filter((p) => p.status === "completed");
}

export function getInProgressProjects(projects: Project[]) {
  return projects.filter((p) => p.status !== "completed");
}

export async function getSkillGroups(): Promise<SkillGroup[]> {
  if (!isSanityConfigured) return seedSkillGroups;
  const result = await sanityFetch<SkillGroup[]>(skillGroupsQuery);
  return result?.length ? result : seedSkillGroups;
}

export async function getServices(): Promise<Service[]> {
  if (!isSanityConfigured) return seedServices;
  const result = await sanityFetch<Service[]>(servicesQuery);
  return result?.length ? result : seedServices;
}

export async function getExperience(): Promise<Experience[]> {
  if (!isSanityConfigured) return seedExperience;
  const result = await sanityFetch<Experience[]>(experienceQuery);
  return result?.length ? result : seedExperience;
}

export async function getEducation(): Promise<Education[]> {
  if (!isSanityConfigured) return seedEducation;
  const result = await sanityFetch<Education[]>(educationQuery);
  return result?.length ? result : seedEducation;
}
