"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { useLang } from "@/lib/lang";
import {
  galleryImages,
  galleryCategories,
  GalleryCategory,
} from "@/data/gallery";

export default function GalleryContent() {
  const { isBn } = useLang();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredImages.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={isBn ? "প্রকল্প গ্যালারি" : "Project visual portfolio"}
        title={isBn ? "দৃশ্যপটে আমাদের প্রকল্প" : "Visual portfolio & master plans"}
        description={
          isBn
            ? "কুয়াকাটা রিসোর্ট, সান কেয়ার হাসপাতাল, ঢাকা ফ্যান্টাসি আইল্যান্ড এবং কুয়াকাটা মেরিন ড্রাইভের ম্যানগ্রোভ হোটেল ও রিসোর্টের স্থাপত্য ও নির্মাণ অগ্রগতি।"
            : "High-resolution architectural renders, master plan drafts and on-ground views across Sunset Group's developments."
        }
        image="/images/kuakata/hero.webp"
        imageAlt="Sunset Group project portfolio gallery"
        align="center"
      />

      <section className="section-gap">
        <div className="container-site">
          {/* Category tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-[12.5px] font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[var(--sunset-green-900)] text-[var(--paper)] shadow-[0_4px_16px_-4px_rgba(18,54,42,0.3)]"
                      : "border border-[var(--line)] bg-white text-[var(--sunset-grey-700)] hover:border-[var(--sunset-green-900)] hover:text-[var(--ink)]"
                  }`}
                >
                  {isBn ? cat.labelBn : cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[16px] bg-[var(--sand)]"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <Image
                    src={img.src}
                    alt={isBn ? (img.altBn || img.alt) : img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.6)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[12px] font-medium text-[var(--paper)]">
                      {isBn ? (img.altBn || img.alt) : img.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: "rgba(9, 24, 17, 0.96)" }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.2)] text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)]"
              aria-label="Close image viewer"
            >
              <X size={20} />
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? (prev - 1 + filteredImages.length) % filteredImages.length
                    : null
                );
              }}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.24)] text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)] md:left-7"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % filteredImages.length : null
                );
              }}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.24)] text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)] md:right-7"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            {/* Main image */}
            <div
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-[14px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={
                  isBn
                    ? (filteredImages[lightboxIndex].altBn || filteredImages[lightboxIndex].alt)
                    : filteredImages[lightboxIndex].alt
                }
                width={filteredImages[lightboxIndex].width || 1200}
                height={filteredImages[lightboxIndex].height || 800}
                className="max-h-[80vh] w-auto object-contain"
                priority
              />
              <p className="mt-3 text-center text-sm font-medium text-[var(--paper)]">
                {isBn
                  ? (filteredImages[lightboxIndex].altBn || filteredImages[lightboxIndex].alt)
                  : filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-center text-[11px] text-[rgba(255, 255, 255,0.5)]">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
