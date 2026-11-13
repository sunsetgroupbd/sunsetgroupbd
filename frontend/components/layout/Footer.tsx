"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/svg/SocialIcons";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/lang";

export default function Footer() {
  const { isBn } = useLang();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: isBn ? "আমাদের পরিচয়" : "About the group" },
    { href: "/packages", label: isBn ? "মালিকানা প্যাকেজ" : "Ownership packages" },
    { href: "/profit-calculator", label: isBn ? "মুনাফা ক্যালকুলেটর" : "Profit calculator" },
    { href: "/source-of-income", label: isBn ? "আয়ের উৎস" : "Source of income" },
    { href: "/gallery", label: isBn ? "গ্যালারি" : "Gallery" },
    { href: "/blogs", label: isBn ? "জার্নাল ও নিবন্ধ" : "Journal" },
    { href: "/contact", label: isBn ? "যোগাযোগ" : "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: isBn ? "গোপনীয়তা নীতি" : "Privacy policy" },
    { href: "/terms", label: isBn ? "শর্তাবলী ও নিয়মাবলী" : "Terms & conditions" },
  ];

  const socials = [
    { href: "https://facebook.com/sunsetkuakatahotel", Icon: FacebookIcon, label: "Facebook" },
    { href: "https://instagram.com/sunsetkuakatahotel", Icon: InstagramIcon, label: "Instagram" },
    { href: "https://youtube.com/@sunsetkuakatahotel", Icon: YoutubeIcon, label: "YouTube" },
    { href: "https://bd.linkedin.com/in/sunsetkuakatahotel", Icon: LinkedinIcon, label: "LinkedIn" },
  ];

  return (
    <footer
      className="on-dark"
      style={{ backgroundColor: "var(--sunset-green-950)", color: "var(--paper)" }}
      role="contentinfo"
    >
      {/* Main */}
      <div className="container-site pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Sunset Group home">
              <span className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-[var(--paper)] p-1">
                <Image
                  src="/Sunset-Group-Logo.png"
                  alt="Sunset Group crest"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </span>
              <span className="leading-none">
                <span
                  className="block text-lg font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Sunset Group
                </span>
                <span className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[rgba(255, 255, 255,0.55)]">
                  {isBn ? "হসপিটালিটি ও হেলথকেয়ার" : "Hospitality & Healthcare"}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-[rgba(255, 255, 255,0.68)]">
              {isBn
                ? "সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লিমিটেড — বাংলাদেশে দীর্ঘমেয়াদী বিনিয়োগকারীদের জন্য স্বচ্ছ, দলিলযুক্ত মালিকানা নিশ্চিতকারী একটি শরীয়া-তদারকিকৃত হসপিটালিটি, হেলথকেয়ার ও অবকাশ যাপন গ্রুপ।"
                : "Sunset Kuakata Hotel & Resort Ltd. — a Shariah-supervised hospitality, healthcare and leisure group building transparent, deeded ownership for long-term investors in Bangladesh."}
            </p>

            <div className="mt-7 space-y-1.5 text-[11.5px] text-[rgba(255, 255, 255,0.45)]">
              <p>{isBn ? "আরজেএসসি নিবন্ধন নং C-189422/2023" : "RJSC Reg. No. C-189422/2023"}</p>
              <p>{isBn ? "শরীয়া সুপারভাইজরি কমিটি তত্ত্বাবধানে পরিচালিত" : "Shariah Supervisory Committee supervised"}</p>
            </div>

            <div className="mt-7 flex gap-2.5">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255, 255, 255,0.2)] text-[rgba(255, 255, 255,0.75)] transition-all duration-200 hover:scale-105 hover:border-[var(--paper)] hover:bg-[rgba(255, 255, 255,0.12)] hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-eyebrow mb-5 text-[rgba(255, 255, 255,0.45)]">
              {isBn ? "অন্বেষণ" : "Explore"}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-[rgba(255, 255, 255,0.7)] transition-colors hover:text-[var(--paper)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="lg:col-span-3">
            <h3 className="text-eyebrow mb-5 text-[rgba(255, 255, 255,0.45)]">
              {isBn ? "প্রকল্পসমূহ" : "Portfolio"}
            </h3>
            <ul className="space-y-2.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex items-baseline gap-2.5 text-[13.5px] text-[rgba(255, 255, 255,0.7)] transition-colors hover:text-[var(--paper)]"
                  >
                    <span className="text-[10px] tabular-nums text-[rgba(255, 255, 255,0.32)]">
                      {project.number}
                    </span>
                    <span>{isBn ? project.nameBn : project.name}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-opacity group-hover:opacity-60"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-eyebrow mb-5 text-[rgba(255, 255, 255,0.45)]">
              {isBn ? "যোগাযোগ" : "Contact"}
            </h3>
            <ul className="space-y-4 text-[13.5px] text-[rgba(255, 255, 255,0.7)]">
              <li className="flex gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-[rgba(255, 255, 255,0.4)]" />
                <span>
                  <a href="tel:+8801325074535" className="block transition-colors hover:text-[var(--paper)]">
                    +880 1325 074535
                  </a>
                  <a
                    href="https://wa.me/8801325074535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-block text-[12px] text-[rgba(255, 255, 255,0.45)] transition-colors hover:text-[var(--paper)]"
                  >
                    {isBn ? "হোয়াটসঅ্যাপে পরামর্শ" : "WhatsApp consultation"}
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[rgba(255, 255, 255,0.4)]" />
                <address className="not-italic leading-relaxed">
                  <a
                    href="https://maps.google.com/?q=Shaptak+Square,+Old+Dhanmondi+27,+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors hover:text-[var(--paper)]"
                    aria-label={isBn ? "গুগল ম্যাপে কার্যালয় দেখুন" : "View office on Google Maps"}
                  >
                    {isBn ? (
                      <>
                        ২৭ সপ্তক স্কয়ার, লিফট ১১ (লেভেল ১১)
                        <br />
                        রোড ১৬, পুরাতন ধানমন্ডি ২৭
                        <br />
                        ঢাকা ১২০৯, বাংলাদেশ
                      </>
                    ) : (
                      <>
                        27 Shaptak Square, Level 11
                        <br />
                        Road 16, Old Dhanmondi 27
                        <br />
                        Dhaka 1209, Bangladesh
                      </>
                    )}
                  </a>
                </address>
              </li>

              <li className="flex gap-3">
                <Clock size={15} className="mt-0.5 shrink-0 text-[rgba(255, 255, 255,0.4)]" />
                <span>{isBn ? "সোমবার – শনিবার, ১০:০০ – ১৯:০০ (রবিবার বন্ধ)" : "Monday – Saturday, 10:00 – 19:00 (Sunday closed)"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer Notice */}
      <div className="border-t border-[rgba(255, 255, 255,0.08)] py-4">
        <div className="container-site">
          <p className="text-center text-[11.5px] leading-relaxed text-[rgba(255, 255, 255,0.52)]">
            {isBn
              ? "দৃষ্টান্তমূলক তথ্য। শর্ত প্রযোজ্য। বিনিয়োগের পূর্বে অনুগ্রহ করে চুক্তিপত্র (Deed of Agreement) পড়ে নিন।"
              : "Illustrative information. Terms apply. Please read the Deed of Agreement before investing."}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgba(255, 255, 255,0.1)]">
        <div className="container-site flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-[rgba(255, 255, 255,0.4)]">
            {isBn
              ? `© ${year} সানসেট গ্রুপ (সানসেট কুয়াকাটা হোটেল ও রিসোর্ট লি.)। সর্বস্বত্ব সংরক্ষিত।`
              : `© ${year} Sunset Group (Sunset Kuakata Hotel & Resort Ltd.). All rights reserved.`}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11.5px] text-[rgba(255, 255, 255,0.4)] transition-colors hover:text-[rgba(255, 255, 255,0.75)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
