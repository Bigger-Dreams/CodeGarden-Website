"use client";

import { useEffect } from "react";

export function ScrollToTopOnReload() {
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}
