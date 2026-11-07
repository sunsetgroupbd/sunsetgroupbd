/**
 * OWNERSHIP PACKAGES — Kuakata Hotel & Resort
 * Prices in BDT.
 */

export interface Package {
  id: string;
  name: string;
  nameBn: string;
  priceBDT: number;
  priceDisplay: string;
  priceBn: string;
  bookingBDT: number;
  bookingDisplay: string;
  bookingBn: string;
  remainingBDT: number;
  profitDays: number;
  profitDaysBn: string;
  highlighted: boolean; // Platinum is highlighted
  features: string[];
  featuresBn: string[];
}

export const packages: Package[] = [
  {
    id: "platinum",
    name: "Platinum",
    nameBn: "প্লাটিনাম",
    priceBDT: 3600000,
    priceDisplay: "৳ 36,00,000",
    priceBn: "৳ ৩৬,০০,০০০",
    bookingBDT: 800000,
    bookingDisplay: "৳ 8,00,000",
    bookingBn: "৳ ৮,০০,০০০",
    remainingBDT: 2800000,
    profitDays: 112,
    profitDaysBn: "১১২ দিন",
    highlighted: true,
    features: [
      "112 profit-sharing days per year",
      "Priority room allocation",
      "20 nominated persons — healthcare at cost",
      "Annual profit-sharing from revenue",
      "Saf-kabala legal registration",
      "Shariah Supervisory Committee oversight",
      "Lifetime membership",
      "VIP investor status",
    ],
    featuresBn: [
      "বার্ষিক ১১২ দিন মুনাফা ভাগাভাগি",
      "অগ্রাধিকার রুম বরাদ্দ",
      "২০ জন মনোনীত ব্যক্তি খরচমূল্যে স্বাস্থ্যসেবা",
      "রাজস্ব থেকে বার্ষিক মুনাফা ভাগাভাগি",
      "সাফ-কবালা আইনি নিবন্ধন",
      "শরীয়া তদারকি কমিটির তত্ত্বাবধান",
      "আজীবন সদস্যপদ",
      "ভিআইপি বিনিয়োগকারী মর্যাদা",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    nameBn: "গোল্ড",
    priceBDT: 1850000,
    priceDisplay: "৳ 18,50,000",
    priceBn: "৳ ১৮,৫০,০০০",
    bookingBDT: 500000,
    bookingDisplay: "৳ 5,00,000",
    bookingBn: "৳ ৫,০০,০০০",
    remainingBDT: 1350000,
    profitDays: 56,
    profitDaysBn: "৫৬ দিন",
    highlighted: false,
    features: [
      "56 profit-sharing days per year",
      "Standard room allocation",
      "20 nominated persons — healthcare at cost",
      "Annual profit-sharing from revenue",
      "Saf-kabala legal registration",
      "Shariah Supervisory Committee oversight",
      "Lifetime membership",
    ],
    featuresBn: [
      "বার্ষিক ৫৬ দিন মুনাফা ভাগাভাগি",
      "স্ট্যান্ডার্ড রুম বরাদ্দ",
      "২০ জন মনোনীত ব্যক্তি খরচমূল্যে স্বাস্থ্যসেবা",
      "রাজস্ব থেকে বার্ষিক মুনাফা ভাগাভাগি",
      "সাফ-কবালা আইনি নিবন্ধন",
      "শরীয়া তদারকি কমিটির তত্ত্বাবধান",
      "আজীবন সদস্যপদ",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    nameBn: "সিলভার",
    priceBDT: 1150000,
    priceDisplay: "৳ 11,50,000",
    priceBn: "৳ ১১,৫০,০০০",
    bookingBDT: 300000,
    bookingDisplay: "৳ 3,00,000",
    bookingBn: "৳ ৩,০০,০০০",
    remainingBDT: 850000,
    profitDays: 33,
    profitDaysBn: "৩৩ দিন",
    highlighted: false,
    features: [
      "33 profit-sharing days per year",
      "Standard room allocation",
      "20 nominated persons — healthcare at cost",
      "Annual profit-sharing from revenue",
      "Saf-kabala legal registration",
      "Shariah Supervisory Committee oversight",
    ],
    featuresBn: [
      "বার্ষিক ৩৩ দিন মুনাফা ভাগাভাগি",
      "স্ট্যান্ডার্ড রুম বরাদ্দ",
      "২০ জন মনোনীত ব্যক্তি খরচমূল্যে স্বাস্থ্যসেবা",
      "রাজস্ব থেকে বার্ষিক মুনাফা ভাগাভাগি",
      "সাফ-কবালা আইনি নিবন্ধন",
      "শরীয়া তদারকি কমিটির তত্ত্বাবধান",
    ],
  },
  {
    id: "bronze",
    name: "Bronze",
    nameBn: "ব্রোঞ্জ",
    priceBDT: 400000,
    priceDisplay: "৳ 4,00,000",
    priceBn: "৳ ৪,০০,০০০",
    bookingBDT: 100000,
    bookingDisplay: "৳ 1,00,000",
    bookingBn: "৳ ১,০০,০০০",
    remainingBDT: 300000,
    profitDays: 10,
    profitDaysBn: "১০ দিন",
    highlighted: false,
    features: [
      "10 profit-sharing days per year",
      "Standard room allocation",
      "20 nominated persons — healthcare at cost",
      "Annual profit-sharing from revenue",
      "Saf-kabala legal registration",
      "Shariah Supervisory Committee oversight",
    ],
    featuresBn: [
      "বার্ষিক ১০ দিন মুনাফা ভাগাভাগি",
      "স্ট্যান্ডার্ড রুম বরাদ্দ",
      "২০ জন মনোনীত ব্যক্তি খরচমূল্যে স্বাস্থ্যসেবা",
      "রাজস্ব থেকে বার্ষিক মুনাফা ভাগাভাগি",
      "সাফ-কবালা আইনি নিবন্ধন",
      "শরীয়া তদারকি কমিটির তত্ত্বাবধান",
    ],
  },
];

