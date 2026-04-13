import {
  Search,
  Bot,
  Eye,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  Shield,
  BarChart3,
  Globe,
  MessageSquare,
  MapPin,
  Mail,
  Sparkles,
  Target,
  Users,
  Clock,
  X,
  Menu,
  ExternalLink,
  Home,
  DollarSign,
  FileSearch,
  Wrench,
  Rocket,
} from "lucide-react";

/* ───────────────────────────────────────────
   NAVBAR — added mobile hamburger
   ─────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-bold text-white">
            B
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Ballard Digital
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm text-muted transition-colors hover:text-foreground">How It Works</a>
          <a href="#pricing" className="text-sm text-muted transition-colors hover:text-foreground">Pricing</a>
          <a href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">Blog</a>
          <a href="/about" className="text-sm text-muted transition-colors hover:text-foreground">About</a>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 rounded-lg bg-ridge px-4 py-2 text-sm font-medium text-white transition-all hover:bg-ridge-dark glow-ridge"
          >
            Free Score
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        {/* Mobile menu button — toggled via CSS :target or JS in production */}
        <a href="#mobile-nav" className="flex items-center md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6 text-foreground" />
        </a>
      </div>
      {/* Mobile nav panel */}
      <div id="mobile-nav" className="hidden target:flex flex-col gap-4 border-t border-border bg-surface px-6 py-6 md:hidden">
        <a href="#how-it-works" className="text-sm text-muted">How It Works</a>
        <a href="#pricing" className="text-sm text-muted">Pricing</a>
        <a href="/blog" className="text-sm text-muted">Blog</a>
        <a href="/about" className="text-sm text-muted">About</a>
        <a href="#audit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-ridge px-4 py-2.5 text-sm font-medium text-white">
          Free Score <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────────────────────────────
   HERO — kept, updated badge to "consulting practice"
   ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
            <Sparkles className="h-4 w-4" />
            Local SEO consulting backed by results you can verify
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-hero-fg md:text-6xl md:leading-[1.1]">
            Your Customers Search
            <br />
            Differently Now.{" "}
            <span className="gradient-text">Your SEO Should&nbsp;Too.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
            We optimize your business for Google, ChatGPT, Perplexity, and every
            AI-powered search engine — not just traditional blue links.
            Salt&nbsp;Lake&nbsp;City SEO for the AI&nbsp;era.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#audit"
              className="pulse-ring relative inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get Your Free Presence Score
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 text-base font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white/90"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/35">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" />
              No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" />
              Transparent pricing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" />
              You own everything we build
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   PROBLEM SECTION — kept as-is
   ─────────────────────────────────────────── */
function ProblemSection() {
  return (
    <section id="problem" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The search landscape has fundamentally changed.
            <br />
            <span className="text-muted">Most Utah SEO agencies haven&apos;t.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <div className="gradient-text mb-4 text-5xl font-bold">60%</div>
            <p className="text-muted">
              of Google searches now end with{" "}
              <strong className="text-foreground">zero clicks</strong>. Users get answers from AI summaries and never visit a website.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <div className="gradient-text mb-4 text-5xl font-bold">50%+</div>
            <p className="text-muted">
              of search results now feature an{" "}
              <strong className="text-foreground">AI-generated overview</strong>{" "}
              before any traditional links appear.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <div className="gradient-text mb-4 text-5xl font-bold">0</div>
            <p className="text-muted">
              Utah SEO practices backing up their{" "}
              <strong className="text-foreground">AI search claims</strong>{" "}
              with a live, verifiable content property.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <p className="text-center text-base leading-relaxed text-foreground">
              <strong className="text-red-700">The hard truth:</strong>{" "}
              <span className="text-muted">
                If your SEO strategy hasn&apos;t changed since 2023, you&apos;re invisible to a growing share of your customers. They&apos;re asking ChatGPT and Perplexity for recommendations — and if you&apos;re not showing up in those answers, your competitors are.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   COMPARISON SECTION — kept as-is
   ─────────────────────────────────────────── */
function ComparisonSection() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Traditional SEO alone is no longer enough
          </h2>
          <p className="text-lg text-muted">
            See the difference between what most agencies sell and what actually works in 2026.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">What Other Agencies Sell</h3>
            </div>
            <ul className="space-y-4 text-muted">
              {[
                "Optimize for Google page 1 rankings only",
                "Report on keyword rankings and traffic as success metrics",
                "Generic service descriptions with no vertical expertise",
                "Lock you into 12-month contracts before proving results",
                "Hide pricing — force a sales call to learn the cost",
                "Ignore AI search entirely — no GEO strategy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/30 bg-accent-subtle p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">What Ballard Digital Delivers</h3>
            </div>
            <ul className="space-y-4 text-muted">
              {[
                { text: <>Optimize for Google <strong className="text-foreground">AND</strong> AI search (ChatGPT, Perplexity, AI Overviews)</> },
                { text: <>Report on <strong className="text-foreground">leads, calls, and revenue impact</strong> — not vanity metrics</> },
                { text: "Deep expertise in home services, dental, real estate, and legal" },
                { text: "We prove value first — you only continue when the math makes sense" },
                { text: <><strong className="text-foreground">Transparent pricing</strong> published right on our website</> },
                { text: "You own everything: domain, content, analytics, credentials" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   HOW IT WORKS — NEW: phased audit → build → retain
   ─────────────────────────────────────────── */
function HowItWorksSection() {
  const phases = [
    {
      step: "01",
      icon: FileSearch,
      title: "Audit",
      subtitle: "$500 (credited toward your project)",
      description: "We score your Google profile, website, directories, reviews, and — what nobody else checks — whether your business appears when someone asks ChatGPT or Perplexity for a recommendation in your market. You get a specific findings report with an action plan and ROI projection. No generic templates.",
      duration: "3-5 business days",
    },
    {
      step: "02",
      icon: Wrench,
      title: "Build",
      subtitle: "$3,000 - $6,000 one-time",
      description: "We fix what the audit found. Directory cleanup, Google Business Profile optimization, entity optimization for AI search, and a custom WordPress website built for local search — with schema markup, lead capture, and the technical foundation for long-term growth.",
      duration: "2-4 weeks",
    },
    {
      step: "03",
      icon: Rocket,
      title: "Grow",
      subtitle: "From $1,000/mo — month-to-month",
      description: "Ongoing content, GEO strategy, Google Business posts, review management, AI search monitoring, and monthly reporting tied to real business metrics. Content compounds. Rankings improve. AI citations grow. The retainer earns its keep every month — or you leave.",
      duration: "Ongoing",
    },
  ];

  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="accent-line" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">How it works</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Every engagement starts with proof
          </h2>
          <p className="text-lg text-muted">
            No phase is sold before the prior one proves its value. The audit creates findings that justify the build. The build creates results that justify the retainer.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.step} className="relative rounded-2xl border border-border bg-surface p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl font-bold text-border">{phase.step}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle">
                  <phase.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <h3 className="mb-1 text-xl font-semibold text-foreground">{phase.title}</h3>
              <p className="mb-4 text-sm font-medium text-ridge">{phase.subtitle}</p>
              <p className="mb-4 text-sm leading-relaxed text-muted">{phase.description}</p>
              <p className="text-xs text-muted/70">{phase.duration}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted">
            Google Ads management available as an add-on: $500-$1,500/mo based on ad spend.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   GEO SECTION — kept as-is
   ─────────────────────────────────────────── */
function GeoSection() {
  const steps = [
    { icon: Globe, title: "Entity Optimization", description: "We make sure AI models know your business exists — structured data, knowledge graph presence, and consistent business information across the web." },
    { icon: MessageSquare, title: "AI Citation Building", description: "Get your business mentioned on the authoritative sources that AI systems reference when generating recommendations and answers." },
    { icon: BarChart3, title: "Structured Content", description: "Content formatted for AI to parse, cite, and recommend — FAQ schemas, direct answers, statistics, and clear information hierarchies." },
    { icon: Star, title: "Review Signal Management", description: "AI assistants weight reviews heavily. We manage review volume, quality, recency, and platform diversity to boost recommendation likelihood." },
    { icon: TrendingUp, title: "Digital Authority & PR", description: "Brand mentions across the web feed AI models' trust signals. Strategic PR, industry citations, and authority building that drives AI visibility." },
    { icon: Eye, title: "AI Search Monitoring", description: "We track whether your business appears in ChatGPT, Perplexity, and Google AI Overviews — a measurement discipline most agencies don't even know exists." },
  ];

  return (
    <section id="geo" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="accent-line" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">Our flagship differentiator</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Generative Engine Optimization (GEO)
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            GEO is the practice of optimizing your business to appear in AI-powered search results. When someone asks ChatGPT &ldquo;who&apos;s the best plumber in Salt Lake City?&rdquo; — GEO is how you become the answer.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-surface p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">Traditional SEO vs. GEO</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted">Traditional SEO</h4>
              <ul className="space-y-2 text-sm text-muted">
                {["Optimize for Google's ranking algorithm", "Goal: rank on page 1 of search results", "Keywords, backlinks, technical site health", "Measured by rankings and clicks"].map(t => (
                  <li key={t} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-accent">GEO</h4>
              <ul className="space-y-2 text-sm text-foreground">
                {["Optimize for LLMs that generate answers", "Goal: get cited in AI-generated answers", "Entity authority, structured data, PR signals", "Measured by AI citation frequency"].map(t => (
                  <li key={t} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-subtle transition-colors group-hover:bg-accent/10">
                <step.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#audit" className="inline-flex items-center gap-2 text-ridge transition-colors hover:text-ridge-dark">
            Get your free digital presence score <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   INDUSTRIES — added Real Estate, 2x2 grid
   ─────────────────────────────────────────── */
function IndustriesSection() {
  const industries = [
    {
      icon: Shield,
      name: "Home Services",
      examples: "HVAC, Plumbing, Electrical, Roofing",
      roi: "One furnace install covers 6-12 months of retainer.",
      description: "Emergency-driven search with high close rates. We know how homeowners find and choose service providers.",
    },
    {
      icon: Home,
      name: "Real Estate",
      examples: "Residential Agents, Brokerages, Teams",
      roi: "One additional closing covers 12+ months of retainer.",
      description: "Neighborhood-level content and local authority that puts agents in front of buyers and sellers actively searching their market.",
    },
    {
      icon: Users,
      name: "Dental Practices",
      examples: "General, Cosmetic, Implants, Orthodontics",
      roi: "One implant patient covers the entire year.",
      description: "71% of patients use online reviews. We optimize for new patient acquisition across search and AI.",
    },
    {
      icon: BarChart3,
      name: "Legal Services",
      examples: "Personal Injury, Family Law, Criminal Defense",
      roi: "One case covers years of retainer.",
      description: "Highest per-lead value in local SEO. We drive the qualified consultations your firm needs to grow.",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for industries where the math is obvious
          </h2>
          <p className="text-lg text-muted">
            We focus on businesses where a single new customer from improved visibility pays for the entire annual investment.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-border bg-surface p-8">
              <ind.icon className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-1 text-xl font-semibold text-foreground">{ind.name}</h3>
              <p className="mb-3 text-sm text-ridge">{ind.examples}</p>
              <p className="text-sm leading-relaxed text-muted">{ind.description}</p>
              <p className="mt-4 rounded-lg bg-accent-subtle px-4 py-2.5 text-sm font-medium text-accent-dark">
                <DollarSign className="mr-1 inline h-4 w-4" />
                {ind.roi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   PRICING — reworked to phased model with retainer tiers
   ─────────────────────────────────────────── */
function PricingSection() {
  return (
    <section id="pricing" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="accent-line" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">Transparent pricing — no surprises</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Honest pricing for honest work
          </h2>
          <p className="text-lg text-muted">
            Every engagement follows the same path: audit, build, grow. Month-to-month retainers after your initial project. No long-term lock-in.
          </p>
        </div>

        {/* Phase 1 & 2 */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-subtle text-xs font-bold text-accent">1</span>
              <h3 className="text-lg font-semibold text-foreground">Digital Presence + AI Audit</h3>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-foreground">$500</span>
              <span className="text-sm text-muted ml-2">credited toward your project</span>
            </div>
            <ul className="space-y-2.5">
              {[
                "Google profile, website, and directory scoring",
                "AI search visibility check (ChatGPT, Perplexity, Google AI)",
                "Competitive comparison against 3-5 local competitors",
                "Prioritized action plan with ROI projection",
                "Delivered in 3-5 business days",
              ].map(f => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-subtle text-xs font-bold text-accent">2</span>
              <h3 className="text-lg font-semibold text-foreground">Foundation Fix + Website</h3>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-foreground">$3,000 - $6,000</span>
              <span className="text-sm text-muted ml-2">one-time</span>
            </div>
            <ul className="space-y-2.5">
              {[
                "NAP cleanup across 20+ directories",
                "Google Business Profile optimization",
                "Entity optimization for AI search",
                "Custom WordPress website (5-12 pages)",
                "Schema markup, lead capture, analytics setup",
                "Review generation system",
                "30-day post-launch support + training",
              ].map(f => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phase 3: Retainer tiers */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-subtle text-xs font-bold text-accent">3</span>
            <h3 className="text-lg font-semibold text-foreground">Monthly Growth Retainers</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Growth */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h4 className="mb-2 text-lg font-semibold text-foreground">Growth</h4>
              <p className="mb-4 text-sm text-muted">Traditional local SEO visibility.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">$1,000 - $1,500</span>
                <span className="text-muted text-sm">/mo</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {[
                  "2-4 SEO-optimized content pages/month",
                  "Google Business Profile management",
                  "Review monitoring & response",
                  "Monthly analytics report",
                  "Directory monitoring",
                  "Quarterly strategy call",
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#audit" className="block rounded-xl border border-border bg-surface-alt py-3 text-center text-sm font-semibold text-foreground transition-all hover:border-ridge/50">
                Get Started
              </a>
            </div>

            {/* Growth + GEO */}
            <div className="relative rounded-2xl border border-ridge bg-surface p-8 shadow-sm">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-ridge px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Growth + GEO</h4>
              <p className="mb-4 text-sm text-muted">Google AND AI search coverage.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">$2,000 - $2,500</span>
                <span className="text-muted text-sm">/mo</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Everything in Growth, plus:",
                  "AI search citation monitoring",
                  "Entity optimization & structured data",
                  "Content optimized for AI citation",
                  "Review signal management for AI",
                  "Competitor AI visibility tracking",
                  "Bi-weekly strategy calls",
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#audit" className="block rounded-xl bg-ridge py-3 text-center text-sm font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge">
                Most Popular
              </a>
            </div>

            {/* Full Domination */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h4 className="mb-2 text-lg font-semibold text-foreground">AI Search Domination</h4>
              <p className="mb-4 text-sm text-muted">Own your market across every search surface.</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">$3,500 - $4,000</span>
                <span className="text-muted text-sm">/mo</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Everything in Growth + GEO, plus:",
                  "PR / digital authority building",
                  "4 optimized posts/month",
                  "Advanced knowledge graph strategy",
                  "Monthly AI visibility report",
                  "Weekly strategy calls",
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#audit" className="block rounded-xl border border-border bg-surface-alt py-3 text-center text-sm font-semibold text-foreground transition-all hover:border-ridge/50">
                Dominate AI Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   PROOF SECTION — NEW: The Wasatch Guide
   ─────────────────────────────────────────── */
function ProofSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left — the pitch */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="accent-line" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">Proof, not promises</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  We don&apos;t show other clients&apos; results. We show our own.
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  TheWasatchGuide.com is our independent local content property — neighborhood guides, community resources, and local business content ranking in Google right now. When we pitch you, we show real Search Console data on content we wrote about <em>your</em> market. Not screenshots from someone else&apos;s project.
                </p>
                <ul className="mb-6 space-y-2.5 text-sm">
                  {[
                    "Real rankings you can verify in Google yourself",
                    "Content written about your specific market and neighborhoods",
                    "Search Console data we open on screen during your audit",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://thewasatchguide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ridge transition-colors hover:text-ridge-dark"
                >
                  Visit TheWasatchGuide.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Right — visual representation */}
              <div className="hero-gradient relative flex flex-col items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-[280px] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-accent text-xs font-bold text-white">W</div>
                    <span className="text-sm font-semibold text-white">The Wasatch <span className="font-normal text-white/60">Guide</span></span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">Impressions (30d)</p>
                      <p className="text-xl font-bold text-white">Live Data</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">Ranking Keywords</p>
                      <p className="text-xl font-bold text-white">Your Market</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">Verified In</p>
                      <p className="text-xl font-bold text-accent-light">Google Search Console</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-white/30">We share this data live during every audit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   WHY BALLARD — expanded with ownership + proof
   ─────────────────────────────────────────── */
function WhyBallardSection() {
  const reasons = [
    {
      icon: Bot,
      title: "First-mover in AI search",
      description: "We pair GEO with live proof — TheWasatchGuide.com ranks content about your market right now. Other agencies have service pages. We have Search Console data.",
    },
    {
      icon: Eye,
      title: "Transparent by default",
      description: "Published pricing. Clear deliverables. Monthly reports tied to revenue, not vanity metrics. No surprises, no hidden fees.",
    },
    {
      icon: Users,
      title: "Senior-level execution",
      description: "The person who sells the work does the work. No bait-and-switch to junior staff after you sign.",
    },
    {
      icon: Clock,
      title: "No contracts",
      description: "Month-to-month after your initial project. We earn retention through results. If we're not delivering, you should leave.",
    },
    {
      icon: Shield,
      title: "You own everything",
      description: "Your domain, content, analytics, and credentials — registered in your name from day one. If we part ways, it's a clean 14-day handoff. Your site keeps running.",
    },
    {
      icon: Globe,
      title: "Proof you can verify",
      description: "TheWasatchGuide.com is our live portfolio — real content, real rankings, real Search Console data about your market. We never say \"trust me.\" We say \"look.\"",
    },
  ];

  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Ballard Digital?
          </h2>
          <p className="text-lg text-muted">
            In a market with 100+ agencies saying the same things, here&apos;s what actually makes us different.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-subtle">
                <reason.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   AUDIT SECTION — Digital Presence Score for all buyer segments
   ─────────────────────────────────────────── */
function AuditSection() {
  return (
    <section id="audit" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="accent-line" />
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">Start here</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  How visible is your business online?
                </h2>
                <p className="mb-6 leading-relaxed text-muted">
                  We&apos;ll score your digital presence across five dimensions — Google search, Google Business Profile, directories and citations, reviews, and AI search visibility. You&apos;ll see exactly where you stand, where the gaps are, and what to fix first.
                </p>
                <p className="mb-6 leading-relaxed text-muted">
                  If the score reveals meaningful opportunities, we&apos;ll follow up with a full competitive audit ($500, credited toward your project) with a specific action plan and ROI projection.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "Google search & Local Pack visibility",
                    "Google Business Profile health check",
                    "Directory & citation consistency",
                    "Review profile analysis",
                    "AI search check — do ChatGPT and Perplexity recommend you?",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center bg-accent-subtle p-8 md:p-12">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="John Smith" className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">Email</label>
                    <input type="email" id="email" name="email" placeholder="john@yourbusiness.com" className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="website" className="mb-1 block text-sm font-medium text-foreground">Business Website</label>
                    <input type="url" id="website" name="website" placeholder="https://yourbusiness.com" className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="industry" className="mb-1 block text-sm font-medium text-foreground">Industry</label>
                    <select id="industry" name="industry" className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                      <option value="">Select your industry</option>
                      <option value="home-services">Home Services (HVAC, Plumbing, etc.)</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="dental">Dental Practice</option>
                      <option value="legal">Legal Services</option>
                      <option value="medical">Medical / Healthcare</option>
                      <option value="construction">Construction / Trades</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-ridge py-3.5 text-sm font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge">
                    Get My Free Presence Score
                  </button>
                  <p className="text-center text-xs text-muted">
                    No spam. No obligation. Just a clear picture of where you stand.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   FOOTER — kept, updated language
   ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="hero-gradient relative py-12">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-bold text-white">B</div>
              <span className="text-lg font-semibold tracking-tight text-hero-fg">Ballard Digital</span>
            </div>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-white/40">
              Local SEO consulting for the AI search era. We help Utah businesses get found on Google, ChatGPT, Perplexity, and everywhere their customers search — backed by live proof you can verify.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />Salt Lake City, Utah</span>
              <a href="mailto:hello@ballarddigital.com" className="flex items-center gap-2 transition-colors hover:text-white/70">
                <Mail className="h-4 w-4" />hello@ballarddigital.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">Services</h4>
            <ul className="space-y-2 text-sm text-white/35">
              <li><a href="#how-it-works" className="transition-colors hover:text-white/60">How It Works</a></li>
              <li><a href="#geo" className="transition-colors hover:text-white/60">AI Search Optimization (GEO)</a></li>
              <li><a href="#pricing" className="transition-colors hover:text-white/60">Pricing</a></li>
              <li><a href="/industries/home-services-seo" className="transition-colors hover:text-white/60">Home Services SEO</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">Company</h4>
            <ul className="space-y-2 text-sm text-white/35">
              <li><a href="#audit" className="transition-colors hover:text-white/60">Free Score</a></li>
              <li><a href="/blog" className="transition-colors hover:text-white/60">Blog</a></li>
              <li><a href="/about" className="transition-colors hover:text-white/60">About</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/25">
          &copy; 2026 Ballard Digital. All rights reserved. Salt Lake City, Utah.
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────
   PAGE ASSEMBLY — updated section order
   ─────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ComparisonSection />
        <HowItWorksSection />
        <GeoSection />
        <IndustriesSection />
        <PricingSection />
        <ProofSection />
        <WhyBallardSection />
        <AuditSection />
      </main>
      <Footer />
    </>
  );
}
