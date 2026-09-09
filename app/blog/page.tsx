import type { Metadata } from "next";
import Link from "next/link";
import { articles, formatArticleDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Praktische Artikel zu UI/UX, Frontend-Modernisierung und digitalen Produkten für Unternehmen in Wien und Österreich – verständlich erklärt.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "CodeGarden Blog",
    description:
      "Praktische Artikel zu UI/UX, Frontend-Modernisierung und digitalen Produkten für Unternehmen in Wien und Österreich – verständlich erklärt.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col">
      <h1 className="text-center font-heading font-medium text-4xl tracking-tight text-bone sm:text-5xl">
        CodeGarden Blog
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-lg leading-relaxed text-bone/70">
        Alle Beiträge zu UI/UX, Frontend-Optimierung und was eine gute
        digitale Präsenz für Unternehmen ausmacht.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col rounded-2xl border border-bone/15 bg-bone/[0.04] p-6 transition-colors hover:border-brass hover:bg-bone/10"
          >
            <h2 className="font-heading font-medium text-lg leading-snug text-bone transition-colors group-hover:text-brass">
              {article.title}
            </h2>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.16em] text-brass/80">
              {formatArticleDate(article.publishedTime)} · Patrick Roith
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-bone/70">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
