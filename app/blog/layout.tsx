export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24">
      {children}
    </main>
  );
}
