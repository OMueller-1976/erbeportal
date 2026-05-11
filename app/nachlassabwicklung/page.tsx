import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nachlassabwicklung — Schritt für Schritt nach dem Erbfall | erbeportal.de",
  description:
    "Nachlassabwicklung: Erste Schritte nach dem Erbfall, Nachlassinventar, Schuldenhaftung, Immobilien im Nachlass und vollständige Checkliste.",
};

export default function NachlassabwicklungPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:underline">Startseite</a> › Nachlassabwicklung
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-brand mb-3">
          Nachlassabwicklung
        </h1>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Nach einem Sterbefall sind Erben mit einer Vielzahl von Aufgaben konfrontiert —
          oft in einer emotional belastenden Zeit. Diese Seite führt Sie strukturiert
          durch alle notwendigen Schritte.
        </p>

        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/nachlassabwicklung-ablauf.png"
            alt="Hände halten Briefe und Familienfotos — Nachlassabwicklung"
            title="Nachlassabwicklung — Schritt für Schritt nach dem Erbfall"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <article className="article-prose">

          <h2>Die ersten Schritte nach dem Erbfall</h2>
          <p>
            Die ersten Tage nach einem Sterbefall sind sowohl emotional als auch
            bürokratisch anspruchsvoll. Folgende Aufgaben sollten möglichst früh erledigt
            werden:
          </p>
          <ul>
            <li>
              <strong>Sterbeurkunde beantragen:</strong> Beim Standesamt des Sterbeortes —
              in mehrfacher Ausfertigung, da Behörden, Banken und Versicherungen Originale
              verlangen.
            </li>
            <li>
              <strong>Testament suchen und einreichen:</strong> Wenn ein Testament vorhanden
              ist, muss es unverzüglich beim Nachlassgericht (Amtsgericht) eingereicht werden.
              Das Gericht eröffnet es und benachrichtigt die Erben.
            </li>
            <li>
              <strong>Arbeitgeber und Versicherungen informieren:</strong> Laufende
              Verträge müssen schnell geprüft werden — einige enden automatisch, andere
              laufen weiter und können Kosten verursachen.
            </li>
            <li>
              <strong>Nachlass sichern:</strong> Wohnung, Fahrzeuge und Wertsachen des
              Verstorbenen sollten gesichert werden, um Verluste zu vermeiden.
            </li>
          </ul>

          <h2>Nachlassinventar erstellen</h2>
          <p>
            Bevor Erben handeln können, müssen sie wissen, was zum Nachlass gehört. Das
            Nachlassinventar ist eine vollständige Aufstellung aller Vermögenswerte und
            Verbindlichkeiten des Erblassers:
          </p>
          <ul>
            <li>Bankkonten, Tagesgeld, Sparkonten</li>
            <li>Wertpapierdepots und Aktien</li>
            <li>Immobilien (inkl. Grundbuchauszüge)</li>
            <li>Fahrzeuge, Schmuck, Kunstgegenstände</li>
            <li>Lebensversicherungen, Rentenansprüche, Betriebsrenten</li>
            <li>Offene Forderungen (z. B. ausstehende Mietzahlungen)</li>
            <li>Schulden: Hypotheken, Kredite, offene Rechnungen</li>
          </ul>
          <p>
            Für das Finanzamt (Erbschaftsteuererklärung) und für die Erbauseinandersetzung
            unter mehreren Erben ist ein lückenloses Inventar unerlässlich.
          </p>

          <h2>Schulden des Erblassers — Haftung der Erben</h2>
          <p>
            Mit der Annahme der Erbschaft übernehmen Sie automatisch auch alle Schulden des
            Erblassers — unbeschränkt mit Ihrem gesamten Privatvermögen. Das ist das größte
            Risiko beim Erben.
          </p>
          <p>
            Sie haben folgende Möglichkeiten, sich zu schützen:
          </p>
          <ul>
            <li>
              <strong>Erbschaft ausschlagen:</strong> Innerhalb von sechs Wochen nach
              Kenntnis des Erbfalls beim Nachlassgericht. Bei überschuldetem Nachlass ist
              das die sicherste Option.
            </li>
            <li>
              <strong>Nachlassverwaltung beantragen:</strong> Das Nachlassgericht setzt
              einen Nachlassverwalter ein. Ihre Haftung beschränkt sich dann auf den
              Nachlass.
            </li>
            <li>
              <strong>Nachlassinsolvenz beantragen:</strong> Wenn der Nachlass offensichtlich
              überschuldet ist, können Sie beim Gericht Nachlassinsolvenz beantragen.
            </li>
          </ul>

          <h2>Immobilien im Nachlass</h2>
          <p>
            Geerbte Immobilien sind oft der wertvollste, aber auch der komplizierteste
            Bestandteil eines Nachlasses. Folgende Fragen stellen sich:
          </p>
          <ul>
            <li>
              <strong>Grundbuchumschreibung:</strong> Das Eigentumsrecht muss im Grundbuch
              auf die Erben umgeschrieben werden. Dafür benötigen Sie einen Erbschein oder
              ein notarielles Testament. Die Umschreibung ist innerhalb von zwei Jahren
              nach dem Erbfall gebührenfrei.
            </li>
            <li>
              <strong>Laufende Verpflichtungen:</strong> Kredite, Hypotheken und laufende
              Mietverträge gehen auf die Erben über.
            </li>
            <li>
              <strong>Verkauf oder Eigennutzung:</strong> Bei mehreren Erben müssen alle
              Miterben gemeinsam über Verkauf oder Nutzung entscheiden.
            </li>
            <li>
              <strong>Spekulationssteuer:</strong> Wenn eine geerbte Immobilie innerhalb
              von zehn Jahren nach dem Erstankauf durch den Erblasser verkauft wird, kann
              Einkommensteuer anfallen — je nach Nutzung und Haltedauer.
            </li>
          </ul>

          <h2>Nachlassgericht und wichtige Fristen</h2>
          <p>
            Das Nachlassgericht (Teil des Amtsgerichts am letzten Wohnsitz des Verstorbenen)
            ist Ihre zentrale Anlaufstelle. Wichtige Fristen im Überblick:
          </p>
          <ul>
            <li><strong>6 Wochen:</strong> Frist zur Ausschlagung der Erbschaft</li>
            <li><strong>3 Monate:</strong> Frist zur Anzeige des Erbfalls beim Finanzamt</li>
            <li><strong>2 Jahre:</strong> Gebührenfreie Grundbuchumschreibung bei Erbschaft</li>
            <li><strong>3 Jahre:</strong> Verjährungsfrist für Pflichtteilsansprüche</li>
          </ul>

          <h2>Checkliste Nachlassabwicklung</h2>
          <ul>
            <li>Sterbeurkunde beantragen (mehrere Ausfertigungen)</li>
            <li>Testament beim Nachlassgericht einreichen</li>
            <li>Erbschein beantragen (wenn nötig)</li>
            <li>Nachlassinventar erstellen</li>
            <li>Erbschaft annehmen oder ausschlagen</li>
            <li>Finanzamt innerhalb von 3 Monaten informieren</li>
            <li>Bankkonten und Depots übertragen oder auflösen</li>
            <li>Immobilien im Grundbuch umschreiben lassen</li>
            <li>Laufende Verträge kündigen oder übertragen</li>
            <li>Erbengemeinschaft auseinandersetzen</li>
          </ul>

          <div className="info-box">
            <strong>Professionelle Unterstützung:</strong> Bei komplexen Nachlässen,
            streitenden Erbengemeinschaften oder internationalen Erbfällen lohnt sich
            die Einschaltung eines Fachanwalts für Erbrecht oder eines spezialisierten
            Nachlassdienstleisters wie ERITAJ.
          </div>

        </article>
      </div>

      <CTABanner />
    </>
  );
}
