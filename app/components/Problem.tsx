const symptoms = [
  {
    title: "User Interface.",
    text: "Das Design entspricht nicht mehr aktuellen Standards und wirkt neben der Konkurrenz nicht mehr zeitgemäß.",
  },
  {
    title: "User Experience.",
    text: "Zu viele Schritte, damit User ans Ziel kommen, keine intuitiven Userflows, hohe Drop-Off Rate.",
  },
  {
    title: "Mobile First.",
    text: "Das Frontend wurde für den Desktop gebaut und funktioniert am Handy nur eingeschränkt.",
  },
  {
    title: "Schwache Performance.",
    text: "Durch lange Ladezeiten und träge Interaktionen verlieren Sie Nutzer, bevor der Inhalt überhaupt sichtbar ist.",
  },
  {
    title: "Frontend Tech-Stack.",
    text: "Alte Frameworks bremsen jede Weiterentwicklung, erschweren die Wartung und verursachen zusätzliche Kosten.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-brass">
          Aktuelle Situation
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
          <div className="flex flex-col">
            <p className="font-sans text-lg text-bone/70">
              Wann sind Sie bei uns genau richtig?
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
            <h2 className="font-heading font-medium text-4xl leading-tight tracking-tight text-bone sm:text-5xl">
              Bei uns steht{" "}
              <span className="text-brass">
                modernes, intuitives und effizientes Design
              </span>{" "}
              im Vordergrund.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
