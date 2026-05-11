import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | erbeportal.de",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-brand mb-8">Impressum</h1>

      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-6 text-sm text-ink/80 leading-relaxed">
        <section>
          <h2 className="font-semibold text-brand text-base mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="font-semibold text-brand">
            OneTitel – Digital &amp; Business Solutions
          </p>
          <p>
            Oliver M. Müller
            <br />
            Am Bruchborn 6
            <br />
            54570 Kirchweiler
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-brand text-base mb-2">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:support@eritaj.de" className="text-accent hover:underline">
              support@eritaj.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-brand text-base mb-2">
            Steuerliche Angaben
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE326064654
            <br />
            Steuernummer: 224/5211/4129
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-brand text-base mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Oliver M. Müller
            <br />
            Am Bruchborn 6
            <br />
            54570 Kirchweiler
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-brand text-base mb-2">
            Haftungshinweis
          </h2>
          <p>
            erbeportal.de ist kein Rechtsberatungsdienst. Die auf dieser Website
            bereitgestellten Informationen dienen ausschließlich zu allgemeinen
            Informationszwecken und stellen keine Rechts-, Steuer- oder
            Finanzberatung dar. Für verbindliche Auskünfte wenden Sie sich bitte
            an einen zugelassenen Rechtsanwalt oder Steuerberater.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-brand text-base mb-2">
            Online-Streitbeilegung (OS-Plattform)
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
