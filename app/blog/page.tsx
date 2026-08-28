export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <h1 className="font-heading font-medium text-4xl tracking-tight text-ink sm:text-5xl">
          Blog
        </h1>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink/70">
          Praktische Beiträge zu UI/UX, Frontend und was eine gute digitale
          Präsenz ausmacht, für Entscheider:innen ohne eigenes Dev-Team.
        </p>
        <p className="mt-10 font-sans text-sm text-ink/50">
          Die ersten Artikel folgen in Kürze.
        </p>
      </div>
    </main>
  );
}
