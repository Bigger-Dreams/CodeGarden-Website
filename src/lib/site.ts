// Canonical production URL. Keep PUBLIC_SITE_URL in the Cloudflare Workers
// build variables set to the same value so metadata, OpenGraph images,
// sitemap-index.xml and robots.txt stay aligned.
// import.meta.env statt process.env: diese Datei wird auch von Hero.tsx (React-
// Island) und src/scripts/calendly.ts in den Browser gebündelt, wo `process`
// nicht existiert.
export const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? "https://codegarden.at";

export const contactEmail = "office@codegarden.at";

export const contactMailto = `mailto:${contactEmail}?subject=Anfrage%20%C3%BCber%20die%20Website`;

export const calendlyUrl =
  "https://calendly.com/office-codegarden?background_color=000000&text_color=fffefe&primary_color=41867a";

export const contactHref = "/#kontakt";
