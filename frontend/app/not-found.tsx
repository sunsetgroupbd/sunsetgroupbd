import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="flex min-h-[88vh] items-center justify-center pt-36 pb-20 md:pt-44 md:pb-24"
      style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
    >
      <div className="container-site relative max-w-xl text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(55% 90% at 50% 0%, rgba(62,115,85,0.35) 0%, rgba(14,42,31,0) 65%)",
          }}
        />

        <p className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[rgba(250,249,246,0.5)]">
          Error 404
        </p>

        <p className="font-display text-[clamp(4rem,14vw,7.5rem)] leading-none text-[var(--sunset-red)]">
          404
        </p>

        <h1 className="text-display-sm mb-3 mt-5 text-[var(--paper)]">
          The horizon you&apos;re looking for doesn&apos;t exist
        </h1>

        <p className="mx-auto mb-9 max-w-md text-[13.5px] leading-relaxed text-[rgba(250,249,246,0.66)]">
          The requested page could not be located. It may have been moved or updated. Return to the
          home page or explore our flagship projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            <Home size={15} />
            Return home
          </Link>
          <Link href="/projects" className="btn btn-outline-white">
            View projects
          </Link>
          <Link href="/contact" className="btn btn-outline-white">
            <Phone size={14} />
            Contact
          </Link>
        </div>

        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-1.5 text-[11.5px] text-[rgba(250,249,246,0.5)] transition-colors hover:text-[var(--paper)]"
        >
          <ArrowLeft size={12} />
          Back to sunsetgroupbd.com
        </Link>
      </div>
    </div>
  );
}
