import Image from "next/image";

const projects = [
  {
    label: "Übersicht",
    src: "/referenz-uebersicht.webp",
    width: 2494,
    height: 1403,
    alt: "Übersicht-Screen einer Finanz-App: Gesamtvermögen mit Konten-Kacheln und Schnellaktionen (Konzeptprojekt, kein Kundenauftrag)",
    caption:
      "Gesamtvermögen auf einen Blick, mit Kontenübersicht und Schnellaktionen.",
  },
  {
    label: "Konto",
    src: "/referenz-konto.webp",
    width: 2494,
    height: 1403,
    alt: "Konto-Screen einer Finanz-App: Gehalts-, Spar- und Verrechnungskonto sowie Überweisung per QR-Code (Konzeptprojekt, kein Kundenauftrag)",
    caption:
      "Kontenverwaltung mit Überweisung per QR-Code oder gespeichertem Empfänger.",
  },
  {
    label: "Depot",
    src: "/referenz-depot.webp",
    width: 2494,
    height: 1335,
    alt: "Depot-Screen einer Finanz-App: Depotwert und einzelne Positionen (Konzeptprojekt, kein Kundenauftrag)",
    caption: "Depotwert und einzelne Positionen im Überblick.",
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

      <div className="mx-auto mt-16 grid w-full max-w-[1700px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.label}>
            <div className="overflow-hidden rounded-sm border border-bone/10">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-bone/10 bg-bone/[0.03] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-sans text-[11px] uppercase tracking-widest text-bone/40">
                  {project.label}
                </span>
                <span className="justify-self-end rounded-sm bg-brass px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-ink">
                  Konzept
                </span>
              </div>
              <Image
                src={project.src}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
