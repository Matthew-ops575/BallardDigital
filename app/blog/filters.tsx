"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const CATEGORY_LABELS: Record<string, string> = {
  geo: "AI Search / GEO",
  "local-seo": "Local SEO",
  industry: "Industry Insights",
  "case-study": "Case Study",
  guide: "Guide",
};

interface BlogFiltersProps {
  categories: string[];
  posts: BlogPost[];
  categoryColors: Record<string, string>;
}

export function BlogFilters({
  categories,
  posts,
  categoryColors,
}: BlogFiltersProps) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <>
      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold tracking-wide transition-all ${
            active === null
              ? "border-ridge bg-ridge text-white"
              : "border-border bg-surface text-muted hover:border-ridge/50 hover:text-foreground"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(active === cat ? null : cat)}
            className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold tracking-wide transition-all ${
              active === cat
                ? "border-ridge bg-ridge text-white"
                : "border-border bg-surface text-muted hover:border-ridge/50 hover:text-foreground"
            }`}
          >
            {CATEGORY_LABELS[cat] || cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-sm"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${categoryColors[post.category] || categoryColors.guide}`}
              >
                {post.categoryLabel}
              </span>
              <span className="text-[11px] text-muted">{post.date}</span>
              <span className="flex items-center gap-1 text-[11px] text-muted">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-dark">
              {post.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
              {post.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ridge transition-colors group-hover:text-ridge-dark">
              Read article <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-muted">
            No posts in this category yet. Check back soon.
          </p>
        </div>
      )}
    </>
  );
}
