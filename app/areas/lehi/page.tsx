import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Lehi, UT | Ballard Digital",
  description:
    "Local SEO and AI search optimization for Lehi businesses. Get found by customers in the heart of Silicon Slopes and across Utah County.",
  keywords:
    "seo lehi utah, lehi seo company, marketing agency lehi, silicon slopes seo, local seo lehi ut",
};

export default function LehiPage() {
  return (
    <CityPage
      city="Lehi"
      county="Utah County"
      population="75,000+"
      headline="Lehi is the fastest-growing city on the Wasatch Front. Is your business keeping up online?"
      subhead="We help Lehi businesses dominate local search and AI-powered recommendations in the heart of Silicon Slopes — where competition is fierce and customers research everything online."
      localContext="Lehi sits at the center of Silicon Slopes — Utah's tech corridor — and has been one of the fastest-growing cities in the state for a decade. The Thanksgiving Point area, Traverse Mountain, and the rapid commercial development along SR-92 have transformed Lehi from a small town into a major economic hub. This growth means more businesses competing for the same customers, and a tech-savvy population that searches online before making any purchase decision. Standing out in Lehi requires a search strategy that matches the sophistication of the market."
      searchInsight="Tech-savvy population with high online research rates"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services-seo",
          description: "HVAC, plumbing, and roofing companies serving Lehi's rapidly expanding neighborhoods — Traverse Mountain, Holbrook Farms, and the new developments along SR-92.",
        },
        {
          name: "Dental SEO",
          slug: "dental-seo",
          description: "Dental practices competing in a fast-growing market where new residents are actively searching for a new dentist after moving to the area.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate-seo",
          description: "Agents and brokerages serving one of Utah's hottest real estate markets — where new construction and tech-industry relocations drive constant demand.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic-seo",
          description: "Orthopedic and sports medicine practices serving Lehi's young, active population — families, athletes, and outdoor enthusiasts along the Point of the Mountain.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Draper", slug: "draper" },
        { name: "Sandy", slug: "sandy" },
        { name: "Provo", slug: "provo" },
        { name: "Herriman", slug: "herriman" },
        { name: "West Jordan", slug: "west-jordan" },
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for a Lehi business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "How competitive is the Lehi market for SEO?",
          a: "Lehi's growth means competition is increasing fast — especially for home services, dental, and real estate. The good news is that most Lehi businesses still have weak or nonexistent SEO, so there's a real first-mover advantage for businesses that invest now.",
        },
        {
          q: "Do you work with tech companies in Silicon Slopes?",
          a: "Our core focus is local service businesses — the ones that rely on customers in their geographic area finding them online. If you're a B2B tech company, we may not be the best fit. But if you're a local business serving Lehi residents, we're built for you.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
