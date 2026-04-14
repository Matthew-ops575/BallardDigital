import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "geo" | "local-seo" | "industry" | "case-study" | "guide";
  categoryLabel: string;
  readTime: string;
  takeaways: string[];
  faqs: FaqItem[];
  content: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  geo: "AI Search / GEO",
  "local-seo": "Local SEO",
  industry: "Industry Insights",
  "case-study": "Case Study",
  guide: "Guide",
};

/**
 * Parse FAQ section from markdown content.
 * Expects format:
 * ## FAQ
 * ### Question text here?
 * Answer text here.
 */
function parseFaqs(content: string): FaqItem[] {
  const faqMatch = content.match(/^## FAQ\s*\n([\s\S]*?)(?=\n## [^#]|$)/m);
  if (!faqMatch) return [];

  const faqBlock = faqMatch[1];
  const faqs: FaqItem[] = [];
  const parts = faqBlock.split(/^### /m).filter((p) => p.trim());

  for (const part of parts) {
    const lines = part.trim().split("\n");
    const question = lines[0].trim().replace(/\?$/, "") + "?";
    const answer = lines
      .slice(1)
      .join(" ")
      .trim()
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ");
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const now = new Date();
  now.setHours(23, 59, 59, 999);

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const wordCount = content.split(/\s+/).length;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 250))} min read`;
      const takeaways: string[] = data.takeaways || [];
      const faqs = parseFaqs(content);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        category: data.category || "guide",
        categoryLabel: CATEGORY_LABELS[data.category] || "Guide",
        readTime,
        takeaways,
        faqs,
        content,
      } as BlogPost;
    })
    .filter((post) => {
      if (!post.date) return true;
      return new Date(post.date) <= now;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}
