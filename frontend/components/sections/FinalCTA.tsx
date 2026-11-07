"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  const { isBn } = useLang();

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      aria-labelledby="final-cta-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 120% at 80% 0%, rgba(62,115,85,0.32) 0%, rgba(14,42,31,0) 62%)",
        }}
      />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
            <p className="text-eyebrow" style={{ color: "rgba(255, 255, 255,0.62)" }}>
              {isBn ? "শরীয়া তদারকি · সাফ-কবালা নিবন্ধিত" : "Shariah supervised · Saf-kabala registered"}
            </p>
          </div>

          <h2 id="final-cta-heading" className="text-display-lg mb-5 text-[var(--paper)]">
            {isBn
              ? "সানসেট গ্রুপের সাথে শুরু হোক আপনার হালাল আয়ের যাত্রা"
              : "Become an equity partner in Sunset Group"}
          </h2>

          <p className="text-body-lg mx-auto mb-9 max-w-xl leading-relaxed text-[rgba(255, 255, 255,0.7)]">
            {isBn
              ? "সীমিত সংখ্যক সাফ-কবালা নিবন্ধিত শেয়ারহোল্ডার প্যাকেজ উপলব্ধ। আজই আমাদের বিনিয়োগ উপদেষ্টার সাথে কথা বলুন।"
              : "A limited number of saf-kabala registered packages remain. Speak directly with an investment adviser today."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+8801325074535"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--paper)] px-5 py-3.5 text-[13px] font-semibold text-[var(--sunset-green-900)] transition-colors hover:bg-white"
            >
              <Phone size={15} />
              +880 1325 074535
            </a>

            <a
              href="https://wa.me/8801325074535"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              <MessageCircle size={15} />
              {isBn ? "হোয়াটসঅ্যাপ" : "WhatsApp"}
            </a>

            <Link href="/contact" className="btn btn-outline-white">
              {isBn ? "আগ্রহ প্রকাশ করুন" : "Enquire now"}
              <ArrowRight size={14} />
            </Link>
          </div>

          <p className="mt-9 flex items-center justify-center gap-2 text-[11.5px] text-[rgba(255, 255, 255,0.5)]">
            <MapPin size={12} className="text-[var(--sunset-red)]" />
            27 Shaptak Square, Level-11, Old Dhanmondi 27, Dhaka-1209
          </p>
        </motion.div>
      </div>
    </section>
  );
}
