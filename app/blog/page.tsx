import Link from "next/link";

const articles = [
  {
    slug: "website-veraltet-was-tun",
    title: "Website veraltet: Was tun?",
    description:
      "Woran Sie erkennen, dass Ihre Website modernisiert werden sollte, und was Sie konkret als Nächstes tun können.",
  },
  {
    slug: "ux-probleme-erkennen",
    title: "UX-Probleme erkennen: Worauf Sie achten sollten",
    description:
      "Die wichtigsten Signale für UX-Probleme und wie Sie sie ohne eigenes UX-Team auswerten.",
  },
  {
    slug: "conversion-rate-durch-ux-steigern",
    title: "Conversion Rate durch UX steigern",
    description:
      "Konkrete Hebel bei Formularen, Anfrageprozessen und Call-to-Actions, ohne Redesign von Grund auf.",
  },
  {
    slug: "kosten-frontend-modernisierung",
    title: "Kosten Frontend Modernisierung",
    description:
      "Wovon der Preis tatsächlich abhängt, transparent erklärt, ohne Fantasiezahlen.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col">
      <h1 className="text-center font-heading font-medium text-4xl tracking-tight text-ink sm:text-5xl">
        UI Company Blog
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-lg leading-relaxed text-ink/70">
        Alle Beiträge zu UI/UX, Frontend-Optimierung und was eine gute
        digitale Präsenz für Unternehmen ausmacht.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col rounded-2xl border border-slate/30 bg-ink/[0.06] p-6 transition-colors hover:border-brass-deep hover:bg-ink/10"
          >
            <h2 className="font-heading font-medium text-lg leading-snug text-ink transition-colors group-hover:text-brass-deep">
              {article.title}
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
