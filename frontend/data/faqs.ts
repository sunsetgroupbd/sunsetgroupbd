/**
 * FAQ DATA
 * Frequently asked questions about Sunset Group investments.
 */

export interface FAQ {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: "investment" | "legal" | "shariah" | "operations";
}

export const faqs: FAQ[] = [
  {
    id: "faq-01",
    question: "What is a saf-kabala registration and the ownership process?",
    questionBn: "সাফ-কবালা নিবন্ধন কী এবং মালিকানা গ্রহণের প্রক্রিয়া কী?",
    answer:
      "Saf-kabala is a legal deed of absolute transfer of property ownership registered through the official government sub-registry office. The ownership lifecycle follows 3 clear stages: (1) Money Receipt issued upon booking, (2) Deed of Agreement executed after down payment, and (3) Saf-Kabala title deed registration at the Sub-Registry office upon full payment. Flexible installments are available.",
    answerBn:
      "সাফ-কবালা হলো সরকারি সাব-রেজিস্ট্রি অফিসের মাধ্যমে নিবন্ধিত সম্পত্তির পরম মালিকানা হস্তান্তরের আইনি দলিল। মালিকানা গ্রহণের ধাপসমূহ: (১) বুকিং এর পর মানি রসিদ, (২) ডাউন পেমেন্টের পর নিবন্ধিত চুক্তিপত্র (Deed of Agreement), এবং (৩) সম্পূর্ণ মূল্য পরিশোধের পর সরকারি সাব-রেজিস্ট্রি অফিসে সাফ-কবালা দলিল নিবন্ধন। সহজ কিস্তি সুবিধা বিদ্যমান।",
    category: "legal",
  },
  {
    id: "faq-02",
    question: "What does the Shariah Supervisory Committee do?",
    questionBn: "শরীয়া তদারকি কমিটি কী করে?",
    answer:
      "The Shariah Supervisory Committee is an independent panel of Islamic finance scholars that reviews and supervises Sunset Group's investment structures, profit-sharing arrangements, and contracts to ensure adherence to Islamic Musharakah principles, free of interest (riba) and excessive speculation.",
    answerBn:
      "শরীয়া তদারকি কমিটি হলো ইসলামী অর্থায়ন পণ্ডিতদের একটি স্বাধীন প্যানেল যারা সানসেট গ্রুপের বিনিয়োগ কাঠামো, চুক্তি এবং লভ্যাংশ বণ্টন পদ্ধতি ইসলামী শরীয়াহ ও মুশারাকাহ নীতিমালার আলোকে সার্বক্ষণিক তদারকি করে।",
    category: "shariah",
  },
  {
    id: "faq-03",
    question: "How is profit calculated and what are accommodation days?",
    questionBn: "মুনাফা কীভাবে গণনা করা হয় এবং আবাসন সুবিধা কী?",
    answer:
      "Profit is calculated strictly from net audited annual operational revenue from hotel/resort rooms, healthcare services, and commercial activities according to your agreed sharing percentage (e.g. 40%-60% for Kuakata). Accommodation days are complimentary annual stay days at the resort (e.g. 10 to 112 days) — stay days are a hospitality benefit and are never referred to as profit. This is profit-sharing, not a guaranteed return.",
    answerBn:
      "মুনাফা নিরীক্ষিত পরিচালন আয়ের ওপর ভিত্তি করে নির্ধারিত শেয়ারিং শতকরা হারে বণ্টিত হয়। আবাসন সুবিধা (১০ থেকে ১১২ দিন) হলো হোটেল বা রিসোর্টে বিনিয়োগকারীর বার্ষিক বিনামূল্যে থাকার অধিকার — এটি থাকার সুবিধা, কোনো মুনাফা নয়। প্রকৃত মুনাফা ও থাকার সুবিধা সম্পূর্ণ আলাদা।",
    category: "investment",
  },
  {
    id: "faq-04",
    question: "Can I transfer or sell my ownership package (Exit Policy)?",
    questionBn: "আমি কি আমার মালিকানা প্যাকেজ হস্তান্তর বা বিক্রি করতে পারি (প্রস্থান নীতি)?",
    answer:
      "Yes. Under Sunset Group's exit policy, once saf-kabala deed registration is completed upon full payment, the shareholder holds full legal title and is permitted to transfer, gift, or resell their share to another party in accordance with company transfer guidelines.",
    answerBn:
      "হ্যাঁ। সানসেট গ্রুপের এক্সিট পলিসি অনুযায়ী, সম্পূর্ণ মূল্য পরিশোধ ও সরকারি সাব-রেজিস্ট্রিতে সাফ-কবালা নিবন্ধন সম্পন্ন হওয়ার পর শেয়ারহোল্ডার তার মালিকানা যেকোনো সময় আইনগতভাবে পরিবারের সদস্যের কাছে হস্তান্তর বা বিক্রি করতে পারেন।",
    category: "legal",
  },
  {
    id: "faq-05",
    question: "What is the Project Timeline?",
    questionBn: "প্রকল্পের সময়রেখা (Project Timeline) কী?",
    answer:
      "The Project Timeline is: 2023 — land purchase & master planning; 2024 — site development & construction initiation; 2025 — partial operations; 2027 (Planned) — Zero Point operations; 2029 (Planned) — full commercial operations across all phases.",
    answerBn:
      "প্রকল্প সময়রেখা (Project Timeline): ২০২৩ — জমি ক্রয় ও পরিকল্পনা; ২০২৪ — নির্মাণ কাজ শুরু; ২০২৫ — আংশিক কার্যক্রম; ২০২৭ (পরিকল্পিত) — জিরো পয়েন্ট কার্যক্রম; ২০২৯ (পরিকল্পিত) — সকল পর্বের পূর্ণাঙ্গ বাণিজ্যিক কার্যক্রম।",
    category: "operations",
  },
  {
    id: "faq-06",
    question: "What is the minimum investment amount?",
    questionBn: "সর্বনিম্ন বিনিয়োগের পরিমাণ কত?",
    answer:
      "The entry-level Bronze package starts at ৳ 3,50,000 for Sun Care Hospital and Dhaka Fantasy Island (booking ৳ 1,00,000), and ৳ 5,70,000 for Kuakata Hotel & Resort (booking ৳ 1,50,000). Super Combo multi-project entry starts at ৳ 12,40,000. Convenient installment schedules are available.",
    answerBn:
      "সান কেয়ার হাসপাতাল এবং ঢাকা ফ্যান্টাসি আইল্যান্ডে ব্রোঞ্জ প্যাকেজ ৳ ৩,৫০,০০০ (বুকিং ৳ ১,০০,০০০) থেকে এবং কুয়াকাটা হোটেল ও রিসোর্টে ৳ ৫,৭০,০০০ (বুকিং ৳ ১,৫০,০০০) থেকে শুরু। সুপার কম্বো ৪-প্রকল্পের ব্রোঞ্জ ৳ ১২,৪০,০০০। সহজ কিস্তি সুবিধা বিদ্যমান।",
    category: "investment",
  },
  {
    id: "faq-07",
    question: "How does the Sun Care Hospital cost-price benefit work?",
    questionBn: "সান কেয়ার হাসপাতালের খরচমূল্যে সেবা সুবিধা কীভাবে কাজ করে?",
    answer:
      "Every investment package in Sun Care Hospital and Super Combo entitles the investor and 20 to 200 nominated individuals depending on tier (Bronze 20, Silver 60, Gold 100, Platinum 200 // CLIENT TO CONFIRM) to receive hospital and diagnostic services strictly at cost price — with zero profit markup. This is a unique lifetime welfare benefit.",
    answerBn:
      "সান কেয়ার হাসপাতাল ও সুপার কম্বো প্যাকেজে বিনিয়োগকারী এবং প্যাকেজ স্তর অনুযায়ী ২০ থেকে ২০০ জন মনোনীত ব্যক্তি (ব্রোঞ্জ ২০, সিলভার ৬০, গোল্ড ১০০, প্লাটিনাম ২০০ // ক্লায়েন্ট নিশ্চিতকরণ সাপেক্ষ) কোনো বাণিজ্যিক মুনাফা ছাড়া সম্পূর্ণ খরচমূল্যে আজীবন হাসপাতাল ও ল্যাব সেবা পাবেন।",
    category: "investment",
  },
  {
    id: "faq-08",
    question: "Is Sunset Group registered under Bangladesh law?",
    questionBn: "সানসেট গ্রুপ কি বাংলাদেশের আইনের অধীনে নিবন্ধিত?",
    answer:
      "Yes. Sunset Kuakata Hotel & Resort Ltd. and partner entities are registered with RJSC under the Company Act 1994 of Bangladesh. All real estate components carry government saf-kabala deed registration.",
    answerBn:
      "হ্যাঁ। সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড এবং সহযোগী প্রতিষ্ঠানসমূহ কোম্পানি আইন ১৯৯৪-এর অধীন আরজেএসসি-তে নিবন্ধিত এবং প্রতিটি সম্পত্তিতে সরকারি সাফ-কবালা দলিল নিশ্চিত করা হয়।",
    category: "legal",
  },
];

