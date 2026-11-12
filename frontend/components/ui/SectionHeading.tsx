import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className = "",
  as: Tag = "h2",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      } ${className}`}
    >
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && (
          <div
            className={`flex items-center gap-3 mb-3.5 ${centered ? "justify-center" : ""}`}
          >
            <span className="h-px w-6 bg-[var(--sunset-red)]" aria-hidden />
            <p
              className="text-eyebrow font-semibold"
              style={{ color: isDark ? "#ffffff" : "var(--sunset-green-700)" }}
            >
              {eyebrow}
            </p>
          </div>
        )}

        <Tag
          className="text-display-md"
          style={{ color: isDark ? "var(--paper)" : "var(--sunset-green-900)" }}
        >
          {title}
        </Tag>

        {description && (
          <p
            className={`text-body mt-4 leading-relaxed ${centered ? "mx-auto" : ""} max-w-xl`}
            style={{ color: isDark ? "rgba(255, 255, 255, 0.7)" : "var(--sunset-grey-700)" }}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
