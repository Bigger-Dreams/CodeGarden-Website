export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col">{children}</div>
    </main>
  );
}
