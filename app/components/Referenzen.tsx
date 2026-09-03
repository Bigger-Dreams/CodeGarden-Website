import Image from "next/image";

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
          Ein Einblick in ein eigenes Konzeptprojekt, eine Finanz-App, an der
          ich Interface und Interaktionen entwickle. Echte Kundenprojekte
          folgen hier, sobald sie abgeschlossen sind.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink/40">
                Übersicht
              </p>
              <span className="rounded-sm bg-ink px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-bone">
                Konzept
              </span>
            </div>
            <div className="overflow-hidden rounded-sm border border-ink/10">
              <Image
                src="/referenz-uebersicht.webp"
                alt="Übersicht-Screen einer Finanz-App: Gesamtvermögen, Konten und Schnellaktionen (Konzeptprojekt, kein Kundenauftrag)"
                width={1800}
                height={821}
                sizes="(min-width: 640px) 50vw, 100vw"
                quality={90}
                className="w-full"
              />
            </div>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink/70">
              Übersicht-Screen mit Gesamtvermögen, Kontenübersicht und
              Schnellaktionen, aus einem eigenen Konzeptprojekt.
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink/40">
                Depot
              </p>
              <span className="rounded-sm bg-ink px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-bone">
                Konzept
              </span>
            </div>
            <div className="overflow-hidden rounded-sm border border-ink/10">
              <Image
                src="/referenz-depot.webp"
                alt="Depot-Screen einer Finanz-App: Positionen, Watchlist und Preisalarme (Konzeptprojekt, kein Kundenauftrag)"
                width={1800}
                height={821}
                sizes="(min-width: 640px) 50vw, 100vw"
                quality={90}
                className="w-full"
              />
            </div>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink/70">
              Depot-Ansicht mit einzelnen Positionen, Watchlist und
              Preisalarmen, aus demselben Konzeptprojekt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
