import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Erbrecht Grundlagen — Gesetzliche Erbfolge & Pflichtteil erklärt | erbeportal.de",
  description:
    "Gesetzliche Erbfolge, Erbklassen, Pflichtteil und Erbauseinandersetzung — die Grundlagen des deutschen Erbrechts verständlich und vollständig erklärt.",
};

export default function ErbrechtGrundlagenPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:underline">Startseite</a> › Erbrecht Grundlagen
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-brand mb-3">
          Erbrecht Grundlagen
        </h1>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Was passiert mit Ihrem Vermögen, wenn Sie sterben — und wer bekommt was?
          Das deutsche Erbrecht gibt klare Antworten. Hier erfahren Sie das Wichtigste.
        </p>

        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/erbrecht-grundlagen-ratgeber.png"
            alt="Großeltern und Kinder besprechen Dokumente zur Nachlassplanung"
            title="Erbrecht Grundlagen — Gesetzliche Erbfolge und Pflichtteil"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <article className="article-prose">

          <h2>Was regelt das Erbrecht?</h2>
          <p>
            Das Erbrecht bestimmt, wie das Vermögen einer verstorbenen Person auf ihre
            Nachfolger übergeht. In Deutschland ist es im Fünften Buch des Bürgerlichen
            Gesetzbuches (BGB, §§ 1922–2385) geregelt. Es gibt zwei Wege, wie ein Nachlass
            verteilt wird: entweder nach dem Willen des Erblassers — durch Testament oder
            Erbvertrag — oder nach den gesetzlichen Regeln, wenn kein letzter Wille vorliegt.
          </p>
          <p>
            Mit dem Tod geht das gesamte Vermögen des Erblassers automatisch auf die Erben
            über — ohne dass diese aktiv handeln müssen. Diesen Vorgang nennt man
            Universalsukzession. Die Erben treten in alle Rechte und Pflichten des Verstorbenen
            ein, einschließlich eventueller Schulden.
          </p>

          <h2>Die gesetzliche Erbfolge: Wer erbt ohne Testament?</h2>
          <p>
            Hinterlässt jemand kein Testament, gilt die gesetzliche Erbfolge. Das Gesetz teilt
            Verwandte in Erbordnungen ein — wer einer höheren Ordnung angehört, schließt alle
            niedrigeren Ordnungen vollständig aus.
          </p>
          <ul>
            <li>
              <strong>1. Erbklasse:</strong> Kinder und Kindeskinder des Erblassers. Lebt ein
              Kind noch, erben dessen Kinder (die Enkelkinder) nicht. Kinder erben zu gleichen
              Teilen.
            </li>
            <li>
              <strong>2. Erbklasse:</strong> Eltern und Geschwister des Erblassers sowie deren
              Nachkommen. Diese Klasse greift nur, wenn keine Kinder vorhanden sind.
            </li>
            <li>
              <strong>3. Erbklasse:</strong> Großeltern und deren Nachkommen (Tanten, Onkel,
              Cousins). Ebenfalls nur relevant, wenn die 1. und 2. Klasse leer ist.
            </li>
          </ul>
          <p>
            Der überlebende Ehegatte oder eingetragene Lebenspartner erbt neben diesen
            Verwandten. Neben der 1. Erbklasse erhält er ein Viertel des Nachlasses, neben
            der 2. Klasse die Hälfte. Bestand Zugewinngemeinschaft, kommt ein pauschaler
            Zugewinnausgleich von einem weiteren Viertel hinzu — der Ehegatte erbt dann also
            faktisch die Hälfte neben Kindern.
          </p>

          <h2>Was ist der Pflichtteil?</h2>
          <p>
            Der Pflichtteil sichert nahe Angehörige auch dann ab, wenn sie im Testament
            übergangen oder enterbt wurden. Pflichtteilsberechtigt sind: Kinder,
            Kindeskinder (wenn das Kind vorverstorben ist), Eltern (wenn keine Kinder
            vorhanden sind) sowie der Ehegatte.
          </p>
          <p>
            Der Pflichtteil beträgt die Hälfte des gesetzlichen Erbteils. Er ist jedoch kein
            Erbteil, sondern ein reiner Geldanspruch gegen die Erben. Der
            Pflichtteilsberechtigte wird nicht Miterbe — er kann aber die Auszahlung eines
            Geldbetrags verlangen, der dem Wert seines Pflichtteils entspricht.
          </p>
          <div className="info-box">
            <strong>Beispiel:</strong> Ein Vater hinterlässt ein Vermögen von 200.000 € und
            enterbt seinen Sohn zugunsten seiner neuen Partnerin. Der Sohn hätte gesetzlich
            100.000 € geerbt. Sein Pflichtteil beträgt die Hälfte davon: 50.000 €, die er
            in bar verlangen kann.
          </div>

          <h2>Enterben — geht das wirklich?</h2>
          <p>
            Ja, Sie können nahe Angehörige per Testament von der Erbschaft ausschließen.
            Vollständig enterben — also auch den Pflichtteil streichen — ist jedoch nur in
            sehr engen Ausnahmefällen möglich. Das Gesetz erlaubt die Pflichtteilsentziehung
            nur bei schweren Vergehen des Angehörigen gegen den Erblasser, etwa:
          </p>
          <ul>
            <li>Versuch, den Erblasser zu töten</li>
            <li>Schwere vorsätzliche körperliche Misshandlung</li>
            <li>Verurteilung zu einer Freiheitsstrafe von mindestens einem Jahr</li>
            <li>Böswilliges Verlassen des hilfsbedürftigen Erblassers</li>
          </ul>
          <p>
            Der Entziehungsgrund muss ausdrücklich im Testament genannt werden. In der Praxis
            sind solche Fälle selten erfolgreich — Gerichte legen die Voraussetzungen eng aus.
          </p>

          <h2>Erbauseinandersetzung bei mehreren Erben</h2>
          <p>
            Erben mehrere Personen gemeinsam, entsteht automatisch eine Erbengemeinschaft.
            Alle Miterben müssen gemeinsam über den Nachlass verfügen — kein Miterbe kann
            allein handeln. Das führt in der Praxis häufig zu Konflikten, besonders wenn
            Immobilien oder Unternehmensanteile zum Nachlass gehören.
          </p>
          <p>
            Die Erbauseinandersetzung beschreibt den Prozess, die Erbengemeinschaft
            aufzulösen und das Erbe aufzuteilen. Idealerweise einigen sich die Miterben
            gütlich per Erbauseinandersetzungsvertrag. Gelingt das nicht, kann jeder Miterbe
            jederzeit Auseinandersetzungsklage beim Gericht erheben.
          </p>

          <h2>Erbschaft annehmen oder ausschlagen?</h2>
          <p>
            Sie sind nicht verpflichtet, eine Erbschaft anzunehmen. Innerhalb von sechs
            Wochen nach Kenntnis des Erbfalls können Sie die Erbschaft beim Nachlassgericht
            ausschlagen — bei Erbfällen im Ausland verlängert sich die Frist auf sechs
            Monate. Die Ausschlagung empfiehlt sich, wenn der Nachlass überschuldet ist, da
            Sie sonst mit Ihrem Privatvermögen für die Schulden des Erblassers haften.
          </p>

          <h2>Wann brauche ich einen Anwalt?</h2>
          <p>
            Einfache Erbfälle — ein Erbe, kein Testament-Streit, überschaubare
            Vermögenswerte — lassen sich oft ohne Anwalt abwickeln. Sobald es jedoch
            Konflikte innerhalb der Erbengemeinschaft gibt, Pflichtteilsansprüche geltend
            gemacht werden, ein Unternehmen zum Nachlass gehört oder erhebliche
            Steuerbeträge auf dem Spiel stehen, ist fachanwaltliche Beratung dringend zu
            empfehlen. Die Kosten eines Fachanwalts für Erbrecht sind in solchen Situationen
            gut investiertes Geld.
          </p>

          <div className="info-box">
            <strong>Hinweis:</strong> Diese Seite ersetzt keine Rechtsberatung. Bei konkreten
            erbrechtlichen Fragen empfehlen wir, einen Fachanwalt für Erbrecht hinzuzuziehen
            oder einen spezialisierten Dienst wie ERITAJ zu nutzen.
          </div>

        </article>
      </div>

      <CTABanner />
    </>
  );
}
