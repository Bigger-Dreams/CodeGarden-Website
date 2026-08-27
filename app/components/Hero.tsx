const dated = { fontFamily: "Arial, Helvetica, sans-serif" };

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Wien · Frontend &amp; UI/UX
        </p>

        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl lg:text-7xl">
          Digitale Produkte, die
          <br />
          <span className="italic text-brass">überzeugen.</span>
        </h1>

        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75">
          Ich modernisiere Websites und Apps für Wiener Handwerks- und
          Einzelhandelsbetriebe — von der Strategie bis zum fertigen Code.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            Projekt anfragen
          </a>
          <a
            href="#leistungen"
            className="font-sans text-sm text-bone/75 transition-colors hover:text-brass"
          >
            Leistungen ansehen →
          </a>
        </div>

        <div
          aria-hidden="true"
          className="mt-20 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2"
        >
          <div>
            <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-bone/40">
              vorher
            </p>
            <div className="overflow-hidden rounded-sm border border-slate/40">
              <div className="flex items-center gap-1.5 bg-[#d9d9d9] px-2 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#e33]" />
                <span className="h-2 w-2 rounded-full bg-[#ec3]" />
                <span className="h-2 w-2 rounded-full bg-[#2b2]" />
              </div>
              <div className="bg-white p-4">
                <p style={dated} className="text-[15px] font-bold text-[#1a1a1a]">
                  Herzlich Willkommen!
                </p>
                <p style={dated} className="mt-1 text-[11px] leading-tight text-[#444]">
                  Wir freuen uns auf Ihren Besuch. Öffnungszeiten und mehr
                  finden Sie hier.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span style={dated} className="bg-[#0645ad] px-2 py-1 text-[10px] text-white">
                    Mehr erfahren
                  </span>
                  <span
                    style={dated}
                    className="border border-[#999] bg-[#e0e0e0] px-2 py-1 text-[10px] text-[#333]"
                  >
                    Kontakt
                  </span>
                  <span style={dated} className="bg-[#c0392b] px-2 py-1 text-[10px] text-white">
                    Jetzt anrufen!
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-brass/70">
              danach
            </p>
            <div className="rounded-sm border border-brass/30 bg-ink p-5">
              <p className="font-serif text-xl text-bone">Willkommen.</p>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-bone/70">
                Alles, was Sie wissen müssen — klar strukturiert, auf einen
                Blick.
              </p>
              <div className="mt-4">
                <span className="inline-block rounded-sm bg-brass px-3 py-1.5 font-sans text-[11px] font-medium text-ink">
                  Termin vereinbaren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
