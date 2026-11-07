"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { blogPosts } from "@/data/blog";
import { useLang } from "@/lib/lang";

export default function BlogsContent() {
  const { isBn } = useLang();
  const [lead, ...rest] = blogPosts;

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "বিশ্লেষণ ও বাজার পর্যবেক্ষণ"
            : "Analysis & market insight"
        }
        title={
          isBn
            ? "সানসেট গ্রুপ জার্নাল ও গবেষণা।"
            : "The Sunset Group journal."
        }
        description={
          isBn
            ? "বাংলাদেশের পর্যটন অবকাঠামো, শরীয়া-সম্মত রিয়েল এস্টেট কাঠামো এবং দীর্ঘমেয়াদী সম্পদ বৃদ্ধির বিশ্লেষণ ও গবেষণা নিবন্ধ।"
            : "Research on Bangladesh's tourism infrastructure, Shariah-compliant real-estate structures and long-term asset appreciation."
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          {lead && (
            <Link
              href={`/blogs/${lead.slug}`}
              className="group mb-12 grid grid-cols-1 items-center gap-8 border-b border-[var(--line)] pb-12 lg:grid-cols-2 lg:gap-14"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[var(--sand)]">
                <Image
                  src={lead.coverImage}
                  alt={isBn ? lead.titleBn : lead.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
                  {isBn ? lead.categoryBn : lead.category} · {isBn ? "সর্বশেষ" : "Latest"}
                </p>
                <h2 className="text-display-md mb-4 text-[var(--sunset-green-900)]">
                  {isBn ? lead.titleBn : lead.title}
                </h2>
                <p className="mb-6 max-w-xl text-[13.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? lead.excerptBn : lead.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-[11.5px] text-[var(--sunset-grey-700)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {lead.publishedAt}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {lead.readingTime} {isBn ? "মিনিট পাঠ" : "min read"}
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-[18px] border border-[var(--line)] bg-white transition-shadow hover:shadow-[0_18px_50px_-30px_rgba(18,54,42,0.35)]"
              >
                <div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-[var(--sand)]"
                  >
                    <Image
                      src={post.coverImage}
                      alt={isBn ? post.titleBn : post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="p-6">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
                      {isBn ? post.categoryBn : post.category}
                    </p>
                    <h3 className="text-display-xs mb-3 text-[var(--sunset-green-900)]">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="transition-colors hover:text-[var(--sunset-green-700)]"
                      >
                        {isBn ? post.titleBn : post.title}
                      </Link>
                    </h3>
                    <p className="line-clamp-2 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                      {isBn ? post.excerptBn : post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[var(--line)] px-6 py-4 text-[11.5px] text-[var(--sunset-grey-700)]">
                  <span>{post.publishedAt}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[var(--sunset-green-900)] transition-colors hover:text-[var(--sunset-green-700)]"
                  >
                    <span>{isBn ? "পড়ুন" : "Read"}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
