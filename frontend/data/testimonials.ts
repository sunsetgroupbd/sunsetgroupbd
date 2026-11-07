/**
 * TESTIMONIALS — Shareholder / Investor quotes
 * Photos: supply at /public/images/testimonials/[slug].jpg
 */

export interface Testimonial {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  quote: string;
  quoteBn: string;
  photo: string; // path relative to /public
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "faizul-bari",
    name: "Eng. Md. Faizul Bari",
    nameBn: "ইঞ্জি. মো. ফয়জুল বারী",
    role: "Executive Engineer, PGCB",
    roleBn: "নির্বাহী প্রকৌশলী, পিজিসিবি",
    quote:
      "Investing with Sunset Group has been a thoughtful decision. The Shariah-compliant structure and the saf-kabala registration gave me full confidence. The team is transparent about every milestone — I am proud to be a part of the Kuakata project.",
    quoteBn:
      "সানসেট গ্রুপের সাথে বিনিয়োগ করা একটি সুচিন্তিত সিদ্ধান্ত ছিল। শরীয়া সম্মত কাঠামো এবং সাফ-কবালা নিবন্ধন আমাকে সম্পূর্ণ আস্থা দিয়েছে। দলটি প্রতিটি মাইলফলক সম্পর্কে স্বচ্ছ — কুয়াকাটা প্রকল্পের অংশ হতে পেরে গর্বিত।",
    photo: "/images/testimonials/faizul-bari.jpg",
    project: "Sunset Kuakata Hotel & Resort",
  },
  {
    id: "abdus-satter",
    name: "Md Abdus Satter Munsi",
    nameBn: "মো. আব্দুস সাত্তার মুন্সি",
    role: "Businessman",
    roleBn: "ব্যবসায়ী",
    quote:
      "What attracted me most was the halal income model. As a Muslim investor, finding a project that is both profitable and ethically structured is rare. Sunset Group delivers on both counts. The projected profit-sharing model is well thought out.",
    quoteBn:
      "আমাকে সবচেয়ে আকৃষ্ট করেছে হালাল আয়ের মডেল। একজন মুসলিম বিনিয়োগকারী হিসেবে লাভজনক এবং নৈতিকভাবে কাঠামোবদ্ধ প্রকল্প খুঁজে পাওয়া বিরল। সানসেট গ্রুপ উভয় ক্ষেত্রেই সফল।",
    photo: "/images/testimonials/abdus-satter.jpg",
    project: "Super Combo Investment",
  },
  {
    id: "tarikul-islam",
    name: "Tarikul Islam",
    nameBn: "তারিকুল ইসলাম",
    role: "Banker",
    roleBn: "ব্যাংকার",
    quote:
      "As someone in the banking sector, I evaluate investments carefully. Sunset Group's legal framework — Company Act registration, saf-kabala, and Shariah committee oversight — ticks every box. I particularly appreciate the transparency around the profit-sharing timeline.",
    quoteBn:
      "ব্যাংকিং সেক্টরে থাকা একজন হিসেবে আমি বিনিয়োগ সাবধানে মূল্যায়ন করি। সানসেট গ্রুপের আইনি কাঠামো — কোম্পানি আইন নিবন্ধন, সাফ-কবালা এবং শরীয়া কমিটির তত্ত্বাবধান — প্রতিটি চাহিদা পূরণ করে।",
    photo: "/images/testimonials/tarikul-islam.jpg",
    project: "Sunset Kuakata Hotel & Resort",
  },
];

