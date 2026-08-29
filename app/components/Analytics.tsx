"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initPostHog, posthog } from "@/lib/posthog";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (posthogEnabled) initPostHog();
  }, []);

  useEffect(() => {
    if (posthogEnabled) posthog.capture("$pageview");
  }, [pathname]);

  return null;
}
