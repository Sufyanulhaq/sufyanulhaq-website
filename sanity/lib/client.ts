import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  // Read through Sanity's CDN (apicdn.sanity.io). It has far higher
  // availability and rate limits than the live API, which matters because
  // every page here reads from Sanity during ISR revalidation — a blip on
  // the live API would 5xx the whole site to crawlers. Freshness is still
  // bounded: Next revalidates these fetches every 60s (see lib/content.ts),
  // and lib/content.ts falls back to seed data if a read fails anyway.
  useCdn: true,
});
