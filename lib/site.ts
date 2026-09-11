// Set NEXT_PUBLIC_SITE_URL once a real domain is live (Vercel project settings
// for production, .env.local for local dev). The fallback below is a reserved
// placeholder domain (example.com) so an unconfigured deploy fails obviously
// instead of quietly publishing a sitemap/robots.txt with a fake-looking URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";

export const contactEmail = "patrick.roith@aon.at";

export const contactMailto = `mailto:${contactEmail}?subject=Anfrage%20%C3%BCber%20die%20Website`;

export const calendlyUrl =
  "https://calendly.com/office-codegarden?background_color=000000&text_color=fffefe&primary_color=41867a";

export const contactHref = "/#kontakt";
