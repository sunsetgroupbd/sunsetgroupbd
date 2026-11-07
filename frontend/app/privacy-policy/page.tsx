import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Sunset Group",
  description:
    "Privacy policy and client data protection practices of Sunset Kuakata Hotel & Resort Ltd.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}