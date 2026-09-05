import { contactMailto } from "@/lib/site";

export function Kontakt() {
  return (
    <section
      id="kontakt"
      className="bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Kontakt
        </p>
        <h2 className="mt-6 max-w-2xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Sie haben ein digitales Produkt, dessen Frontend modernisiert
          werden soll?
        </h2>
        <p className="mt-6 font-sans text-lg leading-relaxed text-bone/70">
          Dann vereinbaren wir ein kostenloses Erstgespräch.
        </p>
        <a
          href={contactMailto}
          className="mt-10 inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
        >
          Jetzt anfragen
        </a>
      </div>
    </section>
  );
}
