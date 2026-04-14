import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Park City, UT",
  description:
    "Local SEO and AI search optimization for Park City businesses. Get found by tourists, locals, and relocators searching in Park City and Summit County.",
  keywords:
    "seo park city utah, park city seo company, marketing agency park city, local seo park city ut, summit county seo",
};

export default function ParkCityPage() {
  return (
    <CityPage
      city="Park City"
      county="Summit County"
      population="8,500+"
      headline="Get found in Park City."
      subhead="We help Park City businesses get found on Google, in AI-powered search, and everywhere tourists and locals look before choosing where to spend their money."
      localContext="Park City is a unique market — a small-town population of 8,500 that swells to tens of thousands during ski season, Sundance, and summer tourism. Businesses here compete for both a loyal local base and a massive transient tourist audience that searches on their phones in real time. 'Best restaurant Park City,' 'urgent care near me,' 'property management Park City' — these searches happen thousands of times a day during peak season. The businesses that show up win. The ones that rely on Main Street foot traffic alone are leaving money on the table, especially during shoulder seasons when search-driven discovery matters most."
      searchInsight="Tourism-driven search spikes with high commercial intent"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services",
          description: "HVAC, plumbing, and property maintenance companies serving Park City's mix of full-time residents, vacation homes, and rental properties — where seasonal demand creates year-round opportunity.",
        },
        {
          name: "Dental SEO",
          slug: "dental",
          description: "Dental practices serving Park City residents and the growing number of families relocating from the Salt Lake Valley for the mountain lifestyle.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate",
          description: "Agents and brokerages serving Park City's luxury and resort property market — where buyers research extensively online, often from out of state, before visiting.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic",
          description: "Orthopedic and sports medicine practices in Utah's ski country — serving injuries from Deer Valley, Park City Mountain, and the surrounding trail systems year-round.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Ogden", slug: "ogden" },
        { name: "Sandy", slug: "sandy" },
        { name: "Cottonwood Heights", slug: "cottonwood-heights" },
        { name: "Draper", slug: "draper" },
        { name: "Lehi", slug: "lehi" },
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for a Park City business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Is SEO different for a tourism-driven market?",
          a: "Yes. Park City businesses need to capture seasonal search spikes — ski season, Sundance, summer activities — while maintaining visibility year-round. We build content calendars around Park City's seasonal patterns and optimize for the high-intent queries tourists type on their phones.",
        },
        {
          q: "Can SEO help during shoulder seasons?",
          a: "That's exactly when SEO matters most. During peak season, foot traffic and word-of-mouth carry some businesses. During shoulder seasons, the businesses that show up in search are the ones that stay busy. SEO builds the consistent baseline that smooths out seasonal dips.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
