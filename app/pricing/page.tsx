import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Wrench,
  Rocket,
} from "lucide-react";
import { InnerNavbar, InnerFooter, FaqSchema } from "@/lib/components";

export const metadata: Metadata = {
  title: "Pricing | Ballard Digital",
  description:
    "Transparent SEO pricing for Utah businesses. Audit, build, and grow — every engagement follows the same path. No hidden fees, no long-term lock-in.",
};

const faqs = [
  {
    q: "Are there long-term contracts?",
    a: "No. After the initial audit and build phases, retainers are month-to-month. We earn retention through results. If we're not delivering, you should leave.",
  },
  {
    q: "What if I only need an audit?",
    a: "That's fine. The $500 audit is a standalone deliverable — you get a scored report and action plan whether or not you continue with us. If you do continue, the $500 is credited toward your build phase.",
  },
  {
    q: "Do I need the build phase if I already have a website?",
    a: "Maybe not. If your site is technically sound and well-structured for SEO, we can skip the build and go straight to a retainer. The audit will tell us.",
  },
  {
    q: "What's the difference between Growth and Growth + GEO?",
    a: "Growth covers traditional local SEO — Google rankings, Google Business Profile, directories, and content. Growth + GEO adds AI search optimization — monitoring and improving your visibility in ChatGPT, Perplexity, and Google AI Overviews. If AI search matters to your market, GEO is worth it.",
  },
  {
    q: "Can I switch tiers?",
    a: "Yes, anytime. Upgrade or downgrade month to month based on your needs and results.",
  },
];

export default function PricingPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="bg-background px-6 py-16 pt-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Transparent pricing
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Honest pricing for honest work
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              Every engagement follows the same path: audit, build, grow.
              Month-to-month retainers after your initial project. No
              long-term lock-in.
            </p>
          </div>
        </section>

        {/* Phases 1 & 2 */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-subtle text-xs font-bold text-accent">
                    1
                  </span>
                  <h2 className="text-lg font-semibold text-foreground">
                    Digital Presence + AI Audit
                  </h2>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    $500
                  </span>
                  <span className="ml-2 text-sm text-muted">
                    credited toward your project
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Google profile, website, and directory scoring",
                    "AI search visibility check (ChatGPT, Perplexity, Google AI)",
                    "Competitive comparison against 3-5 local competitors",
                    "Prioritized action plan with ROI projection",
                    "Delivered in 3-5 business days",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-subtle text-xs font-bold text-accent">
                    2
                  </span>
                  <h2 className="text-lg font-semibold text-foreground">
                    Foundation Fix + Website
                  </h2>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    $3,000 - $6,000
                  </span>
                  <span className="ml-2 text-sm text-muted">one-time</span>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "NAP cleanup across 20+ directories",
                    "Google Business Profile optimization",
                    "Entity optimization for AI search",
                    "Custom website (5-12 pages)",
                    "Schema markup, lead capture, analytics setup",
                    "Review generation system",
                    "30-day post-launch support + training",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Retainers */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex items-center justify-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-subtle text-xs font-bold text-accent">
                3
              </span>
              <h2 className="text-lg font-semibold text-foreground">
                Monthly Growth Retainers
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Growth */}
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Growth
                </h3>
                <p className="mb-4 text-sm text-muted">
                  Traditional local SEO visibility.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    $1,000 - $1,500
                  </span>
                  <span className="text-sm text-muted">/mo</span>
                </div>
                <ul className="mb-6 space-y-2.5">
                  {[
                    "2-4 SEO-optimized content pages/month",
                    "Google Business Profile management",
                    "Review monitoring & response",
                    "Monthly analytics report",
                    "Directory monitoring",
                    "Quarterly strategy call",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#audit"
                  className="block rounded-xl border border-border bg-surface-alt py-3 text-center text-sm font-semibold text-foreground transition-all hover:border-ridge/50"
                >
                  Get Started
                </Link>
              </div>

              {/* Growth + GEO */}
              <div className="relative rounded-2xl border border-ridge bg-surface p-8 shadow-sm">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-ridge px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Growth + GEO
                </h3>
                <p className="mb-4 text-sm text-muted">
                  Google AND AI search coverage.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    $2,000 - $2,500
                  </span>
                  <span className="text-sm text-muted">/mo</span>
                </div>
                <ul className="mb-6 space-y-2.5">
                  {[
                    "Everything in Growth, plus:",
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
                <Link
                  href="/#audit"
                  className="block rounded-xl bg-ridge py-3 text-center text-sm font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
                >
                  Most Popular
                </Link>
              </div>

              {/* AI Search Domination */}
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  AI Search Domination
                </h3>
                <p className="mb-4 text-sm text-muted">
                  Own your market across every search surface.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    $3,500 - $4,000
                  </span>
                  <span className="text-sm text-muted">/mo</span>
                </div>
                <ul className="mb-6 space-y-2.5">
                  {[
                    "Everything in Growth + GEO, plus:",
                    "PR / digital authority building",
                    "4 optimized posts/month",
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
                <Link
                  href="/#audit"
                  className="block rounded-xl border border-border bg-surface-alt py-3 text-center text-sm font-semibold text-foreground transition-all hover:border-ridge/50"
                >
                  Dominate AI Search
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Pricing FAQ
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
              Ready to get started?
            </h2>
            <p className="mb-8 text-muted">
              Every engagement starts with a $500 audit — credited toward your
              project. No commitment beyond that.
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
