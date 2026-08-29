"use client";

import { useState } from "react";
import Link from "next/link";
import { contactMailto } from "@/lib/site";

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/blog", label: "Blog" },
  { href: "/ueber-mich", label: "Über mich" },
];

const ctaClass =
  "inline-flex items-center justify-center rounded-sm bg-brass px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-brass-bright";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate/40 bg-ink px-6 sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-5">
        <Link href="/" className="font-heading font-medium text-xl text-bone">
          UI Company
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-bone/80 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
          <a href={contactMailto} className={ctaClass}>
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex h-8 w-8 items-center justify-center sm:hidden"
        >
          {open ? (
            <span className="relative block h-4 w-6">
              <span className="absolute top-1/2 left-0 h-px w-6 -translate-y-1/2 rotate-45 bg-bone" />
              <span className="absolute top-1/2 left-0 h-px w-6 -translate-y-1/2 -rotate-45 bg-bone" />
            </span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-6 bg-bone" />
              <span className="h-px w-6 bg-bone" />
              <span className="h-px w-6 bg-bone" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate/40 py-6 sm:hidden">
          <nav className="flex flex-col items-start gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base text-bone/80 transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
            <a href={contactMailto} onClick={() => setOpen(false)} className={ctaClass}>
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
