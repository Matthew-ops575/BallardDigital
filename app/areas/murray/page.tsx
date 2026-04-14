import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Murray, UT",
  description:
    "Local SEO and AI search optimization for Murray businesses. Get found by customers searching in Murray and the central Salt Lake Valley.",
  keywords:
    "seo murray utah, murray seo company, marketing agency murray, local seo murray ut",
};

export default function MurrayPage() {
  return (
    <CityPage
      city="Murray"
      county="Salt Lake County"
      population="50,000+"
      headline="Get found in Murray."
      subhead="We help Murray businesses get found on Google, in AI-powered search, and everywhere their customers look before choosing a provider."
      localContext="Murray sits at the geographic center of the Salt Lake Valley with exceptional accessibility — TRAX light rail, I-15, I-215, and State Street all converge here. The Intermountain Medical Center campus makes it a healthcare hub, while the Fashion Place Mall area and the revitalizing downtown Murray corridor along State Street create busy commercial districts. Murray's central location means businesses here can serve customers from across the valley, but that also means competition from every direction. Strong search visibility ensures that when someone searches 'near me' from Murray, your business shows up — not a competitor in Sandy or West Jordan."
      searchInsight="Central valley location captures 'near me' searches from all directions"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services",
          description: "HVAC, plumbing, roofing, and electrical companies serving Murray's established neighborhoods — where aging homes mean steady demand for maintenance and upgrades.",
        },
        {
          name: "Dental SEO",
          slug: "dental",
          description: "Dental practices in Murray's healthcare corridor, competing for patients across the central valley who search by proximity and reviews.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate",
          description: "Agents serving Murray's centrally located housing market — where affordability relative to the east bench and access to transit attract first-time buyers and families.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic",
          description: "Orthopedic and sports medicine practices near Intermountain Medical Center — serving the central valley's patients searching for specialists by condition and location.",
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
        { name: "Cottonwood Heights", slug: "cottonwood-heights" },
        { name: "West Jordan", slug: "west-jordan" },
        { name: "Draper", slug: "draper" },
        { name: "Herriman", slug: "herriman" },
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for a Murray business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Does Murray's central location help or hurt for SEO?",
          a: "It helps — significantly. 'Near me' searches use the searcher's current location, and Murray's central position in the valley means you're 'near' a huge portion of the population. But you need to be optimized to capture those searches, which is where local SEO comes in.",
        },
        {
          q: "How long does it take to see results?",
          a: "For Murray-specific keywords, competition is moderate — we typically see movement within 2-4 months. Broader Salt Lake Valley terms take 4-6 months. AI search visibility improvements often show within 4-8 weeks.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
