import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Users,
  TrendingUp,
  Bot,
  Building2,
  Briefcase,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

interface CityPageProps {
  city: string;
  county: string;
  population: string;
  headline: string;
  subhead: string;
  localContext: string;
  industries: {
    name: string;
    slug: string;
    description: string;
  }[];
  services: {
    name: string;
    slug: string;
  }[];
  nearbyAreas: {
    name: string;
    slug: string;
  }[];
  localProof?: {
    description: string;
    link?: string;
  };
  searchInsight: string;
  faqItems: { q: string; a: string }[];
}

export function CityPage({
  city,
  county,
  population,
  headline,
  subhead,
  localContext,
  industries,
  services,
  nearbyAreas,
  localProof,
  searchInsight,
  faqItems,
}: CityPageProps) {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <MapPin className="h-4 w-4" />
              SEO &amp; AI Search Optimization in {city}
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              {headline}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              {subhead}
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

        {/* City Stats */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                <Users className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-bold text-foreground">{population}</p>
                <p className="text-sm text-muted">Population</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                <MapPin className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-bold text-foreground">{county}</p>
                <p className="text-sm text-muted">County</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                <TrendingUp className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="text-lg font-bold text-foreground">{searchInsight}</p>
                <p className="text-sm text-muted">Local search insight</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Local market
              </span>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              SEO for {city} businesses
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {localContext}
            </p>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Industries
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Industries we serve in {city}
            </h2>
            <p className="mb-10 text-muted">
              We work with {city} businesses across these verticals — each with
              an SEO strategy tailored to how their customers actually search.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-dark">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {ind.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ridge">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Services
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What we offer {city} businesses
            </h2>
            <p className="mb-10 text-muted">
              Every engagement starts with a $500 scored audit — credited toward
              your project.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
                >
                  <Briefcase className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-base font-medium text-foreground group-hover:text-accent-dark">
                    {svc.name}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted group-hover:text-ridge" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* GEO for this city */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <div className="mb-4 inline-flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                  AI Search in {city}
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                What does ChatGPT recommend in {city}?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                More customers are skipping Google entirely and asking AI
                assistants for local recommendations. &quot;Who&apos;s the best
                plumber in {city}?&quot; &quot;Find me a dentist near{" "}
                {city}.&quot; If your business isn&apos;t optimized for AI
                search, you&apos;re invisible to this growing segment.
              </p>
              <ul className="space-y-3">
                {[
                  `AI visibility audit for your ${city} business`,
                  "Entity optimization so AI models know you exist",
                  "Citation building on sources LLMs trust",
                  "Monthly AI recommendation tracking and reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Wasatch Guide Proof (if applicable) */}
        {localProof && (
          <section className="bg-surface-alt px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-accent/30 bg-accent-subtle p-8 md:p-10">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="accent-line" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                    Local proof
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                  We already know {city}.
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  {localProof.description}
                </p>
                {localProof.link && (
                  <a
                    href={localProof.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ridge hover:text-ridge-dark"
                  >
                    See our {city} content on TheWasatchGuide.com
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              SEO in {city} — frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
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

        {/* Nearby Areas */}
        {nearbyAreas.length > 0 && (
          <section className="bg-surface-alt px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
                Also serving nearby areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Ready to get found in {city}?
            </h2>
            <p className="mb-8 text-muted">
              Get a free presence score — we&apos;ll show you how visible your
              business is across Google, directories, reviews, and AI search in
              the {city} market.
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
