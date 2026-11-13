"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CalculatorTeaser() {
  const { isBn } = useLang();

  const tiers = [
    { label: "Platinum", price: isBn ? "৳ ৫৪,০০,০০০" : "৳ 54,00,000", days: isBn ? "১১২" : "112" },
    { label: "Gold", price: isBn ? "৳ ২৭,৫০,০০০" : "৳ 27,50,000", days: isBn ? "৫৬" : "56" },
    { label: "Silver", price: isBn ? "৳ ১৬,৮০,০০০" : "৳ 16,80,000", days: isBn ? "৩৩" : "33" },
    { label: "Bronze", price: isBn ? "৳ ৫,৭০,০০০" : "৳ 5,70,000", days: isBn ? "১০" : "10" },
  ];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--paper)" }}
      aria-labelledby="calc-teaser-heading"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid grid-cols-1 items-center gap-10 rounded-[22px] border border-[var(--line)] bg-[var(--sand)] p-8 md:p-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
              <p className="text-eyebrow" style={{ color: "var(--sunset-green-700)" }}>
                {isBn ? "ইন্টারেক্টিভ পরিকল্পনা" : "Financial planning"}
              </p>
            </div>

            <h2 id="calc-teaser-heading" className="text-display-md mb-4">
              {isBn
                ? "আপনার বিনিয়োগ ও আয়ের হিসাব করুন"
                : "Simulate your shareholding and instalments"}
            </h2>

            <p className="text-body mb-8 max-w-xl text-[var(--sunset-grey-700)]">
              {isBn
                ? "প্যাকেজ নির্বাচন করে বুকিং মানি, অবশিষ্ট কিস্তি এবং বার্ষিক আবাসন সুবিধা ও মুনাফার আনুমানিক হিসাব দেখুন।"
                : "Select a tier to see booking money, structured instalments and annual accommodation days under Shariah-supervised principles."}
            </p>

            <Link href="/profit-calculator" className="btn btn-primary btn-lg">
              <Calculator size={16} />
              {isBn ? "ক্যালকুলেটর খুলুন" : "Open the calculator"}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[16px] border border-[var(--line)] bg-white">
              <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
                  {isBn ? "প্যাকেজ" : "Tier"}
                </p>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
                  {isBn ? "আবাসন সুবিধা" : "Accommodation days"}
                </p>
              </div>

              <ul>
                {tiers.map((item, idx) => (
                  <li
                    key={item.label}
                    className={`flex items-center justify-between gap-4 px-5 py-3.5 ${
                      idx !== tiers.length - 1 ? "border-b border-[var(--line)]" : ""
                    }`}
                  >
                    <div>
                      <p className="text-[13px] font-semibold text-[var(--ink)]">{item.label}</p>
                      <p className="text-[11.5px] tabular-nums text-[var(--sunset-grey-700)]">
                        {item.price}
                      </p>
                    </div>
                    <p className="text-[12.5px] font-semibold tabular-nums text-[var(--sunset-green-900)]">
                      {item.days}
                      <span className="ml-1 text-[10.5px] font-normal text-[var(--sunset-grey-700)]">
                        / {isBn ? "দিন" : "days"}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-[10.5px] leading-relaxed text-[var(--sunset-grey-700)]">
              {isBn
                ? "দৃষ্টান্তমূলক তথ্য। শর্ত প্রযোজ্য। বিনিয়োগের পূর্বে চুক্তিপত্র পড়ে নিন।"
                : "Illustrative information. Terms apply. Please read Deed of Agreement."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
