"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useLang } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { isBn } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const scrollToVideos = () => {
    document.getElementById("video-showcase-heading")?.scrollIntoView({ behavior: "smooth" });
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
          src="/images/kuakata/hero.jpg"
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
            <p className="text-eyebrow" style={{ color: "rgba(250, 249, 246, 0.72)" }}>
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
            style={{ color: "rgba(250, 249, 246, 0.76)" }}
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
              onClick={scrollToVideos}
              className="inline-flex items-center gap-2.5 rounded-md border border-[rgba(250,249,246,0.32)] px-5 py-3.5 text-[13.5px] font-semibold text-[var(--paper)] transition-colors hover:border-[rgba(250,249,246,0.6)] hover:bg-[rgba(250,249,246,0.06)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(250,249,246,0.4)]">
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
          backgroundColor: "rgba(8, 24, 17, 0.55)",
          borderColor: "rgba(250, 249, 246, 0.14)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="container-site grid grid-cols-2 gap-x-6 gap-y-5 py-6 md:grid-cols-4 md:py-7">
          {[
            { value: "04", label: isBn ? "প্রধান প্রকল্প" : "Flagship developments" },
            { value: "100%", label: isBn ? "শরীয়া তদারকি" : "Shariah supervised" },
            { value: "Saf-Kabala", label: isBn ? "নিবন্ধিত দলিল" : "Registered title deed" },
            { value: "2023—29", label: isBn ? "বাস্তবায়ন রোডম্যাপ" : "Delivery roadmap" },
          ].map((item) => (
            <div key={item.label}>
              <div
                className="text-xl font-medium tabular-nums md:text-2xl"
                style={{ color: "var(--paper)", fontFamily: "var(--font-cormorant)" }}
              >
                {item.value}
              </div>
              <div className="mt-1 text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.52)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
