"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectsShowcase() {
  const { isBn } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  const featured = projects.slice(0, 4);

  return (
    <section
      ref={ref}
      className="section-gap"
      style={{ backgroundColor: "var(--paper)" }}
      aria-labelledby="projects-showcase-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={isBn ? "প্রধান প্রকল্পসমূহ" : "Investment portfolio"}
          title={isBn ? "স্থায়ী সম্পদ ও হালাল আয়ের সুযোগ" : "Signature deeded developments"}
          description={
            isBn
              ? "সরকারি সাব-রেজিস্ট্রিতে নিবন্ধিত সাফ-কবালা দলিলের মাধ্যমে প্রকৃত মালিকানা।"
              : "Genuine ownership, registered at the government sub-registry and structured for long-term halal income."
          }
          action={
            <Link href="/projects" className="btn btn-outline">
              {isBn ? "সকল প্রকল্প" : "View the portfolio"}
              <ArrowRight size={15} />
            </Link>
          }
          className="mb-16 md:mb-20"
        />

        <div className="space-y-20 md:space-y-28">
          {featured.map((project, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, ease: EASE }}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group relative block aspect-[16/11] overflow-hidden rounded-[20px] bg-[var(--sand)]"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.35)] via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#0e2a1f] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-md border border-white/20">
                      <MapPin size={12} className="text-[var(--sunset-red)]" />
                      {isBn ? project.locationBn : project.location}
                    </div>
                  </Link>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--sunset-red)]">
                    {project.badge
                      ? isBn
                        ? project.badgeBn || project.badge
                        : project.badge
                      : isBn
                        ? "প্রকল্প"
                        : "Development"}
                  </p>

                  <h3 className="text-display-md mb-4">
                    {isBn ? project.nameBn : project.name}
                  </h3>

                  <p className="text-body mb-7 max-w-md text-[var(--sunset-grey-700)]">
                    {isBn ? project.descriptionBn : project.description}
                  </p>

                  <dl className="mb-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--line)] pt-6">
                    {project.keyFacts.slice(0, 4).map((fact, idx) => (
                      <div key={idx}>
                        <dt className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-[13.5px] font-semibold text-[var(--ink)]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-wrap items-center gap-5">
                    <Link href={`/projects/${project.slug}`} className="btn btn-primary">
                      {isBn ? "প্রকল্প বিস্তারিত" : "Explore project"}
                      <ArrowRight size={15} />
                    </Link>

                    <Link
                      href={`/contact?project=${encodeURIComponent(project.name)}`}
                      className="link-arrow"
                    >
                      {isBn ? "মালিকানা আবেদন" : "Enquire about ownership"}
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
