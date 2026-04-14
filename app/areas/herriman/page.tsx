import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Herriman, UT | Ballard Digital",
  description:
    "Local SEO and AI search optimization for Herriman businesses. Get found by customers searching in Herriman and the southwest Salt Lake Valley.",
  keywords:
    "seo herriman utah, herriman seo company, marketing agency herriman, local seo herriman ut",
};

export default function HerrimanPage() {
  return (
    <CityPage
      city="Herriman"
      county="Salt Lake County"
      population="55,000+"
      headline="Herriman has doubled in size in a decade. Are new residents finding your business?"
      subhead="We help Herriman businesses get found on Google, in AI-powered search, and everywhere their customers look — reaching the wave of new homeowners moving to the southwest valley."
      localContext="Herriman is one of the fastest-growing cities in Utah, doubling its population in roughly a decade. New master-planned communities, the growing commercial corridor along Mountain View, and the city's family-oriented demographic create a unique opportunity for local businesses. Thousands of new homeowners are searching for service providers for the first time — dentists, HVAC companies, real estate agents — and they're starting that search online. Most Herriman businesses rely on word-of-mouth, leaving a wide-open gap in search visibility for businesses willing to invest."
      searchInsight="Rapidly growing population actively searching for new providers"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services-seo",
          description: "HVAC, plumbing, roofing, and electrical companies serving Herriman's new construction and growing neighborhoods — where homeowners are choosing providers for the first time.",
        },
        {
          name: "Dental SEO",
          slug: "dental-seo",
          description: "Dental practices competing for new families moving to Herriman — a constant stream of patients who are actively searching for a new dentist.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate-seo",
          description: "Agents serving one of Utah's hottest growth markets — where new construction and family relocations drive steady demand.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic-seo",
          description: "Orthopedic and sports medicine practices serving Herriman's young, family-heavy population — youth sports, weekend athletes, and active outdoor lifestyles.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "West Jordan", slug: "west-jordan" },
        { name: "Draper", slug: "draper" },
        { name: "Sandy", slug: "sandy" },
        { name: "Lehi", slug: "lehi" },
        { name: "Cottonwood Heights", slug: "cottonwood-heights" },
      ]}
      localProof={{
        description: "TheWasatchGuide.com — our independent content property — already features neighborhood guides and local content for Herriman and the southwest valley, ranking in Google right now. We don't just say we know your market. We can show you Search Console data from content about your community.",
        link: "https://thewasatchguide.com",
      }}
      faqItems={[
        {
          q: "How much does SEO cost for a Herriman business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Is Herriman competitive for SEO?",
          a: "Not yet — and that's the opportunity. Most Herriman businesses rely on word-of-mouth and aren't investing in search visibility. For a fast-growing city, the SEO competition is surprisingly low. Early movers will dominate.",
        },
        {
          q: "How long does it take to see results?",
          a: "For Herriman-specific keywords, competition is low — we typically see movement within 2-3 months. Broader Salt Lake Valley terms take 4-6 months. AI search visibility improvements often show within 4-8 weeks.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
