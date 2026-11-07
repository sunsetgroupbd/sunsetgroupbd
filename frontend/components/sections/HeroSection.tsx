"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, X, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang";
import { projectVideos } from "@/data/videos";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { isBn } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const featuredVideo = projectVideos[0];

  const scrollToVideos = () => {
    setIsVideoOpen(false);
    const target = document.getElementById("video-showcase");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="/images/kuakata/hero.webp"
          alt="Sunset Kuakata Hotel & Resort on the Bay of Bengal"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 24, 17, 0.55) 0%, rgba(8, 24, 17, 0.32) 36%, rgba(8, 24, 17, 0.72) 78%, rgba(8, 24, 17, 0.92) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="container-site relative z-10 pt-28 pb-10 md:pt-36 md:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[var(--sunset-red)]" aria-hidden />
            <p className="text-eyebrow" style={{ color: "rgba(255, 255, 255, 0.72)" }}>
              {isBn
                ? "শরীয়া তদারকি · সাফ-কবালা নিবন্ধিত · কোম্পানি আইন ১৯৯৪"
                : "Shariah supervised · Saf-Kabala registered · Company Act 1994"}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="text-display-xl mb-6"
            style={{ color: "var(--paper)", fontFamily: "var(--font-cormorant)" }}
          >
            {isBn
              ? "বিলাসিতা ও বিনোদন, নৈতিক আতিথেয়তার সাথে"
              : "Luxury and recreation, grounded in ethical hospitality"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="text-body-lg mb-9 max-w-xl leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.76)" }}
          >
            {isBn
              ? "কুয়াকাটা রিসোর্ট, সান কেয়ার হাসপাতাল এবং ঢাকা ফ্যান্টাসি আইল্যান্ডে সাফ-কবালা নিবন্ধিত স্থায়ী মালিকানা। শরীয়া তদারকিতে পরিচালিত, দীর্ঘমেয়াদি হালাল আয়।"
              : "Own deeded equity in Bangladesh's most considered hospitality and healthcare ventures — governed by Islamic finance principles, designed for long-term halal income."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--paper)] px-5 py-3.5 text-[13.5px] font-semibold text-[var(--sunset-green-900)] transition-colors hover:bg-white"
            >
              {isBn ? "প্রকল্পসমূহ দেখুন" : "Explore the portfolio"}
              <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-md border border-[rgba(255, 255, 255,0.32)] px-5 py-3.5 text-[13.5px] font-semibold text-[var(--paper)] transition-colors hover:border-[rgba(255, 255, 255,0.6)] hover:bg-[rgba(255, 255, 255,0.06)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.4)]">
                <Play size={9} fill="currentColor" stroke="none" className="ml-0.5" />
              </span>
              {isBn ? "প্রকল্পের ভিডিও" : "Watch the film"}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Quiet fact strip */}
      <div
        className="relative z-10 border-t"
        style={{
          backgroundColor: "rgba(8, 24, 17, 0.95)",
          borderColor: "rgba(255, 255, 255, 0.14)",
        }}
      >
        <div className="container-site grid grid-cols-3 gap-x-4 gap-y-5 py-5 sm:gap-x-8 md:py-7">
          {[
            { value: "04", label: isBn ? "প্রধান প্রকল্প" : "Flagship developments" },
            { value: "100%", label: isBn ? "শরীয়া তদারকি" : "Shariah supervised" },
            { value: "Saf-Kabala", label: isBn ? "নিবন্ধিত দলিল" : "Registered title deed" },
          ].map((item) => (
            <div key={item.label}>
              <div
                className="text-xl font-medium tabular-nums md:text-2xl"
                style={{ color: "var(--paper)", fontFamily: "var(--font-cormorant)" }}
              >
                {item.value}
              </div>
              <div className="mt-1 text-[10.5px] uppercase tracking-[0.12em] text-[rgba(255, 255, 255,0.52)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && featuredVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: "rgba(9, 24, 17, 0.94)" }}
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-[18px] border bg-[var(--ink)]"
              style={{ borderColor: "rgba(255, 255, 255, 0.16)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(255, 255, 255,0.12)] px-5 py-3.5 text-[var(--paper)]">
                <span className="truncate text-sm font-medium">
                  {isBn ? featuredVideo.titleBn : featuredVideo.title}
                </span>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="rounded-md p-1 text-[var(--paper)] transition-colors hover:bg-[rgba(255, 255, 255,0.1)]"
                  aria-label="Close video player"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              <div className="flex flex-col gap-4 bg-[var(--sunset-green-950)] p-5 text-[var(--paper)] md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-[12.5px] leading-relaxed text-[rgba(255, 255, 255,0.66)]">
                  {isBn ? featuredVideo.descriptionBn : featuredVideo.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={scrollToVideos}
                    className="text-[12px] font-semibold text-[rgba(255, 255, 255,0.85)] underline underline-offset-4 hover:text-white"
                  >
                    {isBn ? "সকল ভিডিও দেখুন ↓" : "View all films ↓"}
                  </button>
                  <a
                    href={`https://youtu.be/${featuredVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-white btn-sm"
                  >
                    {isBn ? "ইউটিউবে খুলুন" : "Open on YouTube"}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
