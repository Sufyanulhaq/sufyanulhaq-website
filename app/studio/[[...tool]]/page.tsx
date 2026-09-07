import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio";
import StudioClient from "./StudioClient";

export const dynamic = "force-static";

export { viewport } from "next-sanity/studio";

// Keep the admin UI out of search results (robots.ts also disallows /studio).
export const metadata: Metadata = {
  ...studioMetadata,
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioClient />;
}
