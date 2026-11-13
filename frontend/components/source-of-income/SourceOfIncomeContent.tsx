"use client";

import Link from "next/link";
import {
  FileCheck2,
  Building2,
  Coins,
  FileSpreadsheet,
  Banknote,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
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
        ? "মুনাফা বণ্টন ও বার্ষিক আবাসন সুবিধা"
        : "Profit-sharing & accommodation stay days",
      desc: isBn
        ? "নিরীক্ষিত নিট ব্যবসায়িক মুনাফা চুক্তিপত্র অনুযায়ী আনুপাতিক হারে বণ্টিত হয় এবং একই সাথে বিনিয়োগকারী প্যাকেজ অনুযায়ী বার্ষিক বিনামূল্যে আবাসন সুবিধা (১০ থেকে ১১২ দিন) ভোগ করেন।"
        : "Net audited operating profit is distributed in accordance with agreed shareholding percentages, while shareholders also enjoy complimentary annual accommodation stay days (10 to 112 days).",
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
        ? "২৪/৭ জরুরি বিভাগ, আধুনিক ল্যাব ও ইমেজিং, বহির্বিভাগীয় কনসাল্টেশন এবং ফার্মেসি বিক্রয় থেকে স্থিতিশীল আয়। বিনিয়োগকারী ও মনোনীত ব্যক্তিদের জন্য খরচমূল্যে সেবা।"
        : "A 24/7 emergency clinic, advanced imaging, surgical facilities, commercial pharmacy sales and specialist consultations. Cost-price healthcare for investors & nominated individuals.",
      note: isBn ? "মন্দামুক্ত অপরিহার্য জরুরি সেবা" : "Recession-resilient essential service",
    },
    {
      number: "03",
      title: isBn
        ? "ঢাকা ফ্যান্টাসি আইল্যান্ড"
        : "Dhaka Fantasy Island",
      body: isBn
        ? "২৭ সপ্তক স্কয়ার থেকে ১৯ মিনিট ও সংসদ ভবন থেকে ২০ মিনিটের দূরত্বে আধুনিক ইকো-রিসোর্ট, অ্যামিউজমেন্ট জোন, ক্যাফে লাউঞ্জ ও পারিবারিক অবকাশযাপন কেন্দ্র।"
        : "Commercial retail space, amusement arcade, cafe lounges and corporate retreat bookings — 19 min from Shaptak Square, 20 min from Parliament.",
      note: isBn ? "সারাবছর পারিবারিক জনসমাগম" : "Year-round family footfall",
    },
  ];

  const eightIncomeSources = [
    {
      nameEn: "Room Rent",
      nameBn: "রুম ভাড়া",
      descEn: "Luxury oceanfront suites and premium guest accommodation.",
      descBn: "বিলাসবহুল প্রেসিডেন্সিয়াল ও প্রিমিয়াম গেস্ট রুম ভাড়া।",
    },
    {
      nameEn: "Multi-Purpose Hall",
      nameBn: "মাল্টি-পারপাস হল",
      descEn: "Conferences, grand wedding receptions, corporate seminars.",
      descBn: "কনফারেন্স, জমকালো বিয়ে ও করপোরেট সেমিনার আয়োজন।",
    },
    {
      nameEn: "Training Institute",
      nameBn: "প্রশিক্ষণ ইনস্টিটিউট",
      descEn: "Hospitality and skill development training programs.",
      descBn: "আতিথেয়তা ও দক্ষতা উন্নয়নমূলক প্রশিক্ষণ কার্যক্রম।",
    },
    {
      nameEn: "Shopping Mall",
      nameBn: "শপিং মল",
      descEn: "Retail brand outlets and coastal souvenir shopping.",
      descBn: "রিটেইল ব্র্যান্ড আউটলেট ও কেনাকাটার বাণিজ্যিক স্পেস।",
    },
    {
      nameEn: "Gaming Zone",
      nameBn: "গেমিং জোন",
      descEn: "Virtual reality, arcade gaming, and family recreation.",
      descBn: "ভিআর গেমস, আর্কেড গেমিং ও ফ্যামিলি বিনোদন।",
    },
    {
      nameEn: "Restaurants",
      nameBn: "রেস্তোরাঁ ও ডাইনিং",
      descEn: "Multi-cuisine fine dining and international seafood.",
      descBn: "মাল্টি-কুইজিন ফাইন ডাইনিং ও আন্তর্জাতিক সি-ফুড।",
    },
    {
      nameEn: "Food & Beverage",
      nameBn: "ফুড অ্যান্ড বেভারেজ",
      descEn: "Cafes, bakeries, juice bars, and catering services.",
      descBn: "ক্যাফে, জুস বার, বেকারি ও ক্যাটারিং পরিসেবা।",
    },
    {
      nameEn: "Indoor Activity Zone",
      nameBn: "ইনডোর অ্যাক্টিভিটি জোন",
      descEn: "All-weather sports, leisure games, and children play area.",
      descBn: "ইনডোর খেলাধুলা, বিনোদন ও শিশুদের প্লে-জোন।",
    },
  ];

  const facilities = [
    {
      titleEn: "Rooms",
      titleBn: "রুম ও স্যুট",
      descEn: "5-star luxury standard rooms, suites, and chalets.",
      descBn: "পাঁচতারা মানের আধুনিক সুসজ্জিত রুম ও প্রেসিডেন্সিয়াল স্যুট।",
    },
    {
      titleEn: "Dining",
      titleBn: "ডাইনিং",
      descEn: "Seafood restaurant, rooftop cafe, 24/7 room service.",
      descBn: "সি-ফুড রেস্তোরাঁ, রুফটপ ক্যাফে ও সার্বক্ষণিক রুম সার্ভিস।",
    },
    {
      titleEn: "Pools",
      titleBn: "সুইমিং পুল",
      descEn: "Infinity pool with panoramic horizon & sea view.",
      descBn: "দিগন্তজোড়া সমুদ্রের দৃশ্য উপভোগের ইনফিনিটি পুল।",
    },
    {
      titleEn: "Games",
      titleBn: "খেলাধুলা ও গেমিং",
      descEn: "Billiards, arcade simulators, table tennis, board games.",
      descBn: "বিলিয়ার্ডস, আর্কেড সিমুলেটর, টেবিল টেনিস ও ইনডোর গেমস।",
    },
    {
      titleEn: "Fit & Relax",
      titleBn: "ফিটনেস ও রিল্যাক্স",
      descEn: "Modern gymnasium, spa, sauna, and wellness zone.",
      descBn: "আধুনিক জিমনেসিয়াম, স্পা, সৌনা ও ওয়েলনেস সেন্টার।",
    },
    {
      titleEn: "Added Services",
      titleBn: "অতিরিক্ত সেবাসমূহ",
      descEn: "Concierge, airport/helipad transfers, guided beach tours.",
      descBn: "কনসিয়ার্জ, হেলিপ্যাড/ট্রান্সফার ও গাইডেড সমুদ্র সৈকত ভ্রমণ।",
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

      {/* 8 Income Sources Grid */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow={isBn ? "৮টি আয়ের উৎস" : "8 Income Sources"}
            title={
              isBn
                ? "হোটেল ও রিসোর্টের বহুমুখী বাণিজ্যিক আয়ের খাত"
                : "Eight diversified commercial revenue engines"
            }
            description={
              isBn
                ? "সানসেট গ্রুপের প্রকল্পসমূহে আয়ের জন্য রয়েছে ৮টি সুনির্দিষ্ট খাত — যা বছরের প্রতিটি মৌসুমে টেকসই পরিচালন উদ্বৃত্ত নিশ্চিত করে।"
                : "Operations are built across 8 distinct revenue streams ensuring continuous operational cash flow across all seasons."
            }
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eightIncomeSources.map((source, idx) => (
              <div
                key={source.nameEn}
                className="rounded-[16px] border border-[var(--line)] bg-white p-6 shadow-sm transition-all hover:border-[var(--sunset-green-700)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-[1.5rem] leading-none text-[var(--sunset-green-900)]">
                    0{idx + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--sunset-red)]" />
                </div>
                <h4 className="mb-2 text-[15px] font-semibold text-[var(--ink)]">
                  {isBn ? source.nameBn : source.nameEn}
                </h4>
                <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? source.descBn : source.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow={isBn ? "প্রকল্পের সুযোগ-সুবিধাসমূহ" : "World-Class Facilities"}
            title={
              isBn
                ? "আন্তর্জাতিক পাঁচতারা মানের সুযোগ-সুবিধা"
                : "Modern 5-star facilities & amenities"
            }
            description={
              isBn
                ? "অতিথিদের সর্বোচ্চ সন্তুষ্টি ও দীর্ঘমেয়াদি বুকিং নিশ্চিত করতে বিশ্বমানের সকল সুযোগ-সুবিধা অন্তর্ভুক্ত।"
                : "Premium amenities driving premium occupancy rates, guest retention, and operational yield."
            }
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((fac) => (
              <div
                key={fac.titleEn}
                className="rounded-[16px] border border-[var(--line)] bg-white p-6"
              >
                <h4 className="mb-2 text-[15px] font-semibold text-[var(--sunset-green-900)]">
                  {isBn ? fac.titleBn : fac.titleEn}
                </h4>
                <p className="text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? fac.descBn : fac.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Lifecycle & Exit Policy Banner */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="rounded-[22px] border border-[var(--line)] bg-[var(--sand)] p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[rgba(18,54,42,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--sunset-green-900)]">
                  <ShieldCheck size={14} />
                  {isBn ? "মালিকানা প্রক্রিয়া" : "Ownership Lifecycle"}
                </span>
                <h3 className="text-display-sm mt-3 mb-4 text-[var(--ink)]">
                  {isBn
                    ? "মানি রসিদ থেকে সাফ-কবালা পর্যন্ত নিশ্চিত ধাপসমূহ"
                    : "Step-by-step verified legal ownership pathway"}
                </h3>
                <ul className="space-y-3 text-[13px] text-[var(--sunset-grey-700)]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "১. মানি রসিদ (Money Receipt):" : "1. Money Receipt:"}</strong>{" "}
                      {isBn
                        ? "বুকিং মানি জমার পর তাত্ক্ষণিক আনুষ্ঠানিক মানি রসিদ প্রদান।"
                        : "Issued immediately upon initial booking amount payment."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "২. চুক্তিপত্র (Deed of Agreement):" : "2. Deed of Agreement:"}</strong>{" "}
                      {isBn
                        ? "ডাউন পেমেন্ট সম্পন্ন হওয়ার পর উভয় পক্ষের মধ্যে নিবন্ধিত চুক্তিপত্র সম্পাদন।"
                        : "Executed upon completion of down payment securing investor rights."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "৩. সাফ-কবালা দলিল (Saf-Kabala):" : "3. Saf-Kabala Title Deed:"}</strong>{" "}
                      {isBn
                        ? "সম্পূর্ণ মূল্য পরিশোধের পর সরকারি সাব-রেজিস্ট্রি অফিসে বিনিয়োগকারীর নামে সাফ-কবালা দলিলের পূর্ণাঙ্গ রেজিস্ট্রি।"
                        : "Official deed registration at the Sub-Registry office upon full payment."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "সহজ কিস্তি সুবিধা:" : "Flexible Installments:"}</strong>{" "}
                      {isBn
                        ? "প্যাকেজ ভেদে সহজ কিস্তিতে পরিশোধের সুযোগ রয়েছে।"
                        : "Structured installments available across packages."}
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[rgba(18,54,42,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--sunset-green-900)]">
                  <Layers size={14} />
                  {isBn ? "প্রস্থান নীতি ও ট্র্যাকিং" : "Exit Policy & Portal"}
                </span>
                <h3 className="text-display-sm mt-3 mb-4 text-[var(--ink)]">
                  {isBn
                    ? "শেয়ার হস্তান্তর ও ইআরপি ট্র্যাকিং ব্যবস্থা"
                    : "Exit policy and transparent shareholder updates"}
                </h3>
                <ul className="space-y-3 text-[13px] text-[var(--sunset-grey-700)]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "এক্সিট ও বিক্রয় নীতি (Exit Policy):" : "Exit & Resale Policy:"}</strong>{" "}
                      {isBn
                        ? "সাফ-কবালা নিবন্ধন সম্পন্ন হওয়ার পর শেয়ারহোল্ডার তার মালিকানা শেয়ার আইনসঙ্গতভাবে যেকোনো সময় হস্তান্তর বা বিক্রি করতে পারবেন।"
                        : "Share transfer and resale are permitted at any time following saf-kabala registration."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "ইআরপি সফটওয়্যার ট্র্যাকিং:" : "ERP Shareholder Software:"}</strong>{" "}
                      {isBn
                        ? "বিনিয়োগকারীদের নিয়মিত আপডেট ও হিসাব ব্যবস্থাপনার জন্য সেন্ট্রাল সফটওয়্যার সমাধান (ক্লায়েন্ট নিশ্চিতকরণ সাপেক্ষ)।"
                        : "Centralized ERP software for shareholder account tracking and project updates (CLIENT TO CONFIRM)."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                    <span>
                      <strong>{isBn ? "আইনি বাধ্যবাধকতা:" : "Legal Integrity:"}</strong>{" "}
                      {isBn
                        ? "কোম্পানি আইন ১৯৯৪ ও শরীয়াহ মুশারাকাহ কাঠামোর অধীনে সকল লেনদেন সংরক্ষিত।"
                        : "Governed under Company Act 1994 and Islamic Musharakah frameworks."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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