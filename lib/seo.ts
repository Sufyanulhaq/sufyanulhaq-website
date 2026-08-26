import type { Metadata } from "next";
import { site } from "./site";
import type { SiteSettings } from "./content-types";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path = "/",
  image,
}: PageMetaInput): Metadata {
  const url = new URL(path, site.url).toString();
  const ogImage = image ?? new URL("/opengraph-image", site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function personJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: settings.headline,
    address: {
      "@type": "PostalAddress",
      addressLocality: settings.location.split(",")[0].trim(),
      addressCountry: "GB",
    },
    sameAs: [settings.githubUrl, settings.linkedinUrl].filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}
