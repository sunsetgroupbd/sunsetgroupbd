import type { Metadata } from "next";
import SourceOfIncomeContent from "@/components/source-of-income/SourceOfIncomeContent";

export const metadata: Metadata = {
  title: "Source of Income — How Ethical Profit-Sharing Works",
  description:
    "Understand the halal revenue engine behind Sunset Group. From saf-kabala asset ownership to audited commercial operations and annual profit distribution.",
};

export default function SourceOfIncomePage() {
  return <SourceOfIncomeContent />;
}