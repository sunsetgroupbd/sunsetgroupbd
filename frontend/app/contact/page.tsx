import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us — Investment Advisory & Office Location",
  description:
    "Get in touch with Sunset Group. Visit our Dhanmondi 27 corporate office or contact our investment advisors directly via phone or WhatsApp.",
};

interface ContactPageProps {
  searchParams: Promise<{ project?: string; package?: string }>;
}

async function ContactContent({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="Direct channels"
          title="Speak with an investment specialist"
          description="Our advisers are available for in-person consultations, private prospectus walkthroughs and deed verification at our Dhanmondi headquarters."
          className="mb-9"
        />

        <div className="space-y-3">
          <a
            href="tel:+8801325074535"
            className="flex items-start gap-4 rounded-[16px] border border-[var(--line)] bg-white p-5 transition-colors hover:border-[var(--line-strong)]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-900)]">
              <Phone size={17} />
            </span>
            <span>
              <span className="block text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                Telephone &amp; hotline
              </span>
              <span className="mt-0.5 block text-[14px] font-semibold text-[var(--ink)]">
                +880 1325 074535
              </span>
              <span className="mt-0.5 block text-[11.5px] text-[var(--sunset-grey-700)]">
                Sunday – Thursday, 9:30 am – 6:30 pm BST
              </span>
            </span>
          </a>

          <a
            href="https://wa.me/8801325074535"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-[16px] border border-[var(--line)] bg-white p-5 transition-colors hover:border-[var(--line-strong)]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(37,211,102,0.1)] text-[#1da851]">
              <MessageCircle size={17} />
            </span>
            <span>
              <span className="block text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                WhatsApp consultation
              </span>
              <span className="mt-0.5 block text-[14px] font-semibold text-[var(--ink)]">
                wa.me/8801325074535
              </span>
              <span className="mt-0.5 block text-[11.5px] text-[var(--sunset-grey-700)]">
                Quick responses for overseas and non-resident investors
              </span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-[16px] border border-[var(--line)] bg-white p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(173,90,67,0.09)] text-[var(--sunset-red)]">
              <MapPin size={17} />
            </span>
            <div>
              <p className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                Corporate headquarters
              </p>
              <address className="mt-0.5 text-[13px] not-italic leading-relaxed text-[var(--ink)]">
                27 Shaptak Square, Lift-11 (Level-11),
                <br />
                Plot-2 (New), Road 16, Old Dhanmondi 27,
                <br />
                Dhanmondi, Dhaka-1209, Bangladesh
              </address>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[16px] bg-[var(--sand)] p-5">
          <div className="mb-2 flex items-center gap-2">
            <Clock size={14} className="text-[var(--sunset-green-700)]" />
            <p className="text-[12px] font-semibold text-[var(--ink)]">Dhanmondi 27 hub</p>
          </div>
          <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
            Conveniently located on Road 16 with dedicated guest parking and lift access to
            Level 11.
          </p>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-[16px] border border-[var(--line)] p-5">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
          <p className="text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
            Every consultation is confidential and Shariah-supervised. We never share your phone
            number with third parties.
          </p>
        </div>
      </div>

      <div className="lg:col-span-7">
        <InquiryForm defaultProject={params.project} defaultPackage={params.package} />
      </div>
    </div>
  );
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow="Direct consultation · Dhaka corporate office"
        title="Connect with Sunset Group."
        description="Questions about saf-kabala registration, Shariah certification or a specific project milestone? Our advisers are here to guide you."
        align="center"
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <Suspense
            fallback={
              <div className="py-20 text-center text-sm text-[var(--sunset-grey-700)]">
                Loading contact channels…
              </div>
            }
          >
            <ContactContent searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
