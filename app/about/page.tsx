import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  DollarSign,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "About | Ballard Digital — Local SEO Consulting, Salt Lake City",
  description:
    "Ballard Digital is a local SEO consulting practice in Salt Lake City helping high-value businesses get found on Google and in AI search. Founded by Kyle Ballard.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: Eye,
      title: "Visibility is the gap.",
      description:
        "The businesses we serve are already good at what they do. They don't need a better product. They need to be found.",
    },
    {
      icon: DollarSign,
      title: "ROI math is the pitch.",
      description:
        "Never sell \"SEO services.\" Sell the dollar value of the visibility gap. One additional customer at $X revenue covers the entire investment.",
    },
    {
      icon: BarChart3,
      title: "Proof over promises.",
      description:
        "TheWasatchGuide.com exists so we never have to say \"trust me.\" We show real data, real rankings, real traffic on content we wrote about your market.",
    },
    {
      icon: Shield,
      title: "Scope clarity protects relationships.",
      description:
        "We define exactly what's included, what's not, and who owns what. Ambiguity creates resentment. Clarity creates retention.",
    },
    {
      icon: TrendingUp,
      title: "Content compounds, ads don't.",
      description:
        "A blog post that ranks keeps delivering traffic for years. A Google Ad stops the moment you stop paying. We always prioritize owned assets over rented visibility.",
    },
    {
      icon: Users,
      title: "Fewer clients, higher value.",
      description:
        "Three clients at $1,500/month beats fifteen clients at $300/month. Less overhead, deeper relationships, better results, more referrals.",
    },
    {
      icon: Globe,
      title: "WordPress for clients, Next.js for us.",
      description:
        "We build client sites on platforms they can operate without us. We build our own assets on platforms that give us maximum control.",
    },
    {
      icon: CheckCircle2,
      title: "Honest numbers, no exceptions.",
      description:
        "ROI projections grounded in real market data and defensible assumptions. No inflated claims. Review fraud is off the table categorically.",
    },
  ];

  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-background px-6 pb-16 pt-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                About
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Local SEO consulting built on proof, not promises
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Ballard Digital is a local SEO consulting practice in Salt Lake
              City. We help high-value businesses become more visible online — on
              Google, in AI-powered search, and everywhere their customers look.
            </p>
          </div>
        </section>

        {/* The Story */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              The short version
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Most SEO agencies sell generic packages, show case studies from
                other markets, hide their pricing behind a sales call, and lock
                you into contracts before proving anything.
              </p>
              <p>
                We do the opposite. Every engagement starts with a scored audit
                that proves its value before you spend another dollar. We publish
                our pricing on our website. We work month-to-month. And we back
                everything with{" "}
                <a
                  href="https://thewasatchguide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ridge underline hover:text-ridge-dark"
                >
                  TheWasatchGuide.com
                </a>{" "}
                — a live content property with real Google rankings you can
                verify yourself. No screenshots from other clients. No
                &ldquo;trust me.&rdquo; Just open the Search Console and look.
              </p>
              <p>
                We also believe the SEO industry is about to go through its
                biggest shift since mobile. 60% of Google searches now end
                without a click. AI assistants recommend businesses directly. And
                not a single SEO practice in Utah is seriously helping businesses
                show up in those AI answers. That&apos;s why we built Generative
                Engine Optimization into our core offering from day one — not as
                an afterthought, but as the foundation.
              </p>
            </div>
          </div>
        </section>

        {/* What we focus on */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              Who we work with
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted">
              We focus on industries where a single new customer from improved
              visibility pays for the entire annual investment. The pitch writes
              itself because the math is obvious.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Home Services",
                  detail: "One furnace install covers 6-12 months of retainer",
                },
                {
                  name: "Real Estate",
                  detail: "One closing covers 12+ months of retainer",
                },
                {
                  name: "Dental Practices",
                  detail: "One implant patient covers the year",
                },
                {
                  name: "Legal Services",
                  detail: "One case covers years of retainer",
                },
              ].map((v) => (
                <div
                  key={v.name}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <h3 className="mb-1 font-semibold text-foreground">
                    {v.name}
                  </h3>
                  <p className="text-sm text-accent-dark">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client ownership */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              You own everything
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted">
              From day one, you own your domain (registered in your name), all
              content we create, your Google Analytics and Search Console
              accounts, and your WordPress admin credentials. We have manager
              access, not owner access.
            </p>
            <p className="text-base leading-relaxed text-muted">
              If the partnership ends, all credentials transfer within 14 days.
              Your website continues operating independently. No hostage
              situations. No ongoing obligations. This is how it should work, and
              it&apos;s surprisingly rare in this industry.
            </p>
          </div>
        </section>

        {/* Operating Principles */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                Operating principles
              </h2>
              <p className="text-base leading-relaxed text-muted">
                These aren&apos;t aspirational values on a wall. They&apos;re
                decision-making rules. Every client interaction, pricing
                decision, and scope question gets filtered through these.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle">
                    <p.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              See where your business stands
            </h2>
            <p className="mb-8 text-muted">
              We&apos;ll run a free AI visibility check and show you exactly
              what happens when someone asks ChatGPT for a recommendation in
              your industry and market.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get Your Free AI Visibility Check
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
