import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2, Zap } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { InnerNavbar, InnerFooter } from "@/lib/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Simple markdown → HTML
  function parseMarkdownTables(md: string): string {
    return md.replace(
      /(^\|.+\|$\n)(^\|[\s:|-]+\|$\n)((?:^\|.+\|$\n?)+)/gm,
      (_match, headerRow: string, _separator: string, bodyRows: string) => {
        const headers = headerRow.trim().split("|").filter((c: string) => c.trim()).map((c: string) => c.trim());
        const rows = bodyRows.trim().split("\n").map((row: string) =>
          row.split("|").filter((c: string) => c.trim()).map((c: string) => c.trim())
        );
        const ths = headers.map((h: string) => `<th class="px-4 py-3 text-left text-sm font-semibold text-foreground">${h}</th>`).join("");
        const trs = rows.map((cols: string[]) => {
          const tds = cols.map((c: string) => `<td class="px-4 py-3 text-sm text-muted">${c}</td>`).join("");
          return `<tr class="border-t border-border">${tds}</tr>`;
        }).join("");
        return `<div class="my-6 overflow-x-auto rounded-xl border border-border"><table class="w-full"><thead class="bg-accent-subtle"><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>\n`;
      }
    );
  }

  const html = parseMarkdownTables(post.content)
    .replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 text-xl font-semibold text-foreground">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-2xl font-bold text-foreground">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-ridge underline hover:text-ridge-dark">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-muted"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span>$1</span></li>')
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-4 space-y-2">$1</ul>')
    .replace(/^(?!<[hdula])((?!<).+)$/gm, '<p class="mb-4 leading-relaxed text-muted">$1</p>')
    .replace(/<p class="mb-4 leading-relaxed text-muted"><\/p>/g, "");

  // Schema: Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: "Kyle Ballard" },
    publisher: { "@id": "https://ballarddigital.com/#business" },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://ballarddigital.com/blog/${slug}`,
  };

  // Schema: FAQPage (only if post has FAQs)
  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <InnerNavbar />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          {/* Back link */}
          <div className="mb-8 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/20 bg-accent-subtle px-3 py-0.5 text-[11px] font-semibold text-accent-dark">
                {post.categoryLabel}
              </span>
              <span className="text-sm text-muted">{post.date}</span>
              <span className="flex items-center gap-1 text-sm text-muted">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              {post.description}
            </p>
          </header>

          {/* Key Takeaways Box */}
          {post.takeaways.length > 0 && (
            <div className="mb-10 rounded-2xl border border-accent/30 bg-accent-subtle p-6">
              <div className="mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <h2 className="text-base font-semibold text-foreground">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-2">
                {post.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-foreground">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content */}
          <div
            className="prose-ballard"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-accent-subtle p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Want to see where your business stands?
            </h3>
            <p className="mb-6 text-sm text-muted">
              Get a free digital presence score — see how visible your business
              is across Google, directories, reviews, and AI search.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-xl bg-ridge px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get My Free Presence Score
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <InnerFooter />
    </>
  );
}
