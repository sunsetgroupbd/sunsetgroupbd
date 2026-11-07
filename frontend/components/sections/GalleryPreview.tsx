"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { galleryImages } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GalleryPreview() {
  const { isBn } = useLang();

  const preview = [
    galleryImages[0],
    galleryImages[1],
    galleryImages[8],
    galleryImages[13],
    galleryImages[20],
  ].filter(Boolean);

  const labels = [
    isBn ? "কুয়াকাটা রিসোর্ট" : "Kuakata resort",
    isBn ? "সৈকত প্রাঙ্গণ" : "Beachfront",
    isBn ? "সান কেয়ার হাসপাতাল" : "Sun Care hospital",
    isBn ? "ঢাকা ফ্যান্টাসি আইল্যান্ড" : "Dhaka Fantasy Island",
    isBn ? "দ্য ডেক" : "The Deck",
  ];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--sand)" }}
      aria-labelledby="gallery-preview-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={isBn ? "প্রকল্পের স্থিরচিত্র" : "Visual archive"}
          title={isBn ? "স্থাপত্য ও সাইটের অগ্রগতি" : "Architecture and site progression"}
          action={
            <Link href="/gallery" className="btn btn-outline">
              {isBn ? "সম্পূর্ণ গ্যালারি" : "Explore the gallery"}
              <ArrowRight size={15} />
            </Link>
          }
          className="mb-12 md:mb-14"
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE }}
            className="group relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-[20px] bg-[var(--ink)] md:aspect-auto md:min-h-[440px]"
          >
            <Image
              src={preview[0].src}
              alt={preview[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.5)] via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#0e2a1f] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white shadow-md border border-white/20">
              {labels[0]}
            </figcaption>
          </motion.figure>

          {preview.slice(1, 5).map((img, i) => (
            <motion.figure
              key={img.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 + i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-[14px] bg-[var(--ink)] md:aspect-auto md:min-h-[210px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.42)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 text-[10.5px] font-medium text-[rgba(255, 255, 255,0.9)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {labels[i + 1]}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
