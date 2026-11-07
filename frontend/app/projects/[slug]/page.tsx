import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  HeartPulse,
  ArrowRight,
  Phone,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProjectBySlug, getStaticProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getStaticProjectSlugs();
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Investment & Ownership`,
    description: project.tagline + ". " + project.description.slice(0, 140) + "...",
    openGraph: {
      title: `${project.name} | Sunset Group`,
      description: project.tagline,
      images: [{ url: project.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hotelSchema =
    project.slug === "kuakata-hotel"
      ? {
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Sunset Kuakata Hotel & Resort",
          description: project.description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kuakata",
            addressRegion: "Patuakhali",
            addressCountry: "BD",
          },
          starRating: { "@type": "Rating", ratingValue: "5" },
          telephone: "+8801325074535",
        }
      : null;

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      {hotelSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      )}

      <PageHero
        eyebrow={`Project ${project.number} · ${project.location}`}
        title={project.name}
        description={project.tagline}
        image={project.heroImage}
        imageAlt={project.name}
        actions={
          <>
            <Link
              href={`/contact?project=${encodeURIComponent(project.name)}`}
              className="btn btn-primary"
            >
              Enquire for ownership
              <ArrowRight size={15} />
            </Link>
            <Link href="/packages" className="btn btn-outline-white">
              View packages
            </Link>
          </>
        }
        meta={
          project.keyFacts.slice(0, 3).map((fact) => (
            <div key={fact.label}>
              <p className="text-[10.5px] uppercase tracking-[0.12em] text-[rgba(250,249,246,0.5)]">
                {fact.label}
              </p>
              <p className="mt-1 text-[13px] text-[var(--paper)]">{fact.value}</p>
            </div>
          ))
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-10 lg:col-span-7">
              <div>
                <SectionHeading
                  eyebrow="Project overview"
                  title="Sustainable growth and ethical yield"
                  className="mb-5"
                />
                <p className="text-body-lg text-[var(--sunset-grey-700)]">
                  {project.description}
                </p>
              </div>

              {project.services && project.services.length > 0 && (
                <div className="rounded-[18px] border border-[var(--line)] bg-[var(--sand)] p-7 md:p-8">
                  <div className="mb-3 flex items-center gap-2.5">
                    <HeartPulse size={18} className="text-[var(--sunset-red)]" />
                    <h3 className="text-display-sm text-[var(--sunset-green-900)]">
                      Investor healthcare privileges, at cost
                    </h3>
                  </div>
                  <p className="mb-6 text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                    Investors in Sun Care Hospital and their 20 nominated individuals receive all
                    inpatient, outpatient and diagnostic services strictly at cost price for life.
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.services.map((svc) => (
                      <div key={svc} className="flex items-center gap-2 text-[12.5px] text-[var(--ink)]">
                        <Check size={14} className="shrink-0 text-[var(--sunset-green-700)]" />
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-display-sm mb-5 text-[var(--sunset-green-900)]">
                  Why invest in {project.name}
                </h3>
                <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {project.whyInvest.map((point) => (
                    <li key={point} className="flex items-start gap-3 py-3.5">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[var(--sunset-red)]"
                      />
                      <span className="text-[13px] leading-relaxed text-[var(--ink)]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-5 lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-[18px] border border-[var(--line)] bg-white p-7">
                <h3 className="text-display-sm mb-5 text-[var(--sunset-green-900)]">
                  Key project facts
                </h3>

                <dl className="divide-y divide-[var(--line)]">
                  {project.keyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 py-3 text-[12.5px]"
                    >
                      <dt className="text-[var(--sunset-grey-700)]">{fact.label}</dt>
                      <dd className="text-right font-semibold text-[var(--ink)]">{fact.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 py-3 text-[12.5px]">
                    <dt className="text-[var(--sunset-grey-700)]">Legal deed</dt>
                    <dd className="flex items-center gap-1.5 font-semibold text-[var(--sunset-green-700)]">
                      <ShieldCheck size={14} />
                      {project.safKabala ? "Saf-kabala deeded" : "Phase planning"}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-5">
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.name)}`}
                    className="btn btn-primary w-full"
                  >
                    Express ownership interest
                    <ArrowRight size={15} />
                  </Link>
                  <a href="tel:+8801325074535" className="btn btn-outline w-full">
                    <Phone size={14} />
                    Talk to the investment desk
                  </a>
                </div>
              </div>

              <div className="rounded-[18px] bg-[var(--sand)] p-6">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--sunset-green-700)]">
                  <ShieldCheck size={14} />
                  Shariah supervisory board
                </p>
                <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                  All shared ownership contracts undergo continuous review by appointed Islamic
                  jurisprudence scholars to guarantee complete compliance with Islamic finance
                  principles.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="section-gap" style={{ backgroundColor: "var(--sand)" }}>
          <div className="container-site">
            <SectionHeading
              eyebrow="Imagery & progress"
              title="Project gallery"
              className="mb-10"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.galleryImages.map((imgSrc, idx) => (
                <div
                  key={imgSrc}
                  className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[var(--paper)]"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.name} photo ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.packages && project.packages.length > 0 && (
        <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
          <div className="container-site">
            <SectionHeading
              eyebrow="Ownership tiers"
              title={`Available packages for ${project.name}`}
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex flex-col justify-between rounded-[16px] border border-[var(--line)] bg-white p-6"
                >
                  <div>
                    <h3 className="text-display-sm mb-1 text-[var(--sunset-green-900)]">
                      {pkg.name}
                    </h3>
                    <p className="mb-4 text-[1.35rem] font-medium tabular-nums text-[var(--sunset-red)]">
                      {pkg.priceLabel}
                    </p>
                    <dl className="mb-6 space-y-2 border-y border-[var(--line)] py-3.5 text-[12px]">
                      <div className="flex justify-between gap-2">
                        <dt className="text-[var(--sunset-grey-700)]">Booking money</dt>
                        <dd className="font-semibold text-[var(--ink)]">
                          ৳ {(pkg.bookingBDT / 100000).toFixed(2)} Lac
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-[var(--sunset-grey-700)]">Profit period</dt>
                        <dd className="font-semibold text-[var(--sunset-green-900)]">
                          {pkg.profitDays} days / yr
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.name)}&package=${pkg.name}`}
                    className="btn btn-outline w-full"
                  >
                    Select package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div className="container-site flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-sm mb-2 text-[var(--paper)]">
              Interested in becoming an equity shareholder?
            </h2>
            <p className="text-[13px] text-[rgba(250,249,246,0.68)]">
              Reserve your deeded saf-kabala package before early-bird tranches close.
            </p>
          </div>
          <Link
            href={`/contact?project=${encodeURIComponent(project.name)}`}
            className="btn btn-primary shrink-0"
          >
            Submit an ownership enquiry
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
