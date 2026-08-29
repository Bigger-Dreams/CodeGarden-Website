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
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
