import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Leistungen } from "./components/Leistungen";
import { Referenzen } from "./components/Referenzen";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Problem />
      <Leistungen />
      <Referenzen />
    </main>
  );
}
