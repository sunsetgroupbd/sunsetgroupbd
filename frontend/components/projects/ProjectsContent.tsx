"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ProjectImageSlideshow from "@/components/ui/ProjectImageSlideshow";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/lang";

export default function ProjectsContent() {
  const { isBn } = useLang();

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "দলিলভিত্তিক পোর্টফোলিও · সাফ-কবালা · শরীয়া তদারকি"
            : "Deeded portfolio · Saf-kabala · Shariah supervised"
        }
        title={
          isBn
            ? "আমাদের প্রধান বিনিয়োগ প্রকল্পসমূহ।"
            : "Flagship investment projects."
        }
        description={
          isBn
            ? "যাচাইকৃত আতিথেয়তা, স্বাস্থ্যসেবা ও বিনোদন কেন্দ্র — যা বিচক্ষণ অংশীদারদের জন্য নৈতিক, সম্পদ-সমর্থিত মুনাফা নিশ্চিত করে।"
            : "Verified hospitality, healthcare and leisure destinations offering ethical, asset-backed profit-sharing for discerning shareholders."
        }
        image="/images/kuakata/gallery-02.webp"
        imageAlt={isBn ? "কুয়াকাটা উপকূলরেখা" : "Kuakata coastline"}
        actions={
          <>
            <Link href="/packages" className="btn btn-primary">
              {isBn ? "প্যাকেজ তুলনা করুন" : "Compare packages"}
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              {isBn ? "পরামর্শ বুক করুন" : "Book a consultation"}
            </Link>
          </>
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-[var(--line)] bg-white transition-shadow hover:shadow-[0_20px_55px_-34px_rgba(18,54,42,0.4)]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block aspect-[16/11] overflow-hidden bg-[var(--sand)]"
                >
                  {project.slideshowImages && project.slideshowImages.length > 0 ? (
                    <ProjectImageSlideshow
                      slides={project.slideshowImages}
                      isBn={isBn}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <>
                      <Image
                        src={project.heroImage}
                        alt={isBn ? project.nameBn : project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.42)] via-transparent to-transparent" />
                    </>
                  )}
                  {(isBn ? project.badgeBn : project.badge) && !project.slideshowImages && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#0e2a1f] px-3 py-1 text-[10px] font-semibold text-white shadow-md border border-white/20">
                      {isBn ? project.badgeBn : project.badge}
                    </span>
                  )}
                  {!project.slideshowImages && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-[#0e2a1f]/90 backdrop-blur-sm px-2.5 py-1 text-[10.5px] font-semibold text-white shadow-md border border-white/20">
                      <MapPin size={11} className="text-[var(--sunset-red)]" />
                      <span className="text-white font-medium">{isBn ? project.locationBn : project.location}</span>
                    </div>
                  )}
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--sunset-green-800)]">
                      <MapPin size={11} className="text-[var(--sunset-red)]" />
                      {isBn ? project.locationBn : project.location}
                    </p>
                    <h3 className="text-display-sm mb-2 text-[var(--sunset-green-900)]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="transition-colors hover:text-[var(--sunset-green-700)]"
                      >
                        {isBn ? project.nameBn : project.name}
                      </Link>
                    </h3>
                    <p className="line-clamp-3 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                      {isBn ? project.descriptionBn : project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[var(--line)] pt-5">
                    <div className="mb-4 flex items-center justify-between text-[11px]">
                      {project.safKabala && (
                        <span className="inline-flex items-center gap-1 font-semibold text-[var(--sunset-green-700)]">
                          <ShieldCheck size={12} />
                          {isBn ? "সাফ-কবালা নিবন্ধিত" : "Saf-kabala registered"}
                        </span>
                      )}
                      <span className="text-[var(--sunset-grey-700)]">
                        {isBn ? "শরীয়া তদারকি" : "Shariah supervised"}
                      </span>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn btn-outline w-full justify-between"
                    >
                      <span>{isBn ? "প্রকল্প বিবরণ ও প্যাকেজ" : "View project & packages"}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section
        className="py-14"
        style={{ backgroundColor: "var(--sand)", borderTop: "1px solid var(--line)" }}
      >
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
              {isBn ? "যৌথ বিনিয়োগ সুযোগ" : "Multi-project opportunity"}
            </p>
            <h3 className="text-display-sm mt-1 text-[var(--sunset-green-900)]">
              {isBn
                ? "একাধিক প্রকল্পে বিনিয়োগ করতে চান?"
                : "Looking to allocate across multiple projects?"}
            </h3>
            <p className="mt-1 max-w-xl text-[12.5px] text-[var(--sunset-grey-700)]">
              {isBn
                ? "আমাদের 'সুপার কম্বো' প্যাকেজ কুয়াকাটা রিসোর্ট, সান কেয়ার হাসপাতাল, ঢাকা ফ্যান্টাসি আইল্যান্ড এবং কুয়াকাটা মেরিন ড্রাইভ সংলগ্ন ম্যানগ্রোভ হোটেল ও রিসোর্টে একসাথে মালিকানা সুবিধা প্রদান করে।"
                : "Our Super Combo package gives you an ownership stake in Kuakata Resort, Sun Care Hospital, Dhaka Fantasy Island, and Mangrove Hotel & Resort (Kuakata Marine Drive) under one single entry."}
            </p>
          </div>
          <Link href="/projects/super-combo" className="btn btn-primary shrink-0">
            {isBn ? "সুপার কম্বো দেখুন" : "Explore Super Combo"}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
