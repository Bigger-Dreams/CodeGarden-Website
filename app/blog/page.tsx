import Link from "next/link";

const articles = [
  {
    slug: "website-veraltet-was-tun",
    title: "Website veraltet: Was tun?",
    description:
      "Woran Sie erkennen, dass Ihre Website modernisiert werden sollte, und was Sie konkret als Nächstes tun können.",
  },
];

export default function BlogPage() {
  return (
    <>
      <h1 className="font-heading font-medium text-4xl tracking-tight text-ink sm:text-5xl">
        Blog
      </h1>
      <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink/70">
        Praktische Beiträge zu UI/UX, Frontend und was eine gute digitale
        Präsenz ausmacht, für Entscheider:innen ohne eigenes Dev-Team.
      </p>

      <ul className="mt-16 flex flex-col gap-10">
        {articles.map((article) => (
          <li key={article.slug} className="border-t border-slate/40 pt-6">
            <Link
              href={`/blog/${article.slug}`}
              className="font-heading font-medium text-2xl text-ink transition-colors hover:text-brass-deep"
            >
              {article.title}
            </Link>
            <p className="mt-2 max-w-xl font-sans text-base leading-relaxed text-ink/70">
              {article.description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
