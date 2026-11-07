import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, Scale, Award, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Ownership Packages — Platinum, Gold, Silver & Bronze",
  description:
    "Compare Sunset Group's halal ownership packages. Transparent pricing in BDT, booking money, profit periods, and saf-kabala registration.",
};

const assurances = [
  {
    icon: ShieldCheck,
    title: "Saf-kabala legal registration",
    body: "Permanent deeded ownership, officially registered at the sub-registry office in Bangladesh.",
  },
  {
    icon: Scale,
    title: "Shariah supervisory board",
    body: "Vetted under Musharakah principles, ensuring zero riba and strictly halal income streams.",
  },
  {
    icon: Award,
    title: "Company Act 1994 backing",
    body: "Sunset Kuakata Hotel & Resort Ltd. is registered with RJSC under the Company Act 1994.",
  },
];

export default function PackagesPage() {
  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Transparent shareholding · Saf-kabala registration"
        title="Ownership packages, compared honestly."
        description="Every package represents deeded, Shariah-supervised ownership in Sunset Kuakata Hotel & Resort Ltd. Choose the tier that matches your investment horizon."
        actions={
          <>
            <Link href="/profit-calculator" className="btn btn-primary">
              Open the calculator
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              Ask an adviser
            </Link>
          </>
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col justify-between rounded-[18px] border bg-white p-7 transition-shadow hover:shadow-[0_20px_55px_-32px_rgba(18,54,42,0.4)] ${
                  pkg.highlighted
                    ? "border-[var(--sunset-green-900)]"
                    : "border-[var(--line)]"
                }`}
              >
                <div>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <h2 className="text-display-sm text-[var(--sunset-green-900)]">{pkg.name}</h2>
                    {pkg.highlighted && (
                      <span className="rounded-full bg-[var(--sunset-green-900)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--paper)]">
                        Executive
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <p className="text-[10.5px] uppercase tracking-[0.12em] text-[var(--sunset-grey-700)]">
                      Total package price
                    </p>
                    <p className="mt-1 font-display text-[2rem] leading-none tabular-nums text-[var(--sunset-green-900)]">
                      {pkg.priceDisplay}
                    </p>
                  </div>

                  <dl className="mb-6 space-y-2.5 border-y border-[var(--line)] py-4 text-[12.5px]">
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-[var(--sunset-grey-700)]">Booking money</dt>
                      <dd className="font-semibold text-[var(--ink)]">{pkg.bookingDisplay}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-[var(--sunset-grey-700)]">Balance</dt>
                      <dd className="font-semibold text-[var(--ink)]">
                        ৳ {(pkg.remainingBDT / 100000).toFixed(2)} Lac
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-[var(--sunset-grey-700)]">Profit period</dt>
                      <dd className="font-semibold text-[var(--sunset-red)]">
                        {pkg.profitDays} days / yr
                      </dd>
                    </div>
                  </dl>

                  <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[var(--sunset-green-700)]">
                    Package inclusions
                  </p>
                  <ul className="mb-8 space-y-2.5">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]"
                      >
                        <Check
                          size={13}
                          className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className={`btn w-full ${pkg.highlighted ? "btn-primary" : "btn-outline"}`}
                >
                  Enquire about {pkg.name}
                </Link>
              </article>
            ))}
          </div>

          {/* Calculator callout */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[20px] bg-[var(--sunset-green-950)] p-8 text-[var(--paper)] md:flex-row md:items-center md:p-11">
            <div className="max-w-xl">
              <p className="text-eyebrow mb-3" style={{ color: "rgba(250,249,246,0.6)" }}>
                Financial planning tool
              </p>
              <h2 className="text-display-sm mb-2 text-[var(--paper)]">
                Estimate multi-unit and instalment projections
              </h2>
              <p className="text-[13px] leading-relaxed text-[rgba(250,249,246,0.68)]">
                Evaluate booking deposits, remaining instalment splits and scaled multi-share
                portfolios before you speak with an adviser.
              </p>
            </div>
            <Link href="/profit-calculator" className="btn btn-outline-white shrink-0">
              Launch calculator
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Assurances */}
          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-3">
            {assurances.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[13.5px] font-semibold text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
            <strong className="text-[var(--ink)]">Statutory compliance note:</strong> All packages
            represent shared equity participation in real commercial property and operational
            hospitality revenue. Returns are distributed on a profit-sharing basis governed by
            board-approved financial statements and are subject to actual market and operational
            performance. Projected estimates do not constitute a fixed or guaranteed financial
            promise.
          </p>
        </div>
      </section>
    </div>
  );
}
