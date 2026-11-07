import type { Metadata } from "next";
import ProjectsContent from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Investment Projects — Sunset Group Portfolio",
  description:
    "Explore Sunset Group's Shariah-compliant projects: Sunset Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island, Super Combo Investment, The Deck, and Mangrove.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}