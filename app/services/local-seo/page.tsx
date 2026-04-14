import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Search,
  FileSearch,
  Wrench,
  Rocket,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "Local SEO in Utah | Ballard Digital",
  description:
    "Local SEO services for Utah businesses. Google Business Profile optimization, directory management, review strategy, and content that drives local customers to your door.",
  keywords:
    "local seo utah, local seo salt lake city, google business profile optimization utah, local search optimization",
};

export default function LocalSeoPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <MapPin className="h-4 w-4" />
              Local SEO
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              Show up when your customers search nearby.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Local SEO puts your business in front of people searching for
              your services in your area — Google Maps, the Local Pack, and
              organic results.
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

        {/* What is Local SEO */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                The foundation
              </span>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What is local SEO?
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Local SEO is the practice of optimizing your business to appear
                in location-based search results. When someone searches
                &quot;plumber near me&quot; or &quot;dentist Salt Lake
                City,&quot; local SEO determines whether your business shows up.
              </p>
              <p>
                It covers your Google Business Profile, local directory
                listings, review profile, on-page optimization, and the
                technical signals that tell Google where you are and what you
                do. Done right, it turns search traffic into phone calls,
                form submissions, and walk-ins.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                What we do
              </span>
            </div>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Local SEO services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: MapPin,
                  title: "Google Business Profile",
                  description:
                    "Full optimization — categories, attributes, photos, weekly posts, Q&A management, and review responses. Your GBP is your most important local asset.",
                },
                {
                  icon: Search,
                  title: "Directory & Citation Management",
                  description:
                    "NAP consistency across 20+ directories. We clean up duplicates, fix incorrect listings, and build citations on the platforms that matter for your industry.",
                },
                {
                  icon: Star,
                  title: "Review Strategy",
                  description:
                    "Systematic review generation — not begging or bribing. We help you build a review profile that Google and customers trust, across Google, Yelp, and industry platforms.",
                },
                {
                  icon: FileSearch,
                  title: "On-Page Optimization",
                  description:
                    "Service pages, location pages, schema markup, meta data, and internal linking built for local search. Every page targets the queries your customers actually type.",
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

        {/* Process */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              How we work
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  icon: FileSearch,
                  title: "Audit",
                  desc: "We score your Google profile, website, directories, reviews, and competitive position. You get a specific findings report with an action plan.",
                },
                {
                  step: "02",
                  icon: Wrench,
                  title: "Build",
                  desc: "We fix what the audit found — directory cleanup, GBP optimization, on-page SEO, schema markup, and a website built for local search if needed.",
                },
                {
                  step: "03",
                  icon: Rocket,
                  title: "Grow",
                  desc: "Ongoing content, GBP posts, review management, directory monitoring, and monthly reporting tied to leads and calls — not vanity metrics.",
                },
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-2xl font-bold text-border">
                      {phase.step}
                    </span>
                    <phase.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {phase.desc}
                  </p>
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
              {[
                {
                  q: "How much does local SEO cost?",
                  a: "Our retainers start at $1,000-$1,500/month for local SEO. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
                },
                {
                  q: "How long does local SEO take to work?",
                  a: "Most businesses see movement in 2-4 months for local keywords. Google Business Profile optimizations can show results faster — sometimes within weeks. Full impact typically takes 4-6 months.",
                },
                {
                  q: "Do I need a new website for local SEO?",
                  a: "Not always. Our audit will tell you. If your site is technically sound, we optimize it. If it's holding you back, we build a new one as part of the foundation phase.",
                },
                {
                  q: "What about AI search?",
                  a: "Local SEO and AI search optimization (GEO) work together. Our Growth + GEO retainer ($2,000-$2,500/mo) combines both. If you're interested in appearing in ChatGPT and Perplexity recommendations alongside Google, that's our most popular tier.",
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
              How visible is your business in local search?
            </h2>
            <p className="mb-8 text-muted">
              Get a free presence score — we&apos;ll show you where you stand
              across Google, directories, reviews, and AI search.
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
