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

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About the group" },
    { href: "/packages", label: "Ownership packages" },
    { href: "/profit-calculator", label: "Profit calculator" },
    { href: "/source-of-income", label: "Source of income" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy policy" },
    { href: "/terms", label: "Terms & conditions" },
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
                  className="block text-xl font-medium"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Sunset Group
                </span>
                <span className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[rgba(250,249,246,0.55)]">
                  Hospitality &amp; Healthcare
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-[rgba(250,249,246,0.68)]">
              Sunset Kuakata Hotel &amp; Resort Ltd. — a Shariah-supervised hospitality,
              healthcare and leisure group building transparent, deeded ownership for
              long-term investors in Bangladesh.
            </p>

            <div className="mt-7 space-y-1.5 text-[11.5px] text-[rgba(250,249,246,0.45)]">
              <p>RJSC Reg. No. C-189422/2023</p>
              <p>Shariah Supervisory Committee certified</p>
            </div>

            <div className="mt-7 flex gap-2.5">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(250,249,246,0.18)] text-[rgba(250,249,246,0.6)] transition-colors hover:border-[rgba(250,249,246,0.4)] hover:text-[var(--paper)]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-eyebrow mb-5 text-[rgba(250,249,246,0.45)]">Explore</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-[rgba(250,249,246,0.7)] transition-colors hover:text-[var(--paper)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="lg:col-span-3">
            <h3 className="text-eyebrow mb-5 text-[rgba(250,249,246,0.45)]">Portfolio</h3>
            <ul className="space-y-2.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex items-baseline gap-2.5 text-[13.5px] text-[rgba(250,249,246,0.7)] transition-colors hover:text-[var(--paper)]"
                  >
                    <span className="text-[10px] tabular-nums text-[rgba(250,249,246,0.32)]">
                      {project.number}
                    </span>
                    <span>{project.name}</span>
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
            <h3 className="text-eyebrow mb-5 text-[rgba(250,249,246,0.45)]">Contact</h3>
            <ul className="space-y-4 text-[13.5px] text-[rgba(250,249,246,0.7)]">
              <li className="flex gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-[rgba(250,249,246,0.4)]" />
                <span>
                  <a href="tel:+8801325074535" className="block transition-colors hover:text-[var(--paper)]">
                    +880 1325 074535
                  </a>
                  <a
                    href="https://wa.me/8801325074535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-block text-[12px] text-[rgba(250,249,246,0.45)] transition-colors hover:text-[var(--paper)]"
                  >
                    WhatsApp consultation
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[rgba(250,249,246,0.4)]" />
                <address className="not-italic leading-relaxed">
                  27 Shaptak Square, Level 11
                  <br />
                  Road 16, Old Dhanmondi 27
                  <br />
                  Dhaka 1209, Bangladesh
                </address>
              </li>

              <li className="flex gap-3">
                <Clock size={15} className="mt-0.5 shrink-0 text-[rgba(250,249,246,0.4)]" />
                <span>Sunday – Thursday, 9:30 – 18:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Notice */}
      <div className="border-t border-[rgba(250,249,246,0.1)]">
        <div className="container-site py-5">
          <p className="max-w-4xl text-[11.5px] leading-relaxed text-[rgba(250,249,246,0.42)]">
            <span className="font-semibold text-[rgba(250,249,246,0.6)]">Investment notice:</span>{" "}
            Participation in Sunset Group projects carries risk. Past performance does not
            indicate future results. Projected profit-sharing figures are illustrative and
            subject to the terms of the applicable agreement. Independent financial advice is
            recommended.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgba(250,249,246,0.1)]">
        <div className="container-site flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-[rgba(250,249,246,0.4)]">
            © {year} Sunset Group (Sunset Kuakata Hotel &amp; Resort Ltd.). All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11.5px] text-[rgba(250,249,246,0.4)] transition-colors hover:text-[rgba(250,249,246,0.75)]"
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
