import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "geo" | "local-seo" | "industry" | "case-study" | "guide";
  categoryLabel: string;
  readTime: string;
  content: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  geo: "AI Search / GEO",
  "local-seo": "Local SEO",
  industry: "Industry Insights",
  "case-study": "Case Study",
  guide: "Guide",
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const wordCount = content.split(/\s+/).length;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 250))} min read`;

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        category: data.category || "guide",
        categoryLabel: CATEGORY_LABELS[data.category] || "Guide",
        readTime,
        content,
      } as BlogPost;
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
