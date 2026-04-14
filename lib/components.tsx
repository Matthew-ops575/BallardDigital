import { ArrowRight, ArrowLeft, MapPin, Mail, Menu } from "lucide-react";
import Link from "next/link";

export function InnerNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-bold text-white">
            B
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Ballard Digital
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/services" className="text-sm text-muted transition-colors hover:text-foreground">Services</Link>
          <Link href="/industries" className="text-sm text-muted transition-colors hover:text-foreground">Industries</Link>
          <Link href="/pricing" className="text-sm text-muted transition-colors hover:text-foreground">Pricing</Link>
          <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">Blog</Link>
          <Link href="/about" className="text-sm text-muted transition-colors hover:text-foreground">About</Link>
          <Link
            href="/#audit"
            className="inline-flex items-center gap-2 rounded-lg bg-ridge px-4 py-2 text-sm font-medium text-white transition-all hover:bg-ridge-dark glow-ridge"
          >
            Free Score
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <a href="#inner-mobile-nav" className="flex items-center md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6 text-foreground" />
        </a>
      </div>
      <div id="inner-mobile-nav" className="hidden target:flex flex-col gap-4 border-t border-border bg-surface px-6 py-6 md:hidden">
        <Link href="/services" className="text-sm text-muted">Services</Link>
        <Link href="/industries" className="text-sm text-muted">Industries</Link>
        <Link href="/pricing" className="text-sm text-muted">Pricing</Link>
        <Link href="/blog" className="text-sm text-muted">Blog</Link>
        <Link href="/about" className="text-sm text-muted">About</Link>
        <Link href="/#audit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-ridge px-4 py-2.5 text-sm font-medium text-white">
          Free Score <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </nav>
  );
}

export function InnerFooter() {
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
              Local SEO consulting for the AI search era. We help Utah businesses get found on Google, ChatGPT, Perplexity, and everywhere their customers search.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />Salt Lake City, Utah</span>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60"><Link href="/services" className="transition-colors hover:text-white/80">Services</Link></h4>
            <ul className="space-y-2 text-sm text-white/35">
              <li><Link href="/services/ai-search-optimization" className="transition-colors hover:text-white/60">AI Search Optimization</Link></li>
              <li><Link href="/services/local-seo" className="transition-colors hover:text-white/60">Local SEO</Link></li>
              <li><Link href="/services/google-business-profile" className="transition-colors hover:text-white/60">Google Business Profile</Link></li>
              <li><Link href="/services/content-marketing" className="transition-colors hover:text-white/60">Content Marketing</Link></li>
              <li><Link href="/services/technical-seo" className="transition-colors hover:text-white/60">Technical SEO</Link></li>
              <li><Link href="/services/web-design" className="transition-colors hover:text-white/60">Web Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">Company</h4>
            <ul className="space-y-2 text-sm text-white/35">
              <li><Link href="/blog" className="transition-colors hover:text-white/60">Blog</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-white/60">About</Link></li>
              <li><Link href="/results" className="transition-colors hover:text-white/60">Results</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white/60">Contact</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-white/60">Pricing</Link></li>
              <li><Link href="/#audit" className="transition-colors hover:text-white/60">Free Score</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <h4 className="mb-3 text-sm font-semibold text-white/60">Areas We Serve</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/35">
            <Link href="/areas/draper" className="transition-colors hover:text-white/60">Draper</Link>
            <Link href="/areas/sandy" className="transition-colors hover:text-white/60">Sandy</Link>
            <Link href="/areas/lehi" className="transition-colors hover:text-white/60">Lehi</Link>
            <Link href="/areas/west-jordan" className="transition-colors hover:text-white/60">West Jordan</Link>
            <Link href="/areas/provo" className="transition-colors hover:text-white/60">Provo</Link>
            <Link href="/areas/ogden" className="transition-colors hover:text-white/60">Ogden</Link>
            <Link href="/areas/herriman" className="transition-colors hover:text-white/60">Herriman</Link>
            <Link href="/areas/cottonwood-heights" className="transition-colors hover:text-white/60">Cottonwood Heights</Link>
            <Link href="/areas/park-city" className="transition-colors hover:text-white/60">Park City</Link>
            <Link href="/areas/murray" className="transition-colors hover:text-white/60">Murray</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/25">
          &copy; 2026 Ballard Digital. All rights reserved. Salt Lake City, Utah.
        </div>
      </div>
    </footer>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function FaqSchema({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
