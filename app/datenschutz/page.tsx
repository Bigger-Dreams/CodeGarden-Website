export default function DatenschutzPage() {
  return (
    <main className="flex flex-1 flex-col bg-bone px-6 py-24 text-ink sm:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col">
        <h1 className="font-heading font-medium text-4xl tracking-tight text-ink sm:text-5xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-ink/70">
          Diese Erklärung informiert darüber, welche personenbezogenen Daten
          bei der Nutzung dieser Website verarbeitet werden und aus welchem
          Grund.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Verantwortlicher
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Patrick Roith
          <br />
          Gilgegasse 17/11
          <br />
          1090 Wien, Österreich
          <br />
          E-Mail: patrick.roith@aon.at
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Hosting
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
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
            className="text-brass-deep underline decoration-brass-deep/40 underline-offset-2 transition-colors hover:text-ink"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Cookies
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Diese Website selbst setzt keine Cookies.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Analyse: PostHog
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Zur Analyse der Websitenutzung wird PostHog eingesetzt, mit
          Serverstandort in der EU. Die Anfragen laufen über einen
          serverseitigen Proxy dieser Website und erscheinen technisch als
          Anfrage an die eigene Domain.
        </p>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Erfasst werden ausschließlich Seitenaufrufe, keine Klicks,
          Mausbewegungen, Formulareingaben oder Session-Aufzeichnungen. Die
          Zuordnung eines Besuchs erfolgt über eine ID, die nur im
          Arbeitsspeicher des Browsers für die Dauer des jeweiligen
          Seitenbesuchs existiert. Dafür werden weder Cookies gesetzt noch
          Daten in localStorage gespeichert. Nach Schließen des Tabs oder
          erneutem Laden der Seite ist diese ID nicht mehr vorhanden, eine
          Wiedererkennung über mehrere Besuche hinweg findet nicht statt.
        </p>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Grundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einer statistischen Auswertung der Websitenutzung, ohne einzelne
          Besucher dauerhaft zu identifizieren). Mehr Informationen bei{" "}
          <a
            href="https://posthog.com/privacy"
            className="text-brass-deep underline decoration-brass-deep/40 underline-offset-2 transition-colors hover:text-ink"
          >
            posthog.com/privacy
          </a>
          .
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Kontaktaufnahme
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Diese Website hat aktuell kein Kontaktformular. Eine
          Kontaktaufnahme ist ausschließlich per E-Mail an die oben genannte
          Adresse möglich. Dabei übermittelte Daten werden nur zur
          Bearbeitung der jeweiligen Anfrage verwendet (Art. 6 Abs. 1 lit. b
          DSGVO) und nicht an Dritte weitergegeben.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Speicherdauer
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Personenbezogene Daten werden nur so lange gespeichert, wie es für
          den jeweiligen Zweck erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies vorsehen.
        </p>

        <h2 className="mt-10 font-heading font-medium text-xl text-ink">
          Ihre Rechte
        </h2>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Im Rahmen der DSGVO stehen Ihnen grundsätzlich folgende Rechte zu:
          Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit
          (Art. 20) und Widerspruch (Art. 21). Zur Ausübung dieser Rechte
          genügt eine E-Mail an die oben genannte Adresse.
        </p>
        <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
          Daneben besteht ein Beschwerderecht bei der österreichischen
          Datenschutzbehörde: Österreichische Datenschutzbehörde,
          Barichgasse 40-42, 1030 Wien,{" "}
          <a
            href="https://www.dsb.gv.at"
            className="text-brass-deep underline decoration-brass-deep/40 underline-offset-2 transition-colors hover:text-ink"
          >
            www.dsb.gv.at
          </a>
          .
        </p>

        <p className="mt-10 rounded-sm border border-rust/40 bg-rust/10 px-4 py-3 font-sans text-sm leading-relaxed text-ink/70">
          Platzhaltertext für Punkte, die vom künftigen Funktionsumfang der
          Website abhängen, etwa bei Einführung eines Kontaktformulars oder
          Newsletters. Kein Ersatz für Rechtsberatung. Ich stimme die
          finalen Angaben vor der Veröffentlichung mit einer Rechtsberatung
          ab.
        </p>
      </div>
    </main>
  );
}
