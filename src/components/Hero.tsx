import { useState } from "react";
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
  heroImageSrc?: string;
  heroImageSrcSet?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
};

export function Hero({}: HeroProps) {
  const [timeframe, setTimeframe] = useState<"30d" | "90d">("30d");
  const [feedback, setFeedback] = useState<string | null>(null);

  const triggerFeedback = (text: string) => {
    setFeedback(text);
    setTimeout(() => setFeedback(null), 2200);
  };

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

          {/* Right Column: Sleek, Unstuffed Interactive Phone */}
          <motion.div
            variants={item}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[305px]">
              {/* Phone Shell */}
              <div className="relative overflow-hidden rounded-[44px] border-[3px] border-bone/20 bg-ink p-3 shadow-2xl shadow-black/80">
                {/* Screen Bezel */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-[34px] border border-bone/10 bg-ink-soft p-4 text-bone min-h-[530px]">
                  <div>
                    {/* Status Bar & Dynamic Island */}
                    <div className="flex items-center justify-between px-1">
                      <span className="font-mono text-[11px] font-medium text-bone/60">09:41</span>
                      <div className="flex h-4 w-20 items-center justify-center rounded-full bg-ink border border-bone/10">
                        <div className="h-1.5 w-1.5 rounded-full bg-bone/30 mr-1.5" />
                        <div className="h-2 w-2 rounded-full bg-brass/80" />
                      </div>
                      <div className="flex items-center gap-1 text-bone/60">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
                        </svg>
                        <span className="font-mono text-[10px]">5G</span>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="font-sans text-[11px] text-bone/50">CodeGarden Portal</p>
                        <p className="font-heading text-sm font-medium text-bone">Patrick Roith</p>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brass/30 bg-brass/10 font-heading text-xs font-medium text-brass">
                        P
                      </div>
                    </div>

                    {/* Airy Metric Card (Not stuffed!) */}
                    <div className="mt-4 rounded-xl border border-bone/10 bg-bone/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-xs text-bone/60">Verfügbares Volumen</span>
                        <div className="flex rounded-sm bg-bone/5 p-0.5">
                          <button
                            type="button"
                            onClick={() => {
                              setTimeframe("30d");
                              triggerFeedback("30 Tage");
                            }}
                            className={`rounded-xs px-2 py-0.5 font-mono text-[10px] transition-colors cursor-pointer ${
                              timeframe === "30d"
                                ? "bg-brass text-ink font-medium"
                                : "text-bone/60 hover:text-bone"
                            }`}
                          >
                            30T
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setTimeframe("90d");
                              triggerFeedback("90 Tage");
                            }}
                            className={`rounded-xs px-2 py-0.5 font-mono text-[10px] transition-colors cursor-pointer ${
                              timeframe === "90d"
                                ? "bg-brass text-ink font-medium"
                                : "text-bone/60 hover:text-bone"
                            }`}
                          >
                            90T
                          </button>
                        </div>
                      </div>

                      <p className="mt-2 font-heading text-2xl font-medium tracking-tight text-bone">
                        {timeframe === "30d" ? "€ 38.450,00" : "€ 118.200,00"}
                      </p>

                      <div className="mt-1 flex items-center gap-2 text-[11px]">
                        <span className="rounded-xs bg-brass/15 px-1.5 py-0.5 font-mono text-brass-bright">
                          {timeframe === "30d" ? "+14,2%" : "+22,8%"}
                        </span>
                        <span className="text-bone/50">vs. Vorperiode</span>
                      </div>

                      {/* Clean Minimalist Bars */}
                      <div className="mt-4 flex items-end gap-2 h-9 pt-2 border-t border-bone/10">
                        {(timeframe === "30d"
                          ? [35, 60, 45, 80, 65, 95]
                          : [50, 70, 60, 90, 75, 100]
                        ).map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-brass/30 hover:bg-brass rounded-xs transition-all cursor-pointer"
                            style={{ height: `${h}%` }}
                            onClick={() => triggerFeedback(`Monat ${i + 1}: ${h}%`)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => triggerFeedback("Flow-Simulation aktiv")}
                        className="rounded-lg bg-brass px-3 py-2 text-center font-sans text-xs font-medium text-ink transition-colors hover:bg-brass-bright cursor-pointer"
                      >
                        Flow testen
                      </button>
                      <button
                        type="button"
                        onClick={() => triggerFeedback("APIs synchronisiert")}
                        className="rounded-lg border border-bone/15 bg-bone/[0.02] px-3 py-2 text-center font-sans text-xs text-bone/80 transition-colors hover:border-brass hover:text-brass cursor-pointer"
                      >
                        API Status
                      </button>
                    </div>

                    {/* Spacious, Minimal Activity List */}
                    <div className="mt-4 space-y-2">
                      <p className="font-sans text-[10px] text-bone/45 uppercase tracking-wider">
                        Letzte Vorgänge
                      </p>
                      <div
                        onClick={() => triggerFeedback("Kundenportal ausgewählt")}
                        className="flex items-center justify-between rounded-lg border border-bone/10 bg-bone/[0.02] p-2.5 transition-colors hover:border-bone/20 cursor-pointer"
                      >
                        <div>
                          <p className="font-sans text-xs font-medium text-bone">Kundenportal Web</p>
                          <p className="font-mono text-[10px] text-bone/50">Next.js · Vor 2 Std.</p>
                        </div>
                        <span className="font-mono text-xs text-brass-bright">+€ 4.200</span>
                      </div>
                      <div
                        onClick={() => triggerFeedback("Workflow Engine geprüft")}
                        className="flex items-center justify-between rounded-lg border border-bone/10 bg-bone/[0.02] p-2.5 transition-colors hover:border-bone/20 cursor-pointer"
                      >
                        <div>
                          <p className="font-sans text-xs font-medium text-bone">Workflow Engine</p>
                          <p className="font-mono text-[10px] text-bone/50">Orchestrierung</p>
                        </div>
                        <span className="font-mono text-xs text-bone/70">-€ 180</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Area: Feedback & Home Indicator */}
                  <div className="pt-3">
                    <div className="h-5 flex items-center justify-center text-center">
                      {feedback ? (
                        <span className="font-mono text-[10px] text-brass-bright">
                          ✓ {feedback}
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-bone/40">
                          Tippen zum Interagieren
                        </span>
                      )}
                    </div>
                    <div className="mt-2 h-1 w-28 mx-auto rounded-full bg-bone/30" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 flex items-center justify-center gap-1.5 font-sans text-[11px] text-bone/45">
                <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
                Interaktives Phone-Interface: Testen Sie Buttons &amp; Zeitraum
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
