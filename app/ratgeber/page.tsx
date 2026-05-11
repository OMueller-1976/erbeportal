import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Ratgeber Erbrecht & Nachlass | erbeportal.de",
  description:
    "Ratgeber zu Erbrecht, Testament, Erbschaftsteuer und Nachlassabwicklung. Vertiefende Artikel für Erben und Erblasser.",
};

export default function RatgeberPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-xs text-muted mb-6">
        <a href="/" className="hover:underline">Startseite</a> › Ratgeber
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold text-brand mb-3">
        Ratgeber Erbrecht &amp; Nachlass
      </h1>
      <p className="text-muted text-sm mb-10 leading-relaxed">
        Fundierte Artikel zu Erbrecht, Testament, Erbschaftsteuer und
        Nachlassabwicklung — verständlich erklärt für Erben und alle, die vorsorgen möchten.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <ArticleCard key={a.slug} {...a} />
        ))}
      </div>
    </div>
  );
}
