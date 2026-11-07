import type { Metadata } from "next";
import PackagesContent from "@/components/packages/PackagesContent";

export const metadata: Metadata = {
  title: "Ownership Packages — Platinum, Gold, Silver & Bronze",
  description:
    "Compare Sunset Group's halal ownership packages. Transparent pricing in BDT, booking money, profit periods, and saf-kabala registration.",
};

export default function PackagesPage() {
  return <PackagesContent />;
}