"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";

export default function PrivacyPolicyContent() {
  const { isBn } = useLang();

  const sections = [
    {
      title: isBn ? "১. আমরা যে তথ্য সংগ্রহ করি" : "1. Information we collect",
      body: isBn
        ? "আপনি যখন সানসেট গ্রুপ (সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড)-এর কাছে তথ্য অনুসন্ধান করেন, মালিকানা প্যাকেজ বুক করেন বা দলিল সম্পাদন করেন, তখন আমরা আপনার আইনসম্মত নাম, জাতীয় পরিচয়পত্র (NID), পাসপোর্ট, মোবাইল নম্বর, ইমেইল ঠিকানা, নমিনির তথ্য এবং মুনাফা প্রেরণের জন্য ব্যাংক হিসাব সংগ্রহ করি।"
        : "When you make an inquiry, reserve an ownership package or register a deed with Sunset Group (Sunset Kuakata Hotel & Resort Ltd.), we collect identifiable personal and financial details including your full legal name, national identity number (NID / Smart Card), passport details, Bangladeshi mobile number, email address, nominee details and banking information for profit remittance.",
    },
    {
      title: isBn ? "২. সংগৃহীত তথ্যের আইনি ব্যবহার" : "2. Legal use of collected information",
      body: isBn
        ? "আপনার ব্যক্তিগত তথ্য ১৯০৮ সালের রেজিস্ট্রেশন আইনের অধীনে সরকারি সাব-রেজিস্ট্রিতে সাফ-কবালা দলিল প্রণয়ন, শরীয়া বোর্ডের সম্মতি নিরীক্ষা, এবং সরাসরি ব্যাংক হিসাবে বার্ষিক লভ্যাংশ স্থানান্তরের জন্য ব্যবহৃত হয়। আমরা কখনোই আপনার তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা বাণিজ্য করি না।"
        : "Your personal records are used strictly for deed execution under the Registration Act 1908, saf-kabala title drafting, Shariah board compliance audits, anti-money laundering (AML) compliance and direct dividend bank transfers. We do not sell, license or trade your contact or investment records to third-party telemarketers.",
    },
    {
      title: isBn ? "৩. সরকারি সাব-রেজিস্ট্রি ও নথিপত্র সংরক্ষণ" : "3. Sub-registry and government record keeping",
      body: isBn
        ? "সাফ-কবালার মাধ্যমে সম্পাদিত সম্পত্তি হস্তান্তর বাংলাদেশ সরকারের আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়ের আওতাধীন স্থানীয় সাব-রেজিস্ট্রি অফিসে নিবন্ধিত হতে হয়। দেশের প্রচলিত আইন অনুসারে দলিলপত্রাদি সরকারি রেকর্ড হিসেবে সংরক্ষিত থাকে।"
        : "Property transfers executed via saf-kabala require official registration with the relevant sub-registry offices under the Ministry of Law, Justice and Parliamentary Affairs of Bangladesh. Certain title documents become public government records as required by the law of the land.",
    },
    {
      title: isBn ? "৪. ডেটা নিরাপত্তা ও গোপনীয়তা" : "4. Data security and confidentiality",
      body: isBn
        ? "অননুমোদিত প্রকাশ, ক্ষতি বা পরিবর্তন থেকে বিনিয়োগকারীদের তথ্য ও নথি সুরক্ষিত রাখতে আমরা ধানমন্ডি প্রধান কার্যালয়ে যথাযথ ভৌত, প্রাতিষ্ঠানিক এবং ডিজিটাল সুরক্ষা বজায় রাখি।"
        : "We maintain appropriate physical, procedural and electronic safeguards at our Dhanmondi headquarters to protect investor documentation against unauthorised disclosure, loss or alteration.",
    },
    {
      title: isBn ? "৫. কমপ্লায়েন্স কর্মকর্তার সাথে যোগাযোগ" : "5. Contacting the compliance officer",
      body: isBn
        ? "আপনার তথ্যের গোপনীয়তা সম্পর্কিত যেকোনো প্রশ্নে আমাদের লিগ্যাল ডেস্কে +৮৮০ ১৩২৫ ০৭৪৫৩৫ নম্বরে যোগাযোগ করুন অথবা ধানমন্ডি ২৭-এর সপ্তক স্কয়ার, লেভেল ১১-এ আসুন।"
        : "If you have questions regarding the privacy of your investor profile, contact our legal desk at +880 1325 074535 or visit 27 Shaptak Square, Level 11, Dhanmondi 27, Dhaka.",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <section
        className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-16"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 120% at 85% 0%, rgba(62,115,85,0.3) 0%, rgba(14,42,31,0) 62%)",
          }}
        />
        <div className="container-site relative max-w-3xl">
          <p className="text-eyebrow mb-4" style={{ color: "rgba(255, 255, 255,0.6)" }}>
            {isBn ? "তথ্য সুরক্ষা ও গোপনীয়তা" : "Data protection & confidentiality"}
          </p>
          <h1 className="text-display-lg mb-4 text-[var(--paper)]">
            {isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
          </h1>
          <p className="text-[12px] text-[rgba(255, 255, 255,0.56)]">
            {isBn
              ? "সর্বশেষ হালনাগাদ জানুয়ারি ২০২৬ · সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লি."
              : "Last updated January 2026 · Sunset Kuakata Hotel & Resort Ltd."}
          </p>
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-[var(--line)] pb-8 last:border-b-0">
                <h2 className="text-[16px] font-semibold text-[var(--sunset-green-900)]">
                  {section.title}
                </h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[16px] border border-[var(--line)] bg-[var(--sand)] p-6">
            <p className="text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
              {isBn
                ? "আমাদের ডেটা সুরক্ষার নিয়মাবলী সম্পর্কে আরও জানতে বা আপনার নিবন্ধিত তথ্য যাচাই করতে আমাদের প্রধান কার্যালয়ে সরাসরি যোগাযোগ করুন।"
                : "For questions about data protection or to inspect your registered files, reach our advisory desk directly."}
            </p>
            <div className="mt-4">
              <Link href="/contact" className="btn btn-outline">
                {isBn ? "যোগাযোগ পাতা" : "Contact the office"}
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
