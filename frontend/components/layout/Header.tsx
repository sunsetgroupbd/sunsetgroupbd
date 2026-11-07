"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { projects } from "@/data/projects";

export default function Header() {
  const { t, toggle, isBn } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/about", label: t.nav.about, always: true },
    { href: "/packages", label: t.nav.packages, always: true },
    { href: "/profit-calculator", label: t.nav.calculator, always: false },
    { href: "/source-of-income", label: t.nav.sourceOfIncome, always: false },
    { href: "/gallery", label: t.nav.gallery, always: false },
    { href: "/blogs", label: t.nav.blogs, always: false },
    { href: "/contact", label: t.nav.contact, always: true },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const transparent = !scrolled;
  const projectsActive = pathname.startsWith("/projects");

  const navColor = (active: boolean) =>
    transparent
      ? active
        ? "#FFFFFF"
        : "rgba(250, 249, 246, 0.78)"
      : active
        ? "var(--sunset-green-900)"
        : "var(--ink)";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-[rgba(250,249,246,0.92)] backdrop-blur-xl border-b border-[var(--line)]"
        }`}
      >
        <div className="container-site">
          <div className="flex h-[72px] md:h-20 items-center justify-between gap-6">
            {/* Brand */}
            <Link
              href="/"
              aria-label="Sunset Group home"
              className="flex items-center gap-3 shrink-0"
            >
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-[4px] bg-white p-1 border border-black/5">
                <Image
                  src="/Sunset-Group-Logo.png"
                  alt="Sunset Group crest"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </span>
              <span className="leading-none">
                <span
                  className="block text-[1.18rem] font-medium tracking-[-0.01em] transition-colors"
                  style={{
                    color: transparent ? "#FFFFFF" : "var(--sunset-green-900)",
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  Sunset Group
                </span>
                <span
                  className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.16em] transition-colors"
                  style={{
                    color: transparent
                      ? "rgba(250, 249, 246, 0.58)"
                      : "var(--sunset-grey-700)",
                  }}
                >
                  {isBn ? "হসপিটালিটি ও হেলথকেয়ার" : "Hospitality & Healthcare"}
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7" aria-label="Main navigation">
              <Link
                href="/"
                className="text-[13.5px] font-medium transition-colors hover:opacity-70 whitespace-nowrap"
                style={{ color: navColor(pathname === "/") }}
              >
                {t.nav.home}
              </Link>

              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13.5px] font-medium transition-colors hover:opacity-70 whitespace-nowrap ${
                    link.always ? "inline-block" : "hidden xl:inline-block"
                  }`}
                  style={{ color: navColor(isActive(link.href)) }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-0 h-px w-full"
                      style={{
                        backgroundColor: transparent
                          ? "rgba(250, 249, 246, 0.8)"
                          : "var(--sunset-green-900)",
                      }}
                    />
                  )}
                </Link>
              ))}

              {/* Projects dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProjectsOpen((open) => !open)}
                  className="flex items-center gap-1 text-[13.5px] font-medium transition-colors hover:opacity-70 cursor-pointer whitespace-nowrap"
                  style={{ color: navColor(projectsActive) }}
                  aria-expanded={projectsOpen}
                  aria-haspopup="true"
                >
                  {t.nav.projects}
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-200"
                    style={{ transform: projectsOpen ? "rotate(180deg)" : "rotate(0)" }}
                  />
                </button>

                <AnimatePresence>
                  {projectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full mt-4 w-[300px] -translate-x-1/2 overflow-hidden rounded-xl border border-[var(--line)] bg-white p-1.5 shadow-[0_18px_50px_-18px_rgba(14,42,31,0.28)]"
                      role="menu"
                    >
                      <Link
                        href="/projects"
                        onClick={() => setProjectsOpen(false)}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-semibold text-[var(--sunset-green-900)] hover:bg-[var(--sand)] transition-colors"
                        role="menuitem"
                      >
                        <span>{isBn ? "সকল প্রকল্প" : "All projects"}</span>
                        <ArrowRight size={14} />
                      </Link>

                      <div className="my-1 h-px bg-[var(--line)]" />

                      {projects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          onClick={() => setProjectsOpen(false)}
                          className="flex items-baseline justify-between gap-3 rounded-lg px-3 py-2 text-[13px] text-[var(--ink)] hover:bg-[var(--sand)] transition-colors"
                          role="menuitem"
                        >
                          <span className="truncate">
                            {isBn ? project.nameBn : project.name}
                          </span>
                          <span className="text-[10px] font-semibold tabular-nums text-[var(--sunset-grey-700)]">
                            {project.number}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13.5px] font-medium transition-colors hover:opacity-70 whitespace-nowrap ${
                    link.always ? "inline-block" : "hidden xl:inline-block"
                  }`}
                  style={{ color: navColor(isActive(link.href)) }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-0 h-px w-full"
                      style={{
                        backgroundColor: transparent
                          ? "rgba(250, 249, 246, 0.8)"
                          : "var(--sunset-green-900)",
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={toggle}
                className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[12px] font-semibold transition-colors hover:opacity-75 cursor-pointer"
                style={{ color: transparent ? "rgba(250, 249, 246, 0.86)" : "var(--ink)" }}
                aria-label="Change language"
              >
                <Globe size={14} />
                <span>{t.nav.langToggle}</span>
              </button>

              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-[12.5px] font-semibold transition-colors ${
                  transparent
                    ? "bg-[var(--paper)] text-[var(--sunset-green-900)] hover:bg-white"
                    : "bg-[var(--sunset-green-900)] text-[var(--paper)] hover:bg-[var(--sunset-green-950)]"
                }`}
              >
                {t.nav.investNow}
                <ArrowRight size={13} />
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md"
                aria-label="Open menu"
                style={{ color: transparent ? "var(--paper)" : "var(--ink)" }}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--paper)]"
            role="dialog"
            aria-modal="true"
          >
            <div className="container-site flex h-[72px] items-center justify-between border-b border-[var(--line)]">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-black/5 bg-white p-1">
                  <Image
                    src="/Sunset-Group-Logo.png"
                    alt="Sunset Group crest"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </span>
                <span
                  className="text-lg font-medium text-[var(--sunset-green-900)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Sunset Group
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="container-site flex-1 overflow-y-auto py-8">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[var(--line)] py-3.5 text-2xl text-[var(--sunset-green-900)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t.nav.home}
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-[var(--line)] py-3.5 text-2xl text-[var(--sunset-green-900)]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <p className="text-eyebrow mb-3 text-[var(--sunset-grey-700)]">
                  {isBn ? "প্রকল্পসমূহ" : "Projects"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-2 py-2 text-[13.5px] text-[var(--ink)] hover:bg-[var(--sand)]"
                    >
                      {isBn ? project.nameBn : project.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="container-site border-t border-[var(--line)] py-5 flex gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary flex-1"
              >
                {t.nav.investNow}
              </Link>
              <button
                type="button"
                onClick={() => {
                  toggle();
                  setMobileOpen(false);
                }}
                className="btn btn-outline"
              >
                {t.nav.langToggle}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
