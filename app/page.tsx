import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CTABanner from "@/components/CTABanner";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "erbeportal.de — Erbrecht, Erbschaftsteuer & Nachlassplanung verständlich erklärt",
  description:
    "Alles rund um Erben, Erbrecht und Nachlassplanung. Kostenlose Ratgeber zu Erbschaftsteuer, Testament, Erbschein und gesetzlicher Erbfolge.",
};

const features = [
  {
    href: "/erbrecht-grundlagen",
    icon: "⚖",
    title: "Erbrecht Grundlagen",
    text: "Gesetzliche Erbfolge, Pflichtteil, Erbklassen — das deutsche Erbrecht kompakt und verständlich erklärt.",
  },
  {
    href: "/erbschaftsteuer",
    icon: "🏛",
    title: "Erbschaftsteuer",
    text: "Freibeträge bis 500.000 €, Steuerklassen und Beispielrechnungen — so behalten Sie mehr von Ihrem Erbe.",
  },
  {
    href: "/testament-formen",
    icon: "📄",
    title: "Testament",
    text: "Handschriftlich, notariell oder Berliner Testament — welche Form passt zu Ihrer Situation?",
  },
  {
    href: "/erbschein",
    icon: "📋",
    title: "Erbschein",
    text: "Wann ist der Erbschein Pflicht, wie beantragen Sie ihn — und was kostet er?",
  },
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Erben verstehen. Nachlass regeln.
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            erbeportal.de erklärt Ihnen das deutsche Erbrecht — kostenlos,
            unabhängig und verständlich. Von der gesetzlichen Erbfolge bis zur
            Erbschaftsteuer.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/erbrecht-grundlagen"
              className="bg-accent text-brand font-bold text-sm px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Erbrecht verstehen →
            </Link>
            <Link
              href="/erbschaftsteuer"
              className="bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Erbschaftsteuer berechnen
            </Link>
            <Link
              href="/ratgeber"
              className="bg-white/10 text-white font-semibold text-sm px-7 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Zum Ratgeber
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-brand mb-2 text-center">
          Die wichtigsten Erbrechts-Themen
        </h2>
        <p className="text-center text-sm text-muted mb-10">
          Fundiertes Wissen für Erben, Erblasser und alle, die vorsorgen möchten.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-accent/30 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-brand text-sm mb-2 group-hover:text-accent transition-colors">
                {f.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{f.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-brand/5 border-y border-accent/20 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold text-brand leading-relaxed">
            „Wer seinen Nachlass regelt, schützt seine Familie vor unnötigem Streit."
          </p>
          <p className="mt-3 text-sm text-muted">
            erbeportal.de — unabhängige Informationen rund um Erbrecht &amp; Nachlassplanung
          </p>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-brand">
            Aktuelle Ratgeber
          </h2>
          <Link
            href="/ratgeber"
            className="text-sm text-accent font-semibold hover:underline"
          >
            Alle Ratgeber →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
