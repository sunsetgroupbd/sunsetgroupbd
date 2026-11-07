import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Market Insights — Sunset Group",
  description:
    "Read articles on tourism development in Kuakata, Islamic real-estate investment principles, and the healthcare market in Bangladesh.",
};

export default function BlogsPage() {
  const [lead, ...rest] = blogPosts;

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Analysis & market insight"
        title="The Sunset Group journal."
        description="Research on Bangladesh's tourism infrastructure, Shariah-compliant real-estate structures and long-term asset appreciation."
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
                  alt={lead.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
                  {lead.category} · Latest
                </p>
                <h2 className="text-display-md mb-4 text-[var(--sunset-green-900)]">
                  {lead.title}
                </h2>
                <p className="mb-6 max-w-xl text-[13.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {lead.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-[11.5px] text-[var(--sunset-grey-700)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {lead.publishedAt}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {lead.readingTime} min read
                  </span>
                </div>
                <span className="link-arrow mt-6">
                  Read the article
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-[var(--line)] bg-white transition-shadow hover:shadow-[0_20px_55px_-34px_rgba(18,54,42,0.4)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--sand)]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[rgba(250,249,246,0.92)] px-2.5 py-1 text-[10px] font-semibold text-[var(--sunset-green-900)] backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-[11px] text-[var(--sunset-grey-700)]">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readingTime} min
                    </span>
                  </div>
                  <h3 className="mb-2.5 line-clamp-2 text-[15px] font-semibold leading-snug text-[var(--ink)]">
                    {post.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {post.excerpt}
                  </p>
                  <span className="link-arrow mt-auto">
                    Read
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
