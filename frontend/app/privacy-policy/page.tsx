import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Sunset Group",
  description:
    "Privacy policy and client data protection practices of Sunset Kuakata Hotel & Resort Ltd.",
};

const sections = [
  {
    title: "1. Information we collect",
    body: "When you make an inquiry, reserve an ownership package or register a deed with Sunset Group (Sunset Kuakata Hotel & Resort Ltd.), we collect identifiable personal and financial details including your full legal name, national identity number (NID / Smart Card), passport details, Bangladeshi mobile number, email address, nominee details and banking information for profit remittance.",
  },
  {
    title: "2. Legal use of collected information",
    body: "Your personal records are used strictly for deed execution under the Registration Act 1908, saf-kabala title drafting, Shariah board compliance audits, anti-money laundering (AML) compliance and direct dividend bank transfers. We do not sell, license or trade your contact or investment records to third-party telemarketers.",
  },
  {
    title: "3. Sub-registry and government record keeping",
    body: "Property transfers executed via saf-kabala require official registration with the relevant sub-registry offices under the Ministry of Law, Justice and Parliamentary Affairs of Bangladesh. Certain title documents become public government records as required by the law of the land.",
  },
  {
    title: "4. Data security and confidentiality",
    body: "We maintain appropriate physical, procedural and electronic safeguards at our Dhanmondi headquarters to protect investor documentation against unauthorised disclosure, loss or alteration.",
  },
  {
    title: "5. Contacting the compliance officer",
    body: "If you have questions regarding the privacy of your investor profile, contact our legal desk at +880 1325 074535 or visit 27 Shaptak Square, Level 11, Dhanmondi 27, Dhaka.",
  },
];

export default function PrivacyPolicyPage() {
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
            Data protection &amp; confidentiality
          </p>
          <h1 className="text-display-lg mb-4 text-[var(--paper)]">Privacy Policy</h1>
          <p className="text-[12px] text-[rgba(250,249,246,0.56)]">
            Last updated January 2026 · Sunset Kuakata Hotel &amp; Resort Ltd.
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
              Questions about how your investor profile is handled?
            </p>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Contact our compliance desk
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
