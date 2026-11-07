"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ProfitCalculator from "@/components/ui/ProfitCalculator";
import { useLang } from "@/lib/lang";

export default function CalculatorPageContent() {
  const { isBn } = useLang();

  const notes = [
    {
      title: isBn
        ? "বুকিং মানি ও রেজিস্ট্রেশন সময়সূচি"
        : "Booking money & registration schedule",
      body: isBn
        ? "বুকিং মানি আপনার দলিলের প্রাথমিক সংরক্ষণ নিশ্চিত করে। কাগজপত্র যাচাই ও প্রাথমিক চুক্তি সম্পাদনের পর বাকি অর্থ নির্মাণ কাজের অগ্রগতির সাথে সমন্বয় করে সহজ কিস্তিতে পরিশোধ করা যায়।"
        : "The booking amount secures your deed reservation. Following verification and initial deed execution, the remaining balance can be structured through flexible instalment milestones aligned with construction progress.",
    },
    {
      title: isBn
        ? "বার্ষিক মুনাফার দিন সম্পর্কিত ব্যাখ্যা"
        : "Annual profit days explained",
      body: isBn
        ? "প্রতিটি প্যাকেজে ক্যালেন্ডার বছরে নির্দিষ্ট সংখ্যক মুনাফার দিন বরাদ্দ থাকে — যেমন প্লাটিনামে ১১২ দিন এবং গোল্ডে ৫৬ দিন। ওই সময়ের মধ্যে হোটেল স্যুট, কনভেনশন সুবিধা ও স্বাস্থ্যসেবা থেকে প্রাপ্ত নিট পরিচালনা মুনাফা আনুপাতিকভাবে বণ্টন করা হয়।"
        : "Each package allocates a defined number of profit-sharing days per calendar year — for example 112 days for Platinum and 56 for Gold. Net operational revenue from hotel suites, convention facilities and healthcare services over that period is distributed proportionally.",
    },
    {
      title: isBn
        ? "হালাল মুনাফা বণ্টন বনাম নির্দিষ্ট সুদ"
        : "Halal profit-sharing vs. fixed interest",
      body: isBn
        ? "ইসলামী শরীয়াহর কঠোর নীতিমালা অনুযায়ী, সানসেট গ্রুপ কোনো নির্দিষ্ট বা প্রাক-নির্ধারিত সুদ (রিবা) প্রদান করে না। মুনাফা নিরীক্ষিত আর্থিক ফলাফলের ওপর ভিত্তি করে নির্ধারিত হয়, যা একটি খাঁটি মুশারাকাহ (যৌথ অংশীদারিত্ব) নিশ্চিত করে।"
        : "In strict adherence to Islamic Shariah jurisprudence, Sunset Group does not promise or pay fixed interest. Returns fluctuate with verified audited financial performance, ensuring a genuine Musharakah partnership.",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "ইন্টারেক্টিভ আর্থিক পরিকল্পনা টুল"
            : "Interactive planning tool"
        }
        title={
          isBn
            ? "মালিকানা ও মুনাফা ক্যালকুলেটর।"
            : "Ownership and profit calculator."
        }
        description={
          isBn
            ? "প্লাটিনাম, গোল্ড, সিলভার ও ব্রোঞ্জ প্যাকেজের বিনিয়োগ বিশ্লেষণ করুন। বুকিং মানি, কিস্তি কাঠামো এবং বার্ষিক মুনাফার দিনের হিসাব জেনে নিন।"
            : "Explore the investment breakdown across Platinum, Gold, Silver and Bronze tiers. Calculate booking amounts, structured balances and annual profit days."
        }
        actions={
          <Link href="/packages" className="btn btn-outline-white">
            <ArrowLeft size={14} />
            {isBn ? "প্যাকেজে ফিরে যান" : "Back to packages"}
          </Link>
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-4xl">
          <ProfitCalculator />
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site max-w-4xl">
          <SectionHeading
            eyebrow={isBn ? "পরামর্শ ও পদ্ধতি" : "Guidance & methodology"}
            title={isBn ? "হিসাব যেভাবে কাজ করে" : "How the calculations work"}
            className="mb-10"
          />

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {notes.map((note, idx) => (
              <div key={note.title} className="flex gap-5 py-6">
                <span className="font-display text-[1.4rem] leading-none text-[var(--sunset-red)]">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-semibold text-[var(--ink)]">
                    {note.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {note.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              {isBn ? "পরামর্শকের সাথে কথা বলুন" : "Speak with an adviser"}
              <ArrowRight size={14} />
            </Link>
            <Link href="/packages" className="btn btn-outline">
              {isBn ? "সকল প্যাকেজ দেখুন" : "View all packages"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
