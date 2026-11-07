/**
 * SVG COMPONENT LIBRARY — Sunset Group Brand Motifs
 * All flat, solid fills — no gradients, no shadows.
 * Colors sourced from CSS custom properties.
 */

import React from "react";

interface SVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  "aria-hidden"?: boolean;
}

/* ══════════════════════════════════════════════════════════════
   SunArc — Half-circle sun with concentric ring (red)
   Used in: Hero, Why Kuakata section
══════════════════════════════════════════════════════════════ */
export function SunArc({
  className = "",
  width = 200,
  height = 120,
  ...props
}: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      width={width}
      height={height}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <path
        d="M10 110 A90 90 0 0 1 190 110"
        stroke="var(--sunset-red)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Middle ring */}
      <path
        d="M30 110 A70 70 0 0 1 170 110"
        stroke="var(--sunset-red)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Sun disc */}
      <path
        d="M55 110 A45 45 0 0 1 145 110"
        fill="var(--sunset-red)"
        stroke="none"
      />
      {/* Horizon line */}
      <line x1="0" y1="110" x2="200" y2="110" stroke="var(--sunset-red)" strokeWidth="1.5" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   WaveBand — Layered flat wave strips in blue-800/blue-500/green-900
   Used in: Section dividers, Why Kuakata
══════════════════════════════════════════════════════════════ */
export function WaveBand({
  className = "",
  width = "100%",
  height = 80,
  ...props
}: SVGProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      width={width}
      height={height}
      preserveAspectRatio="none"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back wave — green-900 */}
      <path
        d="M0 50 Q180 10 360 50 Q540 90 720 50 Q900 10 1080 50 Q1260 90 1440 50 L1440 80 L0 80 Z"
        fill="var(--sunset-green-900)"
        opacity="0.6"
      />
      {/* Mid wave — blue-800 */}
      <path
        d="M0 55 Q180 25 360 55 Q540 85 720 55 Q900 25 1080 55 Q1260 85 1440 55 L1440 80 L0 80 Z"
        fill="var(--sunset-blue-800)"
        opacity="0.7"
      />
      {/* Front wave — blue-500 */}
      <path
        d="M0 62 Q180 42 360 62 Q540 82 720 62 Q900 42 1080 62 Q1260 82 1440 62 L1440 80 L0 80 Z"
        fill="var(--sunset-blue-500)"
        opacity="0.5"
      />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   WaveBandInverted — flipped for top of dark sections
══════════════════════════════════════════════════════════════ */
export function WaveBandInverted({
  className = "",
  width = "100%",
  height = 80,
  ...props
}: SVGProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      width={width}
      height={height}
      preserveAspectRatio="none"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 30 Q180 60 360 30 Q540 0 720 30 Q900 60 1080 30 Q1260 0 1440 30 L1440 0 L0 0 Z"
        fill="var(--sunset-blue-500)"
        opacity="0.5"
      />
      <path
        d="M0 25 Q180 55 360 25 Q540 -5 720 25 Q900 55 1080 25 Q1260 -5 1440 25 L1440 0 L0 0 Z"
        fill="var(--sunset-blue-800)"
        opacity="0.7"
      />
      <path
        d="M0 18 Q180 48 360 18 Q540 -12 720 18 Q900 48 1080 18 Q1260 -12 1440 18 L1440 0 L0 0 Z"
        fill="var(--sunset-green-900)"
        opacity="0.6"
      />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   TowerMark — Two simplified vertical tower silhouettes
   Used in: Hero composition, About section
══════════════════════════════════════════════════════════════ */
export function TowerMark({
  className = "",
  width = 80,
  height = 160,
  color = "var(--sunset-grey-700)",
  ...props
}: SVGProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 80 160"
      width={width}
      height={height}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left tower */}
      <rect x="6" y="40" width="22" height="120" fill={color} />
      <rect x="10" y="30" width="14" height="12" fill={color} />
      <rect x="13" y="20" width="8" height="12" fill={color} />
      <rect x="15" y="8" width="4" height="14" fill={color} />
      {/* Windows left */}
      <rect x="10" y="55" width="4" height="6" fill="var(--paper)" />
      <rect x="18" y="55" width="4" height="6" fill="var(--paper)" />
      <rect x="10" y="70" width="4" height="6" fill="var(--paper)" />
      <rect x="18" y="70" width="4" height="6" fill="var(--paper)" />

      {/* Right tower (taller) */}
      <rect x="52" y="20" width="22" height="140" fill={color} />
      <rect x="56" y="10" width="14" height="12" fill={color} />
      <rect x="59" y="2" width="8" height="10" fill={color} />
      {/* Windows right */}
      <rect x="56" y="35" width="4" height="6" fill="var(--paper)" />
      <rect x="64" y="35" width="4" height="6" fill="var(--paper)" />
      <rect x="56" y="50" width="4" height="6" fill="var(--paper)" />
      <rect x="64" y="50" width="4" height="6" fill="var(--paper)" />
      <rect x="56" y="65" width="4" height="6" fill="var(--paper)" />
      <rect x="64" y="65" width="4" height="6" fill="var(--paper)" />

      {/* Base / ground */}
      <rect x="0" y="158" width="80" height="2" fill={color} />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   PalmMark — Minimal palm silhouette (green)
   Used in: Hero, Kuakata section
══════════════════════════════════════════════════════════════ */
export function PalmMark({
  className = "",
  width = 60,
  height = 100,
  color = "var(--sunset-green-600)",
  ...props
}: SVGProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 60 100"
      width={width}
      height={height}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <path d="M28 100 Q30 60 32 30 Q34 20 35 10" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Fronds */}
      <path d="M35 10 Q20 5 10 15 Q22 8 32 18" fill={color} />
      <path d="M35 10 Q50 2 56 15 Q45 8 34 20" fill={color} />
      <path d="M35 10 Q35 -2 48 2 Q40 5 34 18" fill={color} />
      <path d="M35 10 Q22 -2 18 8 Q28 6 33 18" fill={color} />
      <path d="M35 10 Q42 15 50 25 Q40 15 34 22" fill={color} />
      <path d="M35 10 Q20 18 15 28 Q28 15 33 24" fill={color} />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   Horizon — Thin horizon line with small sun dot
   Used as: Section divider
══════════════════════════════════════════════════════════════ */
export function Horizon({
  className = "",
  width = 200,
  height = 20,
  ...props
}: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      width={width}
      height={height}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="10" x2="90" y2="10" stroke="var(--sunset-red)" strokeWidth="1" />
      <circle cx="100" cy="10" r="4" fill="var(--sunset-red)" />
      <line x1="110" y1="10" x2="200" y2="10" stroke="var(--sunset-red)" strokeWidth="1" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   SunDot — Simple solid sun circle, animatable on load
   Used in: Hero (slow rise animation)
══════════════════════════════════════════════════════════════ */
export function SunDot({
  className = "",
  size = 120,
  color = "var(--sunset-red)",
  ...props
}: SVGProps & { size?: number; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="55" fill={color} />
      <circle cx="60" cy="60" r="45" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="60" cy="60" r="35" fill="none" stroke={color} strokeWidth="1.5" opacity="0.25" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   ArchFrame — Arch-shaped container backdrop (for image masks)
   Used as: Image frame behind arch-masked photos
══════════════════════════════════════════════════════════════ */
export function ArchFrame({
  className = "",
  width = 320,
  height = 420,
  color = "var(--sand)",
  ...props
}: SVGProps & { color?: string }) {
  const r = Number(width) / 2;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M 0 ${r} A ${r} ${r} 0 0 1 ${width} ${r} L ${width} ${height} L 0 ${height} Z`}
        fill={color}
      />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   QuarterCircle — Geometric accent shape
══════════════════════════════════════════════════════════════ */
export function QuarterCircle({
  className = "",
  size = 200,
  color = "var(--sand)",
  corner = "top-right",
  ...props
}: SVGProps & { size?: number; color?: string; corner?: "top-right" | "top-left" | "bottom-right" | "bottom-left" }) {
  const paths: Record<string, string> = {
    "top-right": `M ${size} 0 A ${size} ${size} 0 0 0 0 0 L 0 0 Z`,
    "top-left": `M 0 0 A ${size} ${size} 0 0 1 ${size} 0 L ${size} 0 Z`,
    "bottom-right": `M ${size} ${size} A ${size} ${size} 0 0 1 0 ${size} L 0 ${size} Z`,
    "bottom-left": `M 0 ${size} A ${size} ${size} 0 0 0 ${size} ${size} L ${size} ${size} Z`,
  };
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={paths[corner]} fill={color} />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════
   HeroComposition — Full hero SVG composition (sun + towers + palm + waves)
   Used in: Home hero section, animated on load
══════════════════════════════════════════════════════════════ */
export function HeroComposition({
  className = "",
  ...props
}: SVGProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      width="100%"
      height="100%"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape */}
      <circle cx="250" cy="260" r="200" fill="var(--sand)" />

      {/* Sun (animatable — target with motion) */}
      <circle id="hero-sun" cx="250" cy="260" r="80" fill="var(--sunset-red)" />
      <circle cx="250" cy="260" r="98" fill="none" stroke="var(--sunset-red)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="250" cy="260" r="116" fill="none" stroke="var(--sunset-red)" strokeWidth="1.5" opacity="0.2" />

      {/* Wave bands */}
      <path
        d="M50 380 Q125 355 200 380 Q275 405 350 380 Q425 355 460 380 L460 440 L50 440 Z"
        fill="var(--sunset-blue-800)"
      />
      <path
        d="M50 395 Q125 375 200 395 Q275 415 350 395 Q425 375 460 395 L460 440 L50 440 Z"
        fill="var(--sunset-blue-500)"
        opacity="0.6"
      />
      <path
        d="M50 410 Q125 395 200 410 Q275 425 350 410 Q425 395 460 410 L460 440 L50 440 Z"
        fill="var(--sunset-green-900)"
        opacity="0.5"
      />

      {/* Left tower */}
      <rect x="130" y="300" width="38" height="140" fill="var(--sunset-grey-700)" />
      <rect x="136" y="285" width="26" height="17" fill="var(--sunset-grey-700)" />
      <rect x="140" y="268" width="18" height="19" fill="var(--sunset-grey-700)" />
      <rect x="143" y="250" width="12" height="20" fill="var(--sunset-grey-700)" />
      {/* Tower windows */}
      <rect x="136" y="315" width="8" height="10" fill="var(--paper)" opacity="0.6" />
      <rect x="152" y="315" width="8" height="10" fill="var(--paper)" opacity="0.6" />
      <rect x="136" y="335" width="8" height="10" fill="var(--paper)" opacity="0.6" />
      <rect x="152" y="335" width="8" height="10" fill="var(--paper)" opacity="0.6" />

      {/* Right tower */}
      <rect x="332" y="280" width="42" height="160" fill="var(--sunset-grey-700)" />
      <rect x="338" y="262" width="30" height="20" fill="var(--sunset-grey-700)" />
      <rect x="342" y="244" width="22" height="20" fill="var(--sunset-grey-700)" />
      <rect x="346" y="230" width="14" height="16" fill="var(--sunset-grey-700)" />
      {/* Tower windows */}
      <rect x="338" y="296" width="8" height="10" fill="var(--paper)" opacity="0.6" />
      <rect x="358" y="296" width="8" height="10" fill="var(--paper)" opacity="0.6" />
      <rect x="338" y="316" width="8" height="10" fill="var(--paper)" opacity="0.6" />
      <rect x="358" y="316" width="8" height="10" fill="var(--paper)" opacity="0.6" />

      {/* Palm tree (left) */}
      <path d="M105 440 Q108 390 112 360 Q113 350 115 340" stroke="var(--sunset-green-900)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M115 340 Q95 330 82 345 Q100 335 112 350" fill="var(--sunset-green-900)" />
      <path d="M115 340 Q135 328 142 342 Q128 332 112 348" fill="var(--sunset-green-900)" />
      <path d="M115 340 Q118 326 132 328 Q122 330 113 344" fill="var(--sunset-green-900)" />

      {/* Palm tree (right) */}
      <path d="M390 440 Q387 390 383 360 Q382 350 380 340" stroke="var(--sunset-green-900)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M380 340 Q400 330 413 345 Q395 335 383 350" fill="var(--sunset-green-900)" />
      <path d="M380 340 Q360 328 353 342 Q367 332 383 348" fill="var(--sunset-green-900)" />
      <path d="M380 340 Q377 326 363 328 Q373 330 382 344" fill="var(--sunset-green-900)" />

      {/* Horizon line */}
      <line x1="50" y1="380" x2="460" y2="380" stroke="var(--sunset-red)" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

