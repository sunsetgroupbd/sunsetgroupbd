/**
 * SUNSET GROUP — PROJECT DATA
 * Add a new project by appending one object to this array.
 * generateStaticParams in /app/projects/[slug]/page.tsx reads this file.
 */

export interface ProjectPackage {
  name: string;
  priceLabel: string;
  priceBDT: number;
  bookingBDT: number;
  profitDays: number;
}

export interface ProjectFact {
  label: string;
  value: string;
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
      "/images/kuakata/02.webp",
      "/images/kuakata/03.webp",
      "/images/kuakata/04.webp",
      "/images/kuakata/05.webp",
      "/images/kuakata/06.webp",
      "/images/kuakata/07.webp",
      "/images/kuakata/Sunset Hotel & Resort.webp",
    ],
    keyFacts: [
      { label: "Project Type", value: "5-Star Hotel & Resort" },
      { label: "Location", value: "KTC Master Plan Area, Kuakata" },
      { label: "Land Purchase", value: "2023" },
      { label: "Construction Start", value: "2024" },
      { label: "Partial Opening", value: "2025" },
      { label: "Full Operations", value: "2029" },
      { label: "Registration", value: "Company Act 1994" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Only sunrise AND sunset visible beach in Bangladesh",
      "Adjacent to Sundarbans — unique eco-tourism hub",
      "KTC Government Master Plan zone — guaranteed infrastructure",
      "New bridge, highway & upcoming airport improving connectivity",
      "Rising domestic & international tourist numbers",
      "Low hotel competition in Kuakata market",
      "Outside Bangladesh earthquake-prone zone",
      "Lifetime halal profit-sharing income",
    ],
    safKabala: true,
    packages: [
      {
        name: "Platinum",
        priceLabel: "৳ ৩৬,০০,০০০",
        priceBDT: 3600000,
        bookingBDT: 800000,
        profitDays: 112,
      },
      {
        name: "Gold",
        priceLabel: "৳ ১৮,৫০,০০০",
        priceBDT: 1850000,
        bookingBDT: 500000,
        profitDays: 56,
      },
      {
        name: "Silver",
        priceLabel: "৳ ১১,৫০,০০০",
        priceBDT: 1150000,
        bookingBDT: 300000,
        profitDays: 33,
      },
      {
        name: "Bronze",
        priceLabel: "৳ ৪,০০,০০০",
        priceBDT: 400000,
        bookingBDT: 100000,
        profitDays: 10,
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
    location: "Mohammadpur / Basila, Dhaka",
    locationBn: "মোহাম্মদপুর / বসিলা, ঢাকা",
    description:
      "Sun Care Hospital & Diagnostic Center Ltd. is a modern multi-specialty hospital in Mohammadpur / Basila, Dhaka. Investors and 20 nominated individuals per package receive hospital services at cost price — a unique benefit beyond financial returns. The hospital features 24/7 emergency services, home visits, a full diagnostic lab, pharmacy, ambulance fleet and specialist doctors.",
    descriptionBn:
      "সান কেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার লিমিটেড ঢাকার মোহাম্মদপুর/বসিলায় একটি আধুনিক বহু-বিশেষজ্ঞ হাসপাতাল। বিনিয়োগকারী এবং প্রতি প্যাকেজে ২০ জন মনোনীত ব্যক্তি খরচমূল্যে হাসপাতাল সেবা পাবেন। ২৪/৭ জরুরি সেবা, হোম ভিজিট, ডায়াগনস্টিক ল্যাব, ফার্মেসি, অ্যাম্বুলেন্স ও বিশেষজ্ঞ ডাক্তার রয়েছে।",
    heroImage: "/images/sun-care/hero.webp",
    galleryImages: [
      "/images/sun-care/gallery-01.webp",
      "/images/sun-care/gallery-02.webp",
      "/images/sun-care/Hospital view.webp",
      "/images/sun-care/Sun Care Hospital.webp",
      "/images/sun-care/Suncare hospital close view.webp",
    ],
    keyFacts: [
      { label: "Type", value: "Multi-Specialty Hospital" },
      { label: "Location", value: "Mohammadpur / Basila, Dhaka" },
      { label: "Emergency", value: "24/7 Available" },
      { label: "Home Service", value: "Available" },
      { label: "Registration", value: "Saf-Kabala (placeholder reg. no.)" },
      { label: "Investor Benefit", value: "Services at cost price" },
      { label: "Nominated Persons", value: "20 per package" },
    ],
    whyInvest: [
      "Healthcare sector in Bangladesh growing at 15%+ annually",
      "Investors & 20 nominated persons receive services at cost",
      "Annual profit-sharing from both sales & services revenue",
      "Legally registered — saf-kabala registration",
      "Prime location in rapidly developing Basila area",
      "Shariah supervisory committee oversight",
      "Diversify investment beyond real estate",
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
    location: "Mohammadpur, Dhaka (20 min from Parliament House)",
    locationBn: "মোহাম্মদপুর, ঢাকা (জাতীয় সংসদ ভবন থেকে ২০ মিনিট)",
    description:
      "Dhaka Fantasy Island is an eco hotel & resort combining residential and commercial zones in the heart of Dhaka's expanding western corridor. Strategically located just 20 minutes from Parliament House in Mohammadpur, DFI offers a unique urban retreat concept. All units carry saf-kabala registration, ensuring legal security for investors.",
    descriptionBn:
      "ঢাকা ফ্যান্টাসি আইল্যান্ড ঢাকার পশ্চিম করিডরে আবাসিক ও বাণিজ্যিক এলাকা নিয়ে একটি ইকো হোটেল ও রিসোর্ট। জাতীয় সংসদ ভবন থেকে মাত্র ২০ মিনিটের দূরত্বে মোহাম্মদপুরে অবস্থিত। সকল ইউনিট সাফ-কবালা নিবন্ধিত।",
    heroImage: "/images/dfi/dfi-aerial.webp",
    galleryImages: [
      "/images/dfi/dfi-aerial.webp",
      "/images/dfi/DFI.webp",
      "/images/dfi/DFI-top-view.webp",
      "/images/dfi/Dhaka-Fantasy-Island.webp",
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
      { label: "Distance", value: "20 min from Parliament House" },
      { label: "Zones", value: "Residential + Commercial" },
      { label: "Registration", value: "Saf-Kabala (placeholder reg. no.)" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Strategic urban location — closest eco-resort to Dhaka centre",
      "Rising demand for urban retreats and staycation tourism",
      "Residential + commercial dual-zone maximises return potential",
      "Legally secure saf-kabala registration",
      "Shariah-compliant investment structure",
      "Annual profit-sharing from operational revenue",
    ],
    safKabala: true,
    badge: "Eco Resort — 20 min from Parliament",
    badgeBn: "পরিবেশবান্ধব রিসোর্ট — সংসদ থেকে ২০ মিনিট",
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
    location: "Kuakata + Dhaka + Mangrove",
    locationBn: "কুয়াকাটা + ঢাকা + ম্যানগ্রোভ",
    description:
      "The Super Combo package gives investors a diversified ownership stake across Sunset Group's core developments: Sunset Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island (DFI), and Mangrove Resort. Diversify across coastal 5-star hospitality, urban healthcare, urban eco-retreat, and natural mangrove eco-tourism — all under one Shariah-compliant, legally secured umbrella.",
    descriptionBn:
      "সুপার কম্বো প্যাকেজ বিনিয়োগকারীদের সানসেট গ্রুপের মূল প্রকল্পগুলোতে একসাথে অংশীদারিত্ব দেয়: কুয়াকাটা হোটেল ও রিসোর্ট, সান কেয়ার হাসপাতাল, ঢাকা ফ্যান্টাসি আইল্যান্ড এবং ম্যানগ্রোভ রিসোর্ট। পাঁচতারা আতিথেয়তা, স্বাস্থ্যসেবা, নগর ইকো-রিসোর্ট এবং ম্যানগ্রোভ পর্যটন — চারটি সম্ভাবনাময় খাতে এককালীন বিনিয়োগ।",
    heroImage: "/images/kuakata/hero.webp",
    galleryImages: [
      "/images/kuakata/gallery-01.webp",
      "/images/dfi/dfi-aerial.webp",
      "/images/sun-care/sun-care-center.webp",
      "/images/mangrove/Mangrove.webp",
    ],
    keyFacts: [
      { label: "Projects Included", value: "4 Flagship Developments (Kuakata, Sun Care, DFI, Mangrove)" },
      { label: "Sectors", value: "Hospitality, Healthcare, Eco-Resorts" },
      { label: "Registration", value: "Company Act 1994 + Saf-Kabala" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Maximum diversification across 4 growth sectors under a single investment",
      "Combined ownership in Kuakata 5-Star Resort, Sun Care Hospital, DFI, and Mangrove Resort",
      "Healthcare services strictly at cost price for you and 20 nominated individuals",
      "Annual audited profit-sharing from hotel operations, hospital, and eco-resorts",
      "Best value-per-taka with combined multi-project package pricing",
      "Full Shariah compliance across all four developments",
      "Legally registered saf-kabala deed registration on all real estate developments",
    ],
    safKabala: true,
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
     06 — MANGROVE (placeholder)
  ───────────────────────────────────────── */
  {
    slug: "mangrove",
    number: "06",
    name: "Mangrove Resort",
    nameBn: "ম্যানগ্রোভ রিসোর্ট",
    tagline: "Immerse yourself in the magic of the mangrove forest.",
    taglineBn: "ম্যানগ্রোভ বনের যাদুতে নিজেকে ডুবিয়ে দিন।",
    location: "Bangladesh (details coming soon)",
    locationBn: "বাংলাদেশ (বিস্তারিত শীঘ্রই)",
    description:
      "Mangrove Resort is Sunset Group's nature-first eco-resort nestled within a mangrove forest setting. This unique concept blends sustainable tourism with community development. Investment packages and registration details will be announced soon.",
    descriptionBn:
      "ম্যানগ্রোভ রিসোর্ট হলো সানসেট গ্রুপের প্রকৃতি-প্রথম ইকো রিসোর্ট যা ম্যানগ্রোভ বনে অবস্থিত। বিনিয়োগ প্যাকেজ ও নিবন্ধন বিস্তারিত শীঘ্রই ঘোষণা করা হবে।",
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
      { label: "Type", value: "Eco / Nature Resort" },
      { label: "Status", value: "Coming Soon" },
      { label: "Oversight", value: "Shariah Supervisory Committee" },
    ],
    whyInvest: [
      "Eco-tourism is the fastest growing travel segment globally",
      "Unique mangrove forest setting — unmatched in Bangladesh",
      "Shariah-compliant investment structure",
      "Register interest early for preferred package access",
    ],
    safKabala: false,
    badge: "Coming Soon",
    badgeBn: "শীঘ্রই আসছে",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getStaticProjectSlugs(): { slug: string }[] {
  return projects.map((p) => ({ slug: p.slug }));
}

