// One-off: push the human-voice copy rewrite (no dashes, no filler) from
// sanity/seed-data.ts into the live Sanity dataset.
//
// Safe to re-run. Uses targeted `.set()` patches on known document _ids and
// only touches text fields, so screenshots, ordering (orderRank), and any
// other Studio-managed fields are left untouched.
//
// Run with: npx tsx scripts/rewrite-copy.ts
import path from "node:path";
import { createClient } from "@sanity/client";
import {
  seedSiteSettings,
  seedProjects,
  seedServices,
  seedExperience,
} from "../sanity/seed-data";

process.loadEnvFile(path.join(__dirname, "..", ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;
if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Experience docs keep their original _ids even though role text has since
// changed, to avoid creating orphaned duplicates.
const EXPERIENCE_IDS = [
  "experience-junior-web-developer-0",
  "experience-web-designing-intern-1",
];

async function main() {
  console.log("Patching siteSettings...");
  await client
    .patch("siteSettings")
    .set({
      tagline: seedSiteSettings.tagline,
      aboutText: seedSiteSettings.aboutParagraphs.join("\n\n"),
      seoDescription: seedSiteSettings.seoDescription,
    })
    .commit();

  for (const project of seedProjects) {
    const id = `project-${project.slug}`;
    console.log(`Patching ${id}...`);
    await client
      .patch(id)
      .set({
        tag: project.tag ?? "",
        summary: project.summary,
        problem: project.problem,
        solution: project.solution,
        keyFeatures: project.keyFeatures,
        whatILearned: project.whatILearned,
      })
      .commit();
  }

  for (const service of seedServices) {
    const id = `service-${service.slug}`;
    console.log(`Patching ${id}...`);
    await client
      .patch(id)
      .set({
        summary: service.summary,
        whoFor: service.whoFor,
        includes: service.includes,
        deliverables: service.deliverables,
      })
      .commit();
  }

  for (const [i, job] of seedExperience.entries()) {
    const id = EXPERIENCE_IDS[i];
    if (!id) continue;
    console.log(`Patching ${id}...`);
    await client.patch(id).set({ role: job.role, bullets: job.bullets }).commit();
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
