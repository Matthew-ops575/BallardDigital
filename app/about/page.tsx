import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Shield,
  Users,
  Clock,
  CheckCircle2,
  BarChart3,
  MapPin,
  Zap,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "About Ballard Digital",
  description:
    "Founded by Matthew Ballard in Salt Lake City. Local SEO consulting — transparent pricing, no contracts, you own everything.",
};

export default function AboutPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <MapPin className="h-4 w-4" />
              Salt Lake City, Utah
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              Built on proof, not promises.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              Ballard Digital is a local SEO consulting practice founded by
              Matthew Ballard. We help local businesses get found by more
              customers — on Google, in directories, and in AI search.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
              <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-subtle text-3xl font-bold text-accent">
                  MB
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  Matthew Ballard
                </h2>
                <p className="text-sm text-muted">Founder</p>
                <div className="mt-4 space-y-2 text-left text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    Salt Lake City, UT
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-accent" />
                    SEO, GEO, Local Search
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="accent-line" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                    Why this practice exists
                  </span>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted">
                  <p>
                    Most businesses we talk to have been burned by an SEO
                    agency before. They signed a long contract, got monthly
                    reports full of jargon, and never saw a clear connection
                    between what they were paying and the leads they were
                    getting.
                  </p>
                  <p>
                    I built Ballard Digital to be the opposite of that
                    experience. Every engagement starts with a scored audit so
                    you see real findings before committing further. Pricing is
                    on our website. Retainers are month-to-month. And you own
                    everything we build.
                  </p>
                  <p>
                    I also think search is changing in ways most agencies
                    aren&apos;t preparing for. AI assistants are starting to
                    recommend businesses directly. We help our clients stay
                    ahead of that shift — not because the sky is falling, but
                    because early movers have an advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we're different — callout cards */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                How we work differently
              </h2>
              <p className="text-muted">
                Six things you won&apos;t find at most agencies.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "One person, start to finish",
                  description:
                    "No handoff to junior staff. The person you talk to is the person doing the work.",
                },
                {
                  icon: Eye,
                  title: "Published pricing",
                  description:
                    "Our rates are on our website. No discovery calls to learn what things cost.",
                },
                {
                  icon: Clock,
                  title: "No long-term contracts",
                  description:
                    "Month-to-month after your initial project. We earn your business every month.",
                },
                {
                  icon: Shield,
                  title: "You own everything",
                  description:
                    "Domain, content, analytics, credentials — all in your name from day one.",
                },
                {
                  icon: BarChart3,
                  title: "Results you can measure",
                  description:
                    "We report on leads, calls, and revenue — not keyword rankings that don't connect to your bottom line.",
                },
                {
                  icon: CheckCircle2,
                  title: "Proof before commitment",
                  description:
                    "Every engagement starts with a scored audit. You see real findings before spending another dollar.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
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

        {/* Ownership callout */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-accent/30 bg-accent-subtle p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    You own everything. Always.
                  </h2>
                  <p className="text-base leading-relaxed text-muted">
                    From day one, you own your domain, all content we create,
                    your Google Analytics and Search Console accounts, and your
                    website admin credentials. We have manager access, not
                    owner access. If the partnership ends, all credentials
                    transfer within 14 days. Your website continues operating
                    independently. No hostage situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Industries
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Who we work with
            </h2>
            <p className="mb-8 text-muted">
              Local service businesses in Utah where SEO has a clear,
              measurable return.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Home Services",
                  slug: "home-services",
                  detail: "HVAC, plumbing, electrical, roofing",
                },
                {
                  name: "Dental Practices",
                  slug: "dental",
                  detail: "General, cosmetic, implants, orthodontics",
                },
                {
                  name: "Real Estate",
                  slug: "real-estate",
                  detail: "Agents, brokerages, teams",
                },
                {
                  name: "Orthopedics",
                  slug: "orthopedic",
                  detail: "Clinics, sports medicine, physical therapy",
                },
              ].map((v) => (
                <Link
                  key={v.name}
                  href={`/industries/${v.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle">
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent-dark">
                      {v.name}
                    </h3>
                    <p className="text-sm text-muted">{v.detail}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Don&apos;t see your industry?{" "}
              <Link
                href="/contact"
                className="text-ridge underline hover:text-ridge-dark"
              >
                Get in touch
              </Link>{" "}
              — if you serve local customers, we can likely help.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              See where your business stands.
            </h2>
            <p className="mb-8 text-muted">
              Free scored audit across Google, directories, reviews, and AI
              search.
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
      </main>
      <InnerFooter />
    </>
  );
}
