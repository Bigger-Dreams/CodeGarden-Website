export default function ImpressumPage() {
  return (
    <main className="flex flex-1 flex-col bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col">
        <h1 className="font-heading font-medium text-4xl tracking-tight text-ink sm:text-5xl">
          Impressum
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-ink/70">
          Angaben gemäß § 5 ECG.
        </p>

        <p className="mt-10 font-sans text-base leading-relaxed text-ink">
          Patrick Roith
          <br />
          Gilgegasse 17/11
          <br />
          1090 Wien
          <br />
          Österreich
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Kontakt
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          E-Mail: patrick.roith@aon.at
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Gewerberechtliche Angaben
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Gewerbewortlaut, zuständige Gewerbebehörde und Mitgliedschaft bei
          der Wirtschaftskammer Österreich folgen hier, sobald die
          Gewerbeanmeldung abgeschlossen ist.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Umsatzsteuer-Identifikationsnummer
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Folgt hier, sobald feststeht, ob eine umsatzsteuerliche
          Registrierung erfolgt oder die Kleinunternehmerregelung gilt.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Anwendbare Rechtsvorschriften
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Gewerbeordnung, abrufbar unter{" "}
          <a
            href="https://www.ris.bka.gv.at"
            className="text-brass-deep underline decoration-brass-deep/40 underline-offset-2 transition-colors hover:text-ink"
          >
            www.ris.bka.gv.at
          </a>
          .
        </p>

        <p className="mt-10 rounded-sm border border-rust/40 bg-rust/10 px-4 py-3 font-sans text-sm leading-relaxed text-ink/70">
          Platzhaltertext für die gewerberechtlichen Angaben und die
          UID-Nummer. Kein Ersatz für Rechtsberatung. Ich stimme die
          finalen Angaben vor der Veröffentlichung mit einer Rechtsberatung
          ab.
        </p>
      </div>
    </main>
  );
}
