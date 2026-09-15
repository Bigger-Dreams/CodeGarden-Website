import { useState } from "react";
import {
  motion,
  MotionConfig,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { calendlyUrl } from "../lib/site";

const easing = [0.25, 0.1, 0.25, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easing },
  },
};

type Slide = {
  src: string;
  label: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: new URL("../assets/banking-uebersicht.webp", import.meta.url).href,
    label: "Übersicht",
    alt: "Banking-App Screen Übersicht – Gesamtvermögen, Konten und letzte Aktivität",
  },
  {
    src: new URL("../assets/banking-konto.webp", import.meta.url).href,
    label: "Konto",
    alt: "Banking-App Screen Konto – Gehaltskonto, Sparkonto, Einnahmen und Sparziele",
  },
  {
    src: new URL("../assets/banking-depot.webp", import.meta.url).href,
    label: "Depot",
    alt: "Banking-App Screen Depot – Depotwert, Positionen und Watchlist",
  },
];

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir === 0 ? 0 : dir > 0 ? 90 : -90, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -90 : 90, opacity: 0 }),
};

function HeroShowcase() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const reduceMotion = useReducedMotion();

  const paginate = (dir: number) =>
    setIndex(([prev]) => [
      (prev + dir + slides.length) % slides.length,
      dir,
    ]);

  const goTo = (next: number) =>
    setIndex(([prev]) =>
      next === prev ? [prev, 0] : [next, next > prev ? 1 : -1],
    );

  const slide = slides[index];

  return (
    <div className="relative w-[270px] sm:w-[300px]">
      {/* Swipe-Viewport */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="App-Screens zum Durchblättern"
        className="relative z-10 aspect-[1530/3036] w-full touch-pan-y overflow-hidden select-none"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={slide.src}
            alt={slide.alt}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: easing }
            }
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* Caption + Steuerung */}
      <div className="relative z-10 mt-4 flex flex-col items-center gap-3">
        <p aria-live="polite" className="font-sans text-xs text-bone/70">
          {slide.label} · {index + 1} / {slides.length}
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Vorheriger Screen"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-brass hover:text-brass"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Zu Screen: ${s.label}`}
                aria-current={i === index}
                className={`h-1.5 cursor-pointer rounded-full transition-colors ${
                  i === index
                    ? "w-6 bg-brass"
                    : "w-1.5 bg-bone/25 hover:bg-bone/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Nächster Screen"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-brass hover:text-brass"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16"
        >
          <div className="flex flex-col">
            <motion.p
              variants={item}
              className="font-sans text-xs uppercase tracking-[0.25em] text-brass"
            >
              Web-Apps, Portale &amp; Plattformen · Wien
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 max-w-2xl font-heading font-medium text-4xl leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-[3.25rem]"
            >
              Product Consulting &amp; Frontend-Entwicklung.
              <br />
              <span className="text-brass">
                Von der Strategie bis zum fertigen Code.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75"
            >
              Wir analysieren Anforderungen, optimieren Userflows und setzen Interfaces
              direkt in modernem Frontend-Code um. Echte Produkterfahrung trifft
              saubere technische Umsetzung für reibungslose Abläufe und messbare Ergebnisse.
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <a
                    href={calendlyUrl}
                    data-calendly-trigger
                    data-calendly-location="hero"
                    className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
                  >
                    Erstgespräch vereinbaren
                  </a>
                </motion.div>
                <a
                  href="#leistungen"
                  className="font-sans text-sm text-bone/75 transition-colors hover:text-brass"
                >
                  Leistungen ansehen →
                </a>
              </div>

              {/* De-Risking Micro-Copy */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-bone/60">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-brass shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  30 Min. Video-Call
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-brass shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Kostenlose Ersteinschätzung
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-brass shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Kein Verkaufs-Pitch
                </span>
              </div>
            </motion.div>

            {/* Scope / Service Strip */}
            <motion.div
              variants={item}
              className="mt-12 border-t border-bone/10 pt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Product Consulting
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Anforderungen analysieren, Userflows schärfen, Prioritäten setzen.
                </p>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Frontend-Entwicklung
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  React &amp; Next.js, angebunden an bestehende APIs ohne Backend-Umbau.
                </p>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Direkte Zusammenarbeit
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Ein fester Ansprechpartner für Konzept und Code. Schnelle Abstimmung ohne Agentur-Overhead.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Swipeable App-Screens */}
          <motion.div
            variants={item}
            className="flex w-full justify-center lg:justify-end"
          >
            <HeroShowcase />
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
