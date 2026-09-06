import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Leistungen } from "./components/Leistungen";
import { Ablauf } from "./components/Ablauf";
import { Referenzen } from "./components/Referenzen";
import { FAQ } from "./components/FAQ";
import { Kontakt } from "./components/Kontakt";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Problem />
      <Leistungen />
      <Ablauf />
      <Referenzen />
      <FAQ />
      <Kontakt />
    </main>
  );
}
