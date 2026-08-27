import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Problem />
    </main>
  );
}
