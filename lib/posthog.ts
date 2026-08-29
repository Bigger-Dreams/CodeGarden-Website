import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  posthog.init(key, {
    // Routed through next.config.ts's rewrites to eu.i.posthog.com, so
    // requests are first-party instead of going straight to PostHog's
    // domain (official PostHog Next.js reverse-proxy guide).
    api_host: "/ingest",
    autocapture: true,
    capture_pageview: false,
    disable_session_recording: true,
    // No cookies or localStorage — the distinct ID lives only in memory
    // for this page load and is discarded on reload/new tab.
    persistence: "memory",
  });

  initialized = true;
}

export { posthog };
