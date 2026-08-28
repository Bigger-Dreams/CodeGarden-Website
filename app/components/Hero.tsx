export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Wien · Frontend &amp; UI/UX
        </p>

        <h1 className="mt-6 max-w-3xl font-heading font-medium text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl lg:text-7xl">
          Digitale Produkte, die
          <br />
          <span className="text-brass">überzeugen.</span>
        </h1>

        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75">
          Ich entwickle neue Apps und Plattformen und optimiere Frontend
          sowie UI/UX für Unternehmen, von der Strategie bis zum fertigen
          Code.
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

        <div className="mt-20 max-w-3xl" aria-hidden="true">
          <div className="flex min-h-80 flex-col overflow-hidden rounded-sm border border-slate/40 bg-ink">
            <div className="flex items-center gap-1.5 border-b border-bone/10 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-bone/25" />
              <span className="h-2 w-2 rounded-full bg-bone/25" />
              <span className="h-2 w-2 rounded-full bg-bone/25" />
            </div>
            <div className="flex flex-1">
              <div className="flex w-20 flex-col gap-3 border-r border-bone/10 p-4">
                <div className="h-2 w-12 rounded-full bg-brass/60" />
                <div className="h-2 w-10 rounded-full bg-bone/20" />
                <div className="h-2 w-14 rounded-full bg-bone/15" />
                <div className="h-2 w-9 rounded-full bg-bone/15" />
              </div>
              <div className="flex-1 p-6">
                <div className="mb-5 h-2.5 w-32 rounded-sm bg-bone/20" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-sm bg-brass/40" />
                  <div className="h-16 rounded-sm bg-bone/10" />
                  <div className="h-16 rounded-sm bg-bone/10" />
                  <div className="h-16 rounded-sm bg-bone/10" />
                  <div className="h-16 rounded-sm bg-bone/10" />
                  <div className="h-16 rounded-sm bg-bone/10" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 font-sans text-sm text-bone/40">
            Platzhalter. Wird durch einen echten Prototyp-Screenshot ersetzt.
          </p>
        </div>
      </div>
    </section>
  );
}
