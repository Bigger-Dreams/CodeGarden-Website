import { Fragment } from "react";
import {
  MessageCircle,
  Lightbulb,
  RefreshCw,
  Package,
  HeartHandshake,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    title: "Erstgespräch",
    text: "Hier klären wir, welche Pain Points und Anforderungen beim Produkt vorliegen, um einen Anforderungskatalog zu erstellen.",
    Icon: MessageCircle,
  },
  {
    title: "Konzepterstellung",
    text: "Daraus wird ein konkretes Konzept für Sie erstellt mit entsprechendem Funktionsumfang, Zeitrahmen und Projektpreis.",
    Icon: Lightbulb,
  },
  {
    title: "Umsetzung",
    text: "In der Umsetzung werden die Prototypen in Feedback Loops und schlussendlich das finale Produkt entwickelt.",
    Icon: RefreshCw,
  },
  {
    title: "Finale Übergabe",
    text: "Nach der Umsetzung erhalten Sie den finalen Code, sowie eine technische verständliche Dokumentation.",
    Icon: Package,
  },
  {
    title: "Optionale Betreuung",
    text: "Nach dem Projekt kann eine optionale Weiterbetreuung vereinbart werden, um Ansprechpartner für Sie zu bleiben.",
    Icon: HeartHandshake,
    dashed: true,
  },
];

export function Ablauf() {
  return (
    <section
      id="ablauf"
      className="bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-lg uppercase tracking-[0.2em] text-brass">
          Projektablauf
        </p>
        <h2 className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Die Schritte des Projekts.
        </h2>

        <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="flex flex-col items-center text-center lg:w-[210px] lg:shrink-0">
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-bone/10 ${
                    step.dashed ? "border border-dashed border-brass/40" : ""
                  }`}
                >
                  <step.Icon className="h-9 w-9 text-brass" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-heading font-medium text-lg text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-bone/70">
                  {step.text}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="flex shrink-0 items-center justify-center text-bone/25 lg:mt-7">
                  <ArrowDown className="h-6 w-6 lg:hidden" strokeWidth={1.5} />
                  <ArrowRight className="hidden h-6 w-6 lg:block" strokeWidth={1.5} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
