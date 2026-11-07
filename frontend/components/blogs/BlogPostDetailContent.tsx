"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/data/blog";
import { useLang } from "@/lib/lang";

interface BlogPostDetailContentProps {
  post: BlogPost;
}

export default function BlogPostDetailContent({ post }: BlogPostDetailContentProps) {
  const { isBn } = useLang();

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
            className="mb-6 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[rgba(255, 255, 255,0.62)] transition-colors hover:text-[var(--paper)]"
          >
            <ArrowLeft size={13} />
            {isBn ? "জার্নালে ফিরে যান" : "Back to the journal"}
          </Link>

          <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
            {isBn ? post.categoryBn : post.category}
          </p>

          <h1 className="text-display-lg mb-6 text-[var(--paper)]">
            {isBn ? post.titleBn : post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 border-t border-[rgba(255, 255, 255,0.14)] pt-5 text-[11.5px] text-[rgba(255, 255, 255,0.62)]">
            <span className="flex items-center gap-1.5">
              <User size={12} />
              {isBn ? post.authorBn : post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readingTime} {isBn ? "মিনিট পাঠ" : "min read"}
            </span>
          </div>
        </div>
      </section>

      <article className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-3xl">
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[var(--sand)]">
            <Image
              src={post.coverImage}
              alt={isBn ? post.titleBn : post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div
            className="prose-editorial max-w-none text-[var(--ink)]"
            dangerouslySetInnerHTML={{
              __html: isBn ? post.contentBn || post.content : post.content,
            }}
          />

          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-[18px] bg-[var(--sand)] p-7 md:flex-row md:items-center">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[var(--sunset-green-700)]">
                {isBn ? "লেখক ও প্রকাশনা" : "Published by"}
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[var(--ink)]">
                {isBn ? post.authorBn : post.author}
              </p>
              <p className="mt-1 text-[12px] text-[var(--sunset-grey-700)]">
                {isBn
                  ? "সানসেট গ্রুপ গবেষণা দল পর্যটন অর্থনীতি, অবকাঠামো রূপান্তর এবং নৈতিক রিয়েল এস্টেট বিনিয়োগ বিশ্লেষণ করে থাকে।"
                  : "Sunset Group Research analyzes tourism economics, infrastructure transition, and ethical real-estate investment."}
              </p>
            </div>
            <Link href="/blogs" className="btn btn-outline shrink-0">
              {isBn ? "অন্যান্য নিবন্ধ" : "More articles"}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
