/**
 * GALLERY DATA
 * All images for the gallery page.
 * Tabs: All, Kuakata, Sun Care, DFI, The Deck, Mangrove
 */

export type GalleryCategory =
  | "all"
  | "kuakata"
  | "sun-care"
  | "dfi"
  | "the-deck"
  | "mangrove";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  altBn: string;
  category: Exclude<GalleryCategory, "all">;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  // Kuakata
  {
    id: "k-01",
    src: "/images/kuakata/hero.webp",
    alt: "Sunset Kuakata Hotel & Resort — aerial view",
    altBn: "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট — আকাশ দর্শন",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  {
    id: "k-02",
    src: "/images/kuakata/gallery-01.webp",
    alt: "Kuakata Resort — beachfront view",
    altBn: "কুয়াকাটা রিসোর্ট — সমুদ্র সৈকত দর্শন",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  {
    id: "k-03",
    src: "/images/kuakata/gallery-02.webp",
    alt: "Kuakata Resort — sunset panorama",
    altBn: "কুয়াকাটা রিসোর্ট — সূর্যাস্ত প্যানোরামা",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  {
    id: "k-04",
    src: "/images/kuakata/gallery-03.webp",
    alt: "Kuakata Hotel — exterior design",
    altBn: "কুয়াকাটা হোটেল — বাহ্যিক নকশা",
    category: "kuakata",
    width: 1200,
    height: 900,
  },
  {
    id: "k-05",
    src: "/images/kuakata/gallery-04.webp",
    alt: "Kuakata Resort — pool area",
    altBn: "কুয়াকাটা রিসোর্ট — পুল এলাকা",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  {
    id: "k-06",
    src: "/images/kuakata/gallery-05.webp",
    alt: "Kuakata Hotel — lobby render",
    altBn: "কুয়াকাটা হোটেল — লবি রেন্ডার",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  {
    id: "k-07",
    src: "/images/kuakata/gallery-06.webp",
    alt: "Kuakata — sunrise view from beach",
    altBn: "কুয়াকাটা — সমুদ্র সৈকত থেকে সূর্যোদয়",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  {
    id: "k-08",
    src: "/images/kuakata/Sunset Hotel & Resort.webp",
    alt: "Sunset Hotel & Resort — full view",
    altBn: "সানসেট হোটেল ও রিসোর্ট — পূর্ণ দৃশ্য",
    category: "kuakata",
    width: 1200,
    height: 800,
  },
  // Sun Care
  {
    id: "sc-01",
    src: "/images/sun-care/hero.webp",
    alt: "Sun Care Hospital — main building",
    altBn: "সান কেয়ার হাসপাতাল — প্রধান ভবন",
    category: "sun-care",
    width: 1200,
    height: 800,
  },
  {
    id: "sc-02",
    src: "/images/sun-care/gallery-01.webp",
    alt: "Sun Care Hospital — diagnostic center",
    altBn: "সান কেয়ার হাসপাতাল — ডায়াগনস্টিক সেন্টার",
    category: "sun-care",
    width: 1200,
    height: 800,
  },
  {
    id: "sc-03",
    src: "/images/sun-care/gallery-02.webp",
    alt: "Sun Care Hospital — patient care area",
    altBn: "সান কেয়ার হাসপাতাল — রোগী পরিচর্যা এলাকা",
    category: "sun-care",
    width: 1200,
    height: 800,
  },
  {
    id: "sc-04",
    src: "/images/sun-care/Hospital view.webp",
    alt: "Sun Care Hospital — exterior view",
    altBn: "সান কেয়ার হাসপাতাল — বাহ্যিক দৃশ্য",
    category: "sun-care",
    width: 1200,
    height: 800,
  },
  {
    id: "sc-05",
    src: "/images/sun-care/Sun Care Hospital.webp",
    alt: "Sun Care Hospital — building facade",
    altBn: "সান কেয়ার হাসপাতাল — ভবনের সম্মুখভাগ",
    category: "sun-care",
    width: 1200,
    height: 800,
  },
  // DFI
  {
    id: "dfi-01",
    src: "/images/dfi/dfi-aerial.webp",
    alt: "Dhaka Fantasy Island — main view",
    altBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড — প্রধান দৃশ্য",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  {
    id: "dfi-02",
    src: "/images/dfi/DFI-top-view.webp",
    alt: "Dhaka Fantasy Island — aerial top view",
    altBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড — আকাশ দর্শন",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  {
    id: "dfi-03",
    src: "/images/dfi/Dhaka-Fantasy-Island.webp",
    alt: "Dhaka Fantasy Island — landscape",
    altBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড — ল্যান্ডস্কেপ",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  {
    id: "dfi-04",
    src: "/images/dfi/Hotel & restaurant View.jpg.webp",
    alt: "DFI — Hotel and restaurant view",
    altBn: "ডিএফআই — হোটেল ও রেস্তোরাঁ দৃশ্য",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  {
    id: "dfi-05",
    src: "/images/dfi/North View.jpg.webp",
    alt: "DFI — North view",
    altBn: "ডিএফআই — উত্তর দৃশ্য",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  {
    id: "dfi-06",
    src: "/images/dfi/Coffee Corner& Rest Room.jpg.webp",
    alt: "DFI — Coffee corner and rest area",
    altBn: "ডিএফআই — কফি কর্নার ও বিশ্রাম কক্ষ",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  {
    id: "dfi-07",
    src: "/images/dfi/Recreational Playing Zone.jpg.webp",
    alt: "DFI — Recreational playing zone",
    altBn: "ডিএফআই — বিনোদনমূলক খেলার জোন",
    category: "dfi",
    width: 1200,
    height: 800,
  },
  // The Deck
  {
    id: "td-01",
    src: "/images/the-deck/The Deck view-01.webp",
    alt: "The Deck — main view",
    altBn: "দ্য ডেক — প্রধান দৃশ্য",
    category: "the-deck",
    width: 1200,
    height: 800,
  },
  {
    id: "td-02",
    src: "/images/the-deck/The Deck view2-01.webp",
    alt: "The Deck — second view",
    altBn: "দ্য ডেক — দ্বিতীয় দৃশ্য",
    category: "the-deck",
    width: 1200,
    height: 800,
  },
  {
    id: "td-03",
    src: "/images/the-deck/The deck-01.webp",
    alt: "The Deck — lifestyle venue",
    altBn: "দ্য ডেক — লাইফস্টাইল ভেন্যু",
    category: "the-deck",
    width: 1200,
    height: 800,
  },
  // Mangrove Hotel & Resort (Kuakata Marine Drive)
  {
    id: "mg-01",
    src: "/images/mangrove/Mangrove.webp",
    alt: "Mangrove Hotel & Resort — Kuakata Marine Drive entrance render",
    altBn: "ম্যানগ্রোভ হোটেল ও রিসোর্ট — কুয়াকাটা মেরিন ড্রাইভ প্রবেশদ্বার রেন্ডার",
    category: "mangrove",
    width: 1200,
    height: 800,
  },
  {
    id: "mg-02",
    src: "/images/mangrove/Mangrove Entry01.webp",
    alt: "Mangrove Hotel & Resort — Kuakata Marine Drive entry view",
    altBn: "ম্যানগ্রোভ হোটেল ও রিসোর্ট — কুয়াকাটা মেরিন ড্রাইভ প্রবেশ দৃশ্য",
    category: "mangrove",
    width: 1200,
    height: 800,
  },
  {
    id: "mg-03",
    src: "/images/mangrove/Mangrove02.webp",
    alt: "Mangrove Hotel & Resort — coastal surroundings",
    altBn: "ম্যানগ্রোভ হোটেল ও রিসোর্ট — উপকূলীয় চারপাশ",
    category: "mangrove",
    width: 1200,
    height: 800,
  },
  {
    id: "mg-04",
    src: "/images/mangrove/Mangrove03.webp",
    alt: "Mangrove Resort — walkway",
    altBn: "ম্যানগ্রোভ রিসোর্ট — হাঁটার পথ",
    category: "mangrove",
    width: 1200,
    height: 800,
  },
  {
    id: "mg-05",
    src: "/images/mangrove/Mangrove04.webp",
    alt: "Mangrove Resort — water reflection",
    altBn: "ম্যানগ্রোভ রিসোর্ট — জলের প্রতিফলন",
    category: "mangrove",
    width: 1200,
    height: 800,
  },
  {
    id: "mg-06",
    src: "/images/mangrove/Mangrove05.webp",
    alt: "Mangrove Resort — villa area",
    altBn: "ম্যানগ্রোভ রিসোর্ট — ভিলা এলাকা",
    category: "mangrove",
    width: 1200,
    height: 800,
  },
];

export const galleryCategories: { id: GalleryCategory; label: string; labelBn: string }[] = [
  { id: "all", label: "All Projects", labelBn: "সকল প্রকল্প" },
  { id: "kuakata", label: "Kuakata", labelBn: "কুয়াকাটা" },
  { id: "sun-care", label: "Sun Care", labelBn: "সান কেয়ার" },
  { id: "dfi", label: "Dhaka Fantasy Island", labelBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড" },
  { id: "the-deck", label: "The Deck", labelBn: "দ্য ডেক" },
  { id: "mangrove", label: "Mangrove", labelBn: "ম্যানগ্রোভ" },
];

