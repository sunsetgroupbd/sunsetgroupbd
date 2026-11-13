"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";

export default function TermsContent() {
  const { isBn } = useLang();

  const sections = [
    {
      title: isBn ? "১. চুক্তির প্রকৃতি" : "1. Nature of the contract",
      body: isBn
        ? "সানসেট গ্রুপ হলো সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড (বাংলাদেশ কোম্পানি আইন ১৯৯৪-এর অধীনে নিবন্ধিত)-এর একটি ট্রেড ব্র্যান্ড। এই ওয়েবসাইটের মাধ্যমে উপস্থাপিত মালিকানা প্যাকেজসমূহ স্থাবর সম্পত্তি এবং আতিথেয়তা ও স্বাস্থ্যসেবা প্রকল্পের পরিচালন আয়ে চুক্তিভিত্তিক অংশীদারিত্বের প্রতিনিধিত্ব করে।"
        : "Sunset Group is a trade brand operating under Sunset Kuakata Hotel & Resort Ltd. (incorporated under the Bangladesh Company Act 1994). Ownership packages offered through this website represent contractual equity participation in real property and operational hospitality or healthcare revenue.",
    },
    {
      title: isBn ? "২. সাফ-কবালা নিবন্ধন ও দলিল সম্পাদন" : "2. Saf-kabala registration and deed execution",
      body: isBn
        ? "সকল অনুমোদিত প্যাকেজ স্থানীয় সরকারি সাব-রেজিস্ট্রি অফিসের মাধ্যমে সাফ-কবালা দলিলের আইনি অধিকার বহন করে। আপনার দ্বিপাক্ষিক চুক্তিতে উল্লেখিত বুকিং মানি এবং কিস্তির শর্তাদি সম্পন্ন হওয়ার পর দলিল রেজিস্ট্রি কার্যকর হয়।"
        : "All qualifying packages carry the right to legal deed registration via saf-kabala through the local government sub-registry office. Title execution occurs following fulfilment of scheduled booking and instalment commitments as stipulated in your specific bilateral agreement.",
    },
    {
      title: isBn ? "৩. মুনাফা বণ্টন — কোনো নির্দিষ্ট লভ্যাংশের নিশ্চয়তা নেই" : "3. Profit-sharing — no fixed return guarantee",
      body: isBn
        ? "কোম্পানির শরীয়া সুপারভাইজরি কমিটি এবং বাংলাদেশের প্রচলিত আইনের কঠোর অনুসরণে, মুনাফা প্রকৃত ব্যবসায়িক উদ্বৃত্তের ওপর নির্ধারিত হয়। কোনো প্যাকেজেই নির্দিষ্ট বা ঝুঁকিমুক্ত সুদের প্রতিশ্রুতি দেওয়া হয় না। ওয়েবসাইটে প্রদর্শিত হিসাবসমূহ কেবলমাত্র সম্ভাব্য প্রক্ষেপণ।"
        : "In strict compliance with the guidance of the company's Shariah Supervisory Committee and Bangladesh law, profits are calculated on an actual operational surplus basis. No package promises, implies or guarantees a fixed or risk-free financial return. Figures displayed on this website are illustrative estimates.",
    },
    {
      title: isBn ? "৪. হস্তান্তরযোগ্যতা ও পুনঃবিক্রয় অধিকার" : "4. Transferability and resale rights",
      body: isBn
        ? "যেহেতু মালিকানা সরকারি সাফ-কবালার মাধ্যমে নিশ্চিত করা হয়, তাই প্রতিটি ইউনিট উত্তরাধিকারসূত্রে প্রাপ্য এবং কোম্পানিকে অবহিতকরণ সাপেক্ষে তৃতীয় পক্ষের কাছে আইনসম্মতভাবে হস্তান্তর ও বিক্রি করা যায়।"
        : "Because title ownership is secured through registered saf-kabala, units are heritable and legally transferable to third parties, subject to company notification and standard statutory transfer deed procedures.",
    },
    {
      title: isBn ? "৫. প্রযোজ্য আইন ও বিচারিক এখতিয়ার" : "5. Governing law and jurisdiction",
      body: isBn
        ? "এই শর্তাবলী বা সংশ্লিষ্ট চুক্তি থেকে উদ্ভূত যেকোনো বিরোধ কেবলমাত্র গণপ্রজাতন্ত্রী বাংলাদেশের আইন দ্বারা নিয়ন্ত্রিত হবে এবং ঢাকার উপযুক্ত আদালতের এখতিয়ারের আওতাধীন থাকবে।"
        : "Any dispute arising under these terms or related booking deeds shall be governed exclusively by the laws of the People's Republic of Bangladesh and subject to the jurisdiction of the competent courts of Dhaka.",
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
            {isBn ? "আইনি কাঠামো ও চুক্তি" : "Legal framework & agreements"}
          </p>
          <h1 className="text-display-lg mb-4 text-[var(--paper)]">
            {isBn ? "শর্তাবলী ও নিয়মাবলী" : "Terms & Conditions"}
          </h1>
          <p className="text-[12px] text-[rgba(255, 255, 255,0.56)]">
            {isBn
              ? "সর্বশেষ সংশোধিত জানুয়ারি ২০২৬ · সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লি."
              : "Last revised January 2026 · Sunset Kuakata Hotel & Resort Ltd."}
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
                ? "আমাদের যেকোনো আইনি চুক্তি বা সাফ-কবালা দলিলের নমুনা দেখতে আমাদের প্রধান কার্যালয়ে সরাসরি আসুন।"
                : "Copies of specimen deed documents and official investment documentation are available upon request."}
            </p>
            <div className="mt-4">
              <Link href="/contact" className="btn btn-primary">
                {isBn ? "আইনি তথ্যের জন্য যোগাযোগ করুন" : "Speak with an adviser"}
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
