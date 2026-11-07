"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Award,
  HeartHandshake,
  Check,
  ArrowRight,
  MapPin,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLang } from "@/lib/lang";

export default function AboutContent() {
  const { isBn } = useLang();

  const pillars = [
    {
      icon: Award,
      title: isBn ? "আমাদের লক্ষ্য (Mission)" : "Our mission",
      body: isBn
        ? "বাংলাদেশে টেকসই বিলাসবহুল আতিথেয়তা ও স্বাস্থ্যসেবা অবকাঠামো গড়ে তোলা, যা স্থানীয় সম্প্রদায়ের উন্নয়ন সাধনের সাথে সাথে সাধারণ শেয়ারহোল্ডারদের জন্য ন্যায়সঙ্গত, হালাল মুনাফা নিশ্চিত করে।"
        : "To build sustainable luxury hospitality and healthcare infrastructure in Bangladesh that yields equitable, halal revenue for everyday shareholders while elevating local communities.",
    },
    {
      icon: Scale,
      title: isBn ? "আমাদের রূপকল্প (Vision)" : "Our vision",
      body: isBn
        ? "বাংলাদেশের সবচেয়ে বিশ্বস্ত ও স্বচ্ছ নৈতিক বিনিয়োগ প্রতিষ্ঠান হওয়া, যা উপকূলীয় পর্যটন ও জরুরি স্বাস্থ্যসেবাকে দীর্ঘমেয়াদী পারিবারিক সম্পদে রূপান্তরিত করার জন্য আন্তর্জাতিকভাবে স্বীকৃত।"
        : "To be Bangladesh's most reputable and transparent ethical investment house, recognised internationally for turning coastal tourism and essential healthcare into long-term family legacies.",
    },
    {
      icon: HeartHandshake,
      title: isBn ? "আমাদের মূল্যবোধ (Values)" : "Our values",
      body: isBn
        ? "আপসহীন ইসলামী অনুশাসন, আর্থিক স্বচ্ছতা, সামাজিক স্বাস্থ্যসেবার মানোন্নয়ন এবং দেশের প্রচলিত আইন ও বিধিবদ্ধ নিবন্ধনের কঠোর অনুসরণ।"
        : "Uncompromising Islamic ethics, radical financial transparency, community health upliftment and rigorous adherence to the laws and statutory registrations of the land.",
    },
  ];

  const shariahPoints = isBn
    ? [
        "অর্থায়ন, ঋণ বা বিনিয়োগের লভ্যাংশে সম্পূর্ণ সুদ (রিবা) মুক্ত",
        "সম্পদ-সমর্থিত মালিকানা যেখানে প্রতিটি শেয়ার বাস্তব স্থাবর সম্পত্তির প্রতিনিধিত্ব করে",
        "পূর্বনির্ধারিত ও স্বচ্ছ লাভ-ক্ষতি বণ্টন অনুপাত",
        "জুয়া বা মদসহ শরীয়াহ নিষিদ্ধ কোনো খাতে কোনো সংশ্লিষ্টতা নেই",
      ]
    : [
        "Zero interest (riba) in financing, loans or partner yields",
        "Asset-backed equity where every share represents real property",
        "Fair, transparent profit-and-loss ratios agreed beforehand",
        "No involvement in prohibited sectors, including gambling and alcohol",
      ];

  const deedSteps = [
    {
      step: "01",
      title: isBn ? "সরকারি সাব-রেজিস্ট্রি" : "Government sub-registry",
      body: isBn
        ? "প্রতিটি মালিকানা দলিল স্থানীয় সরকারি সাব-রেজিস্ট্রি অফিসে আপনার নামে সরকারিভাবে নিবন্ধিত হয়।"
        : "Every ownership deed is officially registered at the local government sub-registry office in your name.",
    },
    {
      step: "02",
      title: isBn ? "বিতর্কহীন সাফ-কবালা" : "Indisputable saf-kabala",
      body: isBn
        ? "সাফ-কবালা বাংলাদেশের ১৯০৮ সালের রেজিস্ট্রেশন আইনের অধীনে স্থায়ী ও চূড়ান্ত স্বত্বাধিকার নিশ্চিত করে।"
        : "Saf-kabala represents permanent, absolute title under the Registration Act 1908 of Bangladesh.",
    },
    {
      step: "03",
      title: isBn ? "উত্তরাধিকার ও হস্তান্তরযোগ্য" : "Heritable & transferable",
      body: isBn
        ? "আপনার অর্জিত মালিকানা ইউনিট একটি স্থায়ী রিয়েল এস্টেট সম্পদ যা উত্তরাধিকারসূত্রে হস্তান্তর বা আইনানুগভাবে বিক্রি করা যায়।"
        : "Your ownership unit is a permanent real-estate asset that can be inherited or legally sold.",
    },
    {
      step: "04",
      title: isBn ? "কোম্পানি আইন ১৯৯৪" : "Company Act 1994",
      body: isBn
        ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড কর্তৃক সমর্থিত, নিবন্ধিত সংঘস্মারক ও সংঘবিধির আওতাভুক্ত।"
        : "Backed by Sunset Kuakata Hotel & Resort Ltd., with registered memorandum and articles of association.",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "নৈতিক আতিথেয়তা · কোম্পানি আইন ১৯৯৪ · সাফ-কবালা দলিল"
            : "Ethical hospitality · Company Act 1994 · Saf-kabala"
        }
        title={
          isBn
            ? "আস্থার ওপর প্রতিষ্ঠিত। নৈতিকতায় সম্প্রসারিত।"
            : "Built on trust. Grown through ethics."
        }
        description={
          isBn
            ? "সানসেট গ্রুপ হালাল সম্পদ বৃদ্ধি, নৈতিক সম্পত্তির মালিকানা এবং বাংলাদেশের সবচেয়ে প্রতিশ্রুতিশীল উন্নয়ন করিডোর জুড়ে শ্রেষ্ঠ আতিথেয়তা প্রদানে নিরলসভাবে কাজ করে চলেছে।"
            : "Sunset Group operates with an unwavering dedication to halal wealth creation, ethical asset ownership and hospitality excellence across Bangladesh's most promising growth corridors."
        }
        image="/images/kuakata/hero.webp"
        imageAlt={isBn ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট" : "Sunset Kuakata Hotel & Resort"}
        actions={
          <>
            <Link href="/projects" className="btn btn-primary">
              {isBn ? "সকল প্রকল্প দেখুন" : "Explore the portfolio"}
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              {isBn ? "পরামর্শকের সাথে কথা বলুন" : "Speak with an adviser"}
            </Link>
          </>
        }
        meta={
          <>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                {isBn ? "মূল প্রতিষ্ঠান" : "Parent company"}
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">
                {isBn
                  ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লি."
                  : "Sunset Kuakata Hotel & Resort Ltd."}
              </p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                {isBn ? "আরজেএসসি নিবন্ধন" : "RJSC registration"}
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">C-189422/2023</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                {isBn ? "প্রধান কার্যালয়" : "Headquarters"}
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">
                {isBn ? "ধানমন্ডি ২৭, ঢাকা" : "Dhanmondi 27, Dhaka"}
              </p>
            </div>
          </>
        }
      />

      {/* Story */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow={isBn ? "প্রাতিষ্ঠানিক ঐতিহ্য" : "Corporate heritage"}
                title={
                  isBn
                    ? "বাংলাদেশে নৈতিক মালিকানার এক নতুন দিগন্ত"
                    : "Pioneering ethical ownership in Bangladesh"
                }
                className="mb-7"
              />
              <div className="space-y-4 text-body text-[var(--sunset-grey-700)]">
                {isBn ? (
                  <>
                    <p>
                      সানসেট গ্রুপ একটি সুস্পষ্ট রূপকল্প নিয়ে প্রতিষ্ঠিত: উচ্চ লভ্যাংশপূর্ণ আতিথেয়তা বিনিয়োগের সাথে সম্পূর্ণ ইসলামী আর্থিক নীতি এবং অকাট্য আইনি মালিকানার মেলবন্ধন ঘটানো। মূল প্রতিষ্ঠান{" "}
                      <strong className="text-[var(--ink)]">সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড</strong>{" "}
                      (বাংলাদেশ কোম্পানি আইন ১৯৯৪-এর অধীন নিবন্ধিত)-এর পরিচালনায়, আমরা যৌথ মালিকানার এমন এক মডেল চালু করেছি যা সাধারণ বিনিয়োগকারীদের বাস্তব মেগা প্রজেক্টে খাঁটি মালিকানা অধিকার প্রদান করে।
                    </p>
                    <p>
                      অনিশ্চিত বা ঝুঁকিপূর্ণ রিয়েল এস্টেট ধারণার বিপরীতে, আমাদের প্রকল্পসমূহ — কুয়াকাটার সমুদ্রতীরবর্তী পাঁচতারকা সমমানের রিসোর্ট থেকে শুরু করে ঢাকার আধুনিক হাসপাতাল ও ইকো-ট্যুরিজম হাব — সরকারি সাফ-কবালা নিবন্ধনের মাধ্যমে সুরক্ষিত। এটি প্রতিটি শেয়ারহোল্ডারকে বাংলাদেশ সরকার কর্তৃক স্বীকৃত স্থায়ী দলিলের মালিকানা নিশ্চিত করে।
                    </p>
                    <p>
                      প্রতিটি আর্থিক লেনদেন, হোটেল রুমের আয় বণ্টন এবং সামগ্রিক ব্যবসায়িক প্রক্রিয়া একটি স্বাধীন শরীয়া সুপারভাইজরি কমিটির সার্বক্ষণিক তত্ত্বাবধানে পরিচালিত হয়, যা সুদ (রিবা), ধোঁকা (গারার) ও অনৈতিক উপাদান থেকে ১০০% মুক্ত।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Sunset Group was established with a singular vision: to bridge high-yield
                      hospitality investment with complete Islamic financial integrity and undisputed
                      legal ownership. Operating under parent entity{" "}
                      <strong className="text-[var(--ink)]">Sunset Kuakata Hotel &amp; Resort Ltd.</strong>{" "}
                      (registered under the Bangladesh Company Act 1994), we have pioneered
                      shared-ownership models that give everyday investors genuine equity in
                      landmark real-world projects.
                    </p>
                    <p>
                      Unlike speculative property or unsecured investments, our projects — from
                      Kuakata&apos;s premier five-star equivalent resort to urban multi-specialty
                      healthcare and eco-tourism hubs — are legally backed by saf-kabala registration.
                      This grants each shareholder authentic, deed-registered title ownership
                      recognised by the Government of Bangladesh.
                    </p>
                    <p>
                      Every financial instrument, room revenue distribution and operational protocol
                      is guided by an independent Shariah Supervisory Committee to ensure total
                      freedom from interest (riba), deceptive uncertainty (gharar) and unethical
                      practices.
                    </p>
                  </>
                )}
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-6">
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                    {isBn ? "কোম্পানি আইন কাঠামো" : "Company Act framework"}
                  </dt>
                  <dd className="mt-1 font-display text-[1.9rem] leading-none text-[var(--sunset-green-900)]">
                    1994
                  </dd>
                </div>
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                    {isBn ? "শরীয়া সম্মত" : "Shariah compliant"}
                  </dt>
                  <dd className="mt-1 font-display text-[1.9rem] leading-none text-[var(--sunset-red)]">
                    100%
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-[var(--sand)]">
                <Image
                  src="/images/kuakata/about-trust.webp"
                  alt={
                    isBn
                      ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট স্থাপত্য"
                      : "Sunset Kuakata Hotel & Resort architecture and amphitheater"
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-[12px] text-[var(--sunset-grey-700)]">
                <MapPin size={12} className="text-[var(--sunset-red)]" />
                {isBn
                  ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট — পটুয়াখালী, বাংলাদেশ"
                  : "Sunset Kuakata Hotel & Resort — Patuakhali, Bangladesh"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow={isBn ? "মূল চালিকাশক্তি" : "Guiding principles"}
            title={isBn ? "উদ্দেশ্য, রূপকল্প ও দর্শন" : "Mission, vision and philosophy"}
            className="mb-12 md:mb-14"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[18px] border border-[var(--line)] bg-white p-8"
                >
                  <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
                    <Icon size={19} strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-3 text-[15.5px] font-semibold text-[var(--ink)]">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shariah */}
      <section
        className="section-gap"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
                <p className="text-eyebrow" style={{ color: "rgba(250,249,246,0.62)" }}>
                  {isBn ? "শরীয়া সুপারভাইজরি কমিটি" : "Shariah supervisory committee"}
                </p>
              </div>
              <h2 className="text-display-md mb-5 text-[var(--paper)]">
                {isBn
                  ? "ইসলামী নীতিমালার আলোকে নিরীক্ষিত ও প্রত্যয়িত"
                  : "Audited and certified under Islamic principles"}
              </h2>
              <div className="space-y-4 text-body text-[rgba(250,249,246,0.72)]">
                <p>
                  {isBn
                    ? "সানসেট গ্রুপে 'হালাল' কেবল একটি ব্যবসায়িক স্লোগান নয়; এটি আমাদের সামগ্রিক ব্যবসায়িক কাঠামোর ভিত্তি। আমাদের কার্যক্রম দেশের খ্যাতনামা ইসলামী ফিকহ ও অর্থায়ন বিশেষজ্ঞদের সমন্বয়ে গঠিত একটি স্বাধীন শরীয়া বোর্ডের তত্ত্বাবধানে পরিচালিত হয়।"
                    : "At Sunset Group, “halal” is not a marketing phrase; it is the constitutional foundation of our business model. Our operations are vetted by an independent Shariah Supervisory Committee of recognised Islamic jurists and finance scholars."}
                </p>
                <p>
                  {isBn
                    ? "কমিটি প্রতিটি অংশীদারিত্বের চুক্তি ও লেনদেন কঠোরভাবে পর্যবেক্ষণ করে, যাতে নিশ্চিত হয়:"
                    : "The committee scrutinises every partnership deed, ensuring:"}
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {shariahPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(250,249,246,0.1)]">
                      <Check size={10} strokeWidth={2.5} className="text-[var(--sunset-red)]" />
                    </span>
                    <span className="text-[13px] leading-relaxed text-[rgba(250,249,246,0.8)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 rounded-[12px] border border-[rgba(250,249,246,0.14)] bg-[rgba(250,249,246,0.04)] p-4 text-[12px] leading-relaxed text-[rgba(250,249,246,0.62)]">
                <strong className="text-[var(--paper)]">
                  {isBn ? "অফিসিয়াল ফতোয়া ও সনদ" : "Official fatwa & board certification"}
                </strong>{" "}
                {isBn
                  ? "আমাদের কর্পোরেট কার্যালয়ে পরিদর্শনের জন্য উন্মুক্ত। শরীয়া নিবন্ধন নং SG/SHR-2023/044।"
                  : "is available on request at our corporate office. Shariah registration No. SG/SHR-2023/044 — verification on file."}
              </p>
            </div>

            <div className="rounded-[20px] border border-[rgba(250,249,246,0.14)] bg-[rgba(250,249,246,0.04)] p-8 md:p-10">
              <h3 className="text-display-sm mb-5 text-[var(--paper)]">
                {isBn ? "উলামা ও বিশেষজ্ঞ পরিষদ" : "Board of scholars"}
              </h3>
              <p className="mb-7 text-[13px] leading-relaxed text-[rgba(250,249,246,0.62)]">
                {isBn
                  ? "বিনিয়োগকারীদের ব্যাংক অ্যাকাউন্টে লভ্যাংশ বিতরণের পূর্বে কমিটি হিসাবরক্ষণ ও মুনাফা বণ্টন চক্র নিবিড়ভাবে নিরীক্ষা করে।"
                  : "The panel continuously monitors revenue accounting and audits distribution cycles before dividends are credited to investor bank accounts."}
              </p>
              <div className="divide-y divide-[rgba(250,249,246,0.12)]">
                {[
                  {
                    title: isBn ? "প্রধান শরীয়া উপদেষ্টা" : "Chief Shariah adviser",
                    body: isBn
                      ? "বিশিষ্ট ইসলামী অর্থনীতিবিদ ও গবেষক। বিস্তারিত প্রসপেক্টাসে উল্লেখিত।"
                      : "Eminent Islamic finance scholar and author. Details available in the prospectus.",
                  },
                  {
                    title: isBn ? "আইনি ও ফিকহ পরামর্শক" : "Legal & fiqh consultant",
                    body: isBn
                      ? "বাংলাদেশের ভূমি আইন ও ইসলামী বাণিজ্যিক চুক্তির অভিজ্ঞ বিশেষজ্ঞ।"
                      : "Specialist in Bangladesh real property law and Islamic commercial contracts.",
                  },
                  {
                    title: isBn ? "বার্ষিক সম্মতি অডিট" : "Annual compliance audit",
                    body: isBn
                      ? "বার্ষিক শেয়ারহোল্ডার সম্মেলনের পূর্বে প্রকাশিত বিস্তারিত শরীয়া নিরীক্ষা প্রতিবেদন।"
                      : "Comprehensive annual review published before the shareholder summit.",
                  },
                ].map((item) => (
                  <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-[13px] font-semibold text-[var(--paper)]">{item.title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-[rgba(250,249,246,0.56)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saf-kabala */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow={isBn ? "আইনি নিরাপত্তা" : "Ironclad security"}
            title={isBn ? "সাফ-কবালা আইনি নিবন্ধন" : "Saf-kabala legal registration"}
            description={
              isBn
                ? "আমাদের প্রতিটি মালিকানা সনদের পেছনে চারটি নির্ভরযোগ্য আইনি সুরক্ষা।"
                : "Four safeguards behind every ownership certificate we issue."
            }
            align="center"
            className="mb-12 md:mb-14"
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {deedSteps.map((item) => (
              <div key={item.step} className="border-t border-[var(--line-strong)] pt-5">
                <p className="font-display text-[1.6rem] leading-none text-[var(--sunset-red)]">
                  {item.step}
                </p>
                <h3 className="mt-3 text-[14px] font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[18px] border border-[var(--line)] bg-[var(--sand)] p-7 md:flex-row md:items-center md:p-9">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
                {isBn ? "অফিসিয়াল কর্পোরেট নিবন্ধন" : "Official corporate registration"}
              </p>
              <p className="mt-1.5 text-[15px] font-semibold text-[var(--sunset-green-900)]">
                {isBn
                  ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লি. — আরজেএসসি রেজি নং C-189422/2023"
                  : "Sunset Kuakata Hotel & Resort Ltd. — RJSC Reg. No. C-189422/2023"}
              </p>
              <p className="mt-1 text-[12px] text-[var(--sunset-grey-700)]">
                TIN 7128-4912-0034 · {isBn ? "২৭ সপ্তক স্কয়ার, ধানমন্ডি ২৭, ঢাকা-১২০৯" : "27 Shaptak Square, Dhanmondi 27, Dhaka-1209"}
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              {isBn ? "দলিল সংক্রান্ত তথ্য চান" : "Request documentation"}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--sunset-green-900)", color: "var(--paper)" }}
      >
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-sm mb-2 text-[var(--paper)]">
              {isBn
                ? "আমাদের সক্রিয় পোর্টফোলিও দেখতে প্রস্তুত?"
                : "Ready to explore our active portfolios?"}
            </h2>
            <p className="text-[13px] text-[rgba(250,249,246,0.68)]">
              {isBn
                ? "ধানমন্ডি প্রধান কার্যালয়ে সিনিয়র বিনিয়োগ বিশ্লেষকদের সাথে পরামর্শ করুন বা প্রজেক্ট সাইট পরিদর্শনের সময় নির্ধারণ করুন।"
                : "Consult with our senior investment analysts at Dhanmondi or schedule a project site visit."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              {isBn ? "প্রকল্পসমূহ দেখুন" : "View projects"}
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              {isBn ? "পরামর্শের জন্য বুক করুন" : "Schedule a consultation"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
