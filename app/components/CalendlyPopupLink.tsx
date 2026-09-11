"use client";

import { useState, type ReactNode } from "react";
import { calendlyUrl } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CalendlyPopupLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

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

export function CalendlyPopupLink({
  children,
  className,
  onClick,
}: CalendlyPopupLinkProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <a
      href={calendlyUrl}
      className={className}
      aria-busy={isLoading}
      onClick={async (event) => {
        event.preventDefault();
        onClick?.();

        setIsLoading(true);

        try {
          await loadCalendlyScript();
          window.Calendly?.initPopupWidget({ url: calendlyUrl });
        } finally {
          setIsLoading(false);
        }
      }}
    >
      {isLoading ? "Terminmodul wird geladen…" : children}
    </a>
  );
}
