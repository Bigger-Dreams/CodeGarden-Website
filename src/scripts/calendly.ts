import { calendlyUrl } from "../lib/site";

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
