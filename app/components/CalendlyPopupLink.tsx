"use client";

import Script from "next/script";
import type { ReactNode } from "react";
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

export function CalendlyPopupLink({
  children,
  className,
  onClick,
}: CalendlyPopupLinkProps) {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <a
        href={calendlyUrl}
        className={className}
        onClick={(event) => {
          onClick?.();

          if (!window.Calendly) return;

          event.preventDefault();
          window.Calendly.initPopupWidget({ url: calendlyUrl });
        }}
      >
        {children}
      </a>
    </>
  );
}
