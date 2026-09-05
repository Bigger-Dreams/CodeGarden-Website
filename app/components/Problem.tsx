const symptoms = [
  {
    title: "Veraltetes Interface.",
    text: "Das Design entspricht nicht mehr aktuellen Standards und wirkt neben der Konkurrenz nicht mehr zeitgemäß.",
  },
  {
    title: "Komplizierte Userflows.",
    text: "Zu viele Schritte bis zum Ziel, unklare Navigation, kein erkennbarer nächster Schritt.",
  },
  {
    title: "Fehlende Mobile-Optimierung.",
    text: "Die Oberfläche wurde für Desktop gebaut und funktioniert am Handy nur eingeschränkt.",
  },
  {
    title: "Schwache Performance.",
    text: "Lange Ladezeiten und träge Interaktionen kosten Nutzer, bevor der Inhalt überhaupt sichtbar ist.",
  },
  {
    title: "Veralteter Tech-Stack.",
    text: "Alte Frameworks bremsen jede Weiterentwicklung und erschweren die Wartung.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Status quo
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
          <div className="flex flex-col">
            <p className="font-sans text-lg text-bone/70">
              Woran erkennen Sie Modernisierungsbedarf?
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {symptoms.map((symptom) => (
                <li
                  key={symptom.title}
                  className="flex gap-4 font-sans text-lg text-bone/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-px w-5 flex-shrink-0 bg-bone/40"
                  />
                  <span>
                    <span className="font-medium text-bone">{symptom.title}</span>{" "}
                    {symptom.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden w-px bg-bone/15 lg:block" />

          <div className="flex flex-col justify-center">
            <p className="font-sans text-lg leading-relaxed text-bone/70">
              Ich modernisiere Frontend, UX und UI bestehender Apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
