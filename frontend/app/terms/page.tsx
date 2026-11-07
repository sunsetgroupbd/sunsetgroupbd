import type { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sunset Group Shareholder Agreement",
  description:
    "Standard terms, investor eligibility, profit-sharing conditions, and governing law of Sunset Kuakata Hotel & Resort Ltd.",
};

export default function TermsPage() {
  return <TermsContent />;
}