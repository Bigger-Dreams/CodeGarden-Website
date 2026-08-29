export function Kontakt() {
  return (
    <section
      id="kontakt"
      className="bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Kontakt
        </p>
        <p className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Erzählen Sie mir von Ihrem Projekt.
        </p>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/70">
          Ob neue App, überarbeitetes Frontend oder eine Idee, die noch Form
          braucht: Schreiben Sie mir kurz, worum es geht, und ich melde mich
          zeitnah zurück.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4">
          <a
            href="mailto:patrick.roith@aon.at?subject=Anfrage%20%C3%BCber%20die%20Website"
            className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            E-Mail schreiben
          </a>
          <p className="font-sans text-sm text-bone/50">
            oder direkt an{" "}
            <a
              href="mailto:patrick.roith@aon.at"
              className="text-bone/70 underline decoration-bone/30 underline-offset-2 transition-colors hover:text-bone"
            >
              patrick.roith@aon.at
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
