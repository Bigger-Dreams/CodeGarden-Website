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

const timeframeData = {
  "30d": {
    balance: "€ 48.250,00",
    change: "+12,4%",
    revenue: "€ 28.400",
    burn: "€ 9.150",
    bars: [35, 55, 45, 80, 65, 90],
  },
  "90d": {
    balance: "€ 142.800,00",
    change: "+18,2%",
    revenue: "€ 86.200",
    burn: "€ 24.800",
    bars: [50, 65, 60, 85, 75, 100],
  },
  "1y": {
    balance: "€ 520.400,00",
    change: "+34,6%",
    revenue: "€ 340.000",
    burn: "€ 98.000",
    bars: [45, 60, 70, 80, 90, 100],
  },
} as const;

type TimeframeKey = keyof typeof timeframeData;

const transactions = [
  {
    id: 1,
    title: "Kundenportal Enterprise",
    category: "Web-App · Next.js",
    amount: "+€ 12.400",
    status: "Aktiv",
    time: "Heute, 09:15",
  },
  {
    id: 2,
    title: "Service Orchestration API",
    category: "Workflow Engine",
    amount: "+€ 4.800",
    status: "Verbunden",
    time: "Gestern",
  },
  {
    id: 3,
    title: "Legacy Backend Bridge",
    category: "REST & GraphQL",
    amount: "-€ 1.200",
    status: "Synchron",
    time: "12. Sep",
  },
  {
    id: 4,
    title: "UX/UI Re-Design Sprint",
    category: "Design System",
    amount: "+€ 8.900",
    status: "Freigegeben",
    time: "10. Sep",
  },
];

const auditItems = [
  {
    metric: "100 / 100",
    title: "Core Web Vitals",
    desc: "Ladezeiten < 100ms dank modularer Next.js / React Inseln.",
  },
  {
    metric: "0 API-Bruch",
    title: "Legacy-Kompatibilität",
    desc: "Service Orchestration schützt bestehende Kernsysteme.",
  },
  {
    metric: "-40% Reibung",
    title: "Userflow-Effizienz",
    desc: "Vereinfachte Buchungs- und Checkout-Prozesse für echte Ergebnisse.",
  },
];

type HeroProps = {
  heroImageSrc?: string;
  heroImageSrcSet?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
};

export function Hero({}: HeroProps) {
  const [tab, setTab] = useState<"overview" | "transactions" | "architecture">("overview");
  const [timeframe, setTimeframe] = useState<TimeframeKey>("30d");
  const [selectedTx, setSelectedTx] = useState<number | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const triggerFeedback = (msg: string) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(null), 2400);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24">
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
              {/* Interactive Browser Frame */}
              <div className="overflow-hidden rounded-md border border-bone/15 bg-ink-soft shadow-2xl shadow-black/80">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between border-b border-bone/10 bg-ink px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                  </div>
                  <div className="mx-auto flex h-6 w-full max-w-[210px] items-center justify-center gap-1.5 rounded-sm bg-bone/5 px-3 font-sans text-[11px] text-bone/50">
                    <svg className="h-3 w-3 text-brass shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>app.codegarden.at</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-sm bg-brass/20 px-2 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wider text-brass-bright">
                    <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
                    Interaktiv
                  </span>
                </div>

                {/* In-App Tab Bar */}
                <div className="flex items-center justify-between border-b border-bone/10 bg-ink/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => setTab("overview")}
                      className={`rounded-sm px-2.5 py-1 font-sans text-xs transition-colors cursor-pointer ${
                        tab === "overview"
                          ? "bg-brass text-ink font-medium"
                          : "text-bone/70 hover:bg-bone/5 hover:text-bone"
                      }`}
                    >
                      Übersicht
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab("transactions")}
                      className={`rounded-sm px-2.5 py-1 font-sans text-xs transition-colors cursor-pointer ${
                        tab === "transactions"
                          ? "bg-brass text-ink font-medium"
                          : "text-bone/70 hover:bg-bone/5 hover:text-bone"
                      }`}
                    >
                      Transaktionen
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab("architecture")}
                      className={`rounded-sm px-2.5 py-1 font-sans text-xs transition-colors cursor-pointer ${
                        tab === "architecture"
                          ? "bg-brass text-ink font-medium"
                          : "text-bone/70 hover:bg-bone/5 hover:text-bone"
                      }`}
                    >
                      UX &amp; Stack
                    </button>
                  </div>

                  {feedbackMsg ? (
                    <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-brass-bright">
                      ✓ {feedbackMsg}
                    </span>
                  ) : (
                    <span className="hidden sm:inline-flex font-mono text-[11px] text-bone/40">
                      Live Component
                    </span>
                  )}
                </div>

                {/* Viewport: Interactive UI */}
                <div className="min-h-[340px] flex flex-col justify-between p-4 sm:p-5 bg-ink/60">
                  {tab === "overview" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-sans text-[11px] text-bone/50">Plattform-Status</p>
                          <p className="font-heading text-sm font-medium text-bone">Patrick Roith · Enterprise</p>
                        </div>
                        {/* Timeframe Selector */}
                        <div className="flex items-center gap-1 rounded-sm bg-bone/5 p-1">
                          {(["30d", "90d", "1y"] as const).map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => {
                                setTimeframe(t);
                                triggerFeedback(`${t === "30d" ? "30 Tage" : t === "90d" ? "90 Tage" : "1 Jahr"} gewählt`);
                              }}
                              className={`rounded-xs px-2 py-0.5 font-mono text-[11px] transition-colors cursor-pointer ${
                                timeframe === t
                                  ? "bg-brass text-ink font-medium"
                                  : "text-bone/60 hover:text-bone"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Main Metric Card */}
                      <div className="rounded-md border border-bone/10 bg-bone/[0.03] p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-sans text-xs text-bone/60">Gesamtvolumen Platform</p>
                            <p className="mt-1 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-bone">
                              {timeframeData[timeframe].balance}
                            </p>
                          </div>
                          <span className="rounded-sm bg-brass/15 px-2 py-0.5 font-mono text-xs text-brass-bright">
                            {timeframeData[timeframe].change}
                          </span>
                        </div>

                        {/* Submetrics */}
                        <div className="mt-3 grid grid-cols-2 gap-3 pt-3 border-t border-bone/10 text-xs">
                          <div>
                            <span className="text-bone/50">Einnahmen:</span>{" "}
                            <span className="font-medium text-bone">{timeframeData[timeframe].revenue}</span>
                          </div>
                          <div>
                            <span className="text-bone/50">Betriebskosten:</span>{" "}
                            <span className="font-medium text-bone">{timeframeData[timeframe].burn}</span>
                          </div>
                        </div>

                        {/* Interactive Bar Chart */}
                        <div className="mt-4 flex items-end gap-2 h-14 pt-2">
                          {timeframeData[timeframe].bars.map((h, i) => (
                            <div
                              key={i}
                              className="group relative flex-1 bg-brass/30 hover:bg-brass rounded-xs transition-all cursor-pointer"
                              style={{ height: `${h}%` }}
                              onClick={() => triggerFeedback(`Monat ${i + 1}: ${h}% Aktivität`)}
                            >
                              <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block rounded-xs border border-bone/20 bg-ink px-1 font-mono text-[9px] text-bone">
                                {h}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Action Buttons */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => triggerFeedback("Flow-Simulation gestartet")}
                          className="flex-1 rounded-sm bg-bone/10 px-3 py-2 font-sans text-xs font-medium text-bone transition-colors hover:bg-bone/15 cursor-pointer"
                        >
                          Userflow testen
                        </button>
                        <button
                          type="button"
                          onClick={() => setTab("transactions")}
                          className="flex-1 rounded-sm border border-bone/15 px-3 py-2 font-sans text-xs text-bone/80 transition-colors hover:border-brass hover:text-brass cursor-pointer"
                        >
                          Transaktionen ansehen →
                        </button>
                      </div>
                    </div>
                  )}

                  {tab === "transactions" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-xs uppercase tracking-wider text-brass">
                          Echtzeit-Datenfluss
                        </p>
                        <span className="font-mono text-[11px] text-bone/50">4 Einträge</span>
                      </div>

                      <div className="space-y-2">
                        {transactions.map((tx) => (
                          <div
                            key={tx.id}
                            onClick={() => {
                              setSelectedTx(tx.id);
                              triggerFeedback(`${tx.title} geladen`);
                            }}
                            className={`flex items-center justify-between rounded-sm border p-2.5 transition-all cursor-pointer ${
                              selectedTx === tx.id
                                ? "border-brass bg-bone/[0.06]"
                                : "border-bone/10 bg-bone/[0.02] hover:border-bone/20 hover:bg-bone/[0.04]"
                            }`}
                          >
                            <div>
                              <p className="font-sans text-xs font-medium text-bone">{tx.title}</p>
                              <p className="font-mono text-[10px] text-bone/50">{tx.category} · {tx.time}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-mono text-xs font-medium text-bone">{tx.amount}</p>
                              <span className="rounded-xs bg-brass/15 px-1.5 py-0.5 font-sans text-[10px] text-brass-bright">
                                {tx.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="pt-1 text-center font-sans text-[11px] text-bone/45">
                        Klicken Sie auf eine Zeile für die Status-Überprüfung
                      </p>
                    </div>
                  )}

                  {tab === "architecture" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-xs uppercase tracking-wider text-brass">
                          Product &amp; Engineering Stack
                        </p>
                        <span className="font-mono text-[11px] text-brass-bright">Live Architektur</span>
                      </div>

                      <div className="space-y-2.5">
                        {auditItems.map((item, i) => (
                          <div
                            key={i}
                            className="rounded-sm border border-bone/10 bg-bone/[0.03] p-3"
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-heading text-xs font-medium text-bone">{item.title}</p>
                              <span className="font-mono text-xs font-medium text-brass-bright">{item.metric}</span>
                            </div>
                            <p className="mt-1 font-sans text-[11px] leading-relaxed text-bone/60">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 text-center">
                        <a
                          href={calendlyUrl}
                          data-calendly-trigger
                          data-calendly-location="hero-demo"
                          className="inline-flex items-center justify-center rounded-sm bg-brass px-4 py-2 font-sans text-xs font-medium text-ink transition-colors hover:bg-brass-bright"
                        >
                          Ihr Projekt mit uns besprechen →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Grounded Interactive Caption */}
              <p className="mt-3 flex items-center justify-end gap-2 font-sans text-[11px] text-bone/45">
                <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
                Interaktives Web-Interface: Klicken Sie die Tabs &amp; Filter direkt durch
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}


