import type { Metadata } from "next";
import ProjectsContent from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Investment Projects — Sunset Group Portfolio",
  description:
    "Explore Sunset Group's Shariah-compliant projects: Sunset Kuakata Hotel & Resort, The Deck (Cox's Bazar), Sun Care Hospital, Dhaka Fantasy Island, Super Combo Investment, and Mangrove.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}