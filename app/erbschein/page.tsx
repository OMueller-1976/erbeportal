import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Erbschein beantragen 2026 — Wann, wo und wie? | erbeportal.de",
  description:
    "Erbschein 2026: Wann ist er zwingend erforderlich? Wie läuft der Antrag ab, was kostet er — und wann reicht ein Testament als Legitimation?",
};

export default function ErbscheinPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:underline">Startseite</a> › Erbschein beantragen
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-brand mb-3">
          Erbschein beantragen
        </h1>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Ohne Erbschein kein Zugang zum Konto — so erleben es viele Erben. Wann
          brauchen Sie ihn wirklich, wie beantragen Sie ihn und was kostet das?
        </p>

        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/erbschein-beantragen.png"
            alt="Anwältin bespricht Dokumente mit Familie am Tisch"
            title="Erbschein beantragen — Ablauf und Kosten"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <article className="article-prose">

          <h2>Was ist ein Erbschein?</h2>
          <p>
            Der Erbschein ist ein amtliches Zeugnis des Nachlassgerichts, das bescheinigt,
            wer Erbe ist und zu welchem Anteil. Er ist das stärkste Legitimationsmittel für
            Erben gegenüber Behörden, Banken, Grundbuchämtern und anderen Institutionen.
          </p>
          <p>
            Im Gegensatz zum Testament ist der Erbschein ein staatlich geprüftes Dokument.
            Das Gericht überprüft die Erbfolge, bevor es den Erbschein ausstellt —
            weshalb Banken und Behörden ihm in der Regel mehr Vertrauen entgegenbringen.
          </p>

          <h2>Wann brauche ich den Erbschein zwingend?</h2>
          <p>
            Nicht in jedem Erbfall ist ein Erbschein notwendig. Es gibt jedoch Situationen,
            in denen Sie ohne ihn nicht weiterkommen:
          </p>
          <ul>
            <li>
              <strong>Bankkonten und Depots:</strong> Viele Banken und Sparkassen bestehen
              auf einem Erbschein, um ein Konto aufzulösen oder zu übertragen — besonders
              bei größeren Beträgen oder wenn nur ein handschriftliches Testament vorliegt.
            </li>
            <li>
              <strong>Immobilien im Grundbuch:</strong> Das Grundbuchamt akzeptiert in der
              Regel nur einen Erbschein oder ein notarielles Testament, um die
              Eigentumsumschreibung vorzunehmen.
            </li>
            <li>
              <strong>Streitige Erbfolge:</strong> Wenn die Erbenstellung unter mehreren
              Parteien umstritten ist, schafft der Erbschein Klarheit.
            </li>
            <li>
              <strong>Nur handschriftliches Testament:</strong> Ein privates Testament allein
              reicht Banken oft nicht aus. Mit einem notariellen Testament kann der Erbschein
              dagegen häufig vermieden werden.
            </li>
          </ul>

          <h2>Erbschein vs. Testament als Legitimation</h2>
          <p>
            Ein notariell beurkundetes Testament ersetzt in vielen Fällen den Erbschein —
            insbesondere beim Grundbuchamt und bei Kreditinstituten, die die Regelung des
            § 35 GBO (Grundbuchordnung) anerkennen.
          </p>
          <p>
            Der Vorteil: Ein notarielles Testament liegt dem Nachlassgericht bereits vor und
            wird nach dem Erbfall automatisch eröffnet. Die Erben erhalten eine beglaubigte
            Abschrift mitsamt der Eröffnungsniederschrift — das genügt für viele Zwecke.
            Ein handschriftliches Testament dagegen reicht den meisten Institutionen nicht.
          </p>

          <h2>Wo beantrage ich den Erbschein?</h2>
          <p>
            Zuständig ist das Nachlassgericht am letzten inländischen Wohnsitz des
            Verstorbenen. Das Nachlassgericht ist organisatorisch ein Teil des zuständigen
            Amtsgerichts. Der Antrag kann gestellt werden:
          </p>
          <ul>
            <li>Persönlich beim Nachlassgericht</li>
            <li>Über einen Notar (dieser leitet den Antrag weiter)</li>
            <li>Schriftlich in einigen Bundesländern möglich</li>
          </ul>

          <h2>Kosten und Bearbeitungszeit</h2>
          <p>
            Die Gerichtsgebühren für den Erbschein richten sich nach dem Nachlasswert und
            sind im Gerichts- und Notarkostengesetz (GNotKG) geregelt:
          </p>
          <ul>
            <li>Nachlasswert 50.000 €: ca. <strong>165 €</strong></li>
            <li>Nachlasswert 100.000 €: ca. <strong>273 €</strong></li>
            <li>Nachlasswert 250.000 €: ca. <strong>535 €</strong></li>
            <li>Nachlasswert 500.000 €: ca. <strong>935 €</strong></li>
          </ul>
          <p>
            Beauftragen Sie einen Notar, fallen zusätzlich Notargebühren in vergleichbarer
            Höhe an. Die Bearbeitungszeit variiert je nach Gericht und Komplexität des Falls
            zwischen drei Wochen und mehreren Monaten.
          </p>

          <h2>Ablauf Schritt für Schritt</h2>
          <ol>
            <li>
              Sterbeurkunde beim Standesamt des Sterbeortes beantragen (mehrere Ausfertigungen
              — Banken etc. verlangen Originale).
            </li>
            <li>
              Vorhandene Erbdokumente (Testament, Erbvertrag) suchen und beim Nachlassgericht
              einreichen — das Gericht eröffnet sie.
            </li>
            <li>
              Unterlagen zusammenstellen: Personalausweis, Familienstammbuch,
              Geburtsurkunden, Heiratsurkunde.
            </li>
            <li>
              Antrag auf Erteilung des Erbscheins beim Nachlassgericht stellen —
              persönlich, per Notar oder schriftlich.
            </li>
            <li>
              Eidesstattliche Versicherung abgeben: Bestätigung, dass keine weiteren
              Testamente oder Erbverträge bekannt sind und keine Ausschlagungserklärung
              vorliegt.
            </li>
            <li>
              Gericht prüft Antrag und stellt den Erbschein aus — Sie erhalten ihn schriftlich.
            </li>
          </ol>

          <div className="info-box">
            <strong>Wichtig:</strong> Bestellen Sie beim Standesamt mehrere beglaubigte
            Abschriften der Sterbeurkunde. Banken, Grundbuchamt und andere Stellen verlangen
            Originale — Kopien werden nicht akzeptiert.
          </div>

        </article>
      </div>

      <CTABanner />
    </>
  );
}
