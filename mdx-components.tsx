import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

function MDXLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  const className =
    "text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:text-bone";

  if (href?.startsWith("/") || href?.startsWith("#")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith("mailto:")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-heading font-medium text-4xl leading-tight tracking-tight text-bone sm:text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-12 font-heading font-medium text-2xl leading-tight tracking-tight text-bone sm:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-8 font-heading font-medium text-xl text-bone" {...props} />
    ),
    p: (props) => (
      <p className="mt-6 font-sans text-lg leading-relaxed text-bone/80" {...props} />
    ),
    ul: (props) => (
      <ul className="mt-6 flex flex-col gap-2 pl-5 font-sans text-lg leading-relaxed text-bone/80 [list-style:disc]" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-6 flex flex-col gap-2 pl-5 font-sans text-lg leading-relaxed text-bone/80 [list-style:decimal]" {...props} />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    strong: (props) => <strong className="font-medium text-bone" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-2 border-brass pl-5 font-sans text-lg leading-relaxed text-bone/70"
        {...props}
      />
    ),
    a: MDXLink,
    ...components,
  };
}
