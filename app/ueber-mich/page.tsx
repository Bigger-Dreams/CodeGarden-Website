const paragraphs = [
  "Bevor ich Frontend-Code geschrieben habe, habe ich mehrere Jahre im Product Management gearbeitet, bei Fintech-Startups genauso wie in Corporate-Umgebungen. Diese unterschiedlichen Kontexte haben mir gezeigt, wie verschieden Produktarbeit je nach Unternehmensgröße und -kultur aussehen kann, und worauf es trotzdem immer ankommt, wenn aus einer Idee ein digitales Produkt werden soll, das Menschen gerne benutzen. Wie gut eine Idee technisch umsetzbar ist, entscheidet dabei selten allein. Öfter sind es andere Dinge: wie klar eine Anwendung wirkt, wie schnell sich jemand zurechtfindet, ob jemand nach fünf Sekunden versteht, was zu tun ist.",
  "Diesen Blick habe ich mitgenommen, als ich mich entschieden habe, technisch nachzuziehen. Mit einem Master in Digital Technology & Innovation konnte ich mir das Handwerkszeug aneignen, um Konzepte nicht mehr nur zu entwerfen, sondern selbst umzusetzen. Diese Kombination aus Produkterfahrung und technischem Verständnis bringe ich heute in Projekte ein. Ich schreibe Frontend-Code, der funktioniert, aber ich frage mich dabei immer auch, ob eine Entscheidung dem eigentlichen Ziel dient oder nur gut aussieht.",
  "Selbstständig gemacht habe ich mich aus einem einfachen Grund: Technik und neue Entwicklungen haben mich schon immer interessiert, genauso wie die Frage, wie Apps und digitale Prozesse Unternehmen tatsächlich effizienter machen können. Deshalb stecke ich meine Zeit lieber in konkrete Projekte als in interne Abstimmungsrunden.",
  "Für Sie als Kunde heißt das vor allem eines: weniger Reibung zwischen dem, was Sie wirklich brauchen, und dem, was am Ende umgesetzt wird. Mir geht es immer um das beste Ergebnis für die Nutzer:innen, weil das auch das beste Ergebnis für Ihr Unternehmen ist.",
];

export default function UeberMichPage() {
  return (
    <main className="flex flex-1 flex-col bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col">
        <h1 className="font-heading font-medium text-4xl tracking-tight text-bone sm:text-5xl">
          Über mich
        </h1>

        <div className="mt-10 flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-sm border border-bone/15 bg-bone/[0.04]">
            <span className="font-sans text-[9px] uppercase tracking-widest text-bone/40">
              Foto folgt
            </span>
          </div>
          <div>
            <p className="font-heading font-medium text-lg text-bone">
              Patrick Roith
            </p>
            <p className="mt-1 font-sans text-sm text-bone/60">
              Wien · Frontend &amp; UI/UX
            </p>
            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm border border-bone/15 px-2 py-1 font-sans text-[9px] uppercase tracking-widest text-bone/40">
              LinkedIn folgt
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-base leading-relaxed text-bone/70"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
