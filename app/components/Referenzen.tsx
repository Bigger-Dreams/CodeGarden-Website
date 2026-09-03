import Image from "next/image";

const projects = [
  {
    label: "Übersicht",
    src: "/referenz-uebersicht.webp",
    alt: "Übersicht-Screen einer Finanz-App: Gesamtvermögen, Konten und Schnellaktionen (Konzeptprojekt, kein Kundenauftrag)",
    caption:
      "Übersicht-Screen mit Gesamtvermögen, Kontenübersicht und Schnellaktionen.",
  },
  {
    label: "Depot",
    src: "/referenz-depot.webp",
    alt: "Depot-Screen einer Finanz-App: Positionen, Watchlist und Preisalarme (Konzeptprojekt, kein Kundenauftrag)",
    caption: "Depot-Ansicht mit einzelnen Positionen, Watchlist und Preisalarmen.",
  },
];

export function Referenzen() {
  return (
    <section
      id="referenzen"
      className="bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Referenzen
        </p>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/70">
          Ein Blick in mein eigenes Konzeptprojekt: eine Finanz-App, bei der
          ich Interface und Interaktionen entwickelt habe. Echte
          Kundenprojekte kommen dazu, sobald sie abgeschlossen sind.
        </p>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.label}>
            <div className="overflow-hidden rounded-sm border border-bone/10">
              <div className="flex items-center justify-between border-b border-bone/10 bg-bone/[0.03] px-5 py-3">
                <span className="font-sans text-[11px] uppercase tracking-widest text-bone/40">
                  {project.label}
                </span>
                <span className="rounded-sm bg-brass px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-ink">
                  Konzept
                </span>
              </div>
              <Image
                src={project.src}
                alt={project.alt}
                width={1800}
                height={821}
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={100}
                className="w-full"
              />
            </div>
            <p className="mt-4 font-sans text-base leading-relaxed text-bone/70">
              {project.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
