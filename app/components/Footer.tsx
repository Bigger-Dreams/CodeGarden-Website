import Link from "next/link";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <p className="font-heading font-medium text-xl text-bone">UI Company</p>
            <p className="mt-1 font-sans text-sm text-bone/60">
              Wien · Frontend &amp; UI/UX
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-bone/75 transition-colors hover:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate/40 pt-6">
          <p className="font-sans text-xs text-bone/50">
            © 2026 UI Company. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
