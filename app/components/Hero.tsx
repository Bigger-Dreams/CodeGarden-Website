import Image from "next/image";
import { contactMailto } from "@/lib/site";
import { PhoneFrame } from "./PhoneFrame";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
            Wien · Frontend &amp; UI/UX
          </p>

          <h1 className="mt-6 max-w-3xl font-heading font-medium text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl">
            UI/UX Optimierung und Frontend Entwicklung
            <br />
            <span className="text-brass">aus einer Hand.</span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75">
            Wir konzipieren und entwickeln digitale Produkte, um User
            die beste Erfahrung auf Ihrer Plattform bieten zu können.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={contactMailto}
              className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
            >
              Jetzt anfragen
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
          <PhoneFrame>
            <Image
              src="/poster.webp"
              alt="Prototyp-Screenshot einer App-Übersicht (Konzept, kein reales Produkt)"
              width={640}
              height={1392}
              priority
              className="w-[260px] object-cover sm:w-[320px]"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
