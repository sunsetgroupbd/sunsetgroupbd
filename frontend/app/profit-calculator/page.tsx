import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ProfitCalculator from "@/components/ui/ProfitCalculator";

export const metadata: Metadata = {
  title: "Profit Calculator — Sunset Group Ownership Planning",
  description:
    "Interactive profit and installment calculator for Sunset Group ownership packages. Estimate booking payments, remaining amounts, and profit periods.",
};

const notes = [
  {
    title: "Booking money & registration schedule",
    body: "The booking amount secures your deed reservation. Following verification and initial deed execution, the remaining balance can be structured through flexible instalment milestones aligned with construction progress.",
  },
  {
    title: "Annual profit days explained",
    body: "Each package allocates a defined number of profit-sharing days per calendar year — for example 112 days for Platinum and 56 for Gold. Net operational revenue from hotel suites, convention facilities and healthcare services over that period is distributed proportionally.",
  },
  {
    title: "Halal profit-sharing vs. fixed interest",
    body: "In strict adherence to Islamic Shariah jurisprudence, Sunset Group does not promise or pay fixed interest. Returns fluctuate with verified audited financial performance, ensuring a genuine Musharakah partnership.",
  },
];

export default function ProfitCalculatorPage() {
  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Interactive planning tool"
        title="Ownership and profit calculator."
        description="Explore the investment breakdown across Platinum, Gold, Silver and Bronze tiers. Calculate booking amounts, structured balances and annual profit days."
        actions={
          <Link href="/packages" className="btn btn-outline-white">
            <ArrowLeft size={14} />
            Back to packages
          </Link>
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-4xl">
          <ProfitCalculator />
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site max-w-4xl">
          <SectionHeading
            eyebrow="Guidance & methodology"
            title="How the calculations work"
            className="mb-10"
          />

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {notes.map((note, idx) => (
              <div key={note.title} className="flex gap-5 py-6">
                <span className="font-display text-[1.5rem] leading-none text-[var(--sunset-red)]">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="mb-1.5 text-[14px] font-semibold text-[var(--ink)]">
                    {note.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {note.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[18px] border border-[var(--line)] bg-white p-6 md:flex-row md:items-center">
            <p className="max-w-xl text-[13px] text-[var(--sunset-grey-700)]">
              Want a private walkthrough of the projections for your investment horizon?
            </p>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Speak with an adviser
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
