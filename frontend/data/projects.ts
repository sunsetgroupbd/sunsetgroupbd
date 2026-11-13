/**
 * SUNSET GROUP — PROJECT DATA
 * Add a new project by appending one object to this array.
 * generateStaticParams in /app/projects/[slug]/page.tsx reads this file.
 */

export interface ProjectPackage {
  name: string;
  nameBn?: string;
  priceLabel: string;
  priceBDT: number;
  bookingBDT: number;
  areaSft?: number;
  accommodationDays?: number;
  /** @deprecated use accommodationDays */
  profitDays?: number;
  profitSharePercent?: number;
  nominatedPersons?: number; // for Sun Care and Super Combo
  insuranceBDT?: number; // for Super Combo
  installmentFromBDT?: number; // for DFI
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectSlide {
  src: string;
  name: string;
  nameBn: string;
  location: string;
  locationBn: string;
}

export interface Project {
  slug: string;
  number: string;        // "01", "02", etc.
  name: string;          // English name
  nameBn: string;        // Bangla name
  tagline: string;       // one-line English value proposition
  taglineBn: string;
  location: string;
  locationBn: string;
  description: string;   // paragraph, English
  descriptionBn: string;
  heroImage: string;     // path relative to /public
  slideshowImages?: ProjectSlide[];
  galleryImages: string[];
  keyFacts: ProjectFact[];
  whyInvest: string[];
  services?: string[];   // used for Sun Care
  safKabala: boolean;
  packages?: ProjectPackage[];
  comboSlugs?: string[]; // used by super-combo
  badge?: string;        // e.g. "First 5-Star in Kuakata"
  badgeBn?: string;
}

export const projects: Project[] = [
  /* ─────────────────────────────────────────
     01 — SUNSET KUAKATA HOTEL & RESORT
  ───────────────────────────────────────── */
  {
    slug: "kuakata-hotel",
    number: "01",
    name: "Sunset Kuakata Hotel & Resort",
    nameBn: "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট",
    tagline: "Sunrise, Sunset & Sundarbans — all in one frame.",
    taglineBn: "একই ফ্রেমে সূর্যোদয়, সূর্যাস্ত ও সুন্দরবন।",
    location: "Kuakata, Patuakhali, Bangladesh",
    locationBn: "কুয়াকাটা, পটুয়াখালী, বাংলাদেশ",
    description:
      "Bangladesh's first five-star-equivalent hotel in the sea-kissed town of Kuakata. Positioned within the KTC Master Plan area, the resort sits outside earthquake-prone zones and commands panoramic views of the Bay of Bengal. Investors earn annual profit-sharing from hotel operations and room revenue over their ownership period.",
    descriptionBn:
      "কুয়াকাটায় বাংলাদেশের প্রথম পাঁচতারা মানের হোটেল। কেটিসি মাস্টার প্ল্যান এলাকায় অবস্থিত এই রিসোর্টটি ভূমিকম্পমুক্ত অঞ্চলে এবং বঙ্গোপসাগরের দিকে মনোরম দৃশ্য উপভোগ করা যায়। বিনিয়োগকারীরা হোটেল পরিচালনা থেকে বার্ষিক মুনাফা ভাগাভাগি পাবেন।",
    heroImage: "/images/kuakata/hero.webp",
    galleryImages: [
      "/images/kuakata/gallery-01.webp",
      "/images/kuakata/gallery-02.webp",
      "/images/kuakata/gallery-03.webp",
      "/images/kuakata/gallery-04.webp",
      "/images/kuakata/gallery-05.webp",
      "/images/kuakata/gallery-06.webp",
    ],
    keyFacts: [
      { label: "Project Type", value: "5-Star Hotel & Resort" },
      { label: "Location", value: "KTC Master Plan Area, Kuakata" },
      { label: "Land Purchase", value: "2023" },
      { label: "Construction Start", value: "2024" },
      { label: "Partial Opening", value: "2025" },
      { label: "Project Timeline", value: "2027 (Planned) · 2029 (Planned)" },
      { label: "Registration", value: "Company Act 1994 + Saf-Kabala" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Only sunrise AND sunset visible beach in Bangladesh",
      "Adjacent to Sundarbans — unique eco-tourism hub",
      "KTC Government Master Plan zone — planned infrastructure",
      "Combined inclusions: Sunset Hotel + Mangrove Eco Resort",
      "8 income streams: room rent, hall, training institute, mall, gaming, restaurant, F&B, indoor activity",
      "World-class facilities: rooms, dining, pools, games, fit & relax, added services",
      "Ownership lifecycle: Money Receipt -> Deed of Agreement -> Saf-Kabala after full payment",
      "Exit policy: Share transfer and resale permitted after saf-kabala registration",
      "Halal operational profit-sharing with deeded saf-kabala asset backing",
    ],
    safKabala: true,
    packages: [
      {
        name: "Platinum",
        nameBn: "প্লাটিনাম",
        priceLabel: "৳ ৫৪,০০,০০০",
        priceBDT: 5400000,
        bookingBDT: 1200000,
        areaSft: 280,
        accommodationDays: 112,
        profitDays: 112,
        profitSharePercent: 60,
      },
      {
        name: "Gold",
        nameBn: "গোল্ড",
        priceLabel: "৳ ২৭,৫০,০০০",
        priceBDT: 2750000,
        bookingBDT: 750000,
        areaSft: 140,
        accommodationDays: 56,
        profitDays: 56,
        profitSharePercent: 60,
      },
      {
        name: "Silver",
        nameBn: "সিলভার",
        priceLabel: "৳ ১৬,৮০,০০০",
        priceBDT: 1680000,
        bookingBDT: 450000,
        areaSft: 84,
        accommodationDays: 33,
        profitDays: 33,
        profitSharePercent: 50,
      },
      {
        name: "Bronze",
        nameBn: "ব্রোঞ্জ",
        priceLabel: "৳ ৫,৭০,০০০",
        priceBDT: 570000,
        bookingBDT: 150000,
        areaSft: 28,
        accommodationDays: 10,
        profitDays: 10,
        profitSharePercent: 40,
      },
    ],
    badge: "First 5-Star in Kuakata",
    badgeBn: "কুয়াকাটায় প্রথম পাঁচতারা",
  },

  /* ─────────────────────────────────────────
     02 — SUN CARE HOSPITAL & DIAGNOSTIC CENTER
  ───────────────────────────────────────── */
  {
    slug: "sun-care",
    number: "02",
    name: "Sun Care Hospital & Diagnostic Center Ltd.",
    nameBn: "সান কেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার লিমিটেড",
    tagline: "Invest in health — yours and your community's.",
    taglineBn: "স্বাস্থ্যে বিনিয়োগ করুন — আপনার এবং সমাজের জন্য।",
    location: "Mohammadpur / Basila, Dhaka (15 min from 27 Shaptak Square)",
    locationBn: "মোহাম্মদপুর / বসিলা, ঢাকা (২৭ সপ্তক স্কয়ার থেকে ১৫ মিনিট)",
    description:
      "Sun Care Hospital & Diagnostic Center Ltd. is a modern multi-specialty hospital in Mohammadpur / Basila, Dhaka — conveniently located just 15 minutes from 27 Shaptak Square. Investors and 20 to 200 nominated individuals depending on tier (Bronze 20, Silver 60, Gold 100, Platinum 200 // CLIENT TO CONFIRM) receive hospital services strictly at cost price — a unique benefit beyond financial returns. The hospital features 24/7 emergency services, home visits, a full diagnostic lab, pharmacy, ambulance fleet and specialist doctors.",
    descriptionBn:
      "সান কেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার লিমিটেড ঢাকার মোহাম্মদপুর/বসিলায় একটি আধুনিক বহু-বিশেষজ্ঞ হাসপাতাল — ২৭ সপ্তক স্কয়ার থেকে মাত্র ১৫ মিনিটের দূরত্বে। বিনিয়োগকারী এবং প্যাকেজ স্তর অনুযায়ী ২০ থেকে ২০০ জন মনোনীত ব্যক্তি (ব্রোঞ্জ ২০, সিলভার ৬০, গোল্ড ১০০, প্লাটিনাম ২০০ // ক্লায়েন্ট নিশ্চিতকরণ সাপেক্ষ) খরচমূল্যে হাসপাতাল সেবা পাবেন। ২৪/৭ জরুরি সেবা, হোম ভিজিট, ডায়াগনস্টিক ল্যাব, ফার্মেসি, অ্যাম্বুলেন্স ও বিশেষজ্ঞ ডাক্তার রয়েছে।",
    heroImage: "/images/sun-care/hero.webp",
    galleryImages: [
      "/images/sun-care/hero.webp",
      "/images/sun-care/Hospital view.webp",
      "/images/sun-care/gallery-02.webp",
    ],
    keyFacts: [
      { label: "Type", value: "Multi-Specialty Hospital" },
      { label: "Location", value: "Mohammadpur / Basila, Dhaka" },
      { label: "Distance", value: "15 min from 27 Shaptak Square" },
      { label: "Emergency", value: "24/7 Available" },
      { label: "Home Service", value: "Available" },
      { label: "Registration", value: "Company Act 1994 + Saf-Kabala" },
      { label: "Investor Benefit", value: "Services at cost price" },
      { label: "Nominated Persons", value: "20 / 60 / 100 / 200 by tier // CLIENT TO CONFIRM" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Healthcare sector in Bangladesh growing at 15%+ annually",
      "Investors & 20 to 200 nominated persons receive services at cost // CLIENT TO CONFIRM",
      "Annual profit-sharing from both medical sales & diagnostic services revenue",
      "Legally secure saf-kabala deed registration per unit",
      "Prime location in rapidly developing Basila corridor, 15 min from Dhanmondi 27",
      "Shariah supervisory committee oversight",
      "Ownership lifecycle: Money Receipt -> Deed of Agreement -> Saf-Kabala after full payment",
      "Exit policy: Share transfer and resale permitted after saf-kabala registration",
    ],
    services: [
      "24/7 Emergency Services",
      "Home Visit Service",
      "Full Diagnostic Laboratory",
      "Pharmacy",
      "Ambulance Service",
      "Specialist Doctor Consultations",
      "Annual Health Check-ups",
      "Minor & Major Surgery",
    ],
    safKabala: true,
    packages: [
      {
        name: "Platinum",
        nameBn: "প্লাটিনাম",
        priceLabel: "৳ ৩২,০০,০০০",
        priceBDT: 3200000,
        bookingBDT: 800000,
        areaSft: 24.64,
        nominatedPersons: 200, // CLIENT TO CONFIRM
      },
      {
        name: "Gold",
        nameBn: "গোল্ড",
        priceLabel: "৳ ১৬,৫০,০০০",
        priceBDT: 1650000,
        bookingBDT: 500000,
        areaSft: 12.32,
        nominatedPersons: 100, // CLIENT TO CONFIRM
      },
      {
        name: "Silver",
        nameBn: "সিলভার",
        priceLabel: "৳ ১০,২০,০০০",
        priceBDT: 1020000,
        bookingBDT: 300000,
        areaSft: 7.392,
        nominatedPersons: 60, // CLIENT TO CONFIRM
      },
      {
        name: "Bronze",
        nameBn: "ব্রোঞ্জ",
        priceLabel: "৳ ৩,৫০,০০০",
        priceBDT: 350000,
        bookingBDT: 100000,
        areaSft: 2.464,
        nominatedPersons: 20, // CLIENT TO CONFIRM
      },
    ],
    badge: "Services at Cost Price",
    badgeBn: "খরচমূল্যে স্বাস্থ্যসেবা",
  },

  /* ─────────────────────────────────────────
     03 — DHAKA FANTASY ISLAND (DFI)
  ───────────────────────────────────────── */
  {
    slug: "dfi",
    number: "03",
    name: "Dhaka Fantasy Island (DFI)",
    nameBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড",
    tagline: "An eco-resort escape — just 20 minutes from Parliament.",
    taglineBn: "সংসদ ভবন থেকে মাত্র ২০ মিনিট — একটি পরিবেশবান্ধব রিসোর্ট।",
    location: "Mohammadpur, Dhaka (19 min from 27 Shaptak Square, 20 min from Parliament)",
    locationBn: "মোহাম্মদপুর, ঢাকা (২৭ সপ্তক স্কয়ার থেকে ১৯ মিনিট, সংসদ ভবন থেকে ২০ মিনিট)",
    description:
      "Dhaka Fantasy Island is an eco hotel & resort combining residential and commercial zones in the heart of Dhaka's expanding western corridor. Strategically located just 19 minutes from 27 Shaptak Square and 20 minutes from Parliament House in Mohammadpur, DFI offers a unique urban retreat concept. All units carry saf-kabala registration, ensuring legal security for investors.",
    descriptionBn:
      "ঢাকা ফ্যান্টাসি আইল্যান্ড ঢাকার পশ্চিম করিডরে আবাসিক ও বাণিজ্যিক এলাকা নিয়ে একটি ইকো হোটেল ও রিসোর্ট। ২৭ সপ্তক স্কয়ার থেকে ১৯ মিনিট এবং জাতীয় সংসদ ভবন থেকে মাত্র ২০ মিনিটের দূরত্বে মোহাম্মদপুরে অবস্থিত। সকল ইউনিট সাফ-কবালা নিবন্ধিত।",
    heroImage: "/images/dfi/dfi-aerial.webp",
    galleryImages: [
      "/images/dfi/dfi-aerial.webp",
      "/images/dfi/DFI-top-view.webp",
      "/images/dfi/Hotel & restaurant View.jpg.webp",
      "/images/dfi/North View.jpg.webp",
      "/images/dfi/South View.jpg.webp",
      "/images/dfi/West  View.jpg.webp",
      "/images/dfi/Coffee Corner& Rest Room.jpg.webp",
      "/images/dfi/Recreational Playing Zone.jpg.webp",
    ],
    keyFacts: [
      { label: "Type", value: "Eco Hotel & Resort" },
      { label: "Location", value: "Mohammadpur, Dhaka" },
      { label: "Distance", value: "19 min from 27 Shaptak Square" },
      { label: "Zones", value: "Residential + Commercial" },
      { label: "Installments", value: "From Tk 4,990/month // CLIENT TO CONFIRM" },
      { label: "Registration", value: "Company Act 1994 + Saf-Kabala" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Strategic urban location — closest eco-resort to Dhaka centre (19 min from Shaptak Square)",
      "Rising demand for urban retreats and staycation tourism",
      "Residential + commercial dual-zone maximises return potential",
      "Flexible monthly installment options starting from Tk 4,990 // CLIENT TO CONFIRM",
      "Legally secure saf-kabala registration",
      "Shariah-compliant investment structure",
      "Annual profit-sharing from operational revenue plus annual accommodation stay days",
      "Ownership lifecycle: Money Receipt -> Deed of Agreement -> Saf-Kabala after full payment",
      "Exit policy: Share transfer and resale permitted after saf-kabala registration",
    ],
    safKabala: true,
    packages: [
      {
        name: "Platinum",
        nameBn: "প্লাটিনাম",
        priceLabel: "৳ ৩২,০০,০০০",
        priceBDT: 3200000,
        bookingBDT: 800000,
        areaSft: 140,
        accommodationDays: 36, // TODO: CLIENT TO CONFIRM (source PDF says 30 days, brochure says 36)
        profitDays: 36,
        profitSharePercent: 25,
      },
      {
        name: "Gold",
        nameBn: "গোল্ড",
        priceLabel: "৳ ১৬,৫০,০০০",
        priceBDT: 1650000,
        bookingBDT: 500000,
        areaSft: 70,
        accommodationDays: 17,
        profitDays: 17,
        profitSharePercent: 20,
      },
      {
        name: "Silver",
        nameBn: "সিলভার",
        priceLabel: "৳ ১০,২০,০০০",
        priceBDT: 1020000,
        bookingBDT: 300000,
        areaSft: 42,
        accommodationDays: 10,
        profitDays: 10,
        profitSharePercent: 15,
      },
      {
        name: "Bronze",
        nameBn: "ব্রোঞ্জ",
        priceLabel: "৳ ৩,৫০,০০০",
        priceBDT: 350000,
        bookingBDT: 100000,
        areaSft: 14,
        accommodationDays: 3,
        profitDays: 3,
        profitSharePercent: 10,
      },
    ],
    badge: "Eco Resort — 19 min from Shaptak Sq.",
    badgeBn: "ইকো রিসোর্ট — সপ্তক স্কয়ার থেকে ১৯ মি.",
  },

  /* ─────────────────────────────────────────
     04 — SUPER COMBO INVESTMENT
  ───────────────────────────────────────── */
  {
    slug: "super-combo",
    number: "04",
    name: "Super Combo Investment",
    nameBn: "সুপার কম্বো বিনিয়োগ",
    tagline: "Own a stake across all key projects — Kuakata, Sun Care, DFI & Mangrove.",
    taglineBn: "একসাথে চারটি প্রধান প্রকল্পে মালিকানা — কুয়াকাটা, সান কেয়ার, ডিএফআই এবং ম্যানগ্রোভ।",
    location: "Kuakata (Marine Drive) + Dhaka",
    locationBn: "কুয়াকাটা (মেরিন ড্রাইভ) + ঢাকা",
    description:
      "The Super Combo package gives investors a diversified ownership stake across Sunset Group's core developments: Sunset Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island (DFI), and Mangrove Hotel & Resort on Kuakata Marine Drive. Diversify across coastal 5-star hospitality, urban healthcare, urban eco-retreat, and prime Marine Drive coastal resort living — all under one Shariah-compliant, legally secured umbrella.",
    descriptionBn:
      "সুপার কম্বো প্যাকেজ বিনিয়োগকারীদের সানসেট গ্রুপের মূল প্রকল্পগুলোতে একসাথে অংশীদারিত্ব দেয়: কুয়াকাটা হোটেল ও রিসোর্ট, সান কেয়ার হাসপাতাল, ঢাকা ফ্যান্টাসি আইল্যান্ড এবং কুয়াকাটা মেরিন ড্রাইভ সংলগ্ন ম্যানগ্রোভ হোটেল ও রিসোর্ট। পাঁচতারা আতিথেয়তা, স্বাস্থ্যসেবা, নগর ইকো-রিসোর্ট এবং মেরিন ড্রাইভ উপকূলীয় রিসোর্ট — চারটি সম্ভাবনাময় খাতে এককালীন বিনিয়োগ।",
    heroImage: "/images/kuakata/hero.webp",
    slideshowImages: [
      {
        src: "/images/kuakata/hero.webp",
        name: "Sunset Kuakata Hotel & Resort",
        nameBn: "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট",
        location: "KTC Master Plan, Kuakata",
        locationBn: "কেটিসি মাস্টার প্ল্যান, কুয়াকাটা",
      },
      {
        src: "/images/sun-care/hero.webp",
        name: "Sun Care Hospital & Diagnostic Center",
        nameBn: "সান কেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার",
        location: "Mohammadpur / Basila, Dhaka",
        locationBn: "মোহাম্মদপুর / বসিলা, ঢাকা",
      },
      {
        src: "/images/dfi/dfi-aerial.webp",
        name: "Dhaka Fantasy Island (DFI)",
        nameBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড (ডিএফআই)",
        location: "Mohammadpur, Dhaka",
        locationBn: "মোহাম্মদপুর, ঢাকা",
      },
      {
        src: "/images/mangrove/Mangrove.webp",
        name: "Mangrove Hotel & Resort",
        nameBn: "ম্যানগ্রোভ হোটেল ও রিসোর্ট",
        location: "Marine Drive, Kuakata",
        locationBn: "মেরিন ড্রাইভ, কুয়াকাটা",
      },
    ],
    galleryImages: [
      "/images/kuakata/hero.webp",
      "/images/sun-care/hero.webp",
      "/images/dfi/dfi-aerial.webp",
      "/images/mangrove/Mangrove.webp",
      "/images/kuakata/gallery-01.webp",
      "/images/sun-care/Hospital view.webp",
      "/images/dfi/DFI-top-view.webp",
      "/images/mangrove/Mangrove Entry01.webp",
    ],
    keyFacts: [
      { label: "Projects Included", value: "4 Flagship Developments (Kuakata, Sun Care, DFI, Mangrove)" },
      { label: "Sectors", value: "5-Star Hospitality, Healthcare, Urban Leisure & Marine Drive Resort" },
      { label: "Registration", value: "Company Act 1994 + Saf-Kabala" },
      { label: "Hospital Benefit", value: "20 to 200 nominated persons // CLIENT TO CONFIRM" },
      { label: "Life Insurance", value: "৳ 5L to ৳ 50L coverage" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Maximum diversification across 4 growth sectors under a single investment",
      "Combined ownership in Kuakata 5-Star Resort, Sun Care Hospital, DFI, and Marine Drive Mangrove Resort",
      "Healthcare services strictly at cost price for 20 to 200 nominated individuals depending on tier // CLIENT TO CONFIRM",
      "Complimentary life insurance coverage from ৳ 5 Lakh up to ৳ 50 Lakh",
      "Annual accommodation stay days: Kuakata 10-112 days + DFI 3-36 days (13 to 148 days total)",
      "Annual audited profit-sharing from hotel operations, hospital, and eco-resorts",
      "Best value-per-taka with combined multi-project package pricing",
      "Full Shariah compliance across all four developments",
      "Legally registered saf-kabala deed registration on all real estate developments",
      "Ownership lifecycle: Money Receipt -> Deed of Agreement -> Saf-Kabala after full payment",
      "Exit policy: Share transfer and resale permitted after saf-kabala registration",
    ],
    safKabala: true,
    packages: [
      {
        name: "Platinum",
        nameBn: "প্লাটিনাম",
        priceLabel: "৳ ১,১৫,০০,০০০",
        priceBDT: 11500000,
        bookingBDT: 1700000,
        areaSft: 444.64,
        accommodationDays: 148, // Kuakata 112 + DFI 36 (TODO: CLIENT TO CONFIRM)
        profitDays: 148,
        nominatedPersons: 200, // CLIENT TO CONFIRM
        insuranceBDT: 5000000,
      },
      {
        name: "Gold",
        nameBn: "গোল্ড",
        priceLabel: "৳ ৫৯,০০,০০০",
        priceBDT: 5900000,
        bookingBDT: 1000000,
        areaSft: 222.32,
        accommodationDays: 73, // Kuakata 56 + DFI 17
        profitDays: 73,
        nominatedPersons: 100, // CLIENT TO CONFIRM
        insuranceBDT: 2500000,
      },
      {
        name: "Silver",
        nameBn: "সিলভার",
        priceLabel: "৳ ৩৬,৩০,০০০",
        priceBDT: 3630000,
        bookingBDT: 700000,
        areaSft: 133.392,
        accommodationDays: 43, // Kuakata 33 + DFI 10
        profitDays: 43,
        nominatedPersons: 60, // CLIENT TO CONFIRM
        insuranceBDT: 1500000,
      },
      {
        name: "Bronze",
        nameBn: "ব্রোঞ্জ",
        priceLabel: "৳ ১২,৪০,০০০",
        priceBDT: 1240000,
        bookingBDT: 300000,
        areaSft: 44.464,
        accommodationDays: 13, // Kuakata 10 + DFI 3
        profitDays: 13,
        nominatedPersons: 20, // CLIENT TO CONFIRM
        insuranceBDT: 500000,
      },
    ],
    comboSlugs: ["kuakata-hotel", "sun-care", "dfi", "mangrove"],
    badge: "Best Value — 4 Projects",
    badgeBn: "সর্বোচ্চ সুবিধা — ৪টি প্রকল্প",
  },

  /* ─────────────────────────────────────────
     05 — THE DECK
     (not in combo, standalone project)
  ───────────────────────────────────────── */
  {
    slug: "the-deck",
    number: "05",
    name: "The Deck",
    nameBn: "দ্য ডেক",
    tagline: "A premium lifestyle destination redefining leisure.",
    taglineBn: "একটি প্রিমিয়াম লাইফস্টাইল গন্তব্য।",
    location: "Bangladesh (details coming soon)",
    locationBn: "বাংলাদেশ (বিস্তারিত শীঘ্রই)",
    description:
      "The Deck is Sunset Group's premium lifestyle project — an exclusive venue combining fine dining, rooftop leisure, and boutique hospitality. Details and investment packages will be released shortly. Register your interest to receive early access.",
    descriptionBn:
      "দ্য ডেক হলো সানসেট গ্রুপের প্রিমিয়াম লাইফস্টাইল প্রকল্প — ফাইন ডাইনিং, রুফটপ লেজার এবং বুটিক হসপিটালিটি একত্রে। বিস্তারিত ও বিনিয়োগ প্যাকেজ শীঘ্রই প্রকাশিত হবে।",
    heroImage: "/images/the-deck/The Deck view-01.webp",
    galleryImages: [
      "/images/the-deck/The Deck view-01.webp",
      "/images/the-deck/The Deck view2-01.webp",
      "/images/the-deck/The deck-01.webp",
    ],
    keyFacts: [
      { label: "Type", value: "Lifestyle & Leisure Venue" },
      { label: "Status", value: "Coming Soon" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Ground-floor opportunity in Sunset Group's newest venture",
      "Premium lifestyle market growing rapidly in Bangladesh",
      "Full Shariah-compliant investment structure",
      "Register interest early for preferred package access",
    ],
    safKabala: false,
    badge: "Coming Soon",
    badgeBn: "শীঘ্রই আসছে",
  },

  /* ─────────────────────────────────────────
     06 — MANGROVE HOTEL & RESORT
  ───────────────────────────────────────── */
  {
    slug: "mangrove",
    number: "06",
    name: "Mangrove Hotel & Resort",
    nameBn: "ম্যানগ্রোভ হোটেল ও রিসোর্ট",
    tagline: "Prime coastal hospitality along the scenic Kuakata Marine Drive.",
    taglineBn: "নয়নাভিরাম কুয়াকাটা মেরিন ড্রাইভ সংলগ্ন প্রিমিয়াম উপকূলীয় আতিথেয়তা।",
    location: "Marine Drive, Kuakata, Patuakhali",
    locationBn: "মেরিন ড্রাইভ, কুয়াকাটা, পটুয়াখালী",
    description:
      "Mangrove Hotel & Resort is Sunset Group's upcoming coastal leisure destination located directly along the prestigious Marine Drive in Kuakata. Positioned within the high-growth coastal development corridor, the resort commands stunning views of the Bay of Bengal and seamless Marine Drive connectivity. Offering Shariah-compliant shared ownership with legally registered saf-kabala deed rights, it is also integrated into the Sunset Super Combo portfolio.",
    descriptionBn:
      "ম্যানগ্রোভ হোটেল ও রিসোর্ট হলো সানসেট গ্রুপের একটি প্রিমিয়াম উপকূলীয় প্রকল্প, যা কুয়াকাটার মনোরম মেরিন ড্রাইভ সড়কের পাশে অবস্থিত। বঙ্গোপসাগরের মনোরম দৃশ্য ও মেরিন ড্রাইভের সরাসরি সংযোগ সংবলিত এই প্রকল্প বিনিয়োগকারীদের দীর্ঘমেয়াদি অংশীদারিত্ব ও হালাল আয়ের সুযোগ দেয়। এটি সানসেট সুপার কম্বো প্যাকেজেরও অংশ।",
    heroImage: "/images/mangrove/Mangrove.webp",
    galleryImages: [
      "/images/mangrove/Mangrove.webp",
      "/images/mangrove/Mangrove Entry01.webp",
      "/images/mangrove/Mangrove02.webp",
      "/images/mangrove/Mangrove03.webp",
      "/images/mangrove/Mangrove04.webp",
      "/images/mangrove/Mangrove05.webp",
      "/images/mangrove/Mangrove06.webp",
      "/images/mangrove/Mangrove07.webp",
      "/images/mangrove/Mangrove09.webp",
    ],
    keyFacts: [
      { label: "Type", value: "Coastal Hotel & Resort" },
      { label: "Location", value: "Marine Drive, Kuakata" },
      { label: "Access", value: "Direct Marine Drive Frontage" },
      { label: "Registration", value: "Saf-Kabala Deed Registered" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Prime frontage on the prestigious Kuakata Marine Drive corridor",
      "Surging tourism growth and infrastructure expansion in Kuakata",
      "Direct beach & coastal highway connectivity",
      "Shariah-compliant deeded saf-kabala shared ownership",
      "Included in the high-yield Sunset Super Combo package",
    ],
    safKabala: true,
    badge: "Kuakata Marine Drive",
    badgeBn: "কুয়াকাটা মেরিন ড্রাইভ",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getStaticProjectSlugs(): { slug: string }[] {
  return projects.map((p) => ({ slug: p.slug }));
}

