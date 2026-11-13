"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, AlertTriangle, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { calculatorConfig, DISCLAIMER_EN, DISCLAIMER_BN } from "@/data/calculator.config";

export default function ProfitCalculator() {
  const { t, isBn } = useLang();
  const [selectedPackageId, setSelectedPackageId] = useState<string>(calculatorConfig[0].id);
  const [customUnits, setCustomUnits] = useState<number>(1);

  const selectedPkg =
    calculatorConfig.find((p) => p.id === selectedPackageId) || calculatorConfig[0];

  const totalInvestment = selectedPkg.priceBDT * customUnits;
  const totalBooking = selectedPkg.bookingBDT * customUnits;
  const remainingAmount = totalInvestment - totalBooking;
  const totalAccommodationDays = (selectedPkg.accommodationDays ?? selectedPkg.profitDays) * customUnits;

  const isRatePlaceholder = selectedPkg.illustrativeAnnualRate === 0;
  const projectedAnnualReturn = totalInvestment * selectedPkg.illustrativeAnnualRate;

  const formatBDT = (amount: number) => "৳ " + amount.toLocaleString("en-IN");

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="rounded-[20px] border border-[var(--line)] bg-white p-6 md:p-9">
        <div className="mb-7 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
            <Calculator size={18} strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="text-display-sm text-[var(--sunset-green-900)]">
              {isBn
                ? "প্যাকেজ এবং মালিকানা ইউনিট নির্বাচন করুন"
                : "Select a package and ownership units"}
            </h2>
            <p className="text-[11.5px] text-[var(--sunset-grey-700)]">
              {isBn
                ? "ধাপ ১ / ২ — আপনার বিনিয়োগ নির্ধারণ করুন"
                : "Step 1 of 2 — configure your investment"}
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {calculatorConfig.map((pkg) => {
            const isSelected = pkg.id === selectedPackageId;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`cursor-pointer rounded-[12px] border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-[var(--sunset-green-900)] bg-[var(--sunset-green-900)] text-[var(--paper)]"
                    : "border-[var(--line)] bg-[var(--sand)] text-[var(--ink)] hover:border-[var(--line-strong)]"
                }`}
              >
                <span className="mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.1em] opacity-75">
                  {isBn ? pkg.nameBn : pkg.name}
                </span>
                <span className="block font-display text-[1.4rem] leading-none tabular-nums">
                  ৳ {(pkg.priceBDT / 100000).toFixed(2)} Lac
                </span>
                <span className="mt-2 block text-[11px] opacity-70">
                  {pkg.accommodationDays ?? pkg.profitDays} {isBn ? "দিন আবাসন" : "stay days"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 items-center gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-2">
          <div>
            <label htmlFor="units" className="form-label">
              {isBn
                ? "মালিকানা শেয়ার / ইউনিটের সংখ্যা"
                : "Number of ownership shares / units"}
            </label>
            <div className="flex items-center gap-4">
              <input
                id="units"
                type="range"
                min={1}
                max={10}
                value={customUnits}
                onChange={(e) => setCustomUnits(parseInt(e.target.value) || 1)}
                className="w-full cursor-pointer accent-[var(--sunset-green-900)]"
              />
              <span className="min-w-[2.5rem] text-center font-display text-[1.6rem] leading-none tabular-nums text-[var(--sunset-green-900)]">
                {customUnits}
              </span>
            </div>
            <p className="mt-1.5 text-[11.5px] text-[var(--sunset-grey-700)]">
              {isBn
                ? "১ থেকে ১০টি প্যাকেজের মধ্যে নির্ধারণ করতে স্লাইড করুন।"
                : "Slide to scale from 1 to 10 packages."}
            </p>
          </div>

          <div className="rounded-[12px] border border-[var(--line)] bg-[var(--paper)] p-4">
            <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--sunset-green-700)]">
              <ShieldCheck size={13} />
              {isBn ? "শরীয়া-তত্ত্বাবধানে পরিচালিত কাঠামো" : "Shariah-supervised structure"}
            </p>
            <p className="text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
              {isBn
                ? "শেয়ারসমূহ মুশারাকাহ ও মুদারাবাহ নীতিমালার অধীনে নিরীক্ষিত। প্রতিটি শেয়ার ক্রয়ে সরকারি সাফ-কবালা দলিল নিশ্চিত করা হয়।"
                : "Shares are verified under Musharakah and Mudarabah principles. Saf-kabala registration is provided per share purchase."}
            </p>
          </div>
        </div>
      </div>

      {/* Projection */}
      <motion.div
        key={`${selectedPackageId}-${customUnits}`}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[22px] p-6 text-[var(--paper)] md:p-10"
        style={{ backgroundColor: "var(--sunset-green-950)" }}
      >
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[rgba(255, 255, 255,0.14)] pb-7 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[rgba(255, 255, 255,0.56)]">
              {isBn ? "আনুমানিক বিনিয়োগ সারসংক্ষেপ" : "Estimated investment summary"}
            </p>
            <h3 className="text-display-md text-[var(--paper)]">
              {isBn ? selectedPkg.nameBn : selectedPkg.name}{" "}
              <span className="text-[rgba(255, 255, 255,0.56)]">
                · {customUnits} {isBn ? "ইউনিট" : customUnits > 1 ? "units" : "unit"}
              </span>
            </h3>
          </div>
          <div className="text-left md:text-right">
            <p className="mb-1 text-[10.5px] uppercase tracking-[0.12em] text-[rgba(255, 255, 255,0.56)]">
              {isBn ? "মোট প্যাকেজ মূল্য" : "Total package price"}
            </p>
            <p className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-none tabular-nums text-[var(--paper)]">
              {formatBDT(totalInvestment)}
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              label: t.packages.booking,
              value: formatBDT(totalBooking),
              note: isBn ? "আবেদন ও যাচাইকরণের সময় প্রদেয়" : "Payable on application and verification",
            },
            {
              label: t.packages.remaining,
              value: formatBDT(remainingAmount),
              note: isBn ? "সহজ কিস্তি কাঠামো" : "Structured instalment plan",
            },
            {
              label: isBn ? "আবাসন সুবিধা" : "Accommodation stay days",
              value: `${totalAccommodationDays} ${isBn ? "দিন" : "days"}`,
              note: isBn ? "বার্ষিক বিনামূল্যে হোটেল থাকার সুবিধা" : "Complimentary annual hotel stay days",
              accent: true,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[14px] border border-[rgba(255, 255, 255,0.12)] bg-[rgba(255, 255, 255,0.05)] p-5"
            >
              <p className="mb-1 flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.1em] text-[rgba(255, 255, 255,0.56)]">
                {item.accent && <Calendar size={12} className="text-[var(--sunset-red)]" />}
                {item.label}
              </p>
              <p
                className={`font-display text-[1.5rem] leading-none tabular-nums ${
                  item.accent ? "text-[var(--sunset-red)]" : "text-[var(--paper)]"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-2 text-[10.5px] leading-relaxed text-[rgba(255, 255, 255,0.45)]">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-col justify-between gap-5 rounded-[14px] border border-[rgba(255, 255, 255,0.14)] bg-[rgba(0,0,0,0.18)] p-5 md:flex-row md:items-center">
          <div>
            <p className="mb-1 text-[10.5px] uppercase tracking-[0.1em] text-[rgba(255, 255, 255,0.56)]">
              {isBn ? "বার্ষিক প্রক্ষেপিত সম্ভাব্য মুনাফা" : "Annual projected rate of return"}
            </p>
            <p className="text-[13.5px] font-medium">
              {isRatePlaceholder ? (
                <span className="text-[var(--sunset-red)]">
                  {isBn
                    ? "প্রকৃত মুনাফা নিরীক্ষিত পরিচালন আয়ের ওপর ভিত্তি করে নির্ধারিত হবে।"
                    : "Actual returns depend on net audited operating performance."}
                </span>
              ) : (
                <span className="text-[var(--paper)]">
                  {isBn
                    ? `আনুমানিক প্রতি বছর ${formatBDT(projectedAnnualReturn)}`
                    : `Estimated ${formatBDT(projectedAnnualReturn)} per year`}
                </span>
              )}
            </p>
          </div>

          <Link
            href={`/contact?project=Sunset+Kuakata+Hotel+%26+Resort&package=${selectedPkg.name}`}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[var(--paper)] px-4 py-3 text-[12.5px] font-semibold text-[var(--sunset-green-900)] transition-colors hover:bg-white"
          >
            {isBn ? "এই প্যাকেজটি সংরক্ষণ করুন" : "Reserve this package"}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex items-start gap-3 rounded-[12px] border border-[rgba(173,90,67,0.5)] bg-[rgba(173,90,67,0.14)] p-4">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-[var(--sunset-red)]" />
          <p className="text-[11px] leading-relaxed text-[rgba(255, 255, 255,0.78)]">
            <strong className="mr-1 font-semibold text-[var(--sunset-red)]">
              {isBn ? "সম্মতি বিজ্ঞপ্তি:" : "Compliance notice:"}
            </strong>
            {isBn ? DISCLAIMER_BN : DISCLAIMER_EN}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
