const services = [
  {
    title: "Frontend & UX/UI-Modernisierung",
    text: "Ich überarbeite Userflows und Interface Ihrer bestehenden App oder Plattform und setze beides sauber in Code um, zuverlässig auf jedem Gerät.",
  },
  {
    title: "Beratung & Konzeption",
    text: "Ich kläre erst, was Sie brauchen: mit Blick auf Ihr Geschäft, nicht nur auf Pixel.",
  },
];

export function Leistungen() {
  return (
    <section
      id="leistungen"
      className="bg-ink px-6 py-24 text-bone sm:px-12 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Leistungen
        </p>
        <p className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Das biete ich Ihnen an.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="border-t border-slate/40 pt-6">
              <h3 className="font-heading font-medium text-2xl text-bone">{service.title}</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-sans text-sm text-bone/50">
          Pauschalpreis nach Projektumfang, auf Anfrage.
        </p>
      </div>
    </section>
  );
}
