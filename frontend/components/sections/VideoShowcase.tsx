"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";
import { projectVideos, ProjectVideo } from "@/data/videos";
import { useLang } from "@/lib/lang";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoShowcase() {
  const { isBn } = useLang();
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);

  return (
    <section
      id="video-showcase"
      className="section-gap scroll-mt-20"
      style={{ backgroundColor: "var(--sand)" }}
      aria-labelledby="video-showcase-heading"
    >
      <div className="container-site">
        <div id="video-showcase-heading">
          <SectionHeading
            eyebrow={isBn ? "প্রকল্পের ভিডিও" : "Project films"}
            title={isBn ? "ভিডিওতে দেখুন আমাদের প্রকল্পসমূহ" : "Witness the vision in motion"}
            description={
              isBn
                ? "নির্মাণ অগ্রগতি, স্থাপত্য উপস্থাপনা এবং বিনিয়োগকারী ব্রিফিং সরাসরি দেখুন।"
                : "On-ground progress, architectural walkthroughs and investor briefings from our official channel."
            }
            className="mb-14 md:mb-16"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projectVideos.map((video, idx) => (
            <motion.button
              key={video.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveVideo(video)}
              className="group flex flex-col overflow-hidden rounded-[16px] border border-[var(--line)] bg-white text-left transition-shadow hover:shadow-[0_18px_50px_-30px_rgba(18,54,42,0.35)]"
              aria-label={`Play ${video.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--ink)]">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  unoptimized
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(14,42,31,0.28)] transition-colors group-hover:bg-[rgba(14,42,31,0.42)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--sunset-green-950)] shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play size={15} fill="currentColor" stroke="none" className="ml-0.5" />
                  </span>
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-[#0e2a1f] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-md border border-white/20">
                  {video.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
                  {isBn ? video.projectBn : video.project}
                </p>
                <h3 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-snug text-[var(--ink)]">
                  {isBn ? video.titleBn : video.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? video.descriptionBn : video.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--sunset-green-900)]">
                  {isBn ? "ভিডিও দেখুন" : "Watch film"}
                  <Play size={10} fill="currentColor" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: "rgba(9, 24, 17, 0.94)" }}
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-[18px] border bg-[var(--ink)]"
              style={{ borderColor: "rgba(255, 255, 255, 0.16)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255, 255, 255,0.12)] px-5 py-3.5 text-[var(--paper)]">
                <span className="truncate text-sm font-medium">
                  {isBn ? activeVideo.titleBn : activeVideo.title}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded-md p-1 text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)]"
                  aria-label="Close video player"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              <div className="flex flex-col gap-4 bg-[var(--sunset-green-950)] p-5 text-[var(--paper)] md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-[12.5px] leading-relaxed text-[rgba(255, 255, 255,0.66)]">
                  {isBn ? activeVideo.descriptionBn : activeVideo.description}
                </p>
                <a
                  href={`https://youtu.be/${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white btn-sm shrink-0"
                >
                  {isBn ? "ইউটিউবে খুলুন" : "Open on YouTube"}
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
