import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";
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

type HeroProps = {
  heroImageSrc: string;
  heroImageSrcSet: string;
  heroImageWidth: number;
  heroImageHeight: number;
};

export function Hero({
  heroImageSrc,
  heroImageSrcSet,
  heroImageWidth,
  heroImageHeight,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute right-[6%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-brass-bright/30 blur-[130px]" />
        </div>
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
              Frontend-Entwicklung &amp; UI/UX · Wien
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 max-w-3xl font-heading font-medium text-4xl leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-6xl"
            >
              Bestehende Web-Apps &amp; Portale,
              <br />
              <span className="text-brass">die wieder einfach funktionieren.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75"
            >
              Wir modernisieren Frontend, UX und UI gewachsener digitaler Produkte.
              Damit User schneller ans Ziel kommen und Ihr Team auf einer sauberen Code-Basis
              weiterarbeiten kann – ohne teuren Backend-Neubau.
            </motion.p>

            <motion.div variants={item} className="mt-9">
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

            {/* Trust & Scope Strip: Grounds the desktop layout & resolves key objections */}
            <motion.div
              variants={item}
              className="mt-12 border-t border-bone/10 pt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Kein Backend-Umbau
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Bestehende APIs und Datenbanken bleiben unangetastet.
                </p>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Fixer Projektumfang
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Klare Leistungsabgrenzung und Pauschalpreise vor Projektstart.
                </p>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Konzept &amp; Code vereint
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Kein Informationsverlust zwischen UX, Strategie und Frontend.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative pb-7">
              <div className="absolute bottom-0 left-1/2 h-5 w-48 -translate-x-1/2 rounded-full bg-brass/25 min-[380px]:w-56 sm:w-72" />
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.97, y: -90 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        delay: 0.65,
                        type: "spring",
                        bounce: 0.18,
                        duration: 0.9,
                      }
                }
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? { y: 0, rotate: 0 }
                      : { y: [0, -10, 0], rotate: [0, -0.8, 0.6, 0] }
                  }
                  transition={{
                    delay: 1.7,
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative z-10 w-[240px] min-[380px]:w-[280px] sm:w-[340px]">
                    {/* Context Badge 1: Top Left */}
                    <div className="absolute -left-6 top-14 z-20 hidden rounded-md border border-bone/15 bg-ink-soft/95 px-3 py-1.5 shadow-xl sm:flex sm:items-center sm:gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                      <span className="font-sans text-xs text-bone/90">
                        React &amp; Next.js
                      </span>
                    </div>

                    {/* Context Badge 2: Bottom Right */}
                    <div className="absolute -right-6 bottom-16 z-20 hidden rounded-md border border-bone/15 bg-ink-soft/95 px-3 py-1.5 shadow-xl sm:flex sm:items-center sm:gap-2">
                      <svg
                        className="h-3.5 w-3.5 text-brass"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-sans text-xs text-bone/90">
                        Userflow optimiert
                      </span>
                    </div>

                    <img
                      src={heroImageSrc}
                      srcSet={heroImageSrcSet}
                      alt="Prototyp-Screenshot einer App-Übersicht (Konzept, kein reales Produkt)"
                      width={heroImageWidth}
                      height={heroImageHeight}
                      loading="eager"
                      fetchPriority="high"
                      className="w-full object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
