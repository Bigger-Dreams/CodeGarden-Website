import { posthog } from "../lib/posthog";

let widgetScriptPromise: Promise<void> | null = null;

function loadCalendlyWidgetScript() {
  widgetScriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.body.appendChild(script);
  });

  return widgetScriptPromise;
}

// Inline-Widget erst laden, wenn die Kontakt-Section tatsächlich in die Nähe
// des Viewports scrollt — erspart Besuchern, die nie so weit scrollen, das
// Calendly-Skript (und dessen Cookie) komplett. Nur auf dem One-Pager
// vorhanden, auf anderen Seiten (Blog, Über uns, …) ist kontaktSection null.
const kontaktSection = document.getElementById("kontakt");
if (kontaktSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      loadCalendlyWidgetScript();
      observer.disconnect();
    },
    { rootMargin: "200px" },
  );
  observer.observe(kontaktSection);
}

// Kontakt-CTAs außerhalb der Kontakt-Section (Nav, Footer, Hero, Blog) linken
// direkt auf /#kontakt statt ein Popup zu öffnen, tracken beim Klick aber
// weiterhin dieselbe Intention wie zuvor.
document.addEventListener("click", (event) => {
  const trigger = (event.target as HTMLElement).closest<HTMLAnchorElement>(
    "[data-calendly-trigger]",
  );
  if (!trigger) return;

  posthog.capture("calendly_cta_clicked", {
    location: trigger.dataset.calendlyLocation ?? "unknown",
  });
});

// Calendly postet ein window-Message-Event, sobald im eingebetteten Kalender
// tatsächlich ein Termin gebucht wurde (nicht nur angezeigt) — das läuft im
// iframe und ist für unser eigenes Tracking sonst unsichtbar.
window.addEventListener("message", (event) => {
  if (
    event.origin !== "https://calendly.com" ||
    typeof event.data !== "object" ||
    event.data?.event !== "calendly.event_scheduled"
  ) {
    return;
  }

  posthog.capture("calendly_booking_completed");
});
