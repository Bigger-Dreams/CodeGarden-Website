// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Priorität/changefreq je Route nachgebildet aus dem Next-Stand (app/sitemap.ts).
// Legal-Seiten (Impressum/Datenschutz) bleiben trotz robots noindex Teil der
// Sitemap, wie im Original.
function serializeSitemapEntry(item) {
  const path = new URL(item.url).pathname.replace(/\/$/, "") || "/";

  if (path === "/") return { ...item, changefreq: "monthly", priority: 1 };
  if (path === "/blog") return { ...item, changefreq: "weekly", priority: 0.8 };
  if (path === "/ueber-uns") return { ...item, changefreq: "yearly", priority: 0.5 };
  if (path === "/impressum") return { ...item, changefreq: "yearly", priority: 0.3 };
  if (path === "/datenschutz") return { ...item, changefreq: "yearly", priority: 0.3 };
  if (path.startsWith("/blog/")) return { ...item, changefreq: "monthly", priority: 0.6 };

  return item;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://codegarden.at',
  output: 'static',
  // Nächstliegendes Äquivalent zu next.config.ts's skipTrailingSlashRedirect.
  trailingSlash: 'ignore',
  integrations: [
    react(),
    mdx(),
    sitemap({ serialize: serializeSitemapEntry }),
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});