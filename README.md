# CodeGarden

Business-Website für CodeGarden — Frontend-Entwicklung & UX/UI-Modernisierung. Gebaut mit [Astro](https://astro.build).

## Getting Started

```bash
pnpm install
pnpm dev
```

Öffne [http://localhost:4321](http://localhost:4321) im Browser.

## Scripts

- `pnpm dev` — Dev-Server
- `pnpm build` — Production-Build (erzeugt vorher `public/og-image.png` via `scripts/generate-og-image.mjs`)
- `pnpm preview` — Production-Build lokal ansehen
- `pnpm lint` — ESLint

## Struktur

- `src/pages/` — Routen
- `src/components/` — Sections & Astro-Komponenten (`Hero.tsx` als einzige React-Insel)
- `src/layouts/` — `BaseLayout.astro`, `ArticleLayout.astro`
- `src/content/blog/` — Blog-Artikel (MDX, Content Collections)
- `src/lib/` — geteilte Utilities
- `src/scripts/` — client-seitiges Vanilla-JS

Details zur Architektur siehe `CLAUDE.md` und `docs/`.

## Deployment

Vercel, automatisches Preview-Deployment bei jedem Push. Konfiguration in `vercel.json` (PostHog-`/ingest`-Proxy, Cache-Header).
