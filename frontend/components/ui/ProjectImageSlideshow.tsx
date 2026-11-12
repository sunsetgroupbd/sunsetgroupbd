"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { ProjectSlide } from "@/data/projects";

interface ProjectImageSlideshowProps {
  slides: ProjectSlide[];
  isBn?: boolean;
  intervalMs?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ProjectImageSlideshow({
  slides,
  isBn = false,
  intervalMs = 3800,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 60vw",
  priority = false,
}: ProjectImageSlideshowProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(nextSlide, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs, nextSlide]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[current];

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={isBn ? slide.nameBn : slide.name}
            fill
            priority={priority && idx === 0}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes={sizes}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[rgba(14,42,31,0.65)] via-transparent to-[rgba(14,42,31,0.25)] opacity-85 pointer-events-none" />

      {/* Bottom slide info & location badge */}
      <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[12px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] truncate">
            {isBn ? currentSlide.nameBn : currentSlide.name}
          </span>
          <div className="flex items-center gap-1.5 rounded-full bg-[#0e2a1f]/90 backdrop-blur-sm px-3 py-1 text-[10.5px] font-semibold text-white shadow-md border border-white/20 w-fit">
            <MapPin size={11} className="text-[var(--sunset-red)] shrink-0" />
            <span className="truncate">{isBn ? currentSlide.locationBn : currentSlide.location}</span>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex items-center gap-1.5 pb-1 shrink-0">
          {slides.map((_, dotIdx) => (
            <span
              key={dotIdx}
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrent(dotIdx);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(dotIdx);
                }
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                dotIdx === current
                  ? "w-6 bg-[var(--sunset-red)]"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

