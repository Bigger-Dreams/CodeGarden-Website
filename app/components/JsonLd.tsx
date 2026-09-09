import { contactEmail, siteUrl } from "@/lib/site";

type ArticleJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
};

export function SiteJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "CodeGarden",
      url: siteUrl,
      email: contactEmail,
      areaServed: ["Wien", "Österreich"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wien",
        addressCountry: "AT",
      },
      founder: {
        "@type": "Person",
        name: "Patrick Roith",
      },
      serviceType: [
        "Frontend-Entwicklung",
        "UI/UX-Modernisierung",
        "Produktberatung",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "CodeGarden",
      url: siteUrl,
      inLanguage: "de-AT",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime = publishedTime,
}: ArticleJsonLdProps) {
  const url = `${siteUrl}/blog/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    inLanguage: "de-AT",
    author: {
      "@type": "Person",
      name: "Patrick Roith",
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
