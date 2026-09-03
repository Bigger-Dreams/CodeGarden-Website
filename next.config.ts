import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Disabled: this would otherwise auto-append a generated block to CLAUDE.md on every `next dev`,
  // and CLAUDE.md here is hand-authored project instructions, not a framework-managed file.
  agentRules: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Reverse-proxy PostHog through our own domain (official PostHog Next.js
  // guide) so requests are first-party instead of going straight to
  // eu.i.posthog.com — reduces ad-blocker interference. EU region.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
  // Next.js only allows quality values explicitly listed here; the default
  // is [75]. 100 is used by the Referenzen screenshots (app/components/Referenzen.tsx).
  images: {
    qualities: [75, 90, 100],
  },
  // public/ assets aren't content-hashed, so a plain Vercel deploy serves them
  // with max-age=0. A week-long cache with a revalidation window is a
  // reasonable middle ground for the hero video/poster, which change rarely.
  async headers() {
    return [
      {
        source: "/:path(poster.webp|showcase.webm|showcase.mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
