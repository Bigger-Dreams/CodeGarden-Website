"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CONSENT_KEY, initPostHog, posthog } from "@/lib/posthog";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);

export function Analytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    if (!posthogEnabled) return;
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
      if (stored === "granted") initPostHog();
    }
  }, []);

  useEffect(() => {
    if (consent === "granted") {
      posthog.capture("$pageview");
    }
  }, [pathname, consent]);

  if (!posthogEnabled || consent !== null) return null;

  const handleAccept = () => {
    window.localStorage.setItem(CONSENT_KEY, "granted");
    initPostHog();
    setConsent("granted");
  };

  const handleDecline = () => {
    window.localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate/40 bg-ink px-6 py-5 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-bone/80">
          Diese Website nutzt PostHog (EU-Hosting), um anonymisiert
          Seitenaufrufe zu zählen. Kein Tracking ohne Ihre Zustimmung. Mehr
          dazu in der{" "}
          <Link
            href="/datenschutz"
            className="underline decoration-bone/40 underline-offset-2 transition-colors hover:text-brass"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 items-center gap-6">
          <button
            type="button"
            onClick={handleDecline}
            className="font-sans text-sm text-bone/75 transition-colors hover:text-brass"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center justify-center rounded-sm bg-brass px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            Zustimmen
          </button>
        </div>
      </div>
    </div>
  );
}
