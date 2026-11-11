import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import BlogPostDetailContent from "@/components/blogs/BlogPostDetailContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Sunset Group Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://sunsetgroupbd.com${post.coverImage}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Sunset Group Editorial",
      url: "https://sunsetgroupbd.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Sunset Group",
      logo: {
        "@type": "ImageObject",
        url: "https://sunsetgroupbd.com/Sunset-Group-Logo.png",
      },
    },
    mainEntityOfPage: `https://sunsetgroupbd.com/blogs/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostDetailContent post={post} />
    </>
  );
}