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
      className="bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass-deep">
          Referenzen
        </p>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink/70">
          Ein Blick in mein eigenes Konzeptprojekt: eine Finanz-App, bei der
          ich Interface und Interaktionen entwickelt habe. Echte
          Kundenprojekte kommen dazu, sobald sie abgeschlossen sind.
        </p>

        <div className="mt-16 flex flex-col gap-16">
          {projects.map((project) => (
            <div key={project.label}>
              <div className="overflow-hidden rounded-sm border border-ink/10">
                <div className="flex items-center justify-between border-b border-ink/10 bg-ink/[0.03] px-5 py-3">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-ink/40">
                    {project.label}
                  </span>
                  <span className="rounded-sm bg-ink px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-bone">
                    Konzept
                  </span>
                </div>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={1800}
                  height={821}
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  quality={100}
                  className="w-full"
                />
              </div>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink/70">
                {project.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
