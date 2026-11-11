import type { Metadata } from "next";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Media Gallery — Project Renders, Master Plans & Visuals",
  description:
    "Explore high-resolution visual progress, architectural master plans, and site renders for Sunset Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island, and Mangrove Hotel & Resort.",
  openGraph: {
    title: "Project Visual Portfolio — Sunset Group",
    description:
      "High-resolution architectural renders, master plan drafts and on-ground views across Sunset Group's developments.",
    images: [{ url: "/images/kuakata/hero.webp", width: 1200, height: 630 }],
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
