// Canonical production URL. Keep NEXT_PUBLIC_SITE_URL in Vercel set to the same
// value so metadata, OpenGraph images, sitemap.xml and robots.txt stay aligned.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codegarden.at";

export const contactEmail = "patrick.roith@aon.at";

export const contactMailto = `mailto:${contactEmail}?subject=Anfrage%20%C3%BCber%20die%20Website`;

export const calendlyUrl =
  "https://calendly.com/office-codegarden?background_color=000000&text_color=fffefe&primary_color=41867a";

export const contactHref = "/#kontakt";
