"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { packages } from "@/data/packages";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PackagesSection() {
  const { isBn } = useLang();

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--ash, #f4f5f7)" }}
      aria-labelledby="packages-section-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={isBn ? "মালিকানা প্যাকেজসমূহ" : "Shared ownership"}
          title={isBn ? "আপনার উপযুক্ত প্যাকেজ বেছে নিন" : "Transparent ownership tiers"}
          description={
            isBn
              ? "প্রতিটি প্যাকেজে বুকিং মানি, কিস্তি এবং বার্ষিক আবাসন সুবিধা ও মুনাফা ভাগাভাগি স্পষ্টভাবে নির্ধারিত।"
              : "Every tier sets out booking money, instalments and annual accommodation days in plain terms."
          }
          action={
            <Link href="/packages" className="btn btn-outline">
              {isBn ? "সম্পূর্ণ তুলনা" : "Full comparison"}
              <ArrowRight size={15} />
            </Link>
          }
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
              className={`flex flex-col justify-between rounded-[16px] border bg-white p-7 transition-shadow hover:shadow-[0_18px_50px_-30px_rgba(18,54,42,0.35)] ${
                pkg.highlighted
                  ? "border-[var(--sunset-green-900)]"
                  : "border-[var(--line)]"
              }`}
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <h3 className="text-display-sm text-[var(--sunset-green-900)]">
                    {isBn ? pkg.nameBn : pkg.name}
                  </h3>
                  {pkg.highlighted && (
                    <span className="rounded-full bg-[var(--sunset-green-900)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--paper)]">
                      {isBn ? "জনপ্রিয়" : "Popular"}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-[10.5px] uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
                    {isBn ? "প্যাকেজ মূল্য" : "Package price"}
                  </p>
                  <p className="mt-1 text-display-sm tabular-nums text-[var(--sunset-green-900)]">
                    {isBn ? pkg.priceBn : pkg.priceDisplay}
                  </p>
                </div>

                <dl className="mb-6 space-y-2.5 border-y border-[var(--line)] py-4 text-[12.5px]">
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-[var(--sunset-grey-700)]">
                      {isBn ? "বুকিং মানি" : "Booking money"}
                    </dt>
                    <dd className="font-semibold text-[var(--ink)]">
                      {isBn ? pkg.bookingBn : pkg.bookingDisplay}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-[var(--sunset-grey-700)]">
                      {isBn ? "আবাসন সুবিধা" : "Accommodation days"}
                    </dt>
                    <dd className="font-semibold text-[var(--sunset-red)]">
                      {isBn
                        ? `${pkg.accommodationDays ?? pkg.profitDays} দিন / বছর`
                        : `${pkg.accommodationDays ?? pkg.profitDays} days / yr`}
                    </dd>
                  </div>
                </dl>

                <ul className="mb-8 space-y-2.5">
                  {(isBn ? pkg.featuresBn : pkg.features).slice(0, 4).map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]"
                    >
                      <Check
                        size={13}
                        className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                className={`btn w-full ${
                  pkg.highlighted ? "btn-primary" : "btn-outline"
                }`}
              >
                {isBn ? "প্যাকেজ বুক করুন" : "Enquire about this tier"}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
          {isBn
            ? "* দৃষ্টান্তমূলক তথ্য। শর্ত প্রযোজ্য। বিনিয়োগের পূর্বে অনুগ্রহ করে চুক্তিপত্র (Deed of Agreement) পড়ে নিন।"
            : "* Illustrative information. Terms apply. Please read the Deed of Agreement before investing."}
        </p>
      </div>
    </section>
  );
}
