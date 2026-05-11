import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/ratgeber/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage(
  props: PageProps<"/ratgeber/[slug]">
) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "erbeportal.de",
      url: "https://www.erbeportal.de",
    },
    publisher: {
      "@type": "Organization",
      name: "erbeportal.de",
      url: "https://www.erbeportal.de",
      logo: {
        "@type": "ImageObject",
        url: "https://www.erbeportal.de/images/og-default.png",
      },
    },
    image: article.image
      ? `https://www.erbeportal.de${article.image}`
      : "https://www.erbeportal.de/images/og-default.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:underline">Startseite</a>
          {" › "}
          <a href="/ratgeber" className="hover:underline">Ratgeber</a>
          {" › "}
          {article.title}
        </nav>

        <span className="text-xs text-accent font-semibold uppercase tracking-wide">
          {article.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-brand mt-2 mb-3">
          {article.title}
        </h1>
        <p className="text-muted text-sm mb-2 leading-relaxed">
          {article.description}
        </p>
        <time className="text-xs text-muted/70 block mb-8">{article.date}</time>

        {article.image && (
          <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden mb-10">
            <Image
              src={article.image}
              alt={article.title}
              title={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <article
          className="article-prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <CTABanner />
    </>
  );
}
