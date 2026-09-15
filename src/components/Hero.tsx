import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";
import { contactHref } from "../lib/site";

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
          className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]"
        >
          <div className="flex flex-col">
            <motion.p
              variants={item}
              className="font-sans text-lg uppercase tracking-[0.2em] text-brass"
            >
              Wien · Frontend &amp; UI/UX
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 max-w-3xl font-heading font-medium text-4xl leading-[1.05] tracking-tight text-bone sm:text-6xl"
            >
              Produktberatung und Frontend Entwicklung
              <br />
              <span className="text-brass">aus einer Hand.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75"
            >
              Wir konzipieren und entwickeln digitale Produkte, um die
              User Experience und das User Interface auf Ihrer Plattform zu optimieren.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <a
                  href={contactHref}
                  data-calendly-trigger
                  data-calendly-location="hero"
                  className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
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
