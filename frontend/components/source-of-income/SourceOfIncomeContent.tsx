"use client";

import Link from "next/link";
import {
  FileCheck2,
  Building2,
  Coins,
  FileSpreadsheet,
  Banknote,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { useLang } from "@/lib/lang";

export default function SourceOfIncomeContent() {
  const { isBn } = useLang();

  const investmentFaqs = faqs.filter(
    (f) => f.category === "investment" || f.category === "shariah"
  );

  const steps = [
    {
      step: "01",
      icon: FileCheck2,
      title: isBn
        ? "দলিল সম্পাদন ও সাফ-কবালা নিবন্ধন"
        : "Deed execution & saf-kabala registration",
      desc: isBn
        ? "বুকিং ও চুক্তির পর আপনার মালিকানা অংশ সরকারি সাব-রেজিস্ট্রি অফিসে নিবন্ধিত হয়। আপনি সরকারি সাফ-কবালা মূল দলিলের মালিকানা লাভ করেন।"
        : "Upon booking and agreement, legal ownership of your asset share is recorded at the government sub-registry office. You receive genuine saf-kabala title deed documentation.",
    },
    {
      step: "02",
      icon: Building2,
      title: isBn
        ? "বাণিজ্যিক ও আতিথেয়তা কার্যক্রম"
        : "Commercial & hospitality operations",
      desc: isBn
        ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট, সান কেয়ার হাসপাতাল এবং ঢাকা ফ্যান্টাসি আইল্যান্ড বিলাসবহুল রুম, রেস্তোরাঁ, কনফারেন্স ও স্বাস্থ্যসেবা থেকে বাস্তব আয় তৈরি করে।"
        : "Sunset Kuakata Hotel & Resort, Sun Care Hospital and Dhaka Fantasy Island generate real revenue across luxury rooms, dining, conferences, diagnostics and family recreation.",
    },
    {
      step: "03",
      icon: FileSpreadsheet,
      title: isBn
        ? "নিরপেক্ষ ও শরীয়া নিরীক্ষা (Audit)"
        : "Independent & Shariah audit",
      desc: isBn
        ? "বার্ষিক ব্যবসায়িক আয় চার্টার্ড অ্যাকাউন্ট্যান্টস এবং শরীয়া বোর্ডের মাধ্যমে পুঙ্খানুপুঙ্খভাবে নিরীক্ষিত হয়, যাতে প্রকৃত পরিচালনা উদ্বৃত্ত নিশ্চিত করা যায়।"
        : "Annual revenue is scrutinised by chartered accountants and our Shariah Supervisory Board to ascertain true operational surplus and remove impermissible elements.",
    },
    {
      step: "04",
      icon: Coins,
      title: isBn
        ? "প্যাকেজের দিন অনুযায়ী অনুপাত নির্ধারণ"
        : "Package day allocation",
      desc: isBn
        ? "নিট পরিচালনা মুনাফা প্যাকেজের দিন অনুযায়ী আনুপাতিক হারে বরাদ্দ করা হয় — প্লাটিনাম ১১২ দিন, গোল্ড ৫৬ দিন, সিলভার ৩৩ দিন এবং ব্রোঞ্জ ১০ দিন।"
        : "Net profit is proportioned by tier — 112 days for Platinum, 56 for Gold, 33 for Silver and 10 for Bronze — corresponding to operational trading cycles.",
    },
    {
      step: "05",
      icon: Banknote,
      title: isBn
        ? "সরাসরি ব্যাংক অ্যাকাউন্টে বণ্টন"
        : "Direct shareholder distribution",
      desc: isBn
        ? "নিরীক্ষিত হালাল লভ্যাংশ বার্ষিক আর্থিক বিবরণীসহ সরাসরি আপনার যাচাইকৃত ব্যাংক অ্যাকাউন্টে জমা দেওয়া হয়।"
        : "Your audited halal dividend is credited directly into your verified bank account alongside an itemised annual financial report.",
    },
  ];

  const streams = [
    {
      number: "01",
      title: isBn
        ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট"
        : "Sunset Kuakata Hotel & Resort",
      body: isBn
        ? "বিলাসবহুল প্রেসিডেন্সিয়াল স্যুট, আন্তর্জাতিক মানের সি-ফুড ডাইনিং, ব্যানকুইট ও করপোরেট কনভেনশন বুকিং থেকে সার্বক্ষণিক আয়।"
        : "Luxury oceanfront suites, international seafood dining, banquet halls, rooftop leisure lounge and corporate convention bookings.",
      note: isBn ? "সাপ্তাহিক ও মৌসুমি উচ্চ চাহিদা" : "High weekend and seasonal demand",
    },
    {
      number: "02",
      title: isBn
        ? "সান কেয়ার ডায়াগনস্টিক ও হাসপাতাল"
        : "Sun Care diagnostic & hospital",
      body: isBn
        ? "২৪/৭ জরুরি বিভাগ, আধুনিক ল্যাব ও ইমেজিং, বহির্বিভাগীয় কনসাল্টেশন এবং ফার্মেসি বিক্রয় থেকে স্থিতিশীল আয়।"
        : "A 24/7 emergency clinic, advanced imaging, surgical facilities, commercial pharmacy sales and specialist consultations.",
      note: isBn ? "মন্দামুক্ত অপরিহার্য জরুরি সেবা" : "Recession-resilient essential service",
    },
    {
      number: "03",
      title: isBn
        ? "ঢাকা ফ্যান্টাসি আইল্যান্ড"
        : "Dhaka Fantasy Island",
      body: isBn
        ? "সংসদ ভবন থেকে ২০ মিনিটের দূরত্বে আধুনিক ইকো-রিসোর্ট, অ্যামিউজমেন্ট জোন, ক্যাফে লাউঞ্জ ও পারিবারিক অবকাশযাপন কেন্দ্র।"
        : "Commercial retail space, amusement arcade, cafe lounges and corporate retreat bookings — 20 minutes from Parliament House.",
      note: isBn ? "সারাবছর পারিবারিক জনসমাগম" : "Year-round family footfall",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "আয়ের ইঞ্জিন · শরীয়া সততা"
            : "Revenue engine · Shariah integrity"
        }
        title={
          isBn
            ? "আপনার হালাল আয় যেভাবে তৈরি হয়।"
            : "How your halal income is generated."
        }
        description={
          isBn
            ? "বাস্তব ব্যবসা, বাস্তব রিয়েল এস্টেট সম্পদ এবং নিরীক্ষিত ক্যাশ ফ্লো। জানুন সেই পাঁচ ধাপের পূর্ণাঙ্গ প্রক্রিয়া যা আতিথেয়তা ও স্বাস্থ্যসেবাকে বিনিয়োগকারীর হালাল লভ্যাংশে রূপান্তর করে।"
            : "Real businesses, physical real-estate assets and audited cash flows. Explore the five-step lifecycle that turns hospitality and healthcare into shareholder distributions."
        }
        image="/images/kuakata/gallery-03.webp"
        imageAlt={isBn ? "সানসেট গ্রুপ প্রকল্প" : "Sunset Group project"}
        actions={
          <Link href="/packages" className="btn btn-primary">
            {isBn ? "মালিকানা প্যাকেজ দেখুন" : "View ownership packages"}
            <ArrowRight size={15} />
          </Link>
        }
      />

      {/* 5-step lifecycle */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow={isBn ? "প্রক্রিয়া ও ধাপ" : "Lifecycle"}
            title={
              isBn
                ? "আইনি দলিল থেকে ব্যাংক বণ্টন পর্যন্ত ৫টি ধাপ"
                : "From deed signing to bank transfer in five steps"
            }
            description={
              isBn
                ? "আমাদের আর্থিক প্রবাহে প্রতিটি টাকা কোথা থেকে আসে এবং কীভাবে বণ্টিত হয় তা বিনিয়োগকারীদের কাছে শতভাগ স্বচ্ছ।"
                : "Every taka that enters Sunset Group's ecosystem follows a documented, audited path."
            }
            className="mb-14 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="flex flex-col justify-between rounded-[18px] border border-[var(--line)] bg-[var(--sand)] p-6"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-display text-[1.8rem] leading-none text-[var(--sunset-red)]">
                        {s.step}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(18,54,42,0.08)] text-[var(--sunset-green-900)]">
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="mb-2 text-[14.5px] font-semibold text-[var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real revenue streams */}
      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow={isBn ? "সম্পদের বৈচিত্র্য" : "Asset breakdown"}
            title={
              isBn
                ? "যে তিনটি বাস্তব খাত থেকে মুনাফা উপার্জিত হয়"
                : "Three diversified operational revenue streams"
            }
            description={
              isBn
                ? "আপনার বিনিয়োগ কেবল একটি একক আয়ের ওপর নির্ভরশীল নয় — এটি আতিথেয়তা, স্বাস্থ্যসেবা ও বিনোদন এই তিনটি স্থিতিশীল খাতে বিস্তৃত।"
                : "Risk is mitigated through sector diversification across seaside tourism, primary healthcare and urban eco-recreation."
            }
            className="mb-14 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {streams.map((stream) => (
              <div
                key={stream.number}
                className="flex flex-col justify-between rounded-[20px] border border-[var(--line)] bg-white p-8"
              >
                <div>
                  <span className="font-display text-[1.9rem] leading-none text-[var(--sunset-green-900)]">
                    {stream.number}
                  </span>
                  <h3 className="mt-4 mb-3 text-[16px] font-semibold text-[var(--ink)]">
                    {stream.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {stream.body}
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--line)] pt-4 text-[11.5px] font-semibold text-[var(--sunset-green-700)]">
                  ✓ {stream.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shariah FAQ section */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-3xl">
          <SectionHeading
            eyebrow={isBn ? "স্বচ্ছতা ও শরীয়া নিয়ম" : "Integrity assurance"}
            title={
              isBn
                ? "আয় বণ্টন সম্পর্কিত সাধারণ জিজ্ঞাসাসমূহ"
                : "Common questions about revenue and Shariah governance"
            }
            align="center"
            className="mb-12"
          />

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {investmentFaqs.map((faq) => (
              <details key={faq.id} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14.5px] font-semibold text-[var(--ink)] transition-colors hover:text-[var(--sunset-green-900)]">
                  <span>{isBn ? faq.questionBn : faq.question}</span>
                  <span className="text-[var(--sunset-red)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? faq.answerBn : faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn btn-outline">
              {isBn ? "আরও প্রশ্ন থাকলে সরাসরি জিজ্ঞাসা করুন" : "Have specific questions? Speak to an adviser"}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}