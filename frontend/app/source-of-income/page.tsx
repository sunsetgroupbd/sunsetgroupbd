import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCheck2,
  Building2,
  Coins,
  FileSpreadsheet,
  Banknote,
  Check,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Source of Income — How Ethical Profit-Sharing Works",
  description:
    "Understand the halal revenue engine behind Sunset Group. From saf-kabala asset ownership to audited commercial operations and annual profit distribution.",
};

export default function SourceOfIncomePage() {
  const investmentFaqs = faqs.filter(
    (f) => f.category === "investment" || f.category === "shariah"
  );

  const steps = [
    {
      step: "01",
      icon: FileCheck2,
      title: "Deed execution & saf-kabala registration",
      desc: "Upon booking and agreement, legal ownership of your asset share is recorded at the government sub-registry office. You receive genuine saf-kabala title deed documentation.",
    },
    {
      step: "02",
      icon: Building2,
      title: "Commercial & hospitality operations",
      desc: "Sunset Kuakata Hotel & Resort, Sun Care Hospital and Dhaka Fantasy Island generate real revenue across luxury rooms, dining, conferences, diagnostics and family recreation.",
    },
    {
      step: "03",
      icon: FileSpreadsheet,
      title: "Independent & Shariah audit",
      desc: "Annual revenue is scrutinised by chartered accountants and our Shariah Supervisory Board to ascertain true operational surplus and remove impermissible elements.",
    },
    {
      step: "04",
      icon: Coins,
      title: "Package day allocation",
      desc: "Net profit is proportioned by tier — 112 days for Platinum, 56 for Gold, 33 for Silver and 10 for Bronze — corresponding to operational trading cycles.",
    },
    {
      step: "05",
      icon: Banknote,
      title: "Direct shareholder distribution",
      desc: "Your audited halal dividend is credited directly into your verified bank account alongside an itemised annual financial report.",
    },
  ];

  const streams = [
    {
      number: "01",
      title: "Kuakata suites & eco-lodges",
      body: "Room tariffs, luxury suite rentals, destination banquets, beachside dining and eco-tours bordering the Sundarbans.",
      note: "High weekend and seasonal demand",
    },
    {
      number: "02",
      title: "Sun Care diagnostic & hospital",
      body: "A 24/7 emergency clinic, advanced imaging, surgical facilities, commercial pharmacy sales and specialist consultations.",
      note: "Recession-resilient essential service",
    },
    {
      number: "03",
      title: "Dhaka Fantasy Island",
      body: "Commercial retail space, amusement arcade, cafe lounges and corporate retreat bookings — 20 minutes from Parliament House.",
      note: "Year-round family footfall",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Revenue engine · Shariah integrity"
        title="How your halal income is generated."
        description="Real businesses, physical real-estate assets and audited cash flows. Explore the five-step lifecycle that turns hospitality and healthcare into shareholder distributions."
        image="/images/kuakata/gallery-03.jpg"
        imageAlt="Sunset Group project"
        actions={
          <Link href="/packages" className="btn btn-primary">
            View ownership packages
            <ArrowRight size={15} />
          </Link>
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow="Transparent mechanism"
            title="The five-stage income lifecycle"
            className="mb-12"
          />

          <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.step}
                  className="grid grid-cols-[auto_1fr] items-start gap-5 py-7 md:grid-cols-[auto_auto_1fr] md:gap-8"
                >
                  <span className="font-display text-[1.7rem] leading-none text-[var(--sunset-red)]">
                    {item.step}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <div className="col-span-2 md:col-span-1">
                    <h3 className="mb-1.5 text-[14.5px] font-semibold text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                      {item.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow="Commercial diversification"
            title="Multiple tangible revenue streams"
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {streams.map((stream) => (
              <div
                key={stream.number}
                className="flex flex-col rounded-[18px] border border-[var(--line)] bg-white p-7"
              >
                <p className="mb-5 font-display text-[1.5rem] leading-none text-[var(--sunset-red)]">
                  {stream.number}
                </p>
                <h3 className="mb-2.5 text-[15px] font-semibold text-[var(--ink)]">
                  {stream.title}
                </h3>
                <p className="mb-5 text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {stream.body}
                </p>
                <p className="mt-auto flex items-center gap-1.5 border-t border-[var(--line)] pt-4 text-[11.5px] font-medium text-[var(--sunset-green-700)]">
                  <Check size={13} />
                  {stream.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow="Clarity & questions"
            title="Income and Shariah questions"
            className="mb-10"
          />

          <div className="mx-auto max-w-3xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {investmentFaqs.map((faq) => (
              <details key={faq.id} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-semibold text-[var(--ink)] marker:hidden">
                  {faq.question}
                  <span className="text-[var(--sunset-red)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn btn-primary">
              Ask our team a question
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
