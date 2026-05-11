import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Testament Formen — Handschriftlich, notariell oder Berliner Testament | erbeportal.de",
  description:
    "Testament Formen im Überblick: eigenhändiges Testament, notarielles Testament und Berliner Testament für Ehepaare. Formvorschriften, Fehler und Tipps.",
};

export default function TestamentFormenPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:underline">Startseite</a> › Testament & Formen
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-brand mb-3">
          Testament Formen
        </h1>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Ein Testament ist die wichtigste Möglichkeit, den eigenen letzten Willen
          rechtlich verbindlich festzulegen. Welche Form ist die richtige —
          und worauf müssen Sie zwingend achten?
        </p>

        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/testament-formen-ratgeber.png"
            alt="Erwachsene Kinder lesen gemeinsam ein Testament"
            title="Testament Formen — Handschriftlich, notariell oder Berliner Testament"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <article className="article-prose">

          <h2>Warum überhaupt ein Testament?</h2>
          <p>
            Wer kein Testament hinterlässt, überlässt dem Gesetz die Entscheidung darüber,
            wer erbt. Das führt oft zu Ergebnissen, die dem tatsächlichen Willen des
            Verstorbenen widersprechen: Ein langjähriger Lebenspartner ohne Trauschein erhält
            nichts, während entfernte Verwandte erben. Ein Unternehmen wird in der
            Erbengemeinschaft zersplittert. Kinder aus erster Ehe erben gemeinsam mit dem
            neuen Ehepartner.
          </p>
          <p>
            Mit einem gültigen Testament bestimmen Sie selbst — wer erbt, was vererbt wird
            und unter welchen Bedingungen.
          </p>

          <h2>Das eigenhändige Testament</h2>
          <p>
            Das eigenhändige (handschriftliche) Testament ist die einfachste und günstigste
            Form. Es kostet nichts und kann jederzeit geändert werden. Die gesetzlichen
            Anforderungen sind jedoch streng — ein Verstoß macht das Testament ungültig:
          </p>
          <ul>
            <li>
              <strong>Vollständig handgeschrieben:</strong> Jede Zeile muss eigenhändig mit
              der Hand geschrieben sein. Tippen, Drucken oder eine Vorlage unterschreiben
              genügt nicht.
            </li>
            <li>
              <strong>Datum und Ort:</strong> Beides sollte angegeben werden — für den Fall,
              dass mehrere Testamente auftauchen.
            </li>
            <li>
              <strong>Eigenhändige Unterschrift:</strong> Mit Vor- und Nachnamen, am Ende
              des Dokuments. Ohne Unterschrift ist das Testament ungültig.
            </li>
          </ul>
          <p>
            Empfehlung: Hinterlegen Sie Ihr handschriftliches Testament beim
            Nachlassgericht Ihres Amtsgerichts (kostenpflichtig, ca. 75 €). So wird es
            nach Ihrem Tod sicher gefunden und geöffnet.
          </p>

          <h2>Das notarielle Testament</h2>
          <p>
            Beim notariellen Testament erklären Sie Ihren letzten Willen gegenüber einem
            Notar mündlich — oder Sie übergeben eine versiegelte Schrift. Der Notar
            beurkundet das Testament und übermittelt es automatisch an das Zentrale
            Testamentsregister der Bundesnotarkammer. Es kann dort nicht verloren gehen
            oder vernichtet werden.
          </p>
          <p>
            Das notarielle Testament empfiehlt sich besonders in diesen Situationen:
          </p>
          <ul>
            <li>Komplexe Nachlässe mit Immobilien, Unternehmen oder Auslandsvermögen</li>
            <li>Patchwork-Familien mit Kindern aus verschiedenen Beziehungen</li>
            <li>Wenn Sie eine Person begünstigen möchten, die nicht zu den gesetzlichen Erben gehört</li>
            <li>Wenn Sie Pflichtteilsansprüche bestmöglich reduzieren möchten</li>
            <li>Wenn testamentarische Auflagen oder Bedingungen verfügt werden sollen</li>
          </ul>
          <p>
            Die Notargebühren richten sich nach dem Nachlasswert (GNotKG). Bei einem
            Vermögen von 200.000 € liegen sie bei rund 534 €.
          </p>

          <h2>Das Berliner Testament für Ehepaare</h2>
          <p>
            Das Berliner Testament ist die beliebteste Form des gemeinschaftlichen Testaments
            unter Ehepaaren. Das Prinzip: Die Ehegatten setzen sich gegenseitig als
            Alleinerben ein. Erst wenn beide verstorben sind, erhalten die gemeinsamen
            Kinder das gesamte Erbe.
          </p>
          <p>
            Das schützt den überlebenden Ehegatten davor, das gemeinsame Vermögen mit den
            Kindern teilen zu müssen. Ein Nachteil: Die Kinder verlieren nach dem Tod des
            ersten Elternteils ihren Freibetrag (400.000 €) für diesen Erbfall — die Steuer
            fällt erst beim Tod des zweiten Elternteils an, dann aber auf das gesamte
            Vermögen.
          </p>
          <div className="info-box">
            <strong>Bindungswirkung:</strong> Gemeinschaftliche Testamente sind nach dem
            Tod eines Partners für den Überlebenden bindend — er kann den letzten Willen
            nicht mehr einseitig ändern. Ausnahmen sind nur möglich, wenn das Testament dies
            ausdrücklich vorsieht.
          </div>

          <h2>Gemeinschaftliches Testament</h2>
          <p>
            Ein gemeinschaftliches Testament können nur Ehegatten und eingetragene
            Lebenspartner errichten. Es kann handschriftlich von einem Partner verfasst und
            von beiden unterzeichnet werden — oder notariell beurkundet werden. Das
            Berliner Testament ist eine spezielle Form davon.
          </p>

          <h2>Typische Fehler beim Testamentschreiben</h2>
          <p>
            Viele Testamente sind unwirksam oder lösen ungewollte Rechtsfolgen aus, weil
            häufige Fehler gemacht werden:
          </p>
          <ul>
            <li>
              <strong>Maschinenschriftlich:</strong> Ein ausgedrucktes Testament ist ungültig,
              auch wenn es unterschrieben ist.
            </li>
            <li>
              <strong>Fehlende Unterschrift:</strong> Ohne Unterschrift am Ende gilt das
              Dokument nicht.
            </li>
            <li>
              <strong>Unklare Formulierungen:</strong> „Meine Kinder sollen alles bekommen"
              ist zu vage, wenn unklar ist, welche Kinder gemeint sind.
            </li>
            <li>
              <strong>Vergessene Pflichtteilsansprüche:</strong> Wer nahe Angehörige
              übergeht, löst automatisch Pflichtteilsansprüche aus.
            </li>
            <li>
              <strong>Kein Ersatzerbe benannt:</strong> Stirbt der eingesetzte Erbe vor dem
              Erblasser, greift die gesetzliche Erbfolge — wenn kein Ersatzerbe bestimmt
              wurde.
            </li>
          </ul>

          <div className="info-box">
            <strong>Testament digital erstellen:</strong> Auf{" "}
            <a
              href="https://eritaj.de/dashboard/testament"
              target="_blank"
              rel="noopener noreferrer"
            >
              eritaj.de/dashboard/testament
            </a>{" "}
            können Sie Ihr Testament geführt und rechtssicher erstellen lassen.
          </div>

        </article>
      </div>

      <CTABanner />
    </>
  );
}
