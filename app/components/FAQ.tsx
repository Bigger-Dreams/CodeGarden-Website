const faqs = [
  {
    question: "Muss mein Produkt komplett neu gebaut werden?",
    answer:
      "Nicht zwingend. Oft reicht eine gezielte Modernisierung von Frontend und UX/UI. Ob eine Überarbeitung reicht oder ein Neuaufbau sinnvoller ist, kläre ich in der Erstberatung.",
  },
  {
    question: "Können Sie auch nur einen einzelnen Bereich überarbeiten?",
    answer:
      "Ja. Viele Projekte starten mit einem klar abgegrenzten Teilbereich, etwa einem einzelnen Userflow oder einer Ansicht, statt der ganzen Plattform.",
  },
  {
    question: "Arbeiten Sie mit unserem bestehenden System weiter?",
    answer:
      "Ja. Bei UI/UX-Modernisierung und Frontend-Neuentwicklung bleibt Ihr Backend unangetastet, das neue Frontend wird über eine saubere Schnittstelle angebunden.",
  },
  {
    question: "Wie entsteht der Projektpreis?",
    answer:
      "Nach der Erstberatung, auf Basis des vereinbarten Umfangs. Einen pauschalen Stundensatz nenne ich bewusst nicht, weil der tatsächliche Aufwand stark vom Projekt abhängt.",
  },
  {
    question: "Was brauchen Sie für eine erste Einschätzung?",
    answer:
      "Ein Link zu Ihrem bestehenden Produkt und ein bis zwei Sätze dazu, was aktuell nicht gut funktioniert, reichen für den Start.",
  },
  {
    question: "Übernehmen Sie auch Backend-Entwicklung?",
    answer:
      "Nein, mein Fokus liegt bewusst auf Frontend, UX und UI. Backend-Anbindungen erfolgen über bestehende Schnittstellen zu Ihren Systemen.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-brass">
          FAQ
        </p>
        <h2 className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Häufige Fragen.
        </h2>

        <div className="mt-16 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-sm bg-bone/[0.06] px-6 py-5 open:pb-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-lg font-medium text-bone marker:content-none">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="font-heading text-xl text-brass group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="hidden font-heading text-xl text-brass group-open:inline"
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
