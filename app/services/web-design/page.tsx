import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Gauge,
  Search,
  Smartphone,
  Code,
  Shield,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "SEO Web Design in Utah | Ballard Digital",
  description:
    "Custom websites built for local search. Fast, mobile-first WordPress sites with schema markup, lead capture, and the technical foundation for long-term SEO growth.",
  keywords:
    "seo web design utah, wordpress seo utah, website design salt lake city, small business website utah",
};

export default function WebDesignPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <Palette className="h-4 w-4" />
              SEO Web Design
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              A website built to rank, not just look good.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Most business websites are built by designers, not search
              strategists. We build websites where SEO is the foundation —
              not an afterthought.
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

        {/* What's Included */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                What you get
              </span>
            </div>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Every website includes
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "SEO Architecture",
                  description:
                    "Service pages, location pages, and content structure planned around the keywords your customers actually search.",
                },
                {
                  icon: Gauge,
                  title: "Fast Load Times",
                  description:
                    "Optimized images, clean code, and proper caching. We target 95+ Lighthouse scores and sub-2-second load times.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  description:
                    "Google indexes your mobile site first. Every site we build starts mobile and scales up — not the other way around.",
                },
                {
                  icon: Code,
                  title: "Schema Markup",
                  description:
                    "LocalBusiness, Service, and FAQPage structured data built in from day one — so Google and AI search engines understand your business.",
                },
                {
                  icon: Shield,
                  title: "You Own Everything",
                  description:
                    "Your domain, hosting, content, and credentials — registered in your name. If we part ways, you keep it all.",
                },
                {
                  icon: Palette,
                  title: "Lead Capture",
                  description:
                    "Contact forms, click-to-call, and conversion tracking set up and connected to your analytics from launch.",
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

        {/* Pricing */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Web design pricing
            </h2>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="mb-4">
                <span className="text-3xl font-bold text-foreground">
                  $3,000 - $6,000
                </span>
                <span className="ml-2 text-sm text-muted">one-time</span>
              </div>
              <p className="mb-6 text-sm text-muted">
                Custom WordPress website, 5-12 pages, built as part of our
                foundation phase. The $500 audit fee is credited toward the
                project.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Custom WordPress design (not a template)",
                  "5-12 optimized pages",
                  "Schema markup on every page",
                  "Google Analytics + Search Console setup",
                  "Lead capture forms with tracking",
                  "30-day post-launch support + training",
                  "Mobile-first responsive design",
                  "SSL certificate + security setup",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </div>
                ))}
              </div>
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
              {[
                {
                  q: "Do I need a new website?",
                  a: "Maybe not. Our audit will tell you. If your site is structurally sound but just needs optimization, we work with what you have. We only recommend a new build when the existing site is actively holding back your search visibility.",
                },
                {
                  q: "Why WordPress?",
                  a: "WordPress powers 40%+ of the web and has the best ecosystem for local SEO — schema plugins, performance optimization, and flexibility. You're not locked into a proprietary platform, and any developer can work on it after us.",
                },
                {
                  q: "How long does a website build take?",
                  a: "2-4 weeks from kickoff to launch, depending on the number of pages and content readiness. We handle design, development, and SEO setup. You provide business information and feedback.",
                },
                {
                  q: "What about hosting?",
                  a: "We set you up on managed WordPress hosting (typically SiteGround or Cloudways). You own the hosting account. Typical cost is $15-$30/month, paid directly to the host.",
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
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Ready for a website that actually drives leads?
            </h2>
            <p className="mb-8 text-muted">
              Start with an audit — we&apos;ll tell you whether your current
              site needs optimization or a full rebuild.
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
