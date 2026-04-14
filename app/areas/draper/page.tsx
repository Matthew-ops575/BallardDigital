import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Draper, UT",
  description:
    "Local SEO and AI search optimization for Draper businesses. Get found by customers searching in Draper, the Point of the Mountain corridor, and across the Wasatch Front.",
  keywords:
    "seo draper utah, draper seo company, marketing agency draper, ai search optimization draper, local seo draper ut",
};

export default function DraperPage() {
  return (
    <CityPage
      city="Draper"
      county="Salt Lake County"
      population="51,000+"
      headline="Get found in Draper."
      subhead="We help Draper businesses dominate local search and AI-powered recommendations. From the Point of the Mountain corridor to SunCrest, we know this market."
      localContext="Draper sits at the south end of Salt Lake County along the Point of the Mountain corridor — one of Utah's fastest-growing tech and business hubs. With the Silicon Slopes tech ecosystem nearby, the mix of established businesses and fast-growing startups creates a competitive local search landscape. Businesses here compete not just with each other but with companies in neighboring Lehi, Sandy, and Riverton. Standing out in local search requires more than a Google Business Profile — it requires a strategy that covers traditional SEO, AI search visibility, and the review signals that drive customer decisions."
      searchInsight="Low competition for 'Draper' + industry keywords"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services",
          description: "HVAC, plumbing, roofing, and electrical companies in Draper competing for homeowner searches across the south valley.",
        },
        {
          name: "Dental SEO",
          slug: "dental",
          description: "Dental practices along Draper Parkway and 123rd South competing for new patients searching 'dentist near me' in the south valley.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate",
          description: "Agents and brokerages serving Draper, SunCrest, and the south end of the valley — where median home prices drive high-value client acquisition.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Sandy", slug: "sandy" },
        { name: "Lehi", slug: "lehi" },
        { name: "Herriman", slug: "herriman" },
        { name: "Riverton", slug: "riverton" },
        { name: "Cottonwood Heights", slug: "cottonwood-heights" },
      ]}
      localProof={{
        description: "TheWasatchGuide.com — our independent content property — already features neighborhood guides and local content for the Draper and south valley area, ranking in Google right now. We don't just say we know your market. We can show you Search Console data from content about your community.",
        link: "https://thewasatchguide.com",
      }}
      faqItems={[
        {
          q: "How much does SEO cost for a Draper business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "How long does it take to see results in the Draper market?",
          a: "For industry + city keyword combinations like 'HVAC Draper' or 'dentist Draper UT,' competition is relatively low — we typically see movement within 2-3 months. More competitive terms like 'plumber salt lake city' take 4-6 months. AI search visibility improvements often show within 4-8 weeks.",
        },
        {
          q: "Do you only work with Draper businesses?",
          a: "No. We serve businesses across the Wasatch Front — from Ogden to Provo. But we know the Draper and south valley market particularly well through our work on TheWasatchGuide.com and our own location in the area.",
        },
        {
          q: "What makes you different from other SEO agencies in Utah?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
