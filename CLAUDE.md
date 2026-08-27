# CLAUDE.md — Business Website (Einzelunternehmen)

## Projektkontext

Business-Website für ein Einzelunternehmen (Frontend-/UI-UX-Modernisierung als Dienstleistung).
Zielgruppe: Österreichische KMUs (v. a. Handwerk, lokaler Einzelhandel) ohne eigenes Dev-Team, die
digitale Produkte outsourcen. Fokus Wien/Österreich, kein DACH-Anspruch.

Positionierung: Personenmarke, nicht anonymes Studio. USP: Product-Management-Hintergrund +
technische Umsetzung — versteht Business-Strategie UND Code, nicht nur eines von beidem.

**Name:** "UI Company" ist aktuell Platzhalter — finaler Name noch offen. Bei Textänderungen darauf
hinweisen, dass der Name überall konsistent ersetzt werden muss, sobald final entschieden.

## Tech Stack

- Next.js (App Router), TypeScript
- Tailwind CSS
- Deployment: Vercel (Preview-Deployment bei jedem Push)
- Blog: MDX (`@next/mdx`), Artikel unter `app/blog/[slug]`, kein externes CMS
- Rendering: Static Site Generation (SSG) — keine dynamischen Server-Daten pro Request nötig
- Kontaktformular: Next.js Server Action oder einfache API-Route, kein Backend/DB-Overhead

## Struktur

One-Pager als Kernseite (Sections als eigene Komponenten in `app/components/`, zusammengesetzt in
`app/page.tsx`), ergänzt um eigene Routen für Blog und rechtliche Pflichtseiten.

```
/ (One-Pager)
├── Hero
├── Problem/Nutzenversprechen
├── Leistungen
├── Arbeitsweise/Prozess
├── Referenzen/Portfolio
├── Über mich
└── Kontakt/CTA

/blog, /blog/[slug]
/impressum
/datenschutz
```

## Design-Vorgaben (verbindlich)

- **Keine Gradients** — keine Gradient-Utilities in der Tailwind-Config definieren, flache Farbflächen
- **Wenig bis keine Animation** — höchstens `transition-colors` für Hover-States, kein `framer-motion`,
  keine Scroll-Trigger-/Parallax-Effekte
- **Font Pairing:** Headline in Serif mit modernem Twist (Fraunces oder Instrument Serif), Body in
  neutraler Sans-Serif (Inter oder Geist), eingebunden über `next/font`
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
