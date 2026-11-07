import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Investment Projects — Sunset Group Portfolio",
  description:
    "Explore Sunset Group's Shariah-compliant projects: Sunset Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island, Super Combo Investment, The Deck, and Mangrove.",
};

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Deeded portfolio · Saf-kabala · Shariah supervised"
        title="Flagship investment projects."
        description="Verified hospitality, healthcare and leisure destinations offering ethical, asset-backed profit-sharing for discerning shareholders."
        image="/images/kuakata/gallery-02.webp"
        imageAlt="Kuakata coastline"
        actions={
          <>
            <Link href="/packages" className="btn btn-primary">
              Compare packages
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline-white">
              Book a consultation
            </Link>
          </>
        }
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-[var(--line)] bg-white transition-shadow hover:shadow-[0_20px_55px_-34px_rgba(18,54,42,0.4)]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block aspect-[16/11] overflow-hidden bg-[var(--sand)]"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,42,31,0.42)] via-transparent to-transparent" />
                  {project.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-[rgba(250,249,246,0.92)] px-2.5 py-1 text-[10px] font-semibold text-[var(--sunset-green-900)] backdrop-blur">
                      {project.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 text-[11px] font-medium tabular-nums text-[rgba(250,249,246,0.85)]">
                    {project.number}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-[var(--sunset-grey-700)]">
                    <MapPin size={12} className="text-[var(--sunset-red)]" />
                    {project.location}
                  </div>

                  <h2 className="text-display-sm mb-2.5 text-[var(--sunset-green-900)]">
                    {project.name}
                  </h2>
                  <p className="mb-5 line-clamp-3 text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                    {project.tagline}
                  </p>

                  <dl className="mb-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-[var(--line)] pt-4">
                    {project.keyFacts.slice(0, 2).map((fact) => (
                      <div key={fact.label}>
                        <dt className="text-[9.5px] uppercase tracking-[0.08em] text-[var(--sunset-grey-700)]">
                          {fact.label}
                        </dt>
                        <dd className="mt-0.5 truncate text-[12px] font-semibold text-[var(--ink)]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-4">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-[var(--sunset-grey-700)]">
                      {project.safKabala && (
                        <ShieldCheck size={13} className="text-[var(--sunset-green-700)]" />
                      )}
                      {project.safKabala ? "Saf-kabala deeded" : "Upcoming phase"}
                    </span>
                    <Link href={`/projects/${project.slug}`} className="link-arrow">
                      Details
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      >
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-eyebrow mb-3" style={{ color: "rgba(250,249,246,0.6)" }}>
                Expandable portfolio architecture
              </p>
              <h2 className="text-display-md mb-3 text-[var(--paper)]">
                Looking for a tailored shareholding?
              </h2>
              <p className="text-[13px] leading-relaxed text-[rgba(250,249,246,0.68)]">
                Whether you want single-resort ownership in Kuakata or a diversified Super Combo
                across healthcare and eco-tourism, our advisers can shape an equity package for
                your investment horizon.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/packages" className="btn btn-primary">
                View packages
              </Link>
              <Link href="/contact" className="btn btn-outline-white">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
