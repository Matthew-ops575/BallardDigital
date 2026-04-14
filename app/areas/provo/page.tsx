import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Provo, UT | Ballard Digital",
  description:
    "Local SEO and AI search optimization for Provo businesses. Get found by customers searching in Provo, BYU area, and across Utah County.",
  keywords:
    "seo provo utah, provo seo company, marketing agency provo, local seo provo ut, utah county seo",
};

export default function ProvoPage() {
  return (
    <CityPage
      city="Provo"
      county="Utah County"
      population="115,000+"
      headline="Provo has 115,000 residents and a university that brings 35,000 more. Can they find your business?"
      subhead="We help Provo businesses get found on Google, in AI-powered search, and everywhere their customers look — from BYU students to established families in the south end."
      localContext="Provo is the anchor of Utah County — a university town with a thriving tech scene and one of the youngest populations in the country. BYU brings over 35,000 students who search for everything on their phones, while established neighborhoods along the east bench and south Provo house families with strong spending power. The mix of student-focused businesses along University Avenue, professional services downtown, and residential service providers throughout the city creates a uniquely competitive search landscape. Businesses here need to reach both a young, mobile-first audience and an established homeowner base."
      searchInsight="Young, mobile-first population with high search frequency"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services-seo",
          description: "HVAC, plumbing, and roofing companies serving Provo homeowners and the surrounding Utah County market — where seasonal demand swings make year-round visibility critical.",
        },
        {
          name: "Dental SEO",
          slug: "dental-seo",
          description: "Dental practices competing for patients in a city with a young population that switches providers frequently — especially students and young families settling down.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate-seo",
          description: "Agents serving Provo's diverse market — from student housing and first-time buyers near BYU to established neighborhoods along the east bench.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic-seo",
          description: "Orthopedic and sports medicine practices serving BYU athletes, recreational sports participants, and an active outdoor community near the Wasatch Range.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Lehi", slug: "lehi" },
        { name: "Draper", slug: "draper" },
        { name: "Sandy", slug: "sandy" },
        { name: "Park City", slug: "park-city" },
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for a Provo business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Is Provo competitive for SEO?",
          a: "It depends on the industry. For broad terms like 'dentist Provo,' competition is moderate. For specific terms like 'emergency plumber Provo' or 'sports medicine Provo UT,' competition is surprisingly low. Our audit will show you exactly where the opportunities are.",
        },
        {
          q: "Do you serve the rest of Utah County?",
          a: "Yes. We serve businesses across the Wasatch Front — Provo, Orem, Lehi, American Fork, and beyond. If your customers are searching for local services in Utah County, we can help you get found.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
