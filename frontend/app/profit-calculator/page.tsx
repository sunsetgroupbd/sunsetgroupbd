import type { Metadata } from "next";
import CalculatorPageContent from "@/components/calculator/CalculatorPageContent";

export const metadata: Metadata = {
  title: "Profit Calculator — Sunset Group Ownership Planning",
  description:
    "Interactive profit and installment calculator for Sunset Group ownership packages. Estimate booking payments, remaining amounts, and annual accommodation days.",
};

export default function ProfitCalculatorPage() {
  return <CalculatorPageContent />;
}