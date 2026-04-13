import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Globe,
  MessageSquare,
  BarChart3,
  Star,
  TrendingUp,
  Eye,
  X,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title:
    "Generative Engine Optimization (GEO) | AI Search Optimization | Ballard Digital",
  description:
    "AI search optimization backed by live proof. Get found in ChatGPT, Perplexity, and Google AI Overviews — not just blue links.",
  keywords:
    "generative engine optimization, GEO, ai search optimization, ai seo utah, how to rank in chatgpt, ai search optimization salt lake city",
};

export default function AiSearchOptimizationPage() {
  const geoSteps = [
    {
      icon: Globe,
      title: "Entity Optimization",
      description:
        "We ensure AI models have a clear, authoritative record of your business — structured data, knowledge graph presence, and consistent information across the web. If AI doesn't know you exist, it can't recommend you.",
    },
    {
      icon: MessageSquare,
      title: "AI Citation Building",
      description:
        "We get your business mentioned on the authoritative sources that LLMs reference when generating recommendations — industry directories, local publications, news sites, and high-trust review platforms.",
    },
    {
      icon: BarChart3,
      title: "Structured Content Creation",
      description:
        "Content formatted for AI to parse and cite: direct answers to common questions, FAQ schema markup, statistics with sources, and well-organized information hierarchies. If your content is buried in marketing fluff, AI skips over it.",
    },
    {
      icon: Star,
      title: "Review Signal Management",
      description:
        "AI assistants weight reviews heavily when recommending businesses. We manage review volume, quality, recency, and platform diversity across Google, Yelp, and industry-specific platforms.",
    },
    {
      icon: TrendingUp,
      title: "Digital Authority & PR",
      description:
        "Brand mentions across the web feed into AI models' understanding of trust and relevance. Strategic PR, guest contributions, industry citations, and local press coverage build the signals LLMs use to decide who deserves a recommendation.",
    },
    {
      icon: Eye,
      title: "AI Search Monitoring & Reporting",
      description:
        "We track whether your business appears when people ask ChatGPT, Perplexity, and Google AI Overviews for recommendations in your service area — then report on it monthly alongside your traditional SEO metrics.",
    },
  ];

  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <Bot className="h-4 w-4" />
              Generative Engine Optimization (GEO)
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              60% of Google searches end without a click.
              <br />
              <span className="gradient-text">
                Where are your customers going instead?
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              They&apos;re getting answers from AI. ChatGPT. Perplexity. Google
              AI Overviews. Voice assistants. If your business isn&apos;t being
              recommended in those AI-generated answers, you&apos;re invisible
              to a growing share of your market.
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

        {/* What is GEO */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                The shift
              </span>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What is Generative Engine Optimization?
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                <strong className="text-foreground">
                  Generative Engine Optimization (GEO)
                </strong>{" "}
                is the practice of optimizing your business to appear in
                AI-powered search results — not just traditional Google
                rankings.
              </p>
              <p>
                Traditional SEO optimizes for Google&apos;s ranking algorithm.
                The goal is page 1. GEO optimizes for the large language models
                (LLMs) that power ChatGPT, Perplexity, Google AI Overviews, and
                voice assistants. The goal is to get{" "}
                <strong className="text-foreground">
                  cited or recommended
                </strong>{" "}
                in AI-generated answers.
              </p>
              <p>
                These are related but different disciplines. A business can rank
                #1 on Google and still be completely absent from AI search
                results. The signals LLMs use to decide which businesses to
                recommend are different from the signals Google uses to rank
                websites.
              </p>
            </div>
          </div>
        </section>

        {/* SEO vs GEO Comparison */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground">
              Traditional SEO vs. GEO
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Traditional SEO
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  {[
                    "Optimizes for Google's ranking algorithm",
                    "Goal: appear on page 1 of search results",
                    "Signals: keywords, backlinks, technical health",
                    "Success = rankings and organic clicks",
                    "Users click through to your website",
                    "Established, well-understood discipline",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-accent/30 bg-accent-subtle p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Generative Engine Optimization
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  {[
                    "Optimizes for LLMs that generate answers",
                    "Goal: get cited or recommended in AI answers",
                    "Signals: entity data, structured content, PR, reviews",
                    "Success = AI citation frequency and brand mentions",
                    "Users get your name from the AI before visiting any site",
                    "Emerging discipline — first-mover advantage is real",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The 6 Disciplines */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="accent-line" />
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                  How it works
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Six disciplines. One unified strategy.
              </h2>
              <p className="text-muted">
                GEO isn&apos;t one tactic. It&apos;s a combination of six
                disciplines that work together to make AI recommend your
                business.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {geoSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-subtle">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ballard Digital for GEO */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Why Ballard Digital for GEO?
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  We have live proof.
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  TheWasatchGuide.com is our independent local content property
                  — ranking in Google right now with content about Utah
                  neighborhoods and communities. We don&apos;t just explain GEO in
                  theory. We show you Search Console data from content we built
                  about your market. No other Utah practice has anything like
                  this.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  We built GEO in from day one.
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Other agencies are bolting AI optimization onto legacy SEO
                  playbooks. We designed every process, deliverable, and report
                  around GEO + traditional SEO as a unified service. Our audit
                  includes AI visibility checks. Our retainer includes AI
                  citation monitoring. It&apos;s not an add-on.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  We understand how LLMs actually work.
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  GEO requires understanding how large language models source,
                  evaluate, and cite information. We know what makes an LLM
                  trust a source, how entity data feeds into recommendation
                  logic, and why structured content gets cited while marketing
                  copy gets ignored. This is technical expertise, not marketing
                  buzzwords.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              GEO pricing
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Growth + GEO Retainer
                </h3>
                <p className="mb-4 text-sm text-muted">
                  Traditional local SEO + AI search optimization.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    $2,000 - $2,500
                  </span>
                  <span className="text-muted">/mo</span>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Everything in traditional local SEO",
                    "AI search citation monitoring",
                    "Entity optimization & structured data",
                    "Content optimized for AI citation",
                    "Review signal management for AI",
                    "Competitor AI visibility tracking",
                    "Bi-weekly strategy calls",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-ridge bg-surface p-8 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  AI Search Domination
                </h3>
                <p className="mb-4 text-sm text-muted">
                  Full-spectrum AI + traditional search ownership.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    $3,500 - $4,000
                  </span>
                  <span className="text-muted">/mo</span>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Everything in Growth + GEO",
                    "PR / digital authority building",
                    "4 optimized posts/month (traditional + AI)",
                    "Advanced knowledge graph strategy",
                    "Monthly AI visibility report",
                    "Weekly strategy calls",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              Every engagement starts with a{" "}
              <Link
                href="/#pricing"
                className="text-ridge underline hover:text-ridge-dark"
              >
                $500 audit
              </Link>{" "}
              that includes an AI visibility check, credited toward your
              project.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Frequently asked questions about GEO
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is GEO replacing SEO?",
                  a: "No. GEO is an extension of SEO, not a replacement. Traditional SEO still drives the majority of search traffic. But the share of searches that end in an AI-generated answer is growing rapidly — 60% of Google searches now produce zero clicks. Smart businesses optimize for both. We deliver traditional SEO and GEO as a unified service.",
                },
                {
                  q: "How do you measure GEO results?",
                  a: "We track AI citation frequency — how often your business appears when people ask ChatGPT, Perplexity, and Google AI Overviews for recommendations in your service area. We also track brand mention volume, entity authority signals, and the traditional SEO metrics you'd expect (rankings, traffic, leads). All reported monthly.",
                },
                {
                  q: "Do other Utah agencies offer GEO?",
                  a: "A handful have launched service pages since late 2025. But none are producing educational content depth, none have a live proof-of-concept property like TheWasatchGuide.com, and none publish transparent pricing. We built GEO into our core from day one — it's not a bolt-on.",
                },
                {
                  q: "How long does GEO take to show results?",
                  a: "Entity optimization and structured data changes can begin influencing AI recommendations within 4-8 weeks. Citation building and authority signals compound over 2-4 months. Full GEO impact is typically measurable within 3-6 months. Unlike paid ads, these results compound — the investment gets more valuable over time.",
                },
                {
                  q: "Can you show me proof that GEO works?",
                  a: "Yes. During your audit, we'll show you live Search Console data from TheWasatchGuide.com — real content about Utah neighborhoods and communities that ranks in Google. We'll also run an AI visibility check on your business in real time so you can see exactly where you stand.",
                },
              ].map((faq) => (
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
              How visible is your business — on Google and in AI?
            </h2>
            <p className="mb-8 text-muted">
              We&apos;ll score your presence across Google search, directories, reviews, and AI search engines — so you can see exactly where the gaps are.
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
