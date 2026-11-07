import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
  meta?: ReactNode;
  align?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  actions,
  meta,
  align = "left",
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      aria-label={title}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 28, 20, 0.82) 0%, rgba(10, 28, 20, 0.72) 48%, rgba(10, 28, 20, 0.9) 100%)",
            }}
          />
        </div>
      )}

      {!image && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background:
              "radial-gradient(65% 120% at 85% 0%, rgba(62, 115, 85, 0.35) 0%, rgba(14, 42, 31, 0) 62%)",
          }}
        />
      )}

      <div
        className={`container-site relative pt-36 pb-16 md:pt-44 md:pb-20 ${
          centered ? "text-center" : ""
        }`}
      >
        <div className={`${centered ? "mx-auto" : ""} max-w-3xl`}>
          <div
            className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}
          >
            <span className="h-px w-7 bg-[var(--sunset-red)]" aria-hidden />
            <p className="text-eyebrow" style={{ color: "rgba(255, 255, 255, 0.72)" }}>
              {eyebrow}
            </p>
          </div>

          <h1
            className="text-display-lg mb-5"
            style={{ color: "var(--paper)", fontFamily: "var(--font-cormorant)" }}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`text-body-lg leading-relaxed ${
                centered ? "mx-auto" : ""
              } max-w-2xl`}
              style={{ color: "rgba(255, 255, 255, 0.78)" }}
            >
              {description}
            </p>
          )}

          {actions && (
            <div
              className={`flex flex-wrap items-center gap-3 mt-8 ${
                centered ? "justify-center" : ""
              }`}
            >
              {actions}
            </div>
          )}

          {meta && (
            <div
              className="mt-10 pt-6 flex flex-wrap gap-x-8 gap-y-3 border-t"
              style={{ borderColor: "rgba(255, 255, 255, 0.16)" }}
            >
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
