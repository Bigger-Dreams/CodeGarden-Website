import Image from "next/image";

const paragraphs = [
  "CodeGarden ist eine kleine Wiener Agentur für Frontend-Entwicklung und UI/UX-Modernisierung. Wir arbeiten mit Unternehmen, die eine bestehende Website, App oder Plattform haben, aber kein eigenes Dev-Team dafür. Sie wollen ihre digitalen Produkte gezielt verbessern, ohne gleich alles neu bauen zu müssen.",
  "Gegründet habe ich CodeGarden als Einzelunternehmer. Mitgebracht habe ich einen Hintergrund aus mehreren Jahren Product Management bei Fintech-Startups und in Corporate-Umgebungen. Diese unterschiedlichen Kontexte haben mir gezeigt, wie verschieden Produktarbeit je nach Unternehmensgröße und -kultur aussehen kann, und worauf es trotzdem immer ankommt, wenn aus einer Idee ein digitales Produkt werden soll, das Menschen gerne benutzen. Wie gut eine Idee technisch umsetzbar ist, entscheidet dabei selten allein. Öfter sind es andere Dinge: wie klar eine Anwendung wirkt, wie schnell sich jemand zurechtfindet, ob jemand nach fünf Sekunden versteht, was zu tun ist.",
  "Diesen Blick habe ich mitgenommen, als ich mich entschieden habe, technisch nachzuziehen. Mit einem Master in Digital Technology & Innovation konnte ich mir das Handwerkszeug aneignen, um Konzepte nicht mehr nur zu entwerfen, sondern selbst umzusetzen. Diese Kombination aus Produkterfahrung und technischem Verständnis bringe ich heute in jedes Projekt ein. Ich schreibe Frontend-Code, der funktioniert, aber ich frage mich dabei immer auch, ob eine Entscheidung dem eigentlichen Ziel dient oder nur gut aussieht.",
  "Je nach Projektumfang arbeitet CodeGarden zusätzlich mit ausgewählten Freelancer:innen aus Österreich zusammen, für spezifische Aufgaben, die außerhalb meines Kernbereichs liegen, oder wenn größere Projekte mehr Kapazität brauchen. So bleibt die Struktur schlank, aber flexibel genug, um auch umfangreichere Vorhaben sauber umzusetzen.",
  "Für Sie als Kunde heißt das vor allem eines: weniger Reibung zwischen dem, was Sie brauchen, und dem, was am Ende umgesetzt wird. Mir geht es immer um das beste Ergebnis für die User, weil das auch das beste Ergebnis für Ihr Unternehmen ist.",
];

export default function UeberMichPage() {
  return (
    <main className="flex flex-1 flex-col bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col">
        <h1 className="font-heading font-medium text-4xl tracking-tight text-bone sm:text-5xl">
          Über mich
        </h1>

        <div className="mt-10 flex items-center gap-5">
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-bone/15">
            <Image
              src="/patrick-portrait.webp"
              alt="Portrait von Patrick Roith"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-heading font-medium text-lg text-bone">
              Patrick Roith
            </p>
            <p className="mt-1 font-sans text-sm text-bone/60">
              Wien · Frontend &amp; UI/UX
            </p>
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
