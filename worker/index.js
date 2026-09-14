// Serverseitiger PostHog-Ingest-Proxy für Cloudflare Workers. Cloudflare Workers
// Static Assets unterstützt in _redirects (anders als das alte Pages-Produkt)
// keine Proxy-Weiterleitung auf fremde Domains mehr, daher übernimmt hier der
// Worker selbst das Weiterleiten von /ingest/* an PostHogs EU-Cloud, bevor er
// für alle anderen Pfade auf die statischen Assets zurückfällt. Äquivalent zu
// vercel.json's rewrites für die Vercel-Produktion.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/ingest/")) {
      // /static/ und /array/ bleiben im Zielpfad erhalten (nur das /ingest-
      // Präfix wird entfernt) — genau wie bei vercel.json's rewrites, deren
      // destination ebenfalls .../static/$1 bzw. .../array/$1 lautet.
      const targetOrigin =
        url.pathname.startsWith("/ingest/static/") ||
        url.pathname.startsWith("/ingest/array/")
          ? "https://eu-assets.i.posthog.com"
          : "https://eu.i.posthog.com";
      const targetPath = url.pathname.slice("/ingest".length);

      const targetUrl = new URL(targetPath + url.search, targetOrigin);
      const proxyRequest = new Request(targetUrl, request);
      proxyRequest.headers.delete("host");
      return fetch(proxyRequest);
    }

    return env.ASSETS.fetch(request);
  },
};
