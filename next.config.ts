import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disabled: this would otherwise auto-append a generated block to CLAUDE.md on every `next dev`,
  // and CLAUDE.md here is hand-authored project instructions, not a framework-managed file.
  agentRules: false,
};

export default nextConfig;
