/**
 * CALCULATOR CONFIG
 * TODO: Fill in real profit rates before launch.
 * Keep this file as the single source of truth for all calculator figures.
 */

export interface PackageCalcConfig {
  id: string;
  name: string;
  nameBn: string;
  priceBDT: number;
  bookingBDT: number;
  profitDays: number;
  /**
   * TODO: Set real annual profit rate (as decimal, e.g. 0.12 = 12%)
   * This is used ONLY for illustrative projection display.
   * NOT a guaranteed return.
   */
  illustrativeAnnualRate: number; // PLACEHOLDER — replace with real data
}

export const calculatorConfig: PackageCalcConfig[] = [
  {
    id: "platinum",
    name: "Platinum",
    nameBn: "প্লাটিনাম",
    priceBDT: 3600000,
    bookingBDT: 800000,
    profitDays: 112,
    illustrativeAnnualRate: 0.0, // TODO: set real rate
  },
  {
    id: "gold",
    name: "Gold",
    nameBn: "গোল্ড",
    priceBDT: 1850000,
    bookingBDT: 500000,
    profitDays: 56,
    illustrativeAnnualRate: 0.0, // TODO: set real rate
  },
  {
    id: "silver",
    name: "Silver",
    nameBn: "সিলভার",
    priceBDT: 1150000,
    bookingBDT: 300000,
    profitDays: 33,
    illustrativeAnnualRate: 0.0, // TODO: set real rate
  },
  {
    id: "bronze",
    name: "Bronze",
    nameBn: "ব্রোঞ্জ",
    priceBDT: 400000,
    bookingBDT: 100000,
    profitDays: 10,
    illustrativeAnnualRate: 0.0, // TODO: set real rate
  },
];

export const DISCLAIMER_EN =
  "Illustrative estimate only. Profit rates shown are placeholders pending final board approval. Actual returns depend on project performance. This is not a guarantee of returns. Please read the full terms and conditions and consult the company before investing.";

export const DISCLAIMER_BN =
  "এটি শুধুমাত্র একটি চিত্রমূলক অনুমান। দেখানো মুনাফার হার চূড়ান্ত বোর্ড অনুমোদনের আগে প্লেসহোল্ডার। প্রকৃত মুনাফা প্রকল্পের কর্মক্ষমতার উপর নির্ভর করে। এটি রিটার্নের কোনো গ্যারান্টি নয়। বিনিয়োগের আগে সম্পূর্ণ নিয়মাবলী পড়ুন এবং কোম্পানির সাথে পরামর্শ করুন।";

