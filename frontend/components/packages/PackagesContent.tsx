"use client";

import Link from "next/link";
import { Check, ShieldCheck, Scale, Award, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { packages } from "@/data/packages";
import { useLang } from "@/lib/lang";

export default function PackagesContent() {
  const { isBn } = useLang();

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
        ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড বাংলাদেশ সরকারের কোম্পানি আইন ১৯৯৪-এর অধীন আরজেএসসি-তে নিবন্ধিত।"
        : "Sunset Kuakata Hotel & Resort Ltd. is registered with RJSC under the Company Act 1994.",
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
            ? "প্রতিটি প্যাকেজ সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড-এ দলিলভিত্তিক, শরীয়া-তদারকিকৃত অংশীদারিত্ব নিশ্চিত করে। আপনার বিনিয়োগ পরিকল্পনার সাথে মানানসই প্যাকেজটি বেছে নিন।"
            : "Every package represents deeded, Shariah-supervised ownership in Sunset Kuakata Hotel & Resort Ltd. Choose the tier that matches your investment horizon."
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

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col justify-between rounded-[18px] border bg-white p-7 transition-shadow hover:shadow-[0_20px_55px_-32px_rgba(18,54,42,0.4)] ${
                  pkg.highlighted
                    ? "border-[var(--sunset-green-900)]"
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
                    <div className="flex items-center justify-between">
                      <dt className="text-[var(--sunset-grey-700)]">
                        {isBn ? "মুনাফার সময়কাল" : "Profit-sharing period"}
                      </dt>
                      <dd className="font-semibold text-[var(--sunset-red)]">
                        {isBn ? pkg.profitDaysBn : `${pkg.profitDays} days / year`}
                      </dd>
                    </div>
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
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className={`btn w-full ${
                    pkg.highlighted ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {isBn ? "এই প্যাকেজটি বুক করুন" : "Book this package"}
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
            {isBn
              ? "* লাভ-ক্ষতি বণ্টন নিরীক্ষিত ব্যবসায়িক আয়ের ওপর নির্ভরশীল। এটি কোনো সুনির্দিষ্ট বা নিশ্চিত মুনাফার প্রতিশ্রুতি নয়। বিনিয়োগের পূর্বে অনুগ্রহ করে নিয়মাবলী ও শর্তসমূহ সম্পূর্ণ পড়ুন।"
              : "* Profit-sharing is subject to actual project performance and audited accounts. Not a guaranteed return. Please read the full terms and conditions."}
          </p>
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