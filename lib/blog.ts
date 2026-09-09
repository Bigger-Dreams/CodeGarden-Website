export const articles = [
  {
    slug: "website-veraltet-was-tun",
    title: "Website veraltet: Was tun?",
    description:
      "Woran Sie erkennen, dass Ihre Website modernisiert werden sollte, und was Sie konkret als Nächstes tun können.",
    publishedTime: "2026-01-10",
    modifiedTime: "2026-01-10",
  },
  {
    slug: "ux-probleme-erkennen",
    title: "UX-Probleme erkennen: Worauf Sie achten sollten",
    description:
      "Die wichtigsten Signale für UX-Probleme und wie Sie sie ohne eigenes UX-Team auswerten.",
    publishedTime: "2026-01-17",
    modifiedTime: "2026-01-17",
  },
  {
    slug: "conversion-rate-durch-ux-steigern",
    title: "Conversion Rate durch UX steigern",
    description:
      "Konkrete Hebel bei Formularen, Anfrageprozessen und Call-to-Actions, ohne Redesign von Grund auf.",
    publishedTime: "2026-01-24",
    modifiedTime: "2026-01-24",
  },
  {
    slug: "kosten-frontend-modernisierung",
    title: "Kosten Frontend Modernisierung",
    description:
      "Wovon der Preis tatsächlich abhängt, transparent erklärt, ohne Fantasiezahlen.",
    publishedTime: "2026-01-31",
    modifiedTime: "2026-01-31",
  },
];

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("de-AT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
