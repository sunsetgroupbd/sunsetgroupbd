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
    question: "What is a saf-kabala registration and why is it important?",
    questionBn: "সাফ-কবালা নিবন্ধন কী এবং কেন এটি গুরুত্বপূর্ণ?",
    answer:
      "Saf-kabala is a legal deed of absolute transfer of property ownership registered through the official government sub-registry office. It is the highest form of property ownership proof in Bangladesh. All Sunset Group investment packages come with saf-kabala registration, ensuring your ownership is legally recorded, secure, and transferable.",
    answerBn:
      "সাফ-কবালা হলো সরকারি সাব-রেজিস্ট্রি অফিসের মাধ্যমে নিবন্ধিত সম্পত্তির পরম মালিকানা হস্তান্তরের আইনি দলিল। এটি বাংলাদেশে সম্পত্তির মালিকানার সর্বোচ্চ প্রমাণ। সানসেট গ্রুপের সমস্ত বিনিয়োগ প্যাকেজে সাফ-কবালা নিবন্ধন অন্তর্ভুক্ত।",
    category: "legal",
  },
  {
    id: "faq-02",
    question: "What does the Shariah Supervisory Committee do?",
    questionBn: "শরীয়া তদারকি কমিটি কী করে?",
    answer:
      "The Shariah Supervisory Committee is an independent panel of Islamic finance scholars that reviews and certifies that all Sunset Group investment structures, profit-sharing arrangements, and contracts comply with Islamic law (Shariah). They ensure no interest (riba), excessive uncertainty (gharar), or prohibited activities are involved.",
    answerBn:
      "শরীয়া তদারকি কমিটি হলো ইসলামী অর্থায়ন পণ্ডিতদের একটি স্বাধীন প্যানেল যারা সানসেট গ্রুপের বিনিয়োগ কাঠামো, মুনাফা ভাগাভাগির ব্যবস্থা এবং চুক্তিগুলি ইসলামী আইন (শরীয়া) মেনে চলে কিনা তা পর্যালোচনা ও সার্টিফাই করে।",
    category: "shariah",
  },
  {
    id: "faq-03",
    question: "How is profit calculated and distributed?",
    questionBn: "মুনাফা কীভাবে গণনা ও বিতরণ করা হয়?",
    answer:
      "Profit is calculated based on actual revenue generated from hotel/resort operations, hospital services, and commercial activities. Each investor receives a share of net profits proportional to their package (Platinum, Gold, Silver, or Bronze) over their allocated profit period days. Exact rates will be disclosed in the investment agreement. This is profit-sharing, not a guaranteed return.",
    answerBn:
      "মুনাফা হোটেল/রিসোর্ট পরিচালনা, হাসপাতাল সেবা ও বাণিজ্যিক কার্যক্রম থেকে প্রকৃত রাজস্বের উপর ভিত্তি করে গণনা করা হয়। প্রতিটি বিনিয়োগকারী তাদের বরাদ্দকৃত মুনাফা মেয়াদ দিন অনুযায়ী নিট মুনাফার অংশ পান। সঠিক হার বিনিয়োগ চুক্তিতে প্রকাশিত হবে।",
    category: "investment",
  },
  {
    id: "faq-04",
    question: "Can I transfer or sell my ownership package?",
    questionBn: "আমি কি আমার মালিকানা প্যাকেজ হস্তান্তর বা বিক্রি করতে পারি?",
    answer:
      "Yes. Because ownership is registered via saf-kabala, it is a legally transferable asset. You can transfer ownership to a family member or sell it, subject to the terms and conditions in your investment agreement. Please consult Sunset Group for the specific process.",
    answerBn:
      "হ্যাঁ। যেহেতু মালিকানা সাফ-কবালার মাধ্যমে নিবন্ধিত, এটি একটি আইনগতভাবে হস্তান্তরযোগ্য সম্পদ। আপনি আপনার বিনিয়োগ চুক্তির শর্ত সাপেক্ষে পরিবারের সদস্যের কাছে মালিকানা হস্তান্তর বা বিক্রি করতে পারেন।",
    category: "legal",
  },
  {
    id: "faq-05",
    question: "When will the Kuakata Hotel start operations?",
    questionBn: "কুয়াকাটা হোটেল কখন কার্যক্রম শুরু করবে?",
    answer:
      "The planned timeline is: 2023 — land purchase & planning; 2024 — construction begins; 2025 — partial operations begin; 2027 — Zero Point operations; 2029 — full operations. Investors receive updates at each milestone.",
    answerBn:
      "পরিকল্পিত সময়রেখা হলো: ২০২৩ — জমি ক্রয় ও পরিকল্পনা; ২০২৪ — নির্মাণ শুরু; ২০২৫ — আংশিক কার্যক্রম; ২০২৭ — জিরো পয়েন্ট কার্যক্রম; ২০২৯ — পূর্ণ কার্যক্রম।",
    category: "operations",
  },
  {
    id: "faq-06",
    question: "What is the minimum investment amount?",
    questionBn: "সর্বনিম্ন বিনিয়োগের পরিমাণ কত?",
    answer:
      "The entry-level Bronze package starts at ৳ 4,00,000 with a booking deposit of ৳ 1,00,000. The remaining balance is paid according to the schedule in your agreement. Higher packages offer longer profit-sharing periods.",
    answerBn:
      "এন্ট্রি লেভেল ব্রোঞ্জ প্যাকেজ ৳ ৪,০০,০০০ থেকে শুরু হয় এবং বুকিং ডিপোজিট ৳ ১,০০,০০০। বাকি অর্থ আপনার চুক্তির সময়সূচি অনুযায়ী পরিশোধ করা হয়।",
    category: "investment",
  },
  {
    id: "faq-07",
    question: "How does the Sun Care Hospital investor benefit work?",
    questionBn: "সান কেয়ার হাসপাতালের বিনিয়োগকারী সুবিধা কীভাবে কাজ করে?",
    answer:
      "Every investment package in Sun Care Hospital (and the Super Combo) entitles the investor and up to 20 nominated individuals to receive hospital and diagnostic services at cost price — meaning you pay only for the actual cost of the service, with no profit margin charged to you. This is a lifetime benefit.",
    answerBn:
      "সান কেয়ার হাসপাতালে (এবং সুপার কম্বোতে) প্রতিটি বিনিয়োগ প্যাকেজ বিনিয়োগকারী এবং ২০ জন মনোনীত ব্যক্তিকে খরচমূল্যে হাসপাতাল ও ডায়াগনস্টিক সেবা পাওয়ার অধিকার দেয়।",
    category: "investment",
  },
  {
    id: "faq-08",
    question: "Is Sunset Group registered under Bangladesh law?",
    questionBn: "সানসেট গ্রুপ কি বাংলাদেশের আইনের অধীনে নিবন্ধিত?",
    answer:
      "Yes. Sunset Kuakata Hotel & Resort Ltd. is registered under the Company Act 1994 of Bangladesh. All projects carry the appropriate legal registrations. Company registration numbers will be provided upon request and are publicly verifiable.",
    answerBn:
      "হ্যাঁ। সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড বাংলাদেশের কোম্পানি আইন ১৯৯৪ এর অধীনে নিবন্ধিত। সমস্ত প্রকল্পে যথাযথ আইনি নিবন্ধন রয়েছে।",
    category: "legal",
  },
];

