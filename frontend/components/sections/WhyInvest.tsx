"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  MapPin,
  Landmark,
  HeartPulse,
  FileCheck2,
} from "lucide-react";
import { useLang } from "@/lib/lang";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyInvest() {
  const { isBn } = useLang();

  const reasons = [
    {
      icon: TrendingUp,
      title: "Lifetime halal income",
      titleBn: "আজীবন হালাল মুনাফা",
      desc: "Profit-sharing generated from real resort, suite and medical operations. No riba, no ambiguous guarantees.",
      descBn: "প্রকৃত হোটেল ও হাসপাতাল পরিচালনা থেকে অর্জিত রাজস্বের ভিত্তিতে বার্ষিক মুনাফা ভাগাভাগি। শতভাগ সুদমুক্ত ও শরীয়া অনুমোদিত।",
    },
    {
      icon: ShieldCheck,
      title: "Shariah supervisory board",
      titleBn: "শরীয়া তদারকি কমিটি",
      desc: "Independent scholars review every deed, ledger and audit report to guarantee strict compliance.",
      descBn: "স্বাধীন ইসলামিক স্কলাররা প্রতিটি চুক্তি ও আয়-ব্যয় হিসাব পুঙ্খানুপুঙ্খভাবে তদারকি করেন।",
    },
    {
      icon: MapPin,
      title: "Prime strategic locations",
      titleBn: "কৌশলগত প্রাইম লোকেশন",
      desc: "Kuakata's sun coast, Dhaka's Basila medical corridor and Mohammadpur's eco-tourism zone.",
      descBn: "কুয়াকাটার সৈকত, মোহাম্মদপুর-বসিলা স্বাস্থ্য হাব এবং জাতীয় সংসদ থেকে মাত্র ২০ মিনিটে ঢাকা ফ্যান্টাসি আইল্যান্ড।",
    },
    {
      icon: Landmark,
      title: "Government master plan",
      titleBn: "সরকারি মাস্টার প্ল্যান",
      desc: "Positioned within the Kuakata Tourism City plan, supporting infrastructure and long-term valuation.",
      descBn: "সরকার ঘোষিত কুয়াকাটা ট্যুরিজম সিটি মাস্টার প্ল্যানের আওতাভুক্ত এলাকায় অবস্থিত।",
    },
    {
      icon: HeartPulse,
      title: "Dual-sector resilience",
      titleBn: "দ্বৈত খাতের সুরক্ষা",
      desc: "Diversify across leisure hospitality and resilient private healthcare, with at-cost care privileges.",
      descBn: "আতিথেয়তা এবং স্থিতিশীল স্বাস্থ্যসেবা খাতে বিনিয়োগের সমন্বয়, সাথে খরচমূল্যে চিকিৎসা সুবিধা।",
    },
    {
      icon: FileCheck2,
      title: "Saf-kabala legal title",
      titleBn: "সাফ-কবালা আইনি মালিকানা",
      desc: "Permanent ownership registered at the government sub-registry. Legally heritable and transferable.",
      descBn: "সরকারি সাব-রেজিস্ট্রি অফিসে সাফ-কবালা নিবন্ধনের মাধ্যমে স্থায়ী, হস্তান্তরযোগ্য ও উত্তরাধিকারযোগ্য মালিকানা।",
    },
  ];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--sand)" }}
      aria-labelledby="why-invest-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={isBn ? "বিনিয়োগের মূল ভিত্তি" : "Why Sunset Group"}
          title={
            isBn
              ? "সানসেট গ্রুপ বেছে নেওয়ার ছয়টি কারণ"
              : "Six reasons discerning investors partner with us"
          }
          description={
            isBn
              ? "স্বচ্ছ মালিকানা, স্বাধীন তদারকি এবং বাস্তব পরিচালন আয় — একই কাঠামোতে।"
              : "Transparent ownership, independent oversight and real operating income — held in one structure."
          }
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.05 }}
                className="group flex flex-col bg-white p-7 transition-colors hover:bg-[var(--paper)] md:p-9"
              >
                <div className="mb-7 flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="text-[11px] tabular-nums text-[rgba(23,27,24,0.28)]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mb-2.5 text-[15.5px] font-semibold leading-snug text-[var(--ink)]">
                  {isBn ? item.titleBn : item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? item.descBn : item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
