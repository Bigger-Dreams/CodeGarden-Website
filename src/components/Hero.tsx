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
              Web-Apps, Portale &amp; Plattformen · Wien
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 max-w-3xl font-heading font-medium text-4xl leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-6xl"
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
              saubere technische Umsetzung – ohne Stille Post zwischen Konzept und Code.
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

            {/* Trust & Scope Strip: Balances the desktop layout & highlights Product Consulting + Dev */}
            <motion.div
              variants={item}
              className="mt-12 border-t border-bone/10 pt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Product Consulting
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Anforderungen analysieren, Userflows schärfen und Vorhaben realistisch priorisieren.
                </p>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Frontend-Entwicklung
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Moderne Umsetzung in React und Next.js, angebunden an Ihre bestehenden APIs.
                </p>
              </div>
              <div>
                <p className="font-heading text-sm font-medium text-bone">
                  Keine Stille Post
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Wer die Produktstrategie versteht, baut auch das Frontend. Reibungslos und direkt.
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

