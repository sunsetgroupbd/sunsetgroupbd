/**
 * CALCULATOR CONFIG
 * Kept aligned with verified package prices and accommodation days.
 * Note: Stay days at the hotel are strictly Accommodation days, not profit.
 */

export interface PackageCalcConfig {
  id: string;
  name: string;
  nameBn: string;
  priceBDT: number;
  bookingBDT: number;
  areaSft: number;
  accommodationDays: number;
  /** @deprecated mapped to accommodationDays */
  profitDays: number;
  profitSharePercent?: number;
  /**
   * TODO: Set real annual profit rate (as decimal, e.g. 0.12 = 12%)
   * This is used ONLY for illustrative projection display.
   * NOT a guaranteed return.
   */
  illustrativeAnnualRate: number;
}

export const calculatorConfig: PackageCalcConfig[] = [
  {
    id: "platinum",
    name: "Platinum",
    nameBn: "প্লাটিনাম",
    priceBDT: 5400000,
    bookingBDT: 1200000,
    areaSft: 280,
    accommodationDays: 112,
    profitDays: 112,
    profitSharePercent: 60,
    illustrativeAnnualRate: 0.0,
  },
  {
    id: "gold",
    name: "Gold",
    nameBn: "গোল্ড",
    priceBDT: 2750000,
    bookingBDT: 750000,
    areaSft: 140,
    accommodationDays: 56,
    profitDays: 56,
    profitSharePercent: 60,
    illustrativeAnnualRate: 0.0,
  },
  {
    id: "silver",
    name: "Silver",
    nameBn: "সিলভার",
    priceBDT: 1680000,
    bookingBDT: 450000,
    areaSft: 84,
    accommodationDays: 33,
    profitDays: 33,
    profitSharePercent: 50,
    illustrativeAnnualRate: 0.0,
  },
  {
    id: "bronze",
    name: "Bronze",
    nameBn: "ব্রোঞ্জ",
    priceBDT: 570000,
    bookingBDT: 150000,
    areaSft: 28,
    accommodationDays: 10,
    profitDays: 10,
    profitSharePercent: 40,
    illustrativeAnnualRate: 0.0,
  },
];

export const DISCLAIMER_EN =
  "Illustrative estimate only. Profit-sharing is subject to actual operational performance and audited accounts. This is not a guarantee of returns. Please read the Deed of Agreement before investing.";

export const DISCLAIMER_BN =
  "এটি শুধুমাত্র একটি চিত্রমূলক অনুমান। প্রকৃত লভ্যাংশ ব্যবসায়িক কর্মক্ষমতা এবং নিরীক্ষিত হিসাবের ওপর নির্ভরশীল। এটি কোনো নিশ্চিত মুনাফার প্রতিশ্রুতি নয়। বিনিয়োগের পূর্বে অনুগ্রহ করে চুক্তিপত্র (Deed of Agreement) পড়ে নিন।";
