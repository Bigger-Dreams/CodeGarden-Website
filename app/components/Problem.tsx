const symptoms = [
  "Ihr digitaler Auftritt wirkt, als wäre er vor zehn Jahren stehengeblieben.",
  "Auf dem Handy findet niemand, was er sucht.",
  "Anfragen gehen unter, statt zu Aufträgen zu werden.",
];

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass-deep">
          Status quo
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
          <div className="flex flex-col">
            <p className="font-sans text-lg text-ink/70">Sie kennen das:</p>

            <ul className="mt-6 flex flex-col gap-3">
              {symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex gap-4 font-sans text-lg text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-px w-5 flex-shrink-0 bg-rust"
                  />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden w-px bg-slate/40 lg:block" />

          <div className="flex flex-col justify-center">
            <h2 className="font-heading font-medium text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Zeit für einen klaren,{" "}
              <span className="text-brass-deep">vertrauenswürdigen</span>{" "}
              Auftritt für Ihr Unternehmen.
            </h2>

            <p className="mt-6 font-sans text-lg leading-relaxed text-ink/70">
              Ich gestalte und baue digitale Produkte, die das Können Ihres
              Unternehmens sichtbar machen, statt es zu verstecken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
