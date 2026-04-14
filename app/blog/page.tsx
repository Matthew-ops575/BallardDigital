import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { InnerNavbar, InnerFooter } from "@/lib/components";

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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="bg-background px-6 pb-12 pt-8">
          <div className="mx-auto max-w-4xl">
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

        {/* Posts */}
        <section className="bg-background px-6">
          <div className="mx-auto max-w-4xl">
            {posts.length === 0 ? (
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
                    get your free AI visibility check
                  </Link>{" "}
                  in the meantime.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-sm md:p-8"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[post.category] || CATEGORY_COLORS.guide}`}
                      >
                        {post.categoryLabel}
                      </span>
                      <span className="text-xs text-muted">{post.date}</span>
                      <span className="text-xs text-muted">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent-dark md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-muted">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ridge transition-colors group-hover:text-ridge-dark">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
