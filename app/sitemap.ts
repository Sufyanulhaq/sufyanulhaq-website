import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getProjects } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  // Use the newest project update as a stand-in for "the site changed", so the
  // sitemap's lastmod values only move when content moves, not on every
  // deploy (which `new Date()` would do).
  const projectDates = projects
    .map((p) => p.updatedAt)
    .filter((d): d is string => Boolean(d))
    .sort();
  const siteLastModified = projectDates.at(-1);

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/services", priority: 0.6 },
    { path: "/contact", priority: 0.5 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    ...(siteLastModified ? { lastModified: siteLastModified } : {}),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    ...(project.updatedAt ? { lastModified: project.updatedAt } : {}),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
