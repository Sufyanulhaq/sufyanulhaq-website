import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  // Freshness is controlled by Next's own fetch revalidation (see
  // lib/content.ts), so the CDN's separate cache layer would only add a
  // second, less predictable staleness window on top of that.
  useCdn: false,
});
