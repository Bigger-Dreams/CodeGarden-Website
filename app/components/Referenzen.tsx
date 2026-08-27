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
          Portfolio im Aufbau — hier entstehen bald echte Projekte. Bis dahin
          ein Platzhalter, wie neue Apps und Plattformen aussehen können.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink/40">
                Plattform
              </p>
              <span className="rounded-sm bg-ink px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-bone">
                Platzhalter
              </span>
            </div>
            <div className="flex min-h-64 flex-col overflow-hidden rounded-sm border border-ink/10 bg-ink">
              <div className="flex items-center gap-1.5 border-b border-bone/10 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-bone/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-bone/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-bone/25" />
              </div>
              <div className="flex flex-1">
                <div className="flex w-14 flex-col gap-2 border-r border-bone/10 p-3">
                  <div className="h-1.5 w-8 rounded-full bg-bone/20" />
                  <div className="h-1.5 w-6 rounded-full bg-bone/15" />
                  <div className="h-1.5 w-7 rounded-full bg-bone/15" />
                </div>
                <div className="flex-1 p-4">
                  <div className="mb-4 h-2 w-20 rounded-sm bg-bone/20" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 rounded-sm bg-bone/10" />
                    <div className="h-10 rounded-sm bg-brass/40" />
                    <div className="h-10 rounded-sm bg-bone/10" />
                    <div className="h-10 rounded-sm bg-bone/10" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm font-sans text-base leading-relaxed text-ink/70">
              Abstrahierte Dashboard-Ansicht — kein echtes Kundenprojekt.
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink/40">
                App
              </p>
              <span className="rounded-sm bg-ink px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-bone">
                Platzhalter
              </span>
            </div>
            <div className="flex min-h-64 items-center justify-center rounded-sm border border-ink/10 bg-ink">
              <div className="w-32 rounded-2xl border border-bone/15 p-3">
                <div className="mb-3 flex justify-center">
                  <div className="h-1 w-8 rounded-full bg-bone/25" />
                </div>
                <div className="mb-3 h-2 w-16 rounded-sm bg-bone/20" />
                <div className="flex flex-col gap-2">
                  <div className="h-6 rounded-sm bg-bone/10" />
                  <div className="h-6 rounded-sm bg-bone/10" />
                  <div className="h-6 rounded-sm bg-bone/10" />
                </div>
                <div className="mt-3 flex justify-end">
                  <div className="h-6 w-6 rounded-full bg-brass" />
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm font-sans text-base leading-relaxed text-ink/70">
              Abstrahierte mobile Ansicht — kein echtes Kundenprojekt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
