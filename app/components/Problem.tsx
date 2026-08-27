const symptoms = [
  "Die Website wirkt, als wäre sie vor zehn Jahren stehengeblieben.",
  "Auf dem Handy findet niemand, was er sucht.",
  "Anfragen gehen unter, statt zu Aufträgen zu werden.",
];

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <p className="font-sans text-lg text-ink/70">Sie kennen das:</p>

        <ul className="mt-6 flex flex-col gap-3">
          {symptoms.map((symptom) => (
            <li key={symptom} className="flex gap-4 font-sans text-lg text-ink/80">
              <span
                aria-hidden="true"
                className="mt-[0.7em] h-px w-5 flex-shrink-0 bg-rust"
              />
              <span>{symptom}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 max-w-2xl font-heading font-medium text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Zeit für einen Auftritt, der zu Ihrer Arbeit{" "}
          <span className="text-brass-deep">passt</span> — klar,
          modern, vertrauenswürdig.
        </h2>

        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink/70">
          Ich gestalte und baue digitale Produkte, die Ihre Kompetenz
          sichtbar machen — statt sie zu verstecken.
        </p>
      </div>
    </section>
  );
}
