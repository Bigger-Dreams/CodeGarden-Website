export default function ImpressumPage() {
  return (
    <main className="flex flex-1 flex-col bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col">
        <h1 className="font-heading font-medium text-4xl tracking-tight text-ink sm:text-5xl">
          Impressum
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-ink/70">
          Angaben gemäß § 5 ECG folgen hier, sobald der endgültige
          Unternehmensname feststeht.
        </p>
        <p className="mt-10 rounded-sm border border-rust/40 bg-rust/10 px-4 py-3 font-sans text-sm leading-relaxed text-ink/70">
          Platzhaltertext. Kein Ersatz für Rechtsberatung. Ich stimme die
          finalen Angaben vor der Veröffentlichung mit einer Rechtsberatung
          ab.
        </p>
      </div>
    </main>
  );
}
