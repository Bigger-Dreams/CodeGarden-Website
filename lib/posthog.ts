import posthog from "posthog-js";

export const CONSENT_KEY = "cookie_consent";

let initialized = false;

export function initPostHog() {
  if (initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

  posthog.init(key, {
    api_host: host,
    autocapture: false,
    capture_pageview: false,
    disable_session_recording: true,
  });

  initialized = true;
}

export { posthog };
