export const apiVersion = "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Content reads go through the fallback path in lib/content.ts whenever
// this is false, so the site works before a Sanity project exists.
export const isSanityConfigured = Boolean(projectId);
