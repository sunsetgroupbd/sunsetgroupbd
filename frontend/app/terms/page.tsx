import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sunset Group Shareholder Agreement",
  description:
    "Standard terms, investor eligibility, profit-sharing conditions, and governing law of Sunset Kuakata Hotel & Resort Ltd.",
};

const sections = [
  {
    title: "1. Nature of the contract",
    body: "Sunset Group is a trade brand operating under Sunset Kuakata Hotel & Resort Ltd. (incorporated under the Bangladesh Company Act 1994). Ownership packages offered through this website represent contractual equity participation in real property and operational hospitality or healthcare revenue.",
  },
  {
    title: "2. Saf-kabala registration and deed execution",
    body: "All qualifying packages carry the right to legal deed registration via saf-kabala through the local government sub-registry office. Title execution occurs following fulfilment of scheduled booking and instalment commitments as stipulated in your specific bilateral agreement.",
  },
  {
    title: "3. Profit-sharing — no fixed return guarantee",
    body: "In strict compliance with the guidance of the company's Shariah Supervisory Committee and Bangladesh law, profits are calculated on an actual operational surplus basis. No package promises, implies or guarantees a fixed or risk-free financial return. Figures displayed on this website are illustrative estimates.",
  },
  {
    title: "4. Transferability and resale rights",
    body: "Because title ownership is secured through registered saf-kabala, units are heritable and legally transferable to third parties, subject to company notification and standard statutory transfer deed procedures.",
  },
  {
    title: "5. Governing law and jurisdiction",
    body: "Any dispute arising under these terms or related booking deeds shall be governed exclusively by the laws of the People's Republic of Bangladesh and subject to the jurisdiction of the competent courts of Dhaka.",
  },
];

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <section
        className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-16"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 120% at 85% 0%, rgba(62,115,85,0.3) 0%, rgba(14,42,31,0) 62%)",
          }}
        />
        <div className="container-site relative max-w-3xl">
          <p className="text-eyebrow mb-4" style={{ color: "rgba(250,249,246,0.6)" }}>
            Legal framework &amp; contractual terms
          </p>
          <h1 className="text-display-lg mb-4 text-[var(--paper)]">Terms &amp; Conditions</h1>
          <p className="text-[12px] text-[rgba(250,249,246,0.56)]">
            Applicable to all ownership packages and investor bookings · Sunset Kuakata Hotel
            &amp; Resort Ltd.
          </p>
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site max-w-3xl">
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {sections.map((section) => (
              <div key={section.title} className="py-7">
                <h2 className="text-display-sm mb-3 text-[var(--sunset-green-900)]">
                  {section.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[18px] bg-[var(--sand)] p-6 md:flex-row md:items-center">
            <p className="max-w-xl text-[13px] text-[var(--sunset-grey-700)]">
              Need the full shareholder agreement or a deed walkthrough?
            </p>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Request documentation
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
