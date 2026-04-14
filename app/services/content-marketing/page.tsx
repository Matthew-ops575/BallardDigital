import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Target,
  TrendingUp,
  BarChart3,
  Search,
  Zap,
} from "lucide-react";
import { InnerNavbar, InnerFooter, FaqSchema } from "@/lib/components";

export const metadata: Metadata = {
  title: "SEO Content Marketing in Utah",
  description:
    "Content that ranks and drives leads. Blog posts, service pages, and local content built around what your customers actually search.",
  keywords:
    "seo content marketing utah, content strategy salt lake city, blog writing for seo utah, local content marketing",
};

const faqs = [
  {
    q: "How many pieces of content do you produce per month?",
    a: "Our Growth retainer includes 2-4 pieces per month. The AI Search Domination tier includes 4 optimized posts. Volume depends on your tier and goals — but quality always comes before quantity.",
  },
  {
    q: "Do I get to review content before it's published?",
    a: "Yes. Every piece goes through your approval before publishing. We want your voice and expertise in the content — not generic filler.",
  },
  {
    q: "How long does it take for content to rank?",
    a: "New content typically begins ranking within 2-4 months. Some pieces rank faster depending on competition and keyword difficulty. Content compounds — the more you publish, the faster new pieces gain traction.",
  },
  {
    q: "Is content included in the retainer or billed separately?",
    a: "Content production is included in every retainer tier. No surprise add-on fees.",
  },
];

export default function ContentMarketingPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <FileText className="h-4 w-4" />
              Content Marketing
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              Content that ranks and converts.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Not blog posts for the sake of blog posts. Strategic content
              built around the searches your customers actually make — designed
              to rank in Google and get cited by AI.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get Your Free Presence Score
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* The Problem */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                The problem
              </span>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Most SEO content doesn&apos;t work
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Most agencies produce generic blog posts that check a
                &quot;content&quot; box on a deliverable list but never rank,
                never get read, and never drive a lead. That&apos;s not
                content marketing — it&apos;s busywork.
              </p>
              <p>
                Effective content starts with what your customers search,
                answers their questions better than what currently ranks, and
                includes the local context that makes it relevant to your
                market. Every piece we create has a keyword target, a search
                intent, and a conversion path.
              </p>
            </div>
          </div>
        </section>

        {/* What We Create */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                What we create
              </span>
            </div>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Content types
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Service Pages",
                  description:
                    "Dedicated pages for each service you offer, targeting the specific keywords customers use when they're ready to buy.",
                },
                {
                  icon: Search,
                  title: "Blog Posts & Guides",
                  description:
                    "Educational content that answers the questions your prospects ask before hiring — building trust and capturing search traffic.",
                },
                {
                  icon: BarChart3,
                  title: "Industry Content",
                  description:
                    "Content specific to your vertical with local Utah context — the kind of depth that generic national content can't match.",
                },
                {
                  icon: FileText,
                  title: "Location Pages",
                  description:
                    "City and neighborhood-specific pages that capture geographic searches and establish local relevance.",
                },
                {
                  icon: Zap,
                  title: "AI-Optimized Content",
                  description:
                    "FAQ schemas, structured answers, and content formatted for AI systems to parse and cite in recommendations.",
                },
                {
                  icon: TrendingUp,
                  title: "Case Studies",
                  description:
                    "Results-driven stories that demonstrate your expertise and give prospects confidence to choose you.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <item.icon className="mb-4 h-6 w-6 text-accent" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              How we approach content
            </h2>
            <div className="space-y-4">
              {[
                "Identify keyword targets based on what your customers actually search",
                "Analyze what currently ranks — and find the gaps we can beat",
                "Write content with Utah-specific context that national competitors can't replicate",
                "Structure for both Google ranking and AI citation",
                "Internal link to your service and location pages to drive conversions",
                "Track performance monthly — rankings, traffic, and leads from each piece",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Ready for content that drives results?
            </h2>
            <p className="mb-8 text-muted">
              Start with an audit — we&apos;ll show you the content gaps your
              competitors are exploiting and the keywords you should own.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get My Free Presence Score
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
