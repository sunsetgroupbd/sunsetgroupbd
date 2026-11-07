"use client";

import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";
import { useLang } from "@/lib/lang";

interface ContactContentProps {
  initialProject?: string;
  initialPackage?: string;
}

export default function ContactContent({
  initialProject,
  initialPackage,
}: ContactContentProps) {
  const { isBn } = useLang();

  return (
    <div style={{ backgroundColor: "var(--paper)" }}>
      <PageHero
        eyebrow={
          isBn
            ? "সরাসরি পরামর্শ · ঢাকা কর্পোরেট কার্যালয়"
            : "Direct consultation · Dhaka corporate office"
        }
        title={
          isBn
            ? "সানসেট গ্রুপের সাথে যোগাযোগ করুন।"
            : "Connect with Sunset Group."
        }
        description={
          isBn
            ? "সাফ-কবালা নিবন্ধন, শরীয়া সনদ বা কোনো নির্দিষ্ট প্রকল্পের অগ্রগতি সম্পর্কে জানতে চান? আমাদের সিনিয়র বিনিয়োগ উপদেষ্টারা আপনাকে সার্বিক সহায়তা করতে প্রস্তুত।"
            : "Questions about saf-kabala registration, Shariah certification or a specific project milestone? Our advisers are here to guide you."
        }
        align="center"
      />

      <section className="section-gap" style={{ backgroundColor: "var(--paper)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={isBn ? "সরাসরি যোগাযোগ মাধ্যম" : "Direct channels"}
                title={
                  isBn
                    ? "বিনিয়োগ উপদেষ্টার সাথে কথা বলুন"
                    : "Speak with an investment specialist"
                }
                description={
                  isBn
                    ? "আমাদের ধানমন্ডি প্রধান কার্যালয়ে সরাসরি পরামর্শ, ব্যক্তিগত প্রসপেক্টাস পর্যালোচনা এবং দলিলের তথ্য যাচাইয়ের জন্য স্বাগত।"
                    : "Our advisers are available for in-person consultations, private prospectus walkthroughs and deed verification at our Dhanmondi headquarters."
                }
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
                      {isBn ? "টেলিফোন ও হটলাইন" : "Telephone & hotline"}
                    </span>
                    <span className="mt-0.5 block text-[14px] font-semibold text-[var(--ink)]">
                      +880 1325 074535
                    </span>
                    <span className="mt-0.5 block text-[11.5px] text-[var(--sunset-grey-700)]">
                      {isBn
                        ? "রবিবার – বৃহস্পতিবার, সকাল ৯:৩০ – সন্ধ্যা ৬:৩০"
                        : "Sunday – Thursday, 9:30 am – 6:30 pm BST"}
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
                      {isBn ? "হোয়াটসঅ্যাপ পরামর্শ" : "WhatsApp consultation"}
                    </span>
                    <span className="mt-0.5 block text-[14px] font-semibold text-[var(--ink)]">
                      wa.me/8801325074535
                    </span>
                    <span className="mt-0.5 block text-[11.5px] text-[var(--sunset-grey-700)]">
                      {isBn
                        ? "প্রবাসী ও অনাবাসী বিনিয়োগকারীদের দ্রুত রেসপন্স"
                        : "Quick responses for overseas and non-resident investors"}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-[16px] border border-[var(--line)] bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(173,90,67,0.09)] text-[var(--sunset-red)]">
                    <MapPin size={17} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-[10.5px] uppercase tracking-[0.1em] text-[var(--sunset-grey-700)]">
                        {isBn ? "কর্পোরেট প্রধান কার্যালয়" : "Corporate headquarters"}
                      </p>
                      <a
                        href="https://maps.google.com/?q=Shaptak+Square,+Dhanmondi+27,+Dhaka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--sunset-green-700)] hover:underline"
                      >
                        <span>{isBn ? "গুগল ম্যাপ" : "Google Map"}</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                    <address className="mt-1 text-[13px] not-italic leading-relaxed text-[var(--ink)]">
                      {isBn ? (
                        <>
                          ২৭ সপ্তক স্কয়ার, লিফট-১১ (লেভেল-১১),
                          <br />
                          প্লট-২ (নতুন), রোড ১৬, পুরাতন ধানমন্ডি ২৭,
                          <br />
                          ধানমন্ডি, ঢাকা-১২০৯, বাংলাদেশ
                        </>
                      ) : (
                        <>
                          27 Shaptak Square, Lift-11 (Level-11),
                          <br />
                          Plot-2 (New), Road 16, Old Dhanmondi 27,
                          <br />
                          Dhanmondi, Dhaka-1209, Bangladesh
                        </>
                      )}
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[16px] bg-[var(--sand)] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Clock size={14} className="text-[var(--sunset-green-700)]" />
                  <p className="text-[12px] font-semibold text-[var(--ink)]">
                    {isBn ? "ধানমন্ডি ২৭ হাব" : "Dhanmondi 27 hub"}
                  </p>
                </div>
                <p className="text-[12px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn
                    ? "রোড ১৬-এ চমৎকার যোগাযোগ ব্যবস্থা, গ্রাহকদের জন্য ডেডিকেটেড পার্কিং এবং লেভেল ১১-এ দ্রুত লিফট সুবিধা।"
                    : "Conveniently located on Road 16 with dedicated guest parking and lift access to Level 11."}
                </p>
              </div>

              <div className="mt-5 flex items-start gap-2.5 rounded-[16px] border border-[var(--line)] p-5">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[var(--sunset-green-700)]" />
                <p className="text-[11.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn
                    ? "প্রতিটি আলোচনা কঠোরভাবে গোপনীয় ও শরীয়া-তত্ত্বাবধানে পরিচালিত। আমরা কখনোই আপনার যোগাযোগের তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না।"
                    : "Every consultation is confidential and Shariah-supervised. We never share your phone number with third parties."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm defaultProject={initialProject} defaultPackage={initialPackage} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section
        className="pb-20 md:pb-28"
        style={{ backgroundColor: "var(--paper)" }}
      >
        <div className="container-site">
          <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-white shadow-[0_12px_45px_-24px_rgba(18,54,42,0.15)]">
            <div className="flex flex-col justify-between gap-4 border-b border-[var(--line)] p-6 sm:flex-row sm:items-center md:px-8">
              <div>
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--sunset-red)]">
                  <MapPin size={13} />
                  {isBn ? "কার্যালয়ের অবস্থান" : "Office location"}
                </span>
                <h3 className="text-display-xs mt-1 text-[var(--sunset-green-900)]">
                  {isBn
                    ? "সপ্তক স্কয়ার, ধানমন্ডি ২৭ — গুগল ম্যাপস ভিউ"
                    : "Shaptak Square, Dhanmondi 27 — Google Maps View"}
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Shaptak+Square,+Old+Dhanmondi+27,+Dhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline shrink-0 gap-1.5 text-[12.5px]"
              >
                <span>{isBn ? "গুগল ম্যাপে ডিরেকশন দেখুন" : "Get directions on Google Maps"}</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="relative aspect-[16/9] w-full min-h-[380px] md:min-h-[460px] bg-[var(--sand)]">
              <iframe
                title="Sunset Group Dhaka Headquarters - Shaptak Square"
                src="https://maps.google.com/maps?q=Shaptak+Square,+Old+Dhanmondi+27,+Dhaka,+Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
