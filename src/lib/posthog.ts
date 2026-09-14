import posthog from "posthog-js";

let initialized = false;

export function initPostHog(): boolean {
  if (initialized) return true;

  const key = import.meta.env.PUBLIC_POSTHOG_KEY;
  if (!key) return false;

  posthog.init(key, {
    // Routed through worker/index.js's proxy to eu.i.posthog.com, so
    // requests are first-party instead of going straight to PostHog's
    // domain (official PostHog reverse-proxy guide).
    api_host: "/ingest",
    autocapture: true,
    capture_pageview: false,
    disable_session_recording: true,
    // No cookies or localStorage — the distinct ID lives only in memory
    // for this page load and is discarded on reload/new tab.
    persistence: "memory",
    // Skip loading the surveys/dead-clicks/web-vitals extension bundles —
    // none of these are used, and each is a separate script request.
    disable_surveys: true,
    capture_dead_clicks: false,
    capture_performance: false,
  });

  initialized = true;
  return true;
}

export { posthog };
