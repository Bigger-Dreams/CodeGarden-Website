import Image from "next/image";
import { contactMailto } from "@/lib/site";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
            Wien · Frontend &amp; UI/UX
          </p>

          <h1 className="mt-6 max-w-3xl font-heading font-medium text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl">
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
              href={contactMailto}
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
        </div>

        <div className="flex justify-end">
          <Image
            src="/hero-app-1.webp"
            alt="Prototyp-Screenshot einer App-Übersicht (Konzept, kein reales Produkt)"
            width={760}
            height={1498}
            priority
            className="w-[260px] sm:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
