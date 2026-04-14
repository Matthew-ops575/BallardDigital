import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Gauge,
  Search,
  Shield,
  Zap,
  FileSearch,
} from "lucide-react";
import { InnerNavbar, InnerFooter, FaqSchema } from "@/lib/components";

export const metadata: Metadata = {
  title: "Technical SEO Audits in Utah | Ballard Digital",
  description:
    "Technical SEO audits for Utah businesses. Site speed, crawlability, schema markup, Core Web Vitals, and the technical foundation your rankings depend on.",
  keywords:
    "technical seo audit utah, technical seo salt lake city, site speed optimization utah, schema markup, core web vitals",
};

const faqs = [
  {
    q: "How much does a technical SEO audit cost?",
    a: "Technical SEO is included in our standard $500 audit. For a deep standalone technical audit (pre-migration, large sites), pricing starts at $1,500 depending on site size and complexity.",
  },
  {
    q: "Do I need technical SEO if my site looks fine?",
    a: "Probably. Most sites that 'look fine' have technical issues invisible to visitors but visible to Google — slow server response, missing schema, broken internal links, redirect chains. Our audit finds them.",
  },
  {
    q: "Will you implement the fixes or just report them?",
    a: "Both options. For sites we build or manage, we implement everything. For sites managed by your team or another developer, we deliver a prioritized fix list with specific instructions they can follow.",
  },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <Code className="h-4 w-4" />
              Technical SEO
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              The invisible foundation your rankings depend on.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Great content on a technically broken website won&apos;t rank.
              We fix the crawlability, speed, and structure issues holding
              your site back.
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

        {/* What We Audit */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                What we check
              </span>
            </div>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Technical SEO audit scope
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Gauge,
                  title: "Site Speed & Core Web Vitals",
                  description:
                    "LCP, FID, CLS — the metrics Google uses to evaluate user experience. We identify what's slowing your site and fix it.",
                },
                {
                  icon: Search,
                  title: "Crawlability & Indexing",
                  description:
                    "Robots.txt, sitemap, crawl errors, redirect chains, and orphan pages. If Google can't find it, it can't rank it.",
                },
                {
                  icon: Code,
                  title: "Schema Markup",
                  description:
                    "LocalBusiness, Service, FAQPage, and Review schema — structured data that helps both Google and AI search engines understand your business.",
                },
                {
                  icon: Shield,
                  title: "Security & HTTPS",
                  description:
                    "SSL configuration, mixed content issues, and security headers. Google penalizes insecure sites.",
                },
                {
                  icon: Zap,
                  title: "Mobile Experience",
                  description:
                    "Mobile-first indexing means Google ranks your mobile site. We test responsiveness, tap targets, and mobile load times.",
                },
                {
                  icon: FileSearch,
                  title: "On-Page Structure",
                  description:
                    "Title tags, meta descriptions, heading hierarchy, internal linking, and URL structure — the on-page signals that directly affect rankings.",
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

        {/* How It Works */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              How it works
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted">
              Technical SEO is included in every audit we run. If you need a
              standalone technical audit — for example, before a site
              migration or redesign — we offer it as a one-time project.
            </p>
            <div className="space-y-4">
              {[
                "Full crawl analysis of your website",
                "Core Web Vitals and Lighthouse performance report",
                "Schema markup audit and implementation plan",
                "Prioritized fix list ranked by SEO impact",
                "Implementation support or handoff to your developer",
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
        <section className="bg-background px-6 py-16">
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
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Not sure if your site has technical issues?
            </h2>
            <p className="mb-8 text-muted">
              Our audit includes a full technical assessment alongside your
              local SEO, directory, and AI search visibility scores.
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
