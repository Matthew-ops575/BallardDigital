import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Search,
  Bot,
  BarChart3,
  FileSearch,
  Wrench,
  Rocket,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

interface PainPoint {
  problem: string;
  solution: string;
}

interface IndustryPageProps {
  badge: string;
  headline: string;
  subhead: string;
  roiStat: string;
  roiExplanation: string;
  painPoints: PainPoint[];
  whatWeDoItems: string[];
  geoAngle: {
    question: string;
    explanation: string;
    items: string[];
  };
  auditQuestion: string;
  auditItems: string[];
  faqItems: { q: string; a: string }[];
}

export function IndustryPage({
  badge,
  headline,
  subhead,
  roiStat,
  roiExplanation,
  painPoints,
  whatWeDoItems,
  geoAngle,
  auditQuestion,
  auditItems,
  faqItems,
}: IndustryPageProps) {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              {badge}
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
              Get Your Free AI Visibility Check
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* ROI Math */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-accent/30 bg-accent-subtle p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <p className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                    {roiStat}
                  </p>
                  <p className="text-base leading-relaxed text-muted">
                    {roiExplanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="accent-line" />
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                  The problem
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Sound familiar?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {painPoints.map((pp) => (
                <div
                  key={pp.problem}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <p className="mb-3 text-sm font-semibold text-red-700">
                    {pp.problem}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {pp.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="accent-line" />
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                  How it works
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                What we do for you
              </h2>
              <p className="text-muted">
                Every engagement follows our three-phase process: audit, build,
                grow.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "01",
                  icon: FileSearch,
                  title: "Audit",
                  desc: "Scored assessment of your Google profile, website, directories, reviews, and AI search visibility. $500, credited toward your project.",
                },
                {
                  step: "02",
                  icon: Wrench,
                  title: "Build",
                  desc: "Fix what the audit found. Directory cleanup, Google Business Profile optimization, entity optimization, and a custom website built for local search.",
                },
                {
                  step: "03",
                  icon: Rocket,
                  title: "Grow",
                  desc: "Ongoing content, GEO strategy, review management, AI search monitoring, and monthly reporting tied to real business metrics.",
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

            <div className="mt-10">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Retainer deliverables include:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {whatWeDoItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GEO Angle */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <div className="mb-4 inline-flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                  AI Search Advantage
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
                {geoAngle.question}
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                {geoAngle.explanation}
              </p>
              <ul className="space-y-3">
                {geoAngle.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
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

        {/* CTA */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              {auditQuestion}
            </h2>
            <ul className="mb-8 inline-flex flex-col items-start gap-2 text-sm text-left">
              {auditItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="/#audit"
                className="inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
              >
                Run My Free AI Visibility Check
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
