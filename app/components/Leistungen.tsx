const services = [
  {
    title: "Frontend & UX/UI-Modernisierung",
    text: "Ich überarbeite Userflows und Interface Ihrer bestehenden App oder Plattform und setze beides sauber in Code um, zuverlässig auf jedem Gerät.",
    Icon: InterfaceIcon,
  },
  {
    title: "Beratung & Konzeption",
    text: "Ich kläre erst, was Sie brauchen: mit Blick auf Ihr Geschäft, nicht nur auf Pixel.",
    Icon: ChatIcon,
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
        <h2 className="mt-6 max-w-xl font-heading font-medium text-3xl leading-tight tracking-tight text-bone sm:text-4xl">
          Das biete ich Ihnen an.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
          Pauschalpreis nach Projektumfang, auf Anfrage.
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
