"use client";

import Image from "next/image";
import {
  motion,
  MotionConfig,
  useAnimationControls,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect } from "react";
import { contactMailto } from "@/lib/site";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

      await phoneControls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        transition: {
          delay: 1.2,
          type: "spring",
          bounce: 0.42,
          duration: 1.35,
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
          <motion.div
            className="absolute right-[-8%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-brass-bright/30 blur-[44px] will-change-transform"
            animate={
              shouldReduceMotion
                ? { scale: 1, opacity: 0.26 }
                : { scale: [1, 1.08, 1], opacity: [0.2, 0.34, 0.2] }
            }
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          />
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
              className="mt-6 max-w-3xl font-heading font-medium text-5xl leading-[1.05] tracking-tight text-bone sm:text-6xl"
            >
              Produktberatung und Frontend Entwicklung
              <br />
              <span className="text-brass">aus einer Hand.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone/75"
            >
              Wir konzipieren, entwickeln digitale Produkte mit KI, um die
              User Experience und das User Interface auf Ihrer Plattform zu optimieren.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
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
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative pb-7">
              <div className="absolute bottom-0 left-1/2 h-5 w-56 -translate-x-1/2 rounded-full bg-brass/25 sm:w-72" />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -220, rotate: 0 }}
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
        </motion.div>
      </section>
    </MotionConfig>
  );
}
