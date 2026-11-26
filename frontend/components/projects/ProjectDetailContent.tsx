"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  HeartPulse,
  ArrowRight,
  Phone,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Project } from "@/data/projects";
import { useLang } from "@/lib/lang";
import { toBnDigits, formatBDT, formatBDTLac } from "@/lib/format";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { isBn } = useLang();

  const isKuakataProject =
    project.slug === "kuakata-hotel" ||
    project.slug === "mangrove" ||
    project.slug === "super-combo";

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={isBn ? project.locationBn : project.location}
        title={isBn ? project.nameBn : project.name}
        description={isBn ? project.taglineBn : project.tagline}
        image={project.heroImage}
        slides={project.slideshowImages?.map((s) => s.src)}
        imageAlt={isBn ? project.nameBn : project.name}
        actions={
          <>
            <Link
              href={`/contact?project=${encodeURIComponent(project.name)}`}
              className="btn btn-primary"
            >
              {isBn ? "মালিকানার জন্য আবেদন করুন" : "Enquire for ownership"}
              <ArrowRight size={15} />
            </Link>
            <Link href="/packages" className="btn btn-outline-white">
              {isBn ? "প্যাকেজ দেখুন" : "View packages"}
            </Link>
          </>
        }
        meta={
          project.keyFacts.slice(0, 3).map((fact) => (
            <div key={fact.label}>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-white/90 font-medium">
                {fact.label}
              </p>
              <p className="mt-1 text-[13px] font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                {fact.value}
              </p>
            </div>
          ))
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-10 lg:col-span-7">
              <div>
                <SectionHeading
                  eyebrow={isBn ? "প্রকল্পের সংক্ষিপ্ত বিবরণ" : "Project overview"}
                  title={
                    isBn
                      ? "টেকসই প্রবৃদ্ধি ও হালাল মুনাফা"
                      : "Sustainable growth and ethical yield"
                  }
                  className="mb-5"
                />
                <p className="text-body-lg text-[var(--sunset-grey-700)]">
                  {isBn ? project.descriptionBn : project.description}
                </p>
              </div>

              {project.services && project.services.length > 0 && (
                <div className="rounded-[18px] border border-[var(--line)] bg-[var(--sand)] p-7 md:p-8">
                  <div className="mb-3 flex items-center gap-2.5">
                    <HeartPulse size={18} className="text-[var(--sunset-red)]" />
                    <h3 className="text-display-sm text-[var(--sunset-green-900)]">
                      {isBn
                        ? "বিনিয়োগকারীদের জন্য খরচমূল্যে আজীবন স্বাস্থ্যসেবা"
                        : "Investor healthcare privileges, at cost"}
                    </h3>
                  </div>
                  <p className="mb-6 text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {isBn
                      ? "সান কেয়ার হাসপাতালের বিনিয়োগকারী এবং তাদের মনোনীত ২০ জন ব্যক্তি আজীবন সমস্ত ইনডোর, আউটডোর ও ডায়াগনস্টিক সেবা সম্পূর্ণ পরিচালন খরচমূল্যে (At Cost Price) পাবেন।"
                      : "Investors in Sun Care Hospital and their 20 nominated individuals receive all inpatient, outpatient and diagnostic services strictly at cost price for life."}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.services.map((svc) => (
                      <div key={svc} className="flex items-center gap-2 text-[12.5px] text-[var(--ink)]">
                        <Check size={14} className="shrink-0 text-[var(--sunset-green-700)]" />
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-display-sm mb-5 text-[var(--sunset-green-900)]">
                  {isBn
                    ? `${project.nameBn}-এ কেন বিনিয়োগ করবেন`
                    : `Why invest in ${project.name}`}
                </h3>
                <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {project.whyInvest.map((point) => (
                    <li key={point} className="flex items-start gap-3 py-3.5">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[var(--sunset-red)]"
                      />
                      <span className="text-[13px] leading-relaxed text-[var(--ink)]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-5 lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-[18px] border border-[var(--line)] bg-white p-7">
                <h3 className="text-display-sm mb-5 text-[var(--sunset-green-900)]">
                  {isBn ? "প্রকল্পের মূল তথ্যাবলী" : "Key project facts"}
                </h3>

                <dl className="divide-y divide-[var(--line)]">
                  {project.keyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 py-3 text-[12.5px]"
                    >
                      <dt className="text-[var(--sunset-grey-700)]">{fact.label}</dt>
                      <dd className="text-right font-semibold text-[var(--ink)]">{fact.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 py-3 text-[12.5px]">
                    <dt className="text-[var(--sunset-grey-700)]">
                      {isBn ? "আইনি দলিল" : "Legal deed"}
                    </dt>
                    <dd className="flex items-center gap-1.5 font-semibold text-[var(--sunset-green-700)]">
                      <ShieldCheck size={14} />
                      {project.safKabala
                        ? isBn
                          ? "সাফ-কবালা নিবন্ধিত"
                          : "Saf-kabala deeded"
                        : isBn
                        ? "পর্যায়ক্রমিক পরিকল্পনা"
                        : "Phase planning"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-5">
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.name)}`}
                    className="btn btn-primary w-full"
                  >
                    {isBn ? "মালিকানার আগ্রহ প্রকাশ করুন" : "Express ownership interest"}
                    <ArrowRight size={15} />
                  </Link>
                  <a href="tel:+8801325074535" className="btn btn-outline w-full">
                    <Phone size={14} />
                    {isBn ? "বিনিয়োগ ডেস্কে কথা বলুন" : "Talk to the investment desk"}
                  </a>
                </div>
              </div>

              <div className="rounded-[18px] bg-[var(--sand)] p-6">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--sunset-green-700)]">
                  <ShieldCheck size={14} />
                  {isBn ? "শরীয়া সুপারভাইজরি বোর্ড" : "Shariah supervisory board"}
                </p>
                <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn
                    ? "সকল যৌথ মালিকানা চুক্তি ইসলামী ফিকহ ও অর্থায়ন বিশেষজ্ঞদের দ্বারা অনুমোদিত, যা রিবা-মুক্ত হালাল আয় নিশ্চিত করে।"
                    : "All shared ownership contracts undergo continuous review by appointed Islamic jurisprudence scholars to guarantee complete compliance with Islamic finance principles."}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Kuakata Tourism Belt & Location Map Section (for Kuakata Hotel, Mangrove & Super Combo) */}
      {isKuakataProject && (
        <section className="section-gap border-t border-[var(--line)] bg-white">
          <div className="container-site">
            <div className="mb-8 max-w-3xl">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
                <p className="text-eyebrow text-[var(--sunset-red)]">
                  {isBn ? "কৌশলগত অবস্থান ও পর্যটন ম্যাপ" : "Strategic Location & Tourism Map"}
                </p>
              </div>
              <h2 className="text-display-md text-[var(--sunset-green-900)]">
                {isBn
                  ? "কুয়াকাটা পর্যটন বলয় ও প্রকল্পসমূহের অবস্থান"
                  : "Kuakata Tourism Belt & Project Location Map"}
              </h2>
              <p className="mt-3 text-body-lg text-[var(--sunset-grey-700)]">
                {isBn
                  ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট এবং কুয়াকাটা মেরিন ড্রাইভের ম্যানগ্রোভ হোটেল ও রিসোর্ট—উভয় প্রকল্পই কুয়াকাটার সমুদ্র সৈকত, সুন্দরবন ম্যানগ্রোভ করিডোর এবং প্রধান পর্যটন স্পটগুলোর প্রাণকেন্দ্রে অবস্থিত।"
                  : "Explore the prime positioning of Sunset Kuakata Hotel & Resort and Mangrove Hotel & Resort along the prestigious Marine Drive and coastal tourism corridor, surrounded by Kuakata's landmark attractions."}
              </p>
            </div>

            <div className="overflow-hidden rounded-[16px]">
              <Image
                src="/images/map.webp"
                alt="Location map of Sunset Kuakata Hotel & Resort, Mangrove Project and Kuakata tourist spots"
                width={1600}
                height={786}
                className="h-auto w-full rounded-[16px] object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>
      )}

      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
          <div className="container-site">
            <SectionHeading
              eyebrow={isBn ? "ফটোগ্রাফি ও অগ্রগতি" : "Imagery & progress"}
              title={isBn ? "প্রকল্প গ্যালারি" : "Project gallery"}
              className="mb-10"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.galleryImages.map((imgSrc, idx) => (
                <div
                  key={imgSrc}
                  className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[var(--paper)]"
                >
                  <Image
                    src={imgSrc}
                    alt={`${isBn ? project.nameBn : project.name} photo ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.packages && project.packages.length > 0 && (
        <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
          <div className="container-site">
            <SectionHeading
              eyebrow={isBn ? "মালিকানা প্যাকেজসমূহ" : "Ownership tiers"}
              title={
                isBn
                  ? `${project.nameBn}-এর উপলব্ধ প্যাকেজসমূহ`
                  : `Available packages for ${project.name}`
              }
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="package-card flex flex-col justify-between rounded-[16px] border border-[var(--line)] bg-white p-6"
                >
                  <div>
                    <h3 className="text-display-sm mb-1 text-[var(--sunset-green-900)]">
                      {isBn ? pkg.nameBn || pkg.name : pkg.name}
                    </h3>
                    <p className={`mb-4 text-[1.35rem] font-medium tabular-nums text-[var(--sunset-red)] ${isBn ? "bn-num" : ""}`}>
                      {isBn
                        ? (pkg.priceBn || formatBDT(pkg.priceBDT, true))
                        : (pkg.priceDisplay || formatBDT(pkg.priceBDT, false))}
                    </p>
                    <dl className="mb-6 space-y-2 border-y border-[var(--line)] py-3.5 text-[12px]">
                      <div className="flex justify-between gap-2">
                        <dt className="text-[var(--sunset-grey-700)]">
                          {isBn ? "বুকিং মানি" : "Booking money"}
                        </dt>
                        <dd className={`font-semibold text-[var(--ink)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                          {isBn
                            ? (pkg.bookingBn || formatBDTLac(pkg.bookingBDT, true))
                            : (pkg.bookingDisplay || formatBDTLac(pkg.bookingBDT, false))}
                        </dd>
                      </div>

                      {pkg.units && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "ইউনিট সংখ্যা" : "Units"}
                          </dt>
                          <dd className={`font-semibold text-[var(--ink)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn ? `${toBnDigits(pkg.units)}টি ইউনিট` : `${pkg.units}x Units`}
                          </dd>
                        </div>
                      )}

                      {pkg.areaSft && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "সাফ-কবালা স্পেস" : "Deeded Area"}
                          </dt>
                          <dd className={`font-semibold text-[var(--ink)] text-right tabular-nums ${isBn ? "bn-num" : ""}`}>
                            <span>
                              {isBn ? `${toBnDigits(pkg.areaSft)} বর্গফুট` : `${pkg.areaSft} sft`}
                            </span>
                            {pkg.landAreaSft && pkg.buildAreaSft && (
                              <span className={`block text-[10.5px] font-normal text-[var(--sunset-grey-700)] ${isBn ? "bn-num" : ""}`}>
                                {isBn
                                  ? `(জমি ${toBnDigits(pkg.landAreaSft)} + নির্মাণ ${toBnDigits(pkg.buildAreaSft)})`
                                  : `(Land ${pkg.landAreaSft} + Build ${pkg.buildAreaSft})`}
                              </span>
                            )}
                          </dd>
                        </div>
                      )}

                      {(pkg.accommodationDays ?? pkg.profitDays) ? (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "আবাসন সুবিধা" : "Accommodation stay"}
                          </dt>
                          <dd className={`font-semibold text-[var(--sunset-red)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn
                              ? `${toBnDigits(pkg.accommodationDays ?? pkg.profitDays ?? 0)} দিন / বছর`
                              : `${pkg.accommodationDays ?? pkg.profitDays} days / yr`}
                          </dd>
                        </div>
                      ) : null}

                      {pkg.resortDiscountPercent && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "রিসোর্ট ডিসকাউন্ট" : "Resort Discount"}
                          </dt>
                          <dd className={`font-semibold text-[var(--sunset-green-700)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn ? `${toBnDigits(pkg.resortDiscountPercent)}%` : `${pkg.resortDiscountPercent}%`}
                          </dd>
                        </div>
                      )}

                      {pkg.profitSharePercent && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "মুনাফা অংশীদারিত্ব" : "Profit Sharing"}
                          </dt>
                          <dd className={`font-semibold text-[var(--sunset-green-700)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn ? `${toBnDigits(pkg.profitSharePercent)}%` : `${pkg.profitSharePercent}%`}
                          </dd>
                        </div>
                      )}

                      {pkg.nominatedPersons && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "মনোনীত ব্যক্তি" : "Nominated Persons"}
                          </dt>
                          <dd className={`font-semibold text-[var(--sunset-green-700)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn ? `${toBnDigits(pkg.nominatedPersons)} জন` : `${pkg.nominatedPersons} persons`}
                          </dd>
                        </div>
                      )}

                      {pkg.insuranceBDT && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "জীবন বীমা কাভারেজ" : "Life Insurance"}
                          </dt>
                          <dd className={`font-semibold text-[var(--sunset-green-700)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn ? formatBDTLac(pkg.insuranceBDT, true) : formatBDTLac(pkg.insuranceBDT, false)}
                          </dd>
                        </div>
                      )}

                      {pkg.installmentFromBDT && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-[var(--sunset-grey-700)]">
                            {isBn ? "মাসিক কিস্তি শুরু" : "Monthly Installment"}
                          </dt>
                          <dd className={`font-semibold text-[var(--sunset-green-700)] tabular-nums ${isBn ? "bn-num" : ""}`}>
                            {isBn
                              ? `৳ ${toBnDigits(pkg.installmentFromBDT.toLocaleString("en-IN"))} / মাস`
                              : `From ৳ ${pkg.installmentFromBDT.toLocaleString("en-IN")} / mo`}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.name)}&package=${encodeURIComponent(pkg.name)}`}
                    className="btn btn-outline w-full"
                  >
                    {isBn ? "প্যাকেজ নির্বাচন করুন" : "Select package"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div className="container-site flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-sm mb-2 text-[var(--paper)]">
              {isBn
                ? "শেয়ারহোল্ডার হিসেবে যুক্ত হতে আগ্রহী?"
                : "Interested in becoming an equity shareholder?"}
            </h2>
            <p className="text-[13px] text-[rgba(255, 255, 255,0.68)]">
              {isBn
                ? "প্রাথমিক পর্যায়ের ট্রাঞ্চ শেষ হওয়ার পূর্বেই আপনার সাফ-কবালা প্যাকেজ সংরক্ষণ করুন।"
                : "Reserve your deeded saf-kabala package before early-bird tranches close."}
            </p>
          </div>
          <Link
            href={`/contact?project=${encodeURIComponent(project.name)}`}
            className="btn btn-primary shrink-0"
          >
            {isBn ? "মালিকানার জন্য আবেদন পাঠান" : "Submit an ownership enquiry"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
