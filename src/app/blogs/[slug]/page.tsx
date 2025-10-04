import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  category?: string;
  schemaMarkup?: string[];
}

// Fetch single blog by slug
async function getBlog(slug: string): Promise<BlogType | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const blogs: BlogType[] = await res.json();
    return blogs.find((b) => b.slug === slug) || null;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 mark as Promise
}): Promise<Metadata> {
  const { slug } = await params; // 👈 await before using
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
      alternates: { canonical: "https://www.bigwigmediadigital.com/blogs" },
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.bigwigmediadigital.com/blogs/${blog.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetailsClient slug={slug} />;
}
