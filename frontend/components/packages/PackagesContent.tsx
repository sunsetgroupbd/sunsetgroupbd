"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Scale, Award, ArrowRight, Building2, HeartPulse, Sparkles, Layers } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import {
  projectPackagesMap,
  ProjectPackageCategory,
} from "@/data/packages";
import { useLang } from "@/lib/lang";

export default function PackagesContent() {
  const { isBn } = useLang();
  const [activeCategory, setActiveCategory] = useState<ProjectPackageCategory>("kuakata");

  const categories: { id: ProjectPackageCategory; labelEn: string; labelBn: string; icon: typeof Building2 }[] = [
    {
      id: "kuakata",
      labelEn: "Kuakata Hotel & Resort",
      labelBn: "কুয়াকাটা হোটেল ও রিসোর্ট",
      icon: Building2,
    },
    {
      id: "sun-care",
      labelEn: "Sun Care Hospital",
      labelBn: "সান কেয়ার হাসপাতাল",
      icon: HeartPulse,
    },
    {
      id: "dfi",
      labelEn: "Dhaka Fantasy Island",
      labelBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড",
      icon: Sparkles,
    },
    {
      id: "super-combo",
      labelEn: "Super Combo (All 4)",
      labelBn: "সুপার কম্বো (৪টি প্রকল্প)",
      icon: Layers,
    },
  ];

  const currentPackages = projectPackagesMap[activeCategory];

  const assurances = [
    {
      icon: ShieldCheck,
      title: isBn ? "সাফ-কবালা আইনি নিবন্ধন" : "Saf-kabala legal registration",
      body: isBn
        ? "স্থানীয় সরকারি সাব-রেজিস্ট্রি অফিসে আপনার নামে স্থায়ী দলিলভিত্তিক মালিকানা সরকারিভাবে নিবন্ধিত হয়।"
        : "Permanent deeded ownership, officially registered at the sub-registry office in Bangladesh.",
    },
    {
      icon: Scale,
      title: isBn ? "শরীয়া সুপারভাইজরি বোর্ড" : "Shariah supervisory board",
      body: isBn
        ? "মুশারাকাহ নীতিমালার আলোকে নিরীক্ষিত, যা রিবা-মুক্ত এবং সম্পূর্ণ হালাল মুনাফা বণ্টন নিশ্চিত করে।"
        : "Vetted under Musharakah principles, ensuring zero riba and strictly halal income streams.",
    },
    {
      icon: Award,
      title: isBn ? "কোম্পানি আইন ১৯৯৪ সুরক্ষা" : "Company Act 1994 backing",
      body: isBn
        ? "সানসেট গ্রুপের প্রকল্পসমূহ বাংলাদেশ সরকারের কোম্পানি আইন ১৯৯৪-এর অধীন আরজেএসসি-তে নিবন্ধিত।"
        : "Sunset Group entities are registered with RJSC under the Company Act 1994.",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "স্বচ্ছ অংশীদারিত্ব · সাফ-কবালা নিবন্ধন"
            : "Transparent shareholding · Saf-kabala registration"
        }
        title={
          isBn
            ? "মালিকানা প্যাকেজসমূহের স্বচ্ছ তুলনা।"
            : "Ownership packages, compared honestly."
        }
        description={
          isBn
            ? "প্রতিটি প্যাকেজ দলিলভিত্তিক, শরীয়া-তদারকিকৃত অংশীদারিত্ব নিশ্চিত করে। কুয়াকাটা হোটেল, সান কেয়ার হাসপাতাল, ঢাকা ফ্যান্টাসি আইল্যান্ড বা সুপার কম্বো থেকে আপনার বিনিয়োগের স্তর বেছে নিন।"
            : "Every package represents deeded, Shariah-supervised ownership across Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island, or the diversified Super Combo portfolio."
        }
        actions={
          <>
            <Link href="/profit-calculator" className="btn btn-primary">
              {isBn ? "ক্যালকুলেটর খুলুন" : "Open the calculator"}
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              {isBn ? "পরামর্শকের সাহায্য নিন" : "Ask an adviser"}
            </Link>
          </>
        }
      />

      {/* Category selector tabs */}
      <section className="border-b border-[var(--line)] bg-white py-6">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all ${
                    isActive
                      ? "bg-[var(--sunset-green-900)] text-white shadow-sm"
                      : "bg-[var(--sand)] text-[var(--ink)] hover:bg-[rgba(18,54,42,0.08)]"
                  }`}
                >
                  <Icon size={15} />
                  <span>{isBn ? cat.labelBn : cat.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {currentPackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col justify-between rounded-[18px] border bg-white p-7 transition-shadow hover:shadow-[0_20px_55px_-32px_rgba(18,54,42,0.4)] ${
                  pkg.highlighted
                    ? "border-[var(--sunset-green-900)] ring-1 ring-[var(--sunset-green-900)]"
                    : "border-[var(--line)]"
                }`}
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <h2 className="text-display-sm text-[var(--sunset-green-900)]">
                      {isBn ? pkg.nameBn : pkg.name}
                    </h2>
                    {pkg.highlighted && (
                      <span className="rounded-full bg-[var(--sunset-green-900)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--paper)]">
                        {isBn ? "জনপ্রিয়" : "Popular"}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--sunset-grey-700)]">
                      {isBn ? "প্যাকেজ মূল্য" : "Package price"}
                    </p>
                    <p className="mt-1 text-display-md tabular-nums text-[var(--sunset-green-900)]">
                      {isBn ? pkg.priceBn : pkg.priceDisplay}
                    </p>
                  </div>

                  <dl className="mb-6 space-y-2.5 border-y border-[var(--line)] py-4 text-[12.5px]">
                    <div className="flex items-center justify-between">
                      <dt className="text-[var(--sunset-grey-700)]">
                        {isBn ? "বুকিং মানি" : "Booking money"}
                      </dt>
                      <dd className="font-semibold text-[var(--ink)]">
                        {isBn ? pkg.bookingBn : pkg.bookingDisplay}
                      </dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-[var(--sunset-grey-700)]">
                        {isBn ? "বাকি পরিশোধ" : "Remaining balance"}
                      </dt>
                      <dd className="font-semibold text-[var(--ink)]">
                        {isBn
                          ? `৳ ${(pkg.remainingBDT / 100000).toFixed(2)} লাখ`
                          : `৳ ${(pkg.remainingBDT / 100000).toFixed(2)} Lac`}
                      </dd>
                    </div>

                    {pkg.areaSft && (
                      <div className="flex items-center justify-between">
                        <dt className="text-[var(--sunset-grey-700)]">
                          {isBn ? "সাফ-কবালা স্পেস" : "Deeded Area"}
                        </dt>
                        <dd className="font-semibold text-[var(--ink)]">
                          {pkg.areaSft} {isBn ? "বর্গফুট" : "sft"}
                        </dd>
                      </div>
                    )}

                    {pkg.accommodationDays > 0 && (
                      <div className="flex items-center justify-between">
                        <dt className="text-[var(--sunset-grey-700)]">
                          {isBn ? "আবাসন সুবিধা" : "Accommodation days"}
                        </dt>
                        <dd className="font-semibold text-[var(--sunset-red)]">
                          {isBn ? pkg.accommodationDaysBn : `${pkg.accommodationDays} days / yr`}
                        </dd>
                      </div>
                    )}

                    {pkg.profitSharePercent && (
                      <div className="flex items-center justify-between">
                        <dt className="text-[var(--sunset-grey-700)]">
                          {isBn ? "মুনাফা অংশীদারিত্ব" : "Profit Sharing"}
                        </dt>
                        <dd className="font-semibold text-[var(--sunset-green-700)]">
                          {pkg.profitSharePercent}%
                        </dd>
                      </div>
                    )}

                    {pkg.nominatedPersons && (
                      <div className="flex items-center justify-between">
                        <dt className="text-[var(--sunset-grey-700)]">
                          {isBn ? "মনোনীত ব্যক্তি" : "Nominated Persons"}
                        </dt>
                        <dd className="font-semibold text-[var(--sunset-green-700)]">
                          {pkg.nominatedPersons} {isBn ? "জন" : "persons"}
                        </dd>
                      </div>
                    )}

                    {pkg.insuranceBDT && (
                      <div className="flex items-center justify-between">
                        <dt className="text-[var(--sunset-grey-700)]">
                          {isBn ? "জীবন বীমা কাভারেজ" : "Life Insurance"}
                        </dt>
                        <dd className="font-semibold text-[var(--sunset-green-700)]">
                          ৳ {pkg.insuranceBDT / 100000} Lac
                        </dd>
                      </div>
                    )}
                  </dl>

                  <ul className="mb-8 space-y-2.5">
                    {(isBn ? pkg.featuresBn : pkg.features).map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[12px] leading-relaxed text-[var(--sunset-grey-700)]"
                      >
                        <Check
                          size={13}
                          className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?package=${encodeURIComponent(`${pkg.name} (${activeCategory.toUpperCase()})`)}`}
                  className={`btn w-full ${
                    pkg.highlighted ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {isBn ? "এই প্যাকেজটি বুক করুন" : "Book this package"}
                </Link>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-[16px] border border-[var(--line)] bg-[var(--sand)] p-6 text-center">
            <p className="text-[12.5px] font-medium text-[var(--ink)]">
              {isBn
                ? "মালিকানা প্রক্রিয়া: মানি রসিদ → ডাউন পেমেন্টের পর ডিড অব এগ্রিমেন্ট (চুক্তিপত্র) → সম্পূর্ণ পরিশোধের পর সাফ-কবালা সাব-রেজিস্ট্রি নিবন্ধন।"
                : "Ownership Process: Money Receipt → Deed of Agreement (after down payment) → Saf-Kabala registration (after full payment). Flexible installments available."}
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
              {isBn
                ? "দৃষ্টান্তমূলক তথ্য। শর্ত প্রযোজ্য। বিনিয়োগের পূর্বে অনুগ্রহ করে চুক্তিপত্র (Deed of Agreement) পড়ে নিন। সাফ-কবালা নিবন্ধনের পর শেয়ার স্থানান্তর ও বিক্রয় নীতিমালার অধীনে অনুমোদিত।"
                : "Illustrative information. Terms apply. Please read the Deed of Agreement before investing. Share transfer and resale permitted following saf-kabala registration."}
            </p>
          </div>
        </div>
      </section>

      {/* Assurances */}
      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {assurances.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[var(--line)] bg-white p-7"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-2 text-[15px] font-semibold text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}