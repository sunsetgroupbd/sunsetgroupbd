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

export default function GalleryPage() {
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

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={isBn ? "ভিজ্যুয়াল আর্কাইভ · স্থাপত্য" : "Visual archive · Architecture"}
        title={isBn ? "প্রকল্প গ্যালারি।" : "Project gallery."}
        description={
          isBn
            ? "কুয়াকাটা, ঢাকা ও অন্যান্য অঞ্চলে আমাদের সক্রিয় পোর্টফোলিওর ফটোগ্রাফি, কাজের অগ্রগতি এবং স্থাপত্য দৃশ্য।"
            : "Photography, site progression and architectural visualisations across our active portfolio in Kuakata, Dhaka and beyond."
        }
        image="/images/kuakata/gallery-01.webp"
        imageAlt={isBn ? "কুয়াকাটা সৈকত" : "Kuakata beachfront"}
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="mb-10 flex flex-wrap gap-2">
            {galleryCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-[12px] font-semibold transition-colors ${
                    isActive
                      ? "border-[var(--sunset-green-900)] bg-[var(--sunset-green-900)] text-[var(--paper)]"
                      : "border-[var(--line-strong)] bg-transparent text-[var(--ink)] hover:bg-[var(--sand)]"
                  }`}
                >
                  {isBn ? cat.labelBn : cat.label}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredImages.map((image, idx) => (
                <motion.button
                  type="button"
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[14px] bg-[var(--sand)]"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={isBn ? image.altBn : image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(14,42,31,0.6)] via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-left text-[11.5px] font-medium leading-snug text-[var(--paper)]">
                      {isBn ? image.altBn : image.alt}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {currentImage && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: "rgba(9, 24, 17, 0.95)" }}
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="max-w-lg truncate text-[12.5px] text-[rgba(255, 255, 255,0.8)]">
                {isBn ? currentImage.altBn : currentImage.alt}
              </p>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.24)] text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)]"
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
                );
              }}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.24)] text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)] md:left-7"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
              }}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.24)] text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)] md:right-7"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <div
              className="relative flex h-[72vh] w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <p className="absolute bottom-5 left-0 right-0 text-center text-[11px] text-[rgba(255, 255, 255,0.5)]">
              {isBn
                ? `ছবি ${lightboxIndex + 1} / ${filteredImages.length} · দেখতে তীর বা সোয়াইপ ব্যবহার করুন`
                : `Image ${lightboxIndex + 1} of ${filteredImages.length} · Use arrow keys to navigate`}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
