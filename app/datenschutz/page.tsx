import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von CodeGarden mit Informationen zu Hosting, Kontaktaufnahme, Analyse und Betroffenenrechten nach DSGVO.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="flex flex-1 flex-col bg-ink-soft px-6 py-24 text-bone sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col">
        <h1 className="break-words font-heading font-medium text-4xl tracking-tight text-bone hyphens-auto sm:text-5xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-bone/70">
          Diese Erklärung informiert darüber, welche personenbezogenen Daten
          bei der Nutzung dieser Website verarbeitet werden und aus welchem
          Grund.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Verantwortlicher
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Patrick Roith
          <br />
          Gilgegasse 17/11
          <br />
          1090 Wien, Österreich
          <br />
          E-Mail: office@codegarden.at
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Hosting
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der
          Website verarbeitet Vercel automatisch technische
          Verbindungsdaten, etwa IP-Adresse, Browsertyp und Zeitpunkt des
          Zugriffs, in Server-Logfiles, um die Website stabil und sicher
          auszuliefern. Grundlage dafür ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse am sicheren und funktionsfähigen Betrieb
          der Website). Da Vercel in den USA ansässig ist, kann es dabei zu
          einer Datenübertragung außerhalb der EU/des EWR kommen. Details zu
          den dabei eingesetzten Garantien finden sich in der
          Datenschutzerklärung von Vercel unter{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:text-bone"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Cookies
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Diese Website selbst setzt keine Cookies.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Analyse: PostHog
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Zur Analyse der Websitenutzung wird PostHog eingesetzt, mit
          Serverstandort in der EU. Die Anfragen laufen über einen
          serverseitigen Proxy dieser Website und erscheinen technisch als
          Anfrage an die eigene Domain.
        </p>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Erfasst werden Seitenaufrufe sowie automatisch bestimmte
          Interaktionen wie Klicks auf Buttons, Links und andere
          Bedienelemente (sogenanntes Autocapture von PostHog).
          Mausbewegungen und Bildschirmaufzeichnungen (Session Recording)
          bleiben deaktiviert. Die Zuordnung eines Besuchs erfolgt über eine
          ID, die nur im Arbeitsspeicher des Browsers für die Dauer des
          jeweiligen Seitenbesuchs existiert. Dafür werden weder Cookies
          gesetzt noch Daten in localStorage gespeichert. Nach Schließen des
          Tabs oder erneutem Laden der Seite ist diese ID nicht mehr
          vorhanden, eine Wiedererkennung über mehrere Besuche hinweg findet
          nicht statt.
        </p>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Grundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einer statistischen Auswertung der Websitenutzung, ohne einzelne
          Besucher dauerhaft zu identifizieren). Mehr Informationen bei{" "}
          <a
            href="https://posthog.com/privacy"
            className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:text-bone"
          >
            posthog.com/privacy
          </a>
          .
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Terminbuchung über Calendly
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Für die Terminbuchung ist auf der Website ein Popup-Widget von
          Calendly LLC eingebunden. Wenn Sie das Widget öffnen und nutzen, werden die
          von Ihnen eingegebenen Angaben, etwa Name, E-Mail-Adresse und
          Terminwunsch, an Calendly übermittelt und zur Organisation des
          Termins verarbeitet. Dabei kann es zu einer Datenübertragung in die
          USA kommen. Grundlage ist Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Kommunikation bzw. Terminvereinbarung). Weitere
          Informationen finden sich in der Datenschutzerklärung von Calendly
          unter{" "}
          <a
            href="https://calendly.com/privacy"
            className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:text-bone"
          >
            calendly.com/privacy
          </a>
          .
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Kontaktaufnahme
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Eine Kontaktaufnahme per E-Mail an die oben genannte Adresse ist
          weiterhin möglich. Dabei übermittelte Daten werden nur zur
          Bearbeitung der jeweiligen Anfrage verwendet (Art. 6 Abs. 1 lit. b
          DSGVO) und nicht an Dritte weitergegeben.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Speicherdauer
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Personenbezogene Daten werden nur so lange gespeichert, wie es für
          den jeweiligen Zweck erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies vorsehen.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-bone">
          Ihre Rechte
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Im Rahmen der DSGVO stehen Ihnen grundsätzlich folgende Rechte zu:
          Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
          (Art. 20) und Widerspruch (Art. 21). Zur Ausübung dieser Rechte
          genügt eine E-Mail an die oben genannte Adresse.
        </p>
        <p className="mt-3 font-sans text-base leading-relaxed text-bone/70">
          Daneben besteht ein Beschwerderecht bei der österreichischen
          Datenschutzbehörde: Österreichische Datenschutzbehörde,
          Barichgasse 40-42, 1030 Wien,{" "}
          <a
            href="https://www.dsb.gv.at"
            className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:text-bone"
          >
            www.dsb.gv.at
          </a>
          .
        </p>

        <p className="mt-10 rounded-sm border border-brass/40 bg-brass/10 px-4 py-3 font-sans text-sm leading-relaxed text-bone/70">
          Platzhaltertext für Punkte, die vom künftigen Funktionsumfang der
          Website abhängen, etwa bei Einführung eines Kontaktformulars oder
          Newsletters. Kein Ersatz für Rechtsberatung. Die finalen Angaben
          werden vor der Veröffentlichung mit einer Rechtsberatung
          abgestimmt.
        </p>
      </div>
    </main>
  );
}
