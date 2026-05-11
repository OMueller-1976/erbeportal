import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
}

export default function ArticleCard({
  slug,
  title,
  description,
  date,
  category,
  image,
}: ArticleCardProps) {
  return (
    <Link
      href={`/ratgeber/${slug}`}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-accent/40 transition-all"
    >
      {image && (
        <div className="relative h-44 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <span className="text-xs text-accent font-semibold uppercase tracking-wide">
          {category}
        </span>
        <h3 className="mt-1 font-semibold text-ink text-base leading-snug group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <time className="text-xs text-muted/70">{date}</time>
          <span className="text-xs font-semibold text-accent group-hover:underline">
            Weiterlesen →
          </span>
        </div>
      </div>
    </Link>
  );
}
