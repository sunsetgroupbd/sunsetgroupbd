"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Timeline() {
  const { isBn } = useLang();

  const milestones = [
    {
      year: "2023",
      status: "Completed",
      statusBn: "সম্পন্ন",
      title: "Land acquisition & planning",
      titleBn: "জমি ক্রয় ও মাস্টারপ্ল্যান",
      desc: "Prime sea-facing land in Kuakata and Basila secured; preliminary architectural surveys completed.",
      descBn: "কুয়াকাটা ও বসিলায় প্রধান জমি ক্রয় এবং প্রাথমিক স্থাপত্য সমীক্ষা সম্পন্ন।",
    },
    {
      year: "2024",
      status: "In progress",
      statusBn: "চলমান",
      title: "Substructure & construction",
      titleBn: "কাঠামো ও পাইলিং নির্মাণ",
      desc: "Civil construction, piling and hospital building development underway.",
      descBn: "সিভিল নির্মাণ, পাইলিং এবং হাসপাতাল ভবন উন্নয়ন চলমান।",
    },
    {
      year: "2025",
      status: "Upcoming",
      statusBn: "আসন্ন",
      title: "Partial commercial operations",
      titleBn: "আংশিক বাণিজ্যিক কার্যক্রম",
      desc: "Soft launch of diagnostic facilities and initial resort amenities.",
      descBn: "ডায়াগনস্টিক সুবিধা ও প্রাথমিক রিসোর্ট সুবিধার সফট লঞ্চ।",
    },
    {
      year: "2027",
      status: "Phase target",
      statusBn: "পর্যায় লক্ষ্য",
      title: "Zero point operations",
      titleBn: "জিরো পয়েন্ট পরিচালনা",
      desc: "Full opening of Kuakata suites and the DFI leisure hub.",
      descBn: "কুয়াকাটা স্যুট এবং ডিএফআই লেজার হাবের পূর্ণাঙ্গ উদ্বোধন।",
    },
    {
      year: "2029",
      status: "Maturity",
      statusBn: "পরিপক্বতা",
      title: "Full-scale operations",
      titleBn: "পূর্ণাঙ্গ কার্যক্রম ও লভ্যাংশ",
      desc: "Complete luxury resort, convention facilities and multi-tier dividend maturity.",
      descBn: "সম্পূর্ণ বিলাসবহুল রিসোর্ট, কনভেনশন সুবিধা ও বহুস্তরীয় লভ্যাংশ পরিপক্বতা।",
    },
  ];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--paper)" }}
      aria-labelledby="timeline-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={isBn ? "বাস্তবায়ন রোডম্যাপ" : "Execution roadmap"}
          title={isBn ? "২০২৩ থেকে ২০২৯ — ধাপে ধাপে বাস্তবায়ন" : "From land to full operation, 2023–2029"}
          description={
            isBn
              ? "প্রতিটি ধাপের অগ্রগতি স্বচ্ছভাবে প্রকাশ করা হয়, যাতে বিনিয়োগকারীরা সময়রেখা সম্পর্কে নিশ্চিত থাকেন।"
              : "Each phase is reported transparently, so investors can track delivery against a published timeline."
          }
          className="mb-14 md:mb-16"
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-[var(--line-strong)] md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-5">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.07 }}
                className="relative"
              >
                <span
                  className={`mb-6 hidden h-[15px] w-[15px] rounded-full border-2 md:block ${
                    idx <= 1
                      ? "border-[var(--sunset-green-900)] bg-[var(--sunset-green-900)]"
                      : "border-[var(--line-strong)] bg-[var(--paper)]"
                  }`}
                  aria-hidden
                />

                <div className="flex items-center gap-2.5 md:block">
                  <p className="text-display-sm tabular-nums text-[var(--sunset-green-900)]">
                    {m.year}
                  </p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] md:mt-2 md:inline-block ${
                      idx === 0
                        ? "bg-[var(--sunset-green-900)] text-[var(--paper)]"
                        : idx === 1
                          ? "bg-[rgba(173,90,67,0.12)] text-[var(--sunset-red)]"
                          : "bg-[var(--sand)] text-[var(--sunset-grey-700)]"
                    }`}
                  >
                    {isBn ? m.statusBn : m.status}
                  </span>
                </div>

                <h3 className="mt-3 text-[13.5px] font-semibold leading-snug text-[var(--ink)]">
                  {isBn ? m.titleBn : m.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn ? m.descBn : m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
