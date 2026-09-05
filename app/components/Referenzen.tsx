"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const projects = [
  {
    label: "Übersicht",
    src: "/referenz-uebersicht.webp",
    width: 2494,
    height: 1403,
    alt: "Übersicht-Screen einer Finanz-App: Gesamtvermögen mit Konten-Kacheln und Schnellaktionen (Konzeptprojekt, kein Kundenauftrag)",
    caption:
      "Gesamtvermögen auf einen Blick, mit Kontenübersicht und Schnellaktionen.",
  },
  {
    label: "Konto",
    src: "/referenz-konto.webp",
    width: 2494,
    height: 1403,
    alt: "Konto-Screen einer Finanz-App: Gehalts-, Spar- und Verrechnungskonto sowie Überweisung per QR-Code (Konzeptprojekt, kein Kundenauftrag)",
    caption:
      "Kontenverwaltung mit Überweisung per QR-Code oder gespeichertem Empfänger.",
  },
  {
    label: "Depot",
    src: "/referenz-depot.webp",
    width: 2494,
    height: 1335,
    alt: "Depot-Screen einer Finanz-App: Depotwert und einzelne Positionen (Konzeptprojekt, kein Kundenauftrag)",
    caption: "Depotwert und einzelne Positionen im Überblick.",
  },
];

export function Referenzen() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    const scroller = scrollerRef.current;
    const slide = scroller?.children[index];
    if (slide instanceof HTMLElement) {
      slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }

  function handleScroll() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const index = Math.round(scroller.scrollLeft / scroller.clientWidth);
    setActive(Math.min(projects.length - 1, Math.max(0, index)));
  }

  return (
    <section
      id="referenzen"
      className="bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <h2 className="mt-6 font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Unser Referenzprojekt auf einen Blick!
        </h2>
        <p className="font-sans text-lg text-bone/70">
          Bei allen meinen Projekten lege ich Wert auf ein modernes
          Interface und eine optimierte User Experience, damit Ihre User
          gerne bleiben.
        </p>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-[1120px]">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <div key={project.label} className="w-full flex-shrink-0 snap-start">
              <div className="overflow-hidden rounded-sm border border-bone/10">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-bone/10 bg-bone/[0.03] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-bone/40">
                    {project.label}
                  </span>
                  <span className="justify-self-end rounded-sm bg-brass px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-ink">
                    Konzept
                  </span>
                </div>
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  sizes="(min-width: 1170px) 1120px, 100vw"
                  quality={100}
                  className="w-full"
                  priority={project.label === "Übersicht"}
                />
              </div>
              <p className="mt-4 font-sans text-base leading-relaxed text-bone/70">
                {project.caption}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Vorheriges Projekt"
          className="absolute left-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-bone/15 bg-ink-soft/90 text-bone transition-colors hover:bg-bone/10 disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === projects.length - 1}
          aria-label="Nächstes Projekt"
          className="absolute right-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-bone/15 bg-ink-soft/90 text-bone transition-colors hover:bg-bone/10 disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronIcon className="h-4 w-4" />
        </button>

        <div className="mt-6 flex items-center justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.label}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${project.label} anzeigen`}
              aria-current={index === active}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === active ? "bg-brass" : "bg-bone/25 hover:bg-bone/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
