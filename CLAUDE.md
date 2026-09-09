# CLAUDE.md — Business Website (Einzelunternehmen)

## Projektkontext

Business-Website für ein Einzelunternehmen (Frontend-Entwicklung & UX/UI-Modernisierung
bestehender Apps, Plattformen und Tools, inkl. gezielter Beratung & Konzeption, als
Dienstleistung — siehe [ADR-0001](./docs/adr/0001-fokus-frontend-ux-ui-modernisierung.md)).
Zielgruppe: Unternehmen ohne eigenes Dev-Team, die digitale Produkte outsourcen. Fokus
Wien/Österreich, kein DACH-Anspruch.

Positionierung: Auftritt als Agentur ("Über uns", "wir" durchgängig, Patrick Roith + punktuelle
Freelancer:innen), nicht als reine Einzelkämpfer-Personenmarke. Name und Foto von Patrick bleiben
trotzdem sichtbar (z. B. `/ueber-uns`) als Gründer-Referenz — das Einzelunternehmen bleibt die
rechtliche Realität (siehe Impressum), wird auf der Website aber nicht als Kontrast zur
Agentur-Sprache betont. USP: Product-Management-Hintergrund + technische Umsetzung — versteht
Business-Strategie UND Code, nicht nur eines von beidem.

**Name:** "CodeGarden" ist aktuell Interims-Platzhalter (vorher "UI Company") — finaler Name noch
offen. Bei Textänderungen darauf hinweisen, dass der Name überall konsistent ersetzt werden muss,
sobald final entschieden.

## Tech Stack

- Next.js (App Router), TypeScript
- Tailwind CSS
- Deployment: Vercel (Preview-Deployment bei jedem Push)
- Blog: MDX (`@next/mdx`), Artikel unter `app/blog/[slug]`, kein externes CMS
- Rendering: Static Site Generation (SSG) — keine dynamischen Server-Daten pro Request nötig
- Kontakt: kein Formular, sondern mailto-Links auf allen "Kontakt"-CTAs (Nav, Footer, Hero,
  Blog-CTAs) über `lib/site.ts`'s `contactMailto`, öffnet das Mail-Programm des Besuchers direkt

## Struktur

One-Pager als Kernseite (Sections als eigene Komponenten in `app/components/`, zusammengesetzt in
`app/page.tsx`), ergänzt um eigene Routen für Blog und rechtliche Pflichtseiten.

```
/ (One-Pager)
├── Hero
├── Problem/Nutzenversprechen
├── Leistungen
├── Arbeitsweise/Prozess
└── Referenzen/Portfolio

/blog, /blog/[slug]
/ueber-uns
/impressum
/datenschutz
```

Kein eigener Kontakt-Bereich: alle "Kontakt"-CTAs sind mailto-Links (siehe Tech Stack).

## Design-Vorgaben (verbindlich)

- **Keine Gradients** — keine Gradient-Utilities in der Tailwind-Config definieren, flache Farbflächen
- **Wenig bis keine Animation** — höchstens `transition-colors` für Hover-States, kein `framer-motion`,
  keine Scroll-Trigger-/Parallax-Effekte. **Bewusste Ausnahme:** Hero (`app/components/Hero.tsx`)
  nutzt `framer-motion` für eine einmalige, gestaffelte Eintritts-Animation beim Laden (kein Scroll-
  Trigger, respektiert `prefers-reduced-motion` via `MotionConfig`). **Erweiterte Ausnahme:** der
  Hero-Hintergrund hat zusätzlich einen dezenten animierten Idle-Look: eine Aurora aus mehreren
  flachen `brass`/`brass-bright`/`brass-deep`-Farbflächen hinter dem Phone, mit kontrolliertem Blur,
  ohne CSS-Gradient, UI-Elemente oder Outline-Ringe, mit sehr langsamen Opacity-/Scale-/Positionsloops.
  Nur Markenfarbe + Neutraltöne (kein `rust`) — jede Fläche bleibt eine flache Farbe. Liegt hinter
  dem Content (`z-10` auf dem Content-Wrapper), `pointer-events-none`, `aria-hidden`, respektiert
  `prefers-reduced-motion` explizit via `useReducedMotion`. **Weitere Hero-Ausnahme:** Das
  Hero-Mockup (`hero-app-1.webp`, ohne zusätzlichen `PhoneFrame`, da das Bild den Frame bereits
  enthält) darf nach dem einmaligen Spring-Einflug sanft idle schweben (leichtes Auf-Ab +
  Mini-Rotation, 8–12s Loop), respektiert ebenfalls `prefers-reduced-motion`. Diese Ausnahmen gelten
  nur für den Hero, nicht als Präzedenzfall für weitere Sections.
- **Font Pairing:** Headline in Sora (markanter Grotesk statt Serif), Body in IBM Plex Sans,
  eingebunden über `next/font`
- Design muss selbst als Beweis für UI/UX-Fähigkeiten funktionieren — kein Template-Look

## Content-Regeln — was NICHT auf der Seite steht

- Keine konkreten Preise/Stundensätze — nur "Pauschalpreis nach Projektumfang, auf Anfrage"
- Keine AMS-/Förder-/Gründungsstatus-Infos
- Keine Kundennamen ohne explizite Freigabe
- Keine Details zu KI-/Claude-Code-Einsatz als Werbeaussage
- Kein DACH-Anspruch — Wien/Österreich als Fokus
- Referenzprojekte ohne echte Kundenfreigabe klar als "Konzept"/"Prototyp" labeln, nicht als
  abgeschlossenes Kundenprojekt darstellen

## Blog

Praktische Artikel für Nicht-Techniker (Entscheider-Zielgruppe), keine Dev-Themen. Beispiele:
"5 Anzeichen, dass eure App-UI Kunden verliert", "Was kostet eine Frontend-Modernisierung wirklich?".
Frequenz: 1–2 durchdachte Artikel/Monat statt Füllcontent.

## Rechtliches

Impressum (§ 5 ECG) und Datenschutzerklärung (DSGVO) sind Pflicht, nicht optional — bei
Projektstart als Platzhalter-Routen anlegen, finale Texte später mit Rechtsberatung abstimmen.
Kein Ersatz für Rechtsberatung — bei rechtlichen Unsicherheiten im Text darauf hinweisen.

## Workflow-Präferenzen

- Kleine, klar abgegrenzte Session-Scopes — eine Section pro Session, nicht alles auf einmal
- Plan-Mode bei mehrere Dateien betreffenden Änderungen
- Häufige Commits
- Visuelles Feedback über Vercel-Preview-Links prüfen, bevor weitergearbeitet wird
- `lib/`-Verzeichnis-Konvention für geteilte Utilities (types.ts, format.ts), falls relevant

## Agent skills

### Issue tracker

GitHub Issues on `paroi1905/business_website`, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context (`CONTEXT.md` + `docs/adr/` at repo root). See `docs/agents/domain.md`.
