import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      // /portfolio is indexed from the site's pre-rebuild structure and
      // has no route here — send it to the closest current equivalent
      // instead of leaving it as a dead end.
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      // Note: the junk `?u=<digits>` homepage hits from a spam crawler are
      // stripped in proxy.ts, not here — a next.config redirect re-appends
      // the matched query param to the destination and loops.
    ];
  },
};

export default nextConfig;
