import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { InnerNavbar, InnerFooter } from "@/lib/components";
import { BlogFilters } from "./filters";

export const metadata: Metadata = {
  title: "Utah SEO & AI Search Insights Blog",
  description:
    "Insights on local SEO, Generative Engine Optimization (GEO), and AI search strategy for Utah businesses. Practical guides, industry analysis, and case studies.",
};

const CATEGORY_COLORS: Record<string, string> = {
  geo: "bg-purple-50 text-purple-700 border-purple-200",
  "local-seo": "bg-accent-subtle text-accent-dark border-accent/20",
  industry: "bg-amber-50 text-amber-700 border-amber-200",
  "case-study": "bg-ridge/10 text-ridge border-ridge/20",
  guide: "bg-slate-50 text-slate-700 border-slate-200",
};

const CATEGORY_ACCENTS: Record<string, string> = {
  geo: "border-purple-200 bg-purple-50/50",
  "local-seo": "border-accent/20 bg-accent-subtle",
  industry: "border-amber-200 bg-amber-50/50",
  "case-study": "border-ridge/20 bg-ridge/5",
  guide: "border-slate-200 bg-slate-50/50",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  // Get unique categories from published posts
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="bg-background px-6 pb-8 pt-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Blog
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Insights & Guides
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Practical thinking on local SEO, AI search optimization, and
              what&apos;s actually working for Utah businesses in 2026.
            </p>
          </div>
        </section>

        {posts.length === 0 ? (
          <section className="bg-background px-6">
            <div className="mx-auto max-w-6xl">
              <div className="rounded-2xl border border-border bg-surface p-12 text-center">
                <p className="mb-2 text-lg font-semibold text-foreground">
                  Coming soon
                </p>
                <p className="text-muted">
                  We&apos;re publishing our first articles now. Check back
                  shortly, or{" "}
                  <Link
                    href="/#audit"
                    className="text-ridge underline hover:text-ridge-dark"
                  >
                    get your free presence score
                  </Link>{" "}
                  in the meantime.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <section className="bg-background px-6 pb-10">
                <div className="mx-auto max-w-6xl">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className={`group block overflow-hidden rounded-2xl border ${CATEGORY_ACCENTS[featured.category] || "border-border bg-surface"} p-8 transition-all hover:shadow-md md:p-10`}
                  >
                    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-ridge/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ridge">
                            Latest
                          </span>
                          <span
                            className={`rounded-full border px-3 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[featured.category] || CATEGORY_COLORS.guide}`}
                          >
                            {featured.categoryLabel}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted">
                            <Clock className="h-3 w-3" />
                            {featured.readTime}
                          </span>
                        </div>
                        <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent-dark md:text-3xl">
                          {featured.title}
                        </h2>
                        <p className="mb-4 max-w-2xl text-base leading-relaxed text-muted">
                          {featured.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ridge transition-colors group-hover:text-ridge-dark">
                          Read article
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white/60 text-5xl font-bold text-ridge/20">
                          {featured.categoryLabel.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            )}

            {/* Category Filters + Grid */}
            {rest.length > 0 && (
              <section className="bg-background px-6 pb-12">
                <div className="mx-auto max-w-6xl">
                  {/* Filters */}
                  <BlogFilters
                    categories={categories}
                    posts={rest}
                    categoryColors={CATEGORY_COLORS}
                  />
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <InnerFooter />
    </>
  );
}
