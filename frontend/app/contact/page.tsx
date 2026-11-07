import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Investment Advisory & Office Location",
  description:
    "Get in touch with Sunset Group. Visit our Dhanmondi 27 corporate office or contact our investment advisors directly via phone or WhatsApp.",
};

interface ContactPageProps {
  searchParams: Promise<{ project?: string; package?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-[var(--sunset-grey-700)]">
          Loading contact channels…
        </div>
      }
    >
      <ContactContent
        initialProject={params.project}
        initialPackage={params.package}
      />
    </Suspense>
  );
}