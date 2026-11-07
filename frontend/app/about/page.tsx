import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Award,
  HeartHandshake,
  Check,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us — Ethical Hospitality & Shariah-Supervised Ownership",
  description:
    "Learn about Sunset Group, parent company Sunset Kuakata Hotel & Resort Ltd., registered under the Company Act 1994. Discover our Shariah Supervisory Committee and saf-kabala legal ownership structure.",
};

const pillars = [
  {
    icon: Award,
    title: "Our mission",
    body: "To build sustainable luxury hospitality and healthcare infrastructure in Bangladesh that yields equitable, halal revenue for everyday shareholders while elevating local communities.",
  },
  {
    icon: Scale,
    title: "Our vision",
    body: "To be Bangladesh's most reputable and transparent ethical investment house, recognised internationally for turning coastal tourism and essential healthcare into long-term family legacies.",
  },
  {
    icon: HeartHandshake,
    title: "Our values",
    body: "Uncompromising Islamic ethics, radical financial transparency, community health upliftment and rigorous adherence to the laws and statutory registrations of the land.",
  },
];

const shariahPoints = [
  "Zero interest (riba) in financing, loans or partner yields",
  "Asset-backed equity where every share represents real property",
  "Fair, transparent profit-and-loss ratios agreed beforehand",
  "No involvement in prohibited sectors, including gambling and alcohol",
];

const deedSteps = [
  {
    step: "01",
    title: "Government sub-registry",
    body: "Every ownership deed is officially registered at the local government sub-registry office in your name.",
  },
  {
    step: "02",
    title: "Indisputable saf-kabala",
    body: "Saf-kabala represents permanent, absolute title under the Registration Act 1908 of Bangladesh.",
  },
  {
    step: "03",
    title: "Heritable & transferable",
    body: "Your ownership unit is a permanent real-estate asset that can be inherited or legally sold.",
  },
  {
    step: "04",
    title: "Company Act 1994",
    body: "Backed by Sunset Kuakata Hotel & Resort Ltd., with registered memorandum and articles of association.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Ethical hospitality · Company Act 1994 · Saf-kabala"
        title="Built on trust. Grown through ethics."
        description="Sunset Group operates with an unwavering dedication to halal wealth creation, ethical asset ownership and hospitality excellence across Bangladesh's most promising growth corridors."
        image="/images/kuakata/hero.webp"
        imageAlt="Sunset Kuakata Hotel & Resort"
        actions={
          <>
            <Link href="/projects" className="btn btn-primary">
              Explore the portfolio
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              Speak with an adviser
            </Link>
          </>
        }
        meta={
          <>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                Parent company
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">Sunset Kuakata Hotel &amp; Resort Ltd.</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                RJSC registration
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">C-189422/2023</p>
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                Headquarters
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">Dhanmondi 27, Dhaka</p>
            </div>
          </>
        }
      />

      {/* Story */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Corporate heritage"
                title="Pioneering ethical ownership in Bangladesh"
                className="mb-7"
              />
              <div className="space-y-4 text-body text-[var(--sunset-grey-700)]">
                <p>
                  Sunset Group was established with a singular vision: to bridge high-yield
                  hospitality investment with complete Islamic financial integrity and undisputed
                  legal ownership. Operating under parent entity{" "}
                  <strong className="text-[var(--ink)]">Sunset Kuakata Hotel &amp; Resort Ltd.</strong>{" "}
                  (registered under the Bangladesh Company Act 1994), we have pioneered
                  shared-ownership models that give everyday investors genuine equity in
                  landmark real-world projects.
                </p>
                <p>
                  Unlike speculative property or unsecured investments, our projects — from
                  Kuakata&apos;s premier five-star equivalent resort to urban multi-specialty
                  healthcare and eco-tourism hubs — are legally backed by saf-kabala registration.
                  This grants each shareholder authentic, deed-registered title ownership
                  recognised by the Government of Bangladesh.
                </p>
                <p>
                  Every financial instrument, room revenue distribution and operational protocol
                  is guided by an independent Shariah Supervisory Committee to ensure total
                  freedom from interest (riba), deceptive uncertainty (gharar) and unethical
                  practices.
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-6">
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                    Company Act framework
                  </dt>
                  <dd className="mt-1 font-display text-[1.9rem] leading-none text-[var(--sunset-green-900)]">
                    1994
                  </dd>
                </div>
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                    Shariah compliant
                  </dt>
                  <dd className="mt-1 font-display text-[1.9rem] leading-none text-[var(--sunset-red)]">
                    100%
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-[var(--sand)]">
                <Image
                  src="/images/kuakata/gallery-01.webp"
                  alt="Beachfront at Sunset Kuakata Hotel & Resort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>
              <p className="mt-4 text-[12px] text-[var(--sunset-grey-700)]">
                Sunset Kuakata Hotel &amp; Resort — Patuakhali, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow="Guiding principles"
            title="Mission, vision and philosophy"
            className="mb-12 md:mb-14"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[18px] border border-[var(--line)] bg-white p-8"
                >
                  <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
                    <Icon size={19} strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-3 text-[15.5px] font-semibold text-[var(--ink)]">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shariah */}
      <section
        className="section-gap"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
                <p className="text-eyebrow" style={{ color: "rgba(250,249,246,0.62)" }}>
                  Shariah supervisory committee
                </p>
              </div>
              <h2 className="text-display-md mb-5 text-[var(--paper)]">
                Audited and certified under Islamic principles
              </h2>
              <div className="space-y-4 text-body text-[rgba(250,249,246,0.72)]">
                <p>
                  At Sunset Group, &ldquo;halal&rdquo; is not a marketing phrase; it is the
                  constitutional foundation of our business model. Our operations are vetted by
                  an independent Shariah Supervisory Committee of recognised Islamic jurists and
                  finance scholars.
                </p>
                <p>The committee scrutinises every partnership deed, ensuring:</p>
              </div>

              <ul className="mt-5 space-y-3">
                {shariahPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(250,249,246,0.1)]">
                      <Check size={10} strokeWidth={2.5} className="text-[var(--sunset-red)]" />
                    </span>
                    <span className="text-[13px] leading-relaxed text-[rgba(250,249,246,0.8)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 rounded-[12px] border border-[rgba(250,249,246,0.14)] bg-[rgba(250,249,246,0.04)] p-4 text-[12px] leading-relaxed text-[rgba(250,249,246,0.62)]">
                <strong className="text-[var(--paper)]">Official fatwa &amp; board certification</strong>{" "}
                is available on request at our corporate office. Shariah registration No.
                SG/SHR-2023/044 — verification on file.
              </p>
            </div>

            <div className="rounded-[20px] border border-[rgba(250,249,246,0.14)] bg-[rgba(250,249,246,0.04)] p-8 md:p-10">
              <h3 className="text-display-sm mb-5 text-[var(--paper)]">Board of scholars</h3>
              <p className="mb-7 text-[13px] leading-relaxed text-[rgba(250,249,246,0.62)]">
                The panel continuously monitors revenue accounting and audits distribution
                cycles before dividends are credited to investor bank accounts.
              </p>
              <div className="divide-y divide-[rgba(250,249,246,0.12)]">
                {[
                  {
                    title: "Chief Shariah adviser",
                    body: "Eminent Islamic finance scholar and author. Details available in the prospectus.",
                  },
                  {
                    title: "Legal & fiqh consultant",
                    body: "Specialist in Bangladesh real property law and Islamic commercial contracts.",
                  },
                  {
                    title: "Annual compliance audit",
                    body: "Comprehensive annual review published before the shareholder summit.",
                  },
                ].map((item) => (
                  <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-[13px] font-semibold text-[var(--paper)]">{item.title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-[rgba(250,249,246,0.56)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saf-kabala */}
      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <SectionHeading
            eyebrow="Ironclad security"
            title="Saf-kabala legal registration"
            description="Four safeguards behind every ownership certificate we issue."
            align="center"
            className="mb-12 md:mb-14"
          />

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {deedSteps.map((item) => (
              <div key={item.step} className="border-t border-[var(--line-strong)] pt-5">
                <p className="font-display text-[1.6rem] leading-none text-[var(--sunset-red)]">
                  {item.step}
                </p>
                <h3 className="mt-3 text-[14px] font-semibold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[18px] border border-[var(--line)] bg-[var(--sand)] p-7 md:flex-row md:items-center md:p-9">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
                Official corporate registration
              </p>
              <p className="mt-1.5 text-[15px] font-semibold text-[var(--sunset-green-900)]">
                Sunset Kuakata Hotel &amp; Resort Ltd. — RJSC Reg. No. C-189422/2023
              </p>
              <p className="mt-1 text-[12px] text-[var(--sunset-grey-700)]">
                TIN 7128-4912-0034 · 27 Shaptak Square, Dhanmondi 27, Dhaka-1209
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Request documentation
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--sunset-green-900)", color: "var(--paper)" }}
      >
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-sm mb-2 text-[var(--paper)]">
              Ready to explore our active portfolios?
            </h2>
            <p className="text-[13px] text-[rgba(250,249,246,0.68)]">
              Consult with our senior investment analysts at Dhanmondi or schedule a project site
              visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              View projects
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
