/**
 * SUNSET GROUP — OFFICIAL PROJECT FILMS & DOCUMENTARIES
 * Official YouTube showcase data.
 */

export interface ProjectVideo {
  id: string;
  youtubeId: string;
  title: string;
  titleBn: string;
  project: string;
  projectBn: string;
  category: "Resort" | "Hospital" | "Eco-Tourism" | "Corporate";
  duration: string;
  description: string;
  descriptionBn: string;
  thumbnail: string;
}

export const projectVideos: ProjectVideo[] = [
  {
    id: "kuakata-film",
    youtubeId: "6PWf8ejVec8",
    title: "Sunset Kuakata Hotel & Resort — The First 5-Star Experience",
    titleBn: "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট — প্রথম পাঁচতারা অভিজ্ঞতা",
    project: "Sunset Kuakata Hotel & Resort",
    projectBn: "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট",
    category: "Resort",
    duration: "Official Video",
    description:
      "Take an exclusive architectural tour of Kuakata's first five-star equivalent resort. Discover sunrise and sunset views, master plan integration, and Shariah-compliant shareholding.",
    descriptionBn:
      "কুয়াকাটার প্রথম পাঁচতারা মানের রিসোর্টের নির্মাণ ও স্থাপত্য রূপরেখা দেখুন। সূর্যোদয়-সূর্যাস্তের দৃশ্য ও শরীয়া ভিত্তিক বিনিয়োগের বিস্তারিত।",
    thumbnail: "https://img.youtube.com/vi/6PWf8ejVec8/maxresdefault.jpg",
  },
  {
    id: "dfi-film",
    youtubeId: "RaqvrqdSCe4",
    title: "Dhaka Fantasy Island — Eco Hotel & Urban Leisure Retreat",
    titleBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড — পরিবেশবান্ধব হোটেল ও রিসোর্ট",
    project: "Dhaka Fantasy Island (DFI)",
    projectBn: "ঢাকা ফ্যান্টাসি আইল্যান্ড",
    category: "Eco-Tourism",
    duration: "Project Showcase",
    description:
      "Located just 20 minutes from Bangladesh Parliament House in Mohammadpur, DFI bridges modern residential zones, commercial hubs, and nature-inspired staycations.",
    descriptionBn:
      "জাতীয় সংসদ ভবন থেকে মাত্র ২০ মিনিটে মোহাম্মদপুরে অবস্থিত ডিএফআই — পরিবেশবান্ধব রিসোর্ট ও বাণিজ্যিক বিনিয়োগের দারুণ সুযোগ।",
    thumbnail: "https://img.youtube.com/vi/RaqvrqdSCe4/maxresdefault.jpg",
  },
  {
    id: "suncare-film",
    youtubeId: "7eYD2fDw4Fk",
    title: "Sun Care Hospital & Diagnostic Center — Healthcare Investment",
    titleBn: "সান কেয়ার হাসপাতাল ও ডায়াগনস্টিক সেন্টার — স্বাস্থ্যসেবা প্রকল্প",
    project: "Sun Care Hospital Ltd.",
    projectBn: "সান কেয়ার হাসপাতাল",
    category: "Hospital",
    duration: "Healthcare Tour",
    description:
      "Explore Mohammadpur / Basila's upcoming modern multi-specialty hospital. Learn how shareholders and 20 nominated family members receive lifetime healthcare at cost price.",
    descriptionBn:
      "মোহাম্মদপুর/বসিলায় আধুনিক বহু-বিশেষজ্ঞ হাসপাতাল। বিনিয়োগকারী এবং ২০ জন মনোনীত ব্যক্তির খরচমূল্যে আজীবন স্বাস্থ্যসেবার সুযোগ।",
    thumbnail: "https://img.youtube.com/vi/7eYD2fDw4Fk/maxresdefault.jpg",
  },
  {
    id: "corporate-film",
    youtubeId: "SpEeHVubfWw",
    title: "Sunset Group — Corporate Vision & Shariah Governance",
    titleBn: "সানসেট গ্রুপ — কর্পোরেট রূপকল্প ও শরীয়া পরিচালনা",
    project: "Sunset Group Corporate",
    projectBn: "সানসেট গ্রুপ কর্পোরেট",
    category: "Corporate",
    duration: "Documentary",
    description:
      "A comprehensive walkthrough of Sunset Group's legal saf-kabala deed structure and Shariah supervisory board audit protocols.",
    descriptionBn:
      "সানসেট গ্রুপের সাফ-কবালা আইনি কাঠামো ও শরীয়া বোর্ডের নিরীক্ষা সংক্রান্ত প্রামাণ্যচিত্র।",
    thumbnail: "https://img.youtube.com/vi/SpEeHVubfWw/maxresdefault.jpg",
  },
];

