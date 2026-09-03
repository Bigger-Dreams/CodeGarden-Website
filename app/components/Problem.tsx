const symptoms = [
  "Ihre App oder Plattform wirkt, als wäre sie vor zehn Jahren stehengeblieben.",
  "User brechen mittendrin ab, weil sie nicht finden, was sie suchen.",
  "Anfragen gehen unter, statt zu Aufträgen zu werden.",
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
            <p className="font-sans text-lg text-bone/70">Sie kennen das:</p>

            <ul className="mt-6 flex flex-col gap-3">
              {symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex gap-4 font-sans text-lg text-bone/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-px w-5 flex-shrink-0 bg-bone/40"
                  />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden w-px bg-bone/15 lg:block" />

          <div className="flex flex-col justify-center">
            <h2 className="font-heading font-medium text-4xl leading-tight tracking-tight text-bone sm:text-5xl">
              Zeit für eine App,
              <br />
              <span className="text-brass">die zu Ihnen passt.</span>
            </h2>

            <p className="mt-6 font-sans text-lg leading-relaxed text-bone/70">
              Ich modernisiere Frontend, UX und UI bestehender Apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
