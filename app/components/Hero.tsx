"use client";

import Image from "next/image";
import {
  motion,
  MotionConfig,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";
import { contactMailto } from "@/lib/site";

/**
 * Wort-Maske für die Headline: jedes Wort steckt in einem overflow-hidden-
 * Wrapper und schiebt sich per CSS-Keyframe (globals.css, .hero-word) aus der
 * Maske hoch. Läuft bewusst über reines CSS statt framer-motion, damit die
 * H1 (LCP-Kandidat) beim ersten Paint startet und nicht auf die Hydration
 * wartet. `delay` staffelt die Wörter der ganzen Headline durch.
 */
function HeroWord({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="hero-word-mask">
      <span className="hero-word" style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  const phoneControls = useAnimationControls();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;

    async function runPhoneAnimation() {
      if (shouldReduceMotion) {
        phoneControls.set({ opacity: 1, scale: 1, y: 0, rotate: 0 });
        return;
      }

      // Startet während der Text noch staffelt (statt danach) und fällt
      // deutlich kürzer mit wenig Nachfedern – eine Choreografie statt
      // zweier getrennter Akte.
      await phoneControls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        transition: {
          delay: 0.35,
          type: "spring",
          bounce: 0.16,
          duration: 0.85,
        },
      });

      if (!isMounted) return;

      await phoneControls.start({
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, -0.8, 0.6, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      });
    }

    runPhoneAnimation();

    return () => {
      isMounted = false;
      phoneControls.stop();
    };
  }, [phoneControls, shouldReduceMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Halo hinter dem Mockup statt Fleck am Rand: stärkerer Blur,
              als Lichtquelle hinter dem Phone positioniert, kürzerer Loop. */}
          <motion.div
            className="absolute right-[6%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-brass-bright/35 blur-[130px] will-change-transform"
            animate={
              shouldReduceMotion
                ? { scale: 1, opacity: 0.3 }
                : { scale: [1, 1.1, 1], opacity: [0.24, 0.4, 0.24] }
            }
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col">
            <p
              className="hero-rise font-sans text-lg uppercase tracking-[0.2em] text-brass"
              style={{ animationDelay: "0s" }}
            >
              Wien · Frontend &amp; UI/UX
            </p>

            <h1 className="mt-6 max-w-3xl font-heading font-medium text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl">
              <HeroWord delay={0.12}>Produktberatung</HeroWord>{" "}
              <HeroWord delay={0.17}>und</HeroWord>{" "}
              <HeroWord delay={0.22}>Frontend</HeroWord>{" "}
              <HeroWord delay={0.27}>Entwicklung</HeroWord>
              <br />
              <span className="text-brass">
                <HeroWord delay={0.32}>aus</HeroWord>{" "}
                <HeroWord delay={0.37}>einer</HeroWord>{" "}
                <HeroWord delay={0.42}>Hand.</HeroWord>
              </span>
            </h1>

            <p
              className="hero-rise mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75"
              style={{ animationDelay: "0.5s" }}
            >
              Wir konzipieren, entwickeln digitale Produkte mit KI, um die
              User Experience und das User Interface auf Ihrer Plattform zu optimieren.
            </p>

            <div
              className="hero-rise mt-10 flex flex-wrap items-center gap-6"
              style={{ animationDelay: "0.62s" }}
            >
              <motion.a
                href={contactMailto}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
              >
                Jetzt anfragen
              </motion.a>
              <a
                href="#leistungen"
                className="font-sans text-sm text-bone/75 transition-colors hover:text-brass"
              >
                Leistungen ansehen →
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative pb-7">
              <div className="absolute bottom-0 left-1/2 h-5 w-56 -translate-x-1/2 rounded-full bg-brass/25 sm:w-72" />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -70, rotate: 0 }}
                animate={phoneControls}
              >
                <div className="relative z-10 w-[280px] sm:w-[340px]">
                  <Image
                    src="/hero-app-1.webp"
                    alt="Prototyp-Screenshot einer App-Übersicht (Konzept, kein reales Produkt)"
                    width={760}
                    height={1498}
                    priority
                    className="w-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
