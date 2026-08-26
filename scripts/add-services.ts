import path from "node:path";
import { createClient } from "@sanity/client";
import { seedServices, seedSiteSettings } from "../sanity/seed-data";

process.loadEnvFile(path.join(__dirname, "..", ".env.local"));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function main() {
  console.log("Adding WhatsApp number to site settings...");
  await client
    .patch("siteSettings")
    .set({ whatsapp: seedSiteSettings.whatsapp })
    .commit();

  console.log("Writing services...");
  for (const [index, service] of seedServices.entries()) {
    await client.createOrReplace({
      _id: `service-${service.slug}`,
      _type: "service",
      title: service.title,
      slug: { _type: "slug", current: service.slug },
      summary: service.summary,
      whoFor: service.whoFor,
      includes: service.includes,
      deliverables: service.deliverables,
      technologies: service.technologies,
      order: index,
    });
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
