import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Sandy, UT",
  description:
    "Local SEO and AI search optimization for Sandy businesses. Get found by customers searching in Sandy, the south valley, and across the Wasatch Front.",
  keywords:
    "seo sandy utah, sandy seo company, marketing agency sandy ut, local seo sandy, ai search optimization sandy",
};

export default function SandyPage() {
  return (
    <CityPage
      city="Sandy"
      county="Salt Lake County"
      population="96,000+"
      headline="Get found in Sandy."
      subhead="We help Sandy businesses get found on Google, in AI-powered search, and everywhere their customers look before making a decision."
      localContext="Sandy is the sixth-largest city in Utah, sitting at the base of the Wasatch Mountains with easy access to both Big and Little Cottonwood Canyons. The city's mix of retail corridors along State Street and 700 East, medical offices near Alta View Hospital, and the growing tech presence around the Sandy Civic Center TRAX station creates a diverse and competitive local search landscape. With a population over 96,000 and strong household incomes, Sandy businesses compete for high-value customers who research online before choosing a provider."
      searchInsight="High search volume for 'near me' queries in south valley"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services",
          description: "HVAC, plumbing, roofing, and electrical companies serving Sandy homeowners across the south valley's established neighborhoods.",
        },
        {
          name: "Dental SEO",
          slug: "dental",
          description: "Dental practices competing for new patients in one of Utah's most populated cities — where patient choice is driven by reviews and search visibility.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate",
          description: "Agents and brokerages serving Sandy's diverse housing market — from starter homes to mountain-view properties near the canyons.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic",
          description: "Orthopedic clinics and sports medicine practices near the canyons, serving an active population of skiers, hikers, and athletes.",
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
        { name: "Cottonwood Heights", slug: "cottonwood-heights" },
        { name: "Murray", slug: "murray" },
        { name: "West Jordan", slug: "west-jordan" },
        { name: "Herriman", slug: "herriman" },
      ]}
      localProof={{
        description: "TheWasatchGuide.com — our independent content property — already features neighborhood guides and local content for Sandy and the south valley, ranking in Google right now. We don't just say we know your market. We can show you Search Console data from content about your community.",
        link: "https://thewasatchguide.com",
      }}
      faqItems={[
        {
          q: "How much does SEO cost for a Sandy business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "How long does it take to see results in Sandy?",
          a: "For city-specific keywords like 'dentist Sandy UT' or 'HVAC Sandy,' competition is moderate — we typically see movement within 2-4 months. Broader terms like 'plumber salt lake city' take longer. AI search visibility improvements often show within 4-8 weeks.",
        },
        {
          q: "Do you only work with Sandy businesses?",
          a: "No. We serve businesses across the Wasatch Front — from Ogden to Provo. But we know the Sandy and south valley market particularly well through our work on TheWasatchGuide.com.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
