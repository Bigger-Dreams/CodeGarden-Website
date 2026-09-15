import { motion, MotionConfig, type Variants } from "framer-motion";
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
          className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:gap-14"
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
              saubere technische Umsetzung – ohne Stille Post zwischen Konzept und Code.
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
                  Keine Stille Post
                </p>
                <p className="mt-1 font-sans text-xs text-bone/60 leading-relaxed">
                  Strategie und Code vereint. Kein Informationsverlust im Prozess.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Grounded Browser Frame */}
              <div className="overflow-hidden rounded-md border border-bone/15 bg-ink-soft shadow-2xl shadow-black/60">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between border-b border-bone/10 bg-ink px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                  </div>
                  <div className="mx-auto flex h-6 w-full max-w-[210px] items-center justify-center rounded-sm bg-bone/5 px-3 font-sans text-[11px] text-bone/45">
                    app.codegarden.at
                  </div>
                  <span className="rounded-sm bg-brass/20 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wider text-brass-bright">
                    Prototype
                  </span>
                </div>

                {/* Viewport: Crisp Desktop Web-App Screenshot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                  <img
                    src={heroImageSrc}
                    srcSet={heroImageSrcSet}
                    alt="Desktop-Screenshot einer Finanz-Web-App (Konzeptprojekt, kein reales Produkt)"
                    width={heroImageWidth}
                    height={heroImageHeight}
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Grounded Caption */}
              <p className="mt-3 text-right font-sans text-[11px] text-bone/40">
                Konzeptprojekt: UI/UX &amp; Frontend einer B2B-Finanzplattform
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}

