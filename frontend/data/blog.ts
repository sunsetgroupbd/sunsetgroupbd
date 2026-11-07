/**
 * BLOG MOCK DATA
 * Replace with CMS/MDX integration later.
 * TODO: integrate with backend CMS
 */

export interface BlogPost {
  slug: string;
  title: string;
  titleBn: string;
  excerpt: string;
  excerptBn: string;
  content: string;       // HTML or Markdown — replace with real CMS content
  contentBn: string;
  coverImage: string;
  category: string;
  categoryBn: string;
  author: string;
  authorBn: string;
  publishedAt: string;   // ISO date string
  readingTime: number;   // minutes
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-kuakata-is-bangladeshs-next-tourism-capital",
    title: "Why Kuakata Is Bangladesh's Next Tourism Capital",
    titleBn: "কুয়াকাটা কেন বাংলাদেশের পরবর্তী পর্যটন রাজধানী",
    excerpt:
      "With a new bridge, expanded highway and a planned airport, Kuakata's accessibility is about to transform. Here's why now is the right time to invest.",
    excerptBn:
      "নতুন সেতু, সম্প্রসারিত মহাসড়ক এবং একটি পরিকল্পিত বিমানবন্দরের সাথে কুয়াকাটার অ্যাক্সেসযোগ্যতা পরিবর্তন হতে চলেছে।",
    content: `<p>Kuakata, known as "Daughter of the Sea" (Sagar Kanya), is one of Bangladesh's most unique coastal destinations. Unlike Cox's Bazar, Kuakata offers visitors the rare privilege of witnessing both sunrise and sunset from the same beach — a geographical anomaly that positions it uniquely in the South Asian tourism market.</p>
<h2>The Infrastructure Transformation</h2>
<p>The Padma Bridge, inaugurated in 2022, has already cut travel time from Dhaka to Kuakata by several hours. The planned Payra deep-sea port, a new highway expansion, and the upcoming Kuakata airport will collectively transform accessibility within the next five years.</p>
<h2>Government Master Plan</h2>
<p>Kuakata falls under the KTC (Kuakata Tourism City) Master Plan — a government-designated tourism development zone. This ensures planned, regulated development with proper infrastructure investment.</p>
<p>Sunset Group's project is located squarely within this master plan area, ensuring future infrastructure benefits automatically accrue to investors.</p>`,
    contentBn: `<p>কুয়াকাটা, যা "সাগর কন্যা" নামে পরিচিত, বাংলাদেশের সবচেয়ে অনন্য উপকূলীয় গন্তব্যগুলির মধ্যে একটি।</p>`,
    coverImage: "/images/kuakata/gallery-02.jpg",
    category: "Investment",
    categoryBn: "বিনিয়োগ",
    author: "Sunset Group Research Team",
    authorBn: "সানসেট গ্রুপ গবেষণা দল",
    publishedAt: "2024-06-15",
    readingTime: 5,
  },
  {
    slug: "shariah-compliant-real-estate-what-it-means",
    title: "Shariah-Compliant Real Estate: What It Means for Investors",
    titleBn: "শরীয়া সম্মত রিয়েল এস্টেট: বিনিয়োগকারীদের জন্য এটি কী অর্থ বহন করে",
    excerpt:
      "Understanding the Shariah Supervisory Committee, what makes an investment halal, and how Sunset Group ensures compliance at every level.",
    excerptBn:
      "শরীয়া তদারকি কমিটি বোঝা, কী একটি বিনিয়োগকে হালাল করে এবং সানসেট গ্রুপ কীভাবে প্রতিটি স্তরে সম্মতি নিশ্চিত করে।",
    content: `<p>For Muslim investors in Bangladesh and beyond, finding investment vehicles that align with Islamic financial principles has historically been challenging. Sunset Group was founded with this gap in mind.</p>
<h2>What Makes an Investment Shariah-Compliant?</h2>
<p>Islamic finance rests on three key prohibitions: riba (interest), gharar (excessive uncertainty), and maysir (gambling/speculation). A Shariah-compliant investment must be free of all three.</p>
<p>Sunset Group's profit-sharing model — where investors own a portion of actual assets and receive a share of real operational revenue — aligns with the Islamic concept of musharakah (partnership).</p>`,
    contentBn: `<p>বাংলাদেশ এবং বাইরের মুসলিম বিনিয়োগকারীদের জন্য ইসলামী আর্থিক নীতির সাথে সামঞ্জস্যপূর্ণ বিনিয়োগ যানবাহন খুঁজে পাওয়া ঐতিহাসিকভাবে চ্যালেঞ্জিং হয়েছে।</p>`,
    coverImage: "/images/kuakata/gallery-01.jpg",
    category: "Islamic Finance",
    categoryBn: "ইসলামী অর্থায়ন",
    author: "Sunset Group Legal Team",
    authorBn: "সানসেট গ্রুপ আইন দল",
    publishedAt: "2024-07-20",
    readingTime: 7,
  },
  {
    slug: "healthcare-investment-bangladesh-growing-sector",
    title: "Healthcare Investment in Bangladesh: A Growing Sector",
    titleBn: "বাংলাদেশে স্বাস্থ্যসেবা বিনিয়োগ: একটি ক্রমবর্ধমান খাত",
    excerpt:
      "Bangladesh's healthcare sector is growing at over 15% annually. Here's why Sun Care Hospital represents a unique dual-benefit investment opportunity.",
    excerptBn:
      "বাংলাদেশের স্বাস্থ্যসেবা খাত বার্ষিক ১৫% এরও বেশি হারে বাড়ছে। জানুন কেন সান কেয়ার হাসপাতাল একটি অনন্য দ্বৈত-সুবিধার বিনিয়োগ সুযোগ।",
    content: `<p>Bangladesh's healthcare sector has undergone remarkable transformation over the past decade. With a growing middle class, rising health consciousness, and increasing urban population, demand for quality private healthcare in Dhaka has never been higher.</p>
<h2>The Dual-Benefit Model</h2>
<p>Sun Care Hospital's investor model is unique in Bangladesh: beyond financial returns, every investor and their nominated individuals receive hospital services at cost price. This is not a minor benefit — for a family, lifetime healthcare at cost price in a full-service hospital can represent substantial savings.</p>`,
    contentBn: `<p>বাংলাদেশের স্বাস্থ্যসেবা খাত গত এক দশকে উল্লেখযোগ্য পরিবর্তন হয়েছে।</p>`,
    coverImage: "/images/sun-care/hero.jpg",
    category: "Healthcare",
    categoryBn: "স্বাস্থ্যসেবা",
    author: "Sunset Group Research Team",
    authorBn: "সানসেট গ্রুপ গবেষণা দল",
    publishedAt: "2024-08-10",
    readingTime: 6,
  },
];

