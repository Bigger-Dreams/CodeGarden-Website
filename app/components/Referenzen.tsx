const projects = [
  {
    name: "Tischlerei Falkner",
    category: "Möbeltischlerei, Wien",
    description:
      "Eine klare Struktur für Leistungen und Referenzen — gedacht für Kund:innen, die von unterwegs suchen.",
    panelClass: "bg-panel-forest",
  },
  {
    name: "Papeterie Leopold",
    category: "Einzelhandel, Wien",
    description:
      "Ein einladender Online-Auftritt mit Fokus auf Öffnungszeiten, Standort und Sortiment.",
    panelClass: "bg-panel-plum",
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
          Diese Projekte sind Konzepte — Beispiele für meine Arbeitsweise,
          keine abgeschlossenen Kundenprojekte.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col">
              <div
                className={`relative flex aspect-[4/3] flex-col justify-between rounded-sm p-6 ${project.panelClass}`}
              >
                <span className="self-start rounded-sm bg-bone px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-ink">
                  Konzept
                </span>
                <p className="font-serif text-3xl text-bone">{project.name}</p>
              </div>
              <p className="mt-4 font-sans text-sm uppercase tracking-wide text-ink/50">
                {project.category}
              </p>
              <p className="mt-2 max-w-sm font-sans text-base leading-relaxed text-ink/70">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
