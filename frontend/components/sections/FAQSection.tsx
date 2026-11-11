"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/lib/lang";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FAQSection() {
  const { isBn } = useLang();
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--paper)" }}
      aria-labelledby="faq-section-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={isBn ? "সাধারণ প্রশ্নোত্তর" : "Investor clarity"}
              title={isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্ন" : "Frequently asked questions"}
              description={
                isBn
                  ? "মালিকানা, মুনাফা এবং নিবন্ধন সম্পর্কে সবচেয়ে সাধারণ প্রশ্নের উত্তর।"
                  : "Straight answers on ownership, returns and registration."
              }
            />
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      className="group flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-[14.5px] font-semibold leading-snug transition-colors ${
                          isOpen
                            ? "text-[var(--sunset-green-900)]"
                            : "text-[var(--ink)] group-hover:text-[var(--sunset-green-700)]"
                        }`}
                      >
                        {isBn ? faq.questionBn : faq.question}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-[var(--sunset-green-900)] bg-[var(--sunset-green-900)] text-[var(--paper)]"
                            : "border-[var(--line-strong)] text-[var(--ink)]"
                        }`}
                      >
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-6 pr-10 text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                            {isBn ? faq.answerBn : faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
