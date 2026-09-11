# Migrationsplan: Next.js → Astro (CodeGarden Business Website)

## Context

Die Website läuft aktuell auf Next.js 16 (App Router) und ist bereits vollständig statisch generiert (SSG, keine dynamischen Server-Daten pro Request). Ziel des Wechsels zu Astro ist primär die **Reduzierung des ausgelieferten JavaScripts**: Astro liefert standardmäßig reines HTML/CSS und hydratisiert nur explizit markierte Komponenten ("Islands"), während Next.js den React-Runtime auch für komplett statische Sections mitliefert. Da die Seite serverseitig schon SSG ist, liegt der reale Gewinn bei Time-to-Interactive/JS-Payload im Browser, nicht bei der Server-Antwortzeit.

Vorgehen (bereits abgestimmt): Migration auf einem neuen Branch (`astro-migration`) im **bestehenden** Repo (nicht neues Repo), ausgecheckt über `git worktree` in einen zweiten lokalen Ordner (`/Users/patrick/CodeGarden`), sodass Next.js (`main`, in `/Users/patrick/Business_Website`) und Astro (Branch, hier) parallel als getrennte Verzeichnisse laufen und visuell verglichen werden können. Der Branch ersetzt die Next.js-Struktur vollständig (kein dauerhaftes Nebeneinander in einem Verzeichnis), erst nach erfolgreicher QA wird nach `main` gemerged.

Die Analyse des Bestands ergab drei nennenswerte technische Altlasten, die die Migration mit adressieren kann: (1) Blog-Artikeldaten sind aktuell an drei Stellen dupliziert (`lib/blog.ts`, inline MDX-Exports, hartcodiertes Datum im Fließtext), (2) mehrere `"use client"`-Komponenten nutzen React nur, weil Next.js kein anderes Komponentenmodell kennt, obwohl ihre Logik reines DOM-JS ist, (3) die `next/og`-basierte OG-Bild-Generierung hat kein direktes Astro-Äquivalent.

## Entscheidungen (mit Nutzer abgestimmt)

| Entscheidung | Wahl | Status |
|---|---|---|
| Tiefe der Interaktivitäts-Migration | Vanilla JS für Nav, Referenzen, ShowcasePlayer, CalendlyPopupLink, ScrollToTopOnReload; nur **Hero** bleibt React-Island (wegen framer-motion) | ✅ vom Nutzer bestätigt |
| Blog-Datenmodell | Content Collections mit echtem YAML-Frontmatter (bereinigt die 3-fache Duplizierung) | Empfehlung übernommen, im Umsetzungspaket final bestätigen |
| OG-Bild-Erzeugung | Statisches PNG per Build-Skript (satori + resvg), entspricht dem heutigen für alle Seiten identischen Bild | Empfehlung übernommen, im Umsetzungspaket final bestätigen |
| Navigation / View Transitions | Keine — klassische MPA-Navigation (passt zu CLAUDE.md "wenig bis keine Animation") | Empfehlung übernommen, im Umsetzungspaket final bestätigen |
| Font-Hosting | Self-hosted via `@fontsource-variable/sora` + `@fontsource-variable/ibm-plex-sans` | Empfehlung, bei Bedarf im Paket 3 nochmal gegenprüfen |
| SEO-Meta-Mechanismus | Eigene `SEO.astro`-Komponente (volle Kontrolle statt Community-Paket) | Empfehlung, bei Bedarf im Paket 4 nochmal gegenprüfen |
| Trailing-Slash-Policy | `trailingSlash: 'ignore'` als nächstliegendes Äquivalent zu `skipTrailingSlashRedirect` | Im Paket 9 anhand echter URLs verifizieren |
| PostHog `/ingest`-Proxy | Root-`vercel.json` mit denselben 3 Rewrite-Regeln | Im Paket 9/10 gegen echtes Vercel-Preview verifizieren |

**Byte-für-byte erhalten (keine Redesign-Freiheit):** Alle Tailwind-Farbtokens (`brass`/`brass-bright`/`brass-deep`/`ink`/`bone`/`slate`/`rust`), Hero-Animationsverhalten inkl. aller CLAUDE.md-Ausnahmen, alle Inhalte/Copy, Content-Regeln aus CLAUDE.md, JSON-LD-Schemas, Font-Pairing (Sora/IBM Plex Sans).

---

## Paket 1 — Setup (Branch & Worktree) ✅ erledigt

1. `git branch astro-migration` von `main`
2. `git worktree add ../CodeGarden astro-migration` — zweiter lokaler Ordner für parallelen Dev-Server (Next auf Port 3000, Astro auf Port 4321)
3. Ab hier finden alle weiteren Schritte im Worktree-Ordner statt

## Paket 2 — Astro-Scaffold & Integrationen

4. `pnpm create astro@latest` im Worktree, TypeScript-strict-Template, pnpm beibehalten (`packageManager`-Pin aus `package.json` übernehmen, `pnpm-workspace.yaml`s `ignoredBuiltDependencies: [sharp, unrs-resolver]` bleibt bestehen — Astros Bildservice ist ebenfalls Sharp-basiert)
5. Integrationen installieren: `npx astro add react` (für Hero-Island), `npx astro add tailwind` (Tailwind v4 via `@tailwindcss/vite`, **nicht** das veraltete `@astrojs/tailwind`), `npx astro add mdx`, `npx astro add sitemap`, `npx astro add vercel`
6. Verzeichnisstruktur: `src/pages/`, `src/components/`, `src/layouts/`, `src/content/blog/`, `src/styles/global.css`, `src/lib/` (Umbenennung von `lib/`)

**Kritische Dateien:** `astro.config.mjs` (neu), `package.json`

## Paket 3 — Design-System & Fonts

7. `app/globals.css`s `@theme inline {...}`-Block 1:1 in `src/styles/global.css` übernehmen — alle Farbwerte unverändert
8. Fonts von `next/font/google` auf `@fontsource-variable/sora` + `@fontsource-variable/ibm-plex-sans` umstellen, gleiche CSS-Variablennamen (`--font-heading`, `--font-sans`) beibehalten, damit `global.css` unverändert bleibt
9. Statische Assets (`public/logo.svg`, `favicon.ico`, `icon.svg`, alle Bilder/Videos) unverändert nach Astros `public/` kopieren

**Kritische Dateien:** `app/globals.css` → `src/styles/global.css`

## Paket 4 — Root-Layout & globale Chrome

10. `app/layout.tsx` → `src/layouts/BaseLayout.astro`
11. Neue `src/components/SEO.astro`: nimmt Title/Description/Canonical/OG/Twitter-Props entgegen, rendert `<head>`-Tags (ersetzt Next Metadata API)
12. `viewport`/`themeColor`, Calendly-Preconnect/dns-prefetch/Stylesheet-Link unverändert in `BaseLayout.astro` übernehmen
13. Body-Reihenfolge beibehalten: `SiteJsonLd.astro`, `ScrollToTopOnReload` (wird zu Inline-`<script>`), `Nav`, `<slot />`, `Footer`, PostHog-Init-Script, Calendly-`widget.js`-Script

**Kritische Dateien:** `app/layout.tsx`, `app/components/JsonLd.tsx` → `SiteJsonLd.astro`

## Paket 5 — Statische Sections

14. 1:1-Konvertierung `.tsx` → `.astro` (JSX → Astro-Template, Props via Frontmatter): `Ablauf`, `Footer`, `AppDemo`, `PhoneFrame`, `Leistungen`, `FAQ`, `Problem`, `Kontakt`, `ArticleJsonLd`-Teil aus `JsonLd.tsx`
15. `lucide-react`-Icons auf `@lucide/astro` oder Inline-SVG umstellen (betrifft mehrere dieser Komponenten)

**Kritische Dateien:** alle `app/components/*.tsx` ohne `"use client"`

## Paket 6 — Interaktive Komponenten & Homepage

16. `Hero.tsx` bleibt React-Komponente, eingebunden als Island mit `client:load` (framer-motion rechtfertigt hier React; Rest der Logik unverändert: Stagger-Variants, Spring-Einflug, Idle-Float, `useReducedMotion`)
17. `Nav.tsx`, `Referenzen.tsx`, `ShowcasePlayer.tsx` → `.astro` + Vanilla-`<script>` (Mobile-Menu-Toggle, Scroll-Carousel, IntersectionObserver Play/Pause — alles bereits reine DOM-APIs, kein React-State nötig)
18. `CalendlyPopupLink.tsx` → gemeinsames `src/scripts/calendly.ts` (memoized Script-Loader, wiederverwendet über alle CTA-Stellen: Nav, Footer, Hero, Kontakt, Blog)
19. `Analytics.tsx` entfällt in der bisherigen Form — Astro macht Full-Page-Navigation, daher genügt ein einmaliges Inline-Script pro Seitenaufruf statt `usePathname`-Watcher
20. `app/page.tsx` → `src/pages/index.astro`, gleiche flache Section-Komposition

**Kritische Dateien:** `app/components/Hero.tsx`, `app/components/Nav.tsx`, `app/components/Referenzen.tsx`, `app/components/ShowcasePlayer.tsx`, `app/components/CalendlyPopupLink.tsx`, `app/components/Analytics.tsx`, `app/page.tsx`

## Paket 7 — Blog-Migration

21. `src/content.config.ts`: `blog`-Collection über `glob`-Loader auf `src/content/blog/*.mdx`, Zod-Schema (`title`, `description`, `publishedTime`, `modifiedTime`, optional `draft`)
22. Jeden Artikel nach `src/content/blog/<slug>.mdx` verschieben, inline `export const article`/`metadata` durch echtes YAML-Frontmatter ersetzen
23. Hartcodierte "Veröffentlicht am..."-Zeile aus jedem Artikel-Body entfernen, stattdessen einmal aus Frontmatter in `ArticleLayout.astro` rendern (mit portiertem `formatArticleDate()` aus `lib/blog.ts` → `src/lib/blog.ts`)
24. `ArticleJsonLd` einmal zentral aus `ArticleLayout.astro` rendern statt pro Artikel-Datei
25. `src/pages/blog/index.astro` (ersetzt `app/blog/page.tsx`) nutzt `getCollection("blog")` statt der Array-Konstante — `lib/blog.ts`s Array wird komplett gelöscht
26. `src/pages/blog/[slug].astro` mit `getStaticPaths()`, `mdx-components.tsx`-Overrides werden explizit als `components`-Prop an `<Content />` übergeben (Astro hat keine automatische globale MDX-Component-Konvention wie Next)

**Kritische Dateien:** `lib/blog.ts`, `app/blog/(articles)/*/page.mdx` (4 Artikel), `mdx-components.tsx`, `app/blog/page.tsx`, `app/blog/layout.tsx`

## Paket 8 — SEO- & Metadata-Routen

27. `app/sitemap.ts` löschen, ersetzt durch `@astrojs/sitemap` (Paket 2), `site:`-Feld in `astro.config.mjs` setzen, Prioritäten/changefreq via `serialize()`-Option nachbilden
28. `app/robots.ts` → statische `public/robots.txt`
29. `app/manifest.ts` → statische `public/manifest.webmanifest`
30. OG-Bild: Build-Skript mit `satori` + `@resvg/resvg-js` erzeugt `public/og-image.png` einmalig beim Build (ersetzt `app/opengraph-image.tsx` + `app/twitter-image.tsx`, die heute ohnehin dasselbe Bild für alle Seiten liefern)
31. Restliche statische Seiten: `app/ueber-uns/page.tsx`, `app/impressum/page.tsx`, `app/datenschutz/page.tsx` → `src/pages/*.astro`
32. `public/llms.txt`, `public/llms-full.txt` unverändert kopieren

**Kritische Dateien:** `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/opengraph-image.tsx`, `app/twitter-image.tsx`

## Paket 9 — Deployment-Konfiguration & Env-Vars

33. Root-`vercel.json` anlegen: PostHog-`/ingest`-Rewrites (3 Regeln, identisch zu `next.config.ts`s `rewrites()`) + Cache-Control-Header für `poster.webp`/`showcase.webm`/`showcase.mp4`
34. Env-Vars umbenennen: `NEXT_PUBLIC_SITE_URL` → `PUBLIC_SITE_URL`, `NEXT_PUBLIC_POSTHOG_KEY` → `PUBLIC_POSTHOG_KEY` in `.env.example`, Vercel-Projekteinstellungen, `src/lib/site.ts`, `src/lib/posthog.ts` (Zugriff über `import.meta.env` statt `process.env`)
35. `astro.config.mjs`: `output: "static"`, `site: "https://codegarden.at"`, `adapter: vercel()`, `trailingSlash: 'ignore'`
36. `images.qualities`-Config entfällt (Astros `<Image quality={100}>` braucht kein globales Allowlist)
37. CLAUDE.md-Referenz auf `NEXT_PUBLIC_SITE_URL`/`lib/site.ts` aktualisieren, sobald die Migration steht (Doku-Update, nicht nur Code)

**Kritische Dateien:** `next.config.ts`, `.env.example`, `lib/site.ts`, `lib/posthog.ts`, `CLAUDE.md`

## Paket 10 — QA & Cutover

38. Beide Worktree-Dev-Server parallel laufen lassen, Route für Route visuell vergleichen: `/`, `/blog`, alle 4 Artikel, `/ueber-uns`, `/impressum`, `/datenschutz`
39. Funktionale Checks: Hero-Animation (auch mit "reduce motion"), Nav-Mobile-Menu, Referenzen-Carousel, ShowcasePlayer Play/Pause, CalendlyPopupLink an allen CTA-Stellen
40. SEO-Checks: Sitemap-Inhalt vergleichen, `robots.txt` vergleichen, OG-Bild pixelgleich prüfen, JSON-LD validieren (Google Rich Results Test)
41. Auf Vercel-Preview deployen (automatisch bei Push) und `/ingest`-Proxy + Cache-Header dort verifizieren (lässt sich lokal nicht vollständig testen)
42. Optional: Lighthouse-Vergleich beider Production-Builds
43. Nach erfolgreicher QA: PR-Review, Merge nach `main`, Vercel promoted automatisch auf Produktion, danach `git worktree remove`

---

## Verifikation

- Lokaler visueller/funktionaler Vergleich beider Worktree-Dev-Server (Paket 10, Schritte 38–39)
- SEO-Artefakt-Diff: Sitemap, robots.txt, OG-Bild, JSON-LD (Schritt 40)
- Vercel-Preview-Deployment für alles, was nur auf der Plattform testbar ist: PostHog-Proxy, Cache-Header (Schritt 41)
- Erst nach grünem Licht auf allen drei Ebenen: Merge nach `main`
