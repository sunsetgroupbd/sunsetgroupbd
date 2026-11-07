import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Ethical Hospitality & Shariah-Supervised Ownership",
  description:
    "Learn about Sunset Group, parent company Sunset Kuakata Hotel & Resort Ltd., registered under the Company Act 1994. Discover our Shariah Supervisory Committee and saf-kabala legal ownership structure.",
};

export default function AboutPage() {
  return <AboutContent />;
}