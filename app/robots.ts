import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The Sanity Studio SPA and API routes are not content — keeping them
      // out of the crawl stops Google reporting them as "alternative page"
      // / "discovered, not indexed" noise.
      disallow: ["/studio", "/api"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
