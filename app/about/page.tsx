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
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "About Ballard Digital",
  description:
    "Founded by Kyle Ballard in Salt Lake City. Local SEO consulting — transparent pricing, no contracts, you own everything.",
};

export default function AboutPage() {
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
              The person who sells the work does the work.
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Ballard Digital is a local SEO consulting practice in Salt Lake
              City, founded by Kyle Ballard. We help local businesses get
              found by more customers — on Google, in directories, and in the
              AI-powered search results that are reshaping how people choose.
            </p>
          </div>
        </section>

        {/* Who / Why */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              Why this practice exists
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Most businesses we talk to have been burned by an SEO agency
                before. They signed a long contract, got monthly reports full
                of jargon, and never saw a clear connection between what they
                were paying and the leads they were getting.
              </p>
              <p>
                We built Ballard Digital to be the opposite of that
                experience. Every engagement starts with a scored audit so you
                see real findings before committing further. Pricing is on our
                website — no sales call required. Retainers are
                month-to-month. And you own everything we build: your domain,
                your content, your analytics, your credentials.
              </p>
              <p>
                We also think search is changing in ways most agencies
                aren&apos;t preparing for. AI assistants are starting to
                recommend businesses directly. We help our clients stay ahead
                of that shift — not because the sky is falling, but because
                early movers have an advantage.
              </p>
            </div>
          </div>
        </section>

        {/* How we're different */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
              How we work
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "One person, start to finish",
                  description:
                    "No handoff to junior staff after the sale. The person you talk to is the person doing the work.",
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
                    "Month-to-month retainers after your initial project. We earn your business every month.",
                },
                {
                  icon: Shield,
                  title: "You own everything",
                  description:
                    "Domain, content, analytics, credentials — all in your name from day one. Clean 14-day handoff if we part ways.",
                },
                {
                  icon: BarChart3,
                  title: "Results you can measure",
                  description:
                    "We report on leads, calls, and revenue impact — not keyword rankings or traffic numbers that don't connect to your bottom line.",
                },
                {
                  icon: CheckCircle2,
                  title: "Proof before commitment",
                  description:
                    "Every engagement starts with a scored audit. You see real findings and a clear action plan before spending another dollar.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <item.icon className="mb-4 h-6 w-6 text-accent" />
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

        {/* Industries */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Who we work with
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted">
              We focus on local service businesses in Utah where SEO has a
              clear, measurable return on investment.
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
                  className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
                >
                  <h3 className="mb-1 font-semibold text-foreground group-hover:text-accent-dark">
                    {v.name}
                  </h3>
                  <p className="text-sm text-muted">{v.detail}</p>
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
