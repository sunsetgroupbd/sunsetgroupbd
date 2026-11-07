import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";

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

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <section
        className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 120% at 85% 0%, rgba(62,115,85,0.3) 0%, rgba(14,42,31,0) 62%)",
          }}
        />
        <div className="container-site relative max-w-3xl">
          <Link
            href="/blogs"
            className="mb-6 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[rgba(250,249,246,0.62)] transition-colors hover:text-[var(--paper)]"
          >
            <ArrowLeft size={13} />
            Back to the journal
          </Link>

          <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
            {post.category}
          </p>

          <h1 className="text-display-lg mb-6 text-[var(--paper)]">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-5 border-t border-[rgba(250,249,246,0.14)] pt-5 text-[11.5px] text-[rgba(250,249,246,0.62)]">
            <span className="flex items-center gap-1.5">
              <User size={12} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </section>

      <article className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-3xl">
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[var(--sand)]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div
            className="prose-editorial max-w-none text-[var(--ink)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-[18px] bg-[var(--sand)] p-7 md:flex-row md:items-center">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[var(--sunset-green-700)]">
                Published by
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[var(--ink)]">{post.author}</p>
              <p className="mt-1 text-[12px] text-[var(--sunset-grey-700)]">
                Corporate Research &amp; Advisory Division, Sunset Group Bangladesh
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Contact the team
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
