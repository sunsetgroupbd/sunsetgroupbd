"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/lang";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const { isBn } = useLang();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const tItem = testimonials[current];

  return (
    <section
      className="section-gap"
      style={{ backgroundColor: "var(--paper)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow={isBn ? "বিনিয়োগকারীদের মতামত" : "Shareholder voices"}
          title={isBn ? "আমাদের শেয়ারহোল্ডাররা কী বলছেন" : "Trust founded on real equity"}
          align="center"
          className="mb-14 md:mb-16"
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-[22px] border border-[var(--line)] bg-[var(--sand)] px-7 py-10 md:px-14 md:py-14">
            <span
              className="pointer-events-none absolute left-6 top-5 font-display text-[64px] leading-none text-[rgba(18,54,42,0.12)] md:left-10 md:text-[86px]"
              aria-hidden
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative"
              >
                <blockquote className="text-display-sm mb-9 max-w-2xl text-[var(--ink)]">
                  {isBn ? tItem.quoteBn : tItem.quote}
                </blockquote>

                <div className="flex flex-wrap items-end justify-between gap-4 border-t border-[var(--line-strong)] pt-5">
                  <div>
                    <p className="text-[13.5px] font-semibold text-[var(--ink)]">
                      {isBn ? tItem.nameBn : tItem.name}
                    </p>
                    <p className="mt-0.5 text-[12px] text-[var(--sunset-grey-700)]">
                      {isBn ? tItem.roleBn : tItem.role}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--sunset-green-700)]">
                    <ShieldCheck size={13} />
                    {tItem.project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  aria-selected={i === current}
                  role="tab"
                  className="h-1 cursor-pointer rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "26px" : "7px",
                    backgroundColor:
                      i === current ? "var(--sunset-green-900)" : "var(--line-strong)",
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--ink)] transition-colors hover:bg-[var(--sand)]"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--ink)] transition-colors hover:bg-[var(--sand)]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
