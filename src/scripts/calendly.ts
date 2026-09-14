import { calendlyUrl } from "../lib/site";
import { posthog } from "../lib/posthog";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let calendlyScriptPromise: Promise<void> | null = null;

function loadCalendlyScript() {
  if (window.Calendly) return Promise.resolve();

  calendlyScriptPromise ??= new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.body.appendChild(script);
  });

  return calendlyScriptPromise;
}

document.addEventListener("click", async (event) => {
  const trigger = (event.target as HTMLElement).closest<HTMLAnchorElement>(
    "[data-calendly-trigger]",
  );
  if (!trigger) return;

  event.preventDefault();

  posthog.capture("calendly_cta_clicked", {
    location: trigger.dataset.calendlyLocation ?? "unknown",
  });

  const originalText = trigger.textContent;
  trigger.setAttribute("aria-busy", "true");
  trigger.textContent = "Terminmodul wird geladen…";

  try {
    await loadCalendlyScript();
    window.Calendly?.initPopupWidget({ url: calendlyUrl });
  } finally {
    trigger.removeAttribute("aria-busy");
    trigger.textContent = originalText;
  }
});

// Calendly postet ein window-Message-Event, sobald im Popup tatsächlich ein
// Termin gebucht wurde (nicht nur geöffnet) — das läuft im eingebetteten
// Iframe und ist für unser eigenes Tracking sonst unsichtbar.
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
