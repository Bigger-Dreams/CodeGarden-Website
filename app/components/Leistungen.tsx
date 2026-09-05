const services = [
  {
    title: "Beratung & Konzeption",
    text: "In der kostenlosten Erstberatung werden alle Anforderungen eingeholt, gemeinsam priorisiert und der Umfang des Projekts abgesteckt. Daraufhin wird ein passendes Konzept für Sie erstellt, dass alle Anfroderungen abdeckt",
    Icon: ChatIcon,
  },
  {
    title: "UI/UX-Modernisierung",
    text: "Wir arbeiten ausschließlich mit modernen Designs, die eine verbesserte User Experience und ein modernes User Interface auf Desktop und Mobile garantieren.",
    Icon: InterfaceIcon,
  },
  {
    title: "Frontend-Neuentwicklung",
    text: "Die Entwicklung des Frontend wird mit Next.js und React umgesetzt. Die Schnittstellen zum Backend an Ihre bestehenden Systeme an ist eine klare Anforderung, die voraussgesetzt ist.",
    Icon: CodeIcon,
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
          Unsere Leistungen im Überblick:
        </p>
        <h2 className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Konzept, Design und Umsetzung einfach aus einer Hand.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-sm bg-bone/[0.06] p-8"
            >
              <service.Icon className="h-7 w-7 text-brass" />
              <h3 className="mt-5 font-heading font-medium text-2xl text-bone">
                {service.title}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-sans text-sm text-bone/50">
          Die Preise sind pro Porjektumfang unterschiedlich und werden nach dem ersten Beratungsgespräch übermittelt.
        </p>
      </div>
    </section>
  );
}

function InterfaceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16.5v3.5" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5v-3.5H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 8l-4 4 4 4M15 8l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
