"use client";

import Image from "next/image";
import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
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

const phoneItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, rotate: 8, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: { type: "spring", stiffness: 170, damping: 11 },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const [frameSettled, setFrameSettled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <motion.div
            className="absolute right-[-18%] top-[-14%] h-[42rem] w-[42rem] rounded-full bg-brass-bright/60 blur-[64px]"
            animate={
              shouldReduceMotion
                ? { x: 0, y: 0, scale: 1, opacity: 0.52 }
                : {
                    x: [0, -46, -16, 0],
                    y: [0, 30, 52, 0],
                    scale: [1, 1.18, 1.08, 1],
                    opacity: [0.4, 0.68, 0.5, 0.4],
                  }
            }
            transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[-1%] top-[22%] h-[34rem] w-[34rem] rounded-full bg-brass/55 blur-[52px]"
            animate={
              shouldReduceMotion
                ? { x: 0, y: 0, scale: 1, opacity: 0.48 }
                : {
                    x: [0, 38, 12, 0],
                    y: [0, -24, 26, 0],
                    scale: [1, 1.12, 1.2, 1],
                    opacity: [0.34, 0.56, 0.42, 0.34],
                  }
            }
            transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-18%] right-[8%] h-[30rem] w-[48rem] rounded-full bg-brass-deep/44 blur-[68px]"
            animate={
              shouldReduceMotion
                ? { x: 0, y: 0, scale: 1, opacity: 0.4 }
                : {
                    x: [0, -28, 24, 0],
                    y: [0, -34, -14, 0],
                    scale: [1, 1.16, 1.08, 1],
                    opacity: [0.28, 0.46, 0.34, 0.28],
                  }
            }
            transition={{ duration: 58, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[18%] top-[42%] h-[22rem] w-[22rem] rounded-full bg-brass-bright/46 blur-[42px]"
            animate={
              shouldReduceMotion
                ? { y: 0, scale: 1, opacity: 0.38 }
                : { y: [0, -22, 0], scale: [1, 1.14, 1], opacity: [0.28, 0.48, 0.28] }
            }
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
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

          <motion.div
            variants={phoneItem}
            onAnimationComplete={() => setFrameSettled(true)}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={
                frameSettled && !shouldReduceMotion
                  ? { y: [0, -10, 0], rotate: [0, -0.8, 0.6, 0] }
                  : { y: 0, rotate: 0 }
              }
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                initial="hidden"
                animate={frameSettled ? "visible" : "hidden"}
                variants={reveal}
                className="relative w-[280px] sm:w-[340px]"
              >
                <Image
                  src="/hero-app-1.webp"
                  alt="Prototyp-Screenshot einer App-Übersicht (Konzept, kein reales Produkt)"
                  width={760}
                  height={1498}
                  priority
                  className="w-full object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
