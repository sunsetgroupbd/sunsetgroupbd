"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Anchor, Car, PlaneTakeoff, Sunrise, Sunset, Trees } from "lucide-react";
import { useLang } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function WhyKuakata() {
  const { isBn } = useLang();

  const infrastructure = [
    {
      icon: Landmark,
      label: "Padma Bridge",
      labelBn: "পদ্মা সেতু",
      sub: "A five-hour expressway transit from Dhaka",
      subBn: "ঢাকা থেকে নির্বিঘ্ন পাঁচ ঘণ্টার এক্সপ্রেসওয়ে যাতায়াত",
    },
    {
      icon: Anchor,
      label: "Payra deep-sea port",
      labelBn: "পায়রা সমুদ্র বন্দর",
      sub: "A major maritime hub driving the regional economy",
      subBn: "বৃহৎ সমুদ্র বন্দর যা দক্ষিণাঞ্চলের অর্থনীতি সমৃদ্ধ করছে",
    },
    {
      icon: Car,
      label: "Four-lane highway",
      labelBn: "চার লেন মহাসড়ক",
      sub: "Direct national highway to the zero point",
      subBn: "জিরো পয়েন্ট পর্যন্ত সরাসরি জাতীয় হাইওয়ে",
    },
    {
      icon: PlaneTakeoff,
      label: "Planned airport",
      labelBn: "পরিকল্পিত বিমানবন্দর",
      sub: "An upcoming domestic and regional air terminal",
      subBn: "ভবিষ্যৎ অভ্যন্তরীণ ও আঞ্চলিক এয়ার টার্মিনাল",
    },
  ];

  const highlights = [
    {
      icon: Sunrise,
      title: isBn ? "সূর্যোদয় সৈকত" : "Sunrise beach",
      desc: isBn ? "বিরল দ্বৈত দিগন্ত দৃশ্য" : "A rare dual-horizon vista",
    },
    {
      icon: Sunset,
      title: isBn ? "সূর্যাস্ত দৃশ্য" : "Sunset vista",
      desc: isBn ? "সরাসরি সমুদ্রমুখী স্যুট" : "Direct sea-facing suites",
    },
    {
      icon: Trees,
      title: isBn ? "সুন্দরবন ইকো" : "Sundarbans eco",
      desc: isBn ? "ম্যানগ্রোভ পর্যটন করিডোর" : "A mangrove tourism corridor",
    },
  ];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      aria-labelledby="why-kuakata-heading"
    >
      <div className="container-site">
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
              <p className="text-eyebrow" style={{ color: "rgba(250, 249, 246, 0.62)" }}>
                {isBn ? "প্রাকৃতিক বৈচিত্র্য ও অবস্থান" : "A singular coastline"}
              </p>
            </div>

            <h2 id="why-kuakata-heading" className="text-display-md mb-5 text-[var(--paper)]">
              {isBn
                ? "একটি সৈকত। দুটি দিগন্ত। সূর্যোদয় ও সূর্যাস্তের মেলবন্ধন।"
                : "One coast. Two horizons. Sunrise, sunset and the Sundarbans."}
            </h2>

            <p className="text-body-lg mb-8 max-w-2xl leading-relaxed text-[rgba(250,249,246,0.72)]">
              {isBn
                ? "কুয়াকাটা বাংলাদেশের একমাত্র সৈকত যেখান থেকে একই ফ্রেমে সূর্যোদয় ও সূর্যাস্ত দেখা যায়। ইউনেস্কো বিশ্ব ঐতিহ্য সুন্দরবনের নৈকট্য এবং সরকারি কেটিসি মাস্টার প্ল্যান এ অঞ্চলকে দেশের প্রধান পর্যটন কেন্দ্রে পরিণত করছে।"
                : "Kuakata is Bangladesh's only coast where sunrise and sunset unfold across the same beach. Beside the UNESCO-listed Sundarbans and inside the government's Kuakata Tourism City plan, it is becoming the country's defining coastal destination."}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[14px] border border-[rgba(250,249,246,0.12)] bg-[rgba(250,249,246,0.04)] p-4"
                  >
                    <Icon size={18} strokeWidth={1.5} className="mb-3 text-[var(--sunset-red)]" />
                    <p className="text-[13px] font-semibold text-[var(--paper)]">{item.title}</p>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-[rgba(250,249,246,0.56)]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[rgba(0,0,0,0.3)] lg:aspect-[4/3.4]">
              <Image
                src="/images/kuakata/gallery-02.webp"
                alt="Sunset over Kuakata beach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.5)] via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 rounded-full bg-[rgba(250,249,246,0.9)] px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[var(--sunset-green-900)] backdrop-blur">
                {isBn ? "কেটিসি মাস্টার প্ল্যান অঞ্চল" : "KTC master plan zone"}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[rgba(250,249,246,0.12)] pt-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[rgba(250,249,246,0.56)]">
              {isBn ? "অবকাঠামো ও যোগাযোগ" : "Infrastructure & connectivity"}
            </p>
            <p className="text-[11px] text-[rgba(250,249,246,0.56)]">
              {isBn ? "ভূমিকম্প অঞ্চলের বাইরে" : "Outside the earthquake zone"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(250,249,246,0.14)] text-[var(--sunset-red)]">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-[var(--paper)]">
                      {isBn ? item.labelBn : item.label}
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-[rgba(250,249,246,0.56)]">
                      {isBn ? item.subBn : item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
