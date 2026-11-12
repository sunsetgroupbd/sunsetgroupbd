"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  slides?: string[];
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
  slides,
  actions,
  meta,
  align = "left",
}: PageHeroProps) {
  const centered = align === "center";
  const [currentSlide, setCurrentSlide] = useState(0);

  const imagesToSlide = slides && slides.length > 0 ? slides : image ? [image] : [];

  useEffect(() => {
    if (imagesToSlide.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imagesToSlide.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [imagesToSlide.length]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      aria-label={title}
    >
      {imagesToSlide.length > 0 && (
        <div className="absolute inset-0 z-0">
          {imagesToSlide.map((imgSrc, idx) => (
            <div
              key={imgSrc}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={imgSrc}
                alt={imageAlt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
          {/* Balanced gradient overlay: allows the background photography to clearly show while preserving excellent text contrast */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 24, 17, 0.65) 0%, rgba(8, 24, 17, 0.38) 38%, rgba(8, 24, 17, 0.72) 75%, rgba(8, 24, 17, 0.94) 100%)",
            }}
          />
        </div>
      )}

      {imagesToSlide.length === 0 && (
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
        className={`container-site relative z-20 pt-36 pb-16 md:pt-44 md:pb-20 ${
          centered ? "text-center" : ""
        }`}
      >
        <div className={`${centered ? "mx-auto" : ""} max-w-3xl`}>
          <div
            className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}
          >
            <span className="h-px w-8 bg-[var(--sunset-red)] shadow-sm" aria-hidden />
            <p
              className="text-eyebrow font-bold tracking-[0.14em]"
              style={{ color: "#ffffff", textShadow: "0 1px 4px rgba(0, 0, 0, 0.85)" }}
            >
              {eyebrow}
            </p>
          </div>

          <h1
            className="text-display-lg mb-5 font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`text-body-lg leading-relaxed ${
                centered ? "mx-auto" : ""
              } max-w-2xl text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]`}
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
              className="mt-10 pt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20"
            >
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
