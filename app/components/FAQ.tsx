import { siteUrl } from "@/lib/site";

const faqs = [
  {
    question: "Muss mein Produkt komplett neu gebaut werden oder reicht eine Modernisierung?",
    answer:
      "Nicht zwingend. Oft reicht eine gezielte Modernisierung von Frontend und UX/UI, statt eines kompletten Neuaufbaus. Ob eine Überarbeitung reicht oder ein Relaunch sinnvoller ist, klären wir in der Erstberatung.",
  },
  {
    question: "Können Sie auch nur einen einzelnen Bereich überarbeiten?",
    answer:
      "Ja. Viele Projekte starten mit einem klar abgegrenzten Teilbereich, etwa einem einzelnen Userflow oder einer Ansicht, statt der ganzen Plattform.",
  },
  {
    question: "Arbeiten Sie mit unserem bestehenden System und Backend weiter?",
    answer:
      "Ja. Bei UI/UX-Modernisierung und Frontend-Neuentwicklung bleibt Ihr bestehendes Backend unangetastet, das neue Frontend wird über eine saubere Schnittstelle angebunden.",
  },
  {
    question: "Wie lange dauert eine Frontend- oder UX/UI-Modernisierung?",
    answer:
      "Das hängt stark vom Umfang ab. Ein einzelner Bereich lässt sich oft in wenigen Wochen modernisieren, eine umfassendere Überarbeitung mehrerer Ansichten dauert entsprechend länger. Den realistischen Rahmen für Ihr Projekt legen wir in der Erstberatung fest.",
  },
  {
    question: "Wie entsteht der Projektpreis?",
    answer:
      "Nach der Erstberatung, auf Basis des vereinbarten Umfangs. Einen pauschalen Stundensatz nennen wir bewusst nicht, weil der tatsächliche Aufwand stark vom Projekt abhängt.",
  },
  {
    question: "Was brauchen Sie für eine erste Einschätzung?",
    answer:
      "Ein Link zu Ihrem bestehenden Produkt und ein bis zwei Sätze dazu, was aktuell nicht gut funktioniert, reichen für den Start.",
  },
  {
    question: "Arbeiten Sie auch mit Unternehmen außerhalb von Wien?",
    answer:
      "Der Fokus liegt auf Unternehmen in Wien und Österreich, Projekte darüber hinaus sind aber möglich, sofern eine enge Zusammenarbeit auf Distanz gut funktioniert.",
  },
  {
    question: "Übernehmen Sie auch Backend-Entwicklung?",
    answer:
      "Nein, unser Fokus liegt bewusst auf Frontend, UX und UI. Backend-Anbindungen erfolgen über bestehende Schnittstellen zu Ihren Systemen.",
  },
];

function FAQJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <FAQJsonLd />
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-lg uppercase tracking-[0.2em] text-brass">
          FAQ
        </p>
        <h2 className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Häufige Fragen.
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-bone/70">
          Antworten auf die häufigsten Fragen zu Frontend-Entwicklung und
          UX/UI-Modernisierung für Unternehmen in Wien und Österreich.
        </p>

        <div className="mt-16 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-sm bg-bone/[0.06] px-6 py-5 open:pb-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:content-none">
                <h3 className="font-sans text-lg font-medium text-bone">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-heading text-xl text-brass group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden shrink-0 font-heading text-xl text-brass group-open:inline"
                >
                  −
                </span>
              </summary>
              <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
