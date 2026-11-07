import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSnippet from "@/components/sections/AboutSnippet";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyInvest from "@/components/sections/WhyInvest";
import WhyKuakata from "@/components/sections/WhyKuakata";
import Timeline from "@/components/sections/Timeline";
import PackagesSection from "@/components/sections/PackagesSection";
import CalculatorTeaser from "@/components/sections/CalculatorTeaser";
import Testimonials from "@/components/sections/Testimonials";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sunset Group — Luxury & Recreation with Ethical Hospitality",
  description:
    "Own a share in Bangladesh's most transparent, Shariah-supervised hospitality projects: Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island. Halal investment with Saf-Kabala deed registration.",
  openGraph: {
    title: "Sunset Group — Luxury & Recreation with Ethical Hospitality",
    description:
      "Bangladesh's premier halal, Shariah-supervised hotel & resort investment company. Build lifetime halal income through deeded ownership packages.",
    url: "https://sunsetgroupbd.com",
    images: [{ url: "/images/kuakata/hero.webp", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ProjectsShowcase />
      <VideoShowcase />
      <WhyInvest />
      <WhyKuakata />
      <Timeline />
      <PackagesSection />
      <CalculatorTeaser />
      <Testimonials />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
