"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutSnippet() {
  const { isBn } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const values = isBn
    ? [
        "সরকারি সাব-রেজিস্ট্রিতে সাফ-কবালা দলিল",
        "বার্ষিক নিরীক্ষিত মুনাফা বিতরণ",
        "২০ জন মনোনীত ব্যক্তির জন্য খরচমূল্যে স্বাস্থ্যসেবা",
        "ভূমিকম্পমুক্ত প্রধান পর্যটন অঞ্চলে প্রকল্প",
      ]
    : [
        "Government sub-registry saf-kabala title deed",
        "Annual audited operational profit distribution",
        "Hospital care at cost for 20 nominated persons",
        "Prime tourism corridors outside earthquake zones",
      ];

  return (
    <section
      ref={ref}
      className="section-gap"
      style={{ backgroundColor: "var(--paper)" }}
      aria-labelledby="about-snippet-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[20px] bg-[var(--sand)]">
              <Image
                src="/images/kuakata/gallery-01.webp"
                alt="Beachfront at Sunset Kuakata Hotel & Resort"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center gap-2 text-[12px] text-[var(--sunset-grey-700)]">
              <MapPin size={12} className="text-[var(--sunset-red)]" />
              Sunset Kuakata Hotel &amp; Resort — Patuakhali, Bangladesh
            </figcaption>
          </motion.figure>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="mb-3.5 flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
              <p className="text-eyebrow" style={{ color: "var(--sunset-green-700)" }}>
                {isBn ? "আমাদের পরিচয়" : "The group"}
              </p>
            </div>

            <h2
              id="about-snippet-heading"
              className="text-display-md mb-5 max-w-xl"
            >
              {isBn
                ? "বিশ্বাসের উপর নির্মিত। নৈতিকতায় বিকশিত।"
                : "Built on trust. Grown through ethical hospitality."}
            </h2>

            <p className="text-lead mb-7 max-w-xl">
              {isBn
                ? "সানসেট গ্রুপ, সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেডের অধীনে পরিচালিত, বাংলাদেশের আতিথেয়তা ও স্বাস্থ্যসেবা খাতে নৈতিক মালিকানা গড়ে তোলার পথপ্রদর্শক।"
                : "Operating under Sunset Kuakata Hotel & Resort Ltd., Sunset Group brings genuine shared ownership to Bangladesh's coastal hospitality, urban healthcare and eco-tourism — with transparent, government-registered title and independent Shariah oversight."}
            </p>

            <ul className="mb-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {values.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(18,54,42,0.08)]">
                    <Check size={10} strokeWidth={2.5} className="text-[var(--sunset-green-700)]" />
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-[var(--ink)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8 grid grid-cols-3 gap-6 border-t border-[var(--line)] pt-6">
              {[
                { value: "04", label: isBn ? "প্রকল্প" : "Developments" },
                { value: "2023", label: isBn ? "প্রতিষ্ঠা" : "Founded" },
                { value: "100%", label: isBn ? "শরীয়া সম্মত" : "Shariah compliant" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-medium tabular-nums text-[var(--sunset-green-900)]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary">
              {isBn ? "কোম্পানি পরিচিতি" : "Our story"}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
