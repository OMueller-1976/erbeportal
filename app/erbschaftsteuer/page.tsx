import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Erbschaftsteuer 2026 — Freibeträge, Steuerklassen & Berechnung | erbeportal.de",
  description:
    "Erbschaftsteuer 2026: Freibeträge für Ehepartner (500.000 €) und Kinder (400.000 €), Steuerklassen I–III und eine verständliche Beispielrechnung.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie hoch ist der Freibetrag für Kinder bei der Erbschaftsteuer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kinder (eheliche, uneheliche und adoptierte) haben einen persönlichen Freibetrag von 400.000 € bei der Erbschaftsteuer. Dieser Freibetrag gilt pro Elternteil und kann alle zehn Jahre neu genutzt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ein Ehegatte Erbschaftsteuer zahlen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ehegatten und eingetragene Lebenspartner haben einen Freibetrag von 500.000 €. Hinzu kommt ein Versorgungsfreibetrag von 256.000 €. In den meisten Fällen fällt für den Ehegatten daher keine Erbschaftsteuer an.",
      },
    },
    {
      "@type": "Question",
      name: "Ist das geerbte Familienheim steuerfrei?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja — wenn der Ehegatte oder die Kinder die selbst genutzte Immobilie des Erblassers erben und mindestens zehn Jahre selbst darin wohnen. Für Kinder gilt zusätzlich eine Flächenbegrenzung auf 200 m².",
      },
    },
    {
      "@type": "Question",
      name: "Wie hoch sind die Erbschaftsteuer-Steuersätze?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Steuersätze hängen von der Steuerklasse ab: Steuerklasse I (Ehegatte, Kinder) zahlt 7–30 %, Steuerklasse II (Geschwister, Nichten/Neffen) 15–43 %, Steuerklasse III (alle übrigen Personen) 30–50 %. Der Steuersatz richtet sich nach der Höhe des steuerpflichtigen Erwerbs.",
      },
    },
    {
      "@type": "Question",
      name: "Wann muss ich die Erbschaftsteuer anmelden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Erbe sind Sie verpflichtet, das zuständige Finanzamt innerhalb von drei Monaten nach Kenntnis des Erbfalls zu informieren. Das Finanzamt prüft dann, ob eine Steuerpflicht besteht, und fordert Sie zur Abgabe einer Erbschaftsteuererklärung auf.",
      },
    },
  ],
};

export default function ErbschaftsteuerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:underline">Startseite</a> › Erbschaftsteuer
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-brand mb-3">
          Erbschaftsteuer 2026
        </h1>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Muss ich auf mein Erbe Steuern zahlen? Wie hoch sind die Freibeträge —
          und wie berechnet sich die Steuer? Alle Antworten für 2026.
        </p>

        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-10">
          <Image
            src="/images/erbschaftsteuer-berechnung.png"
            alt="Paar berechnet Erbschaftsteuer mit Dokumenten und Laptop"
            title="Erbschaftsteuer 2026 — Freibeträge und Steuerklassen"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <article className="article-prose">

          <h2>Wer muss Erbschaftsteuer zahlen?</h2>
          <p>
            Grundsätzlich unterliegt jede Erbschaft in Deutschland der Erbschaftsteuer.
            Steuerpflichtig ist der Erwerber — also derjenige, der erbt. Die Steuer wird auf
            den Wert des erworbenen Vermögens nach Abzug der persönlichen Freibeträge erhoben.
            Geregelt ist die Erbschaftsteuer im Erbschaftsteuer- und Schenkungsteuergesetz
            (ErbStG).
          </p>
          <p>
            In der Praxis zahlen viele Erben gar keine Erbschaftsteuer — weil die gesetzlichen
            Freibeträge hoch genug sind, um das gesamte Erbe abzudecken. Ob Steuer anfällt,
            hängt von drei Faktoren ab: dem Wert des Erbes, dem Verwandtschaftsgrad und den
            anwendbaren Freibeträgen.
          </p>

          <h2>Steuerklassen I, II und III</h2>
          <p>
            Das Gesetz unterscheidet drei Steuerklassen, die nach dem
            Verwandtschaftsverhältnis zum Erblasser bestimmt werden:
          </p>
          <ul>
            <li>
              <strong>Steuerklasse I</strong> — Ehegatte, eingetragener Lebenspartner, Kinder
              (auch Adoptiv- und Stiefkinder), Enkelkinder, Eltern und Großeltern bei
              Erbschaft. Steuersätze: 7 % bis 30 %, gestaffelt nach dem steuerpflichtigen
              Erwerb.
            </li>
            <li>
              <strong>Steuerklasse II</strong> — Geschwister, Nichten, Neffen, Stiefeltern,
              Schwiegereltern, geschiedene Ehegatten, Eltern bei Schenkung. Steuersätze:
              15 % bis 43 %.
            </li>
            <li>
              <strong>Steuerklasse III</strong> — Alle übrigen Personen, insbesondere nicht
              verwandte Erben (z. B. langjährige Lebenspartner ohne Trauschein). Steuersätze:
              30 % bis 50 %.
            </li>
          </ul>

          <h2>Freibeträge 2026</h2>
          <p>
            Jeder Erwerb ist bis zum persönlichen Freibetrag steuerfrei. Die Freibeträge
            gelten pro Person und können alle zehn Jahre neu genutzt werden — auch bei
            Schenkungen zu Lebzeiten.
          </p>
          <ul>
            <li><strong>Ehegatte / eingetragener Lebenspartner:</strong> 500.000 €</li>
            <li><strong>Kinder, Stiefkinder, adoptierte Kinder:</strong> 400.000 €</li>
            <li><strong>Enkelkinder (wenn das Kind noch lebt):</strong> 200.000 €</li>
            <li><strong>Enkelkinder (wenn das Kind vorverstorben ist):</strong> 400.000 €</li>
            <li><strong>Eltern und Großeltern (bei Erbschaft):</strong> 100.000 €</li>
            <li><strong>Geschwister, Nichten, Neffen:</strong> 20.000 €</li>
            <li><strong>Alle übrigen Personen:</strong> 20.000 €</li>
          </ul>
          <p>
            Zusätzlich zu den persönlichen Freibeträgen gibt es einen besonderen
            Versorgungsfreibetrag für Ehegatten (256.000 €) und Kinder (je nach Alter
            zwischen 10.300 € und 52.000 €).
          </p>

          <h2>Wie wird die Erbschaftsteuer berechnet? (Beispielrechnung)</h2>
          <p>
            Ein Sohn erbt von seiner Mutter ein Depot und Bargeld im Wert von 550.000 €.
            Sein persönlicher Freibetrag beträgt 400.000 €.
          </p>
          <ul>
            <li>Nachlasswert: <strong>550.000 €</strong></li>
            <li>Freibetrag: <strong>− 400.000 €</strong></li>
            <li>Steuerpflichtiger Erwerb: <strong>150.000 €</strong></li>
            <li>Steuersatz (Steuerklasse I, bis 300.000 €): <strong>11 %</strong></li>
            <li>Erbschaftsteuer: <strong>16.500 €</strong></li>
          </ul>
          <p>
            Hätte die Mutter dem Sohn bereits zehn Jahre zuvor 400.000 € geschenkt und
            seinen Freibetrag damit aufgebraucht, wäre die gesamte Erbschaft von 550.000 €
            steuerpflichtig. Frühzeitige Planung lohnt sich also erheblich.
          </p>

          <h2>Immobilien im Erbfall — Sonderregelungen</h2>
          <p>
            Wer ein selbst genutztes Familienheim erbt, kann unter bestimmten Bedingungen
            vollständig von der Erbschaftsteuer befreit sein:
          </p>
          <ul>
            <li>
              <strong>Ehegatte:</strong> Das Familienheim ist steuerfrei, wenn er die
              Immobilie mindestens zehn Jahre selbst bewohnt. Zieht er vorher aus, entfällt
              die Befreiung rückwirkend — außer bei zwingenden Gründen wie Pflegebedarf.
            </li>
            <li>
              <strong>Kinder:</strong> Ebenfalls steuerfrei, wenn sie das Haus selbst
              beziehen und mindestens zehn Jahre bewohnen. Die Wohnfläche ist auf 200 m²
              begrenzt — der übersteigende Teil wird anteilig besteuert.
            </li>
          </ul>
          <p>
            Immobilien, die vermietet oder gewerblich genutzt werden, erhalten dagegen keine
            vollständige Steuerbefreiung. Sie werden nach dem Ertragswertverfahren bewertet,
            was in der Regel zu einem niedrigeren Steuerwert als dem Verkehrswert führt.
          </p>

          <h2>Erbschaftsteuererklärung und Fristen</h2>
          <p>
            Als Erbe sind Sie verpflichtet, das zuständige Finanzamt innerhalb von drei
            Monaten nach Kenntnis des Erbfalls zu informieren. Das Finanzamt prüft, ob eine
            Steuerpflicht besteht, und fordert Sie gegebenenfalls zur Abgabe einer
            Erbschaftsteuererklärung auf. Die Zahlungsfrist beträgt in der Regel einen Monat
            nach dem Steuerbescheid.
          </p>

          <div className="info-box">
            <strong>Erbschaftsteuer-Rechner:</strong> Auf{" "}
            <a
              href="https://eritaj.de/tools/erbschaftsteuer-rechner"
              target="_blank"
              rel="noopener noreferrer"
            >
              eritaj.de/tools/erbschaftsteuer-rechner
            </a>{" "}
            können Sie Ihre voraussichtliche Erbschaftsteuer schnell und kostenlos berechnen.
          </div>

        </article>
      </div>

      <CTABanner />
    </>
  );
}
