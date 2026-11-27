"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Loader2, ShieldCheck } from "lucide-react";
import { submitInquiry } from "@/lib/api";
import { useLang } from "@/lib/lang";

const STORAGE_DISMISSED_KEY = "sg_lead_modal_dismissed_at";
const STORAGE_SUBMITTED_KEY = "sg_lead_modal_submitted";
const POPUP_DELAY_MS = 3000; // 3 seconds after opening
const DISMISS_SUPPRESSION_HOURS = 24;

export default function InvestmentLeadModal() {
  const { isBn } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProject, setSelectedProject] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // Check if user already submitted or dismissed recently
    try {
      const isSubmitted = localStorage.getItem(STORAGE_SUBMITTED_KEY);
      if (isSubmitted) return;

      const dismissedAt = localStorage.getItem(STORAGE_DISMISSED_KEY);
      if (dismissedAt) {
        const timeDiff = Date.now() - parseInt(dismissedAt, 10);
        if (timeDiff < DISMISS_SUPPRESSION_HOURS * 60 * 60 * 1000) {
          return;
        }
      }
    } catch {
      // LocalStorage access might fail in private browsing mode
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_DISMISSED_KEY, Date.now().toString());
    } catch {
      // Ignore storage error
    }
  };

  const projectOptions = isBn
    ? [
        { id: "all", label: "সব প্রকল্প" },
        { id: "sun-care", label: "সান কেয়ার হাসপাতাল" },
        { id: "kuakata-hotel", label: "সানসেট কুয়াকাটা" },
        { id: "dfi", label: "ঢাকা ফ্যান্টাসি আইল্যান্ড" },
        { id: "the-deck", label: "দ্য ডেক কক্সবাজার" },
      ]
    : [
        { id: "all", label: "All Projects" },
        { id: "sun-care", label: "Sun Care Hospital" },
        { id: "kuakata-hotel", label: "Sunset Kuakata" },
        { id: "dfi", label: "Dhaka Fantasy Island" },
        { id: "the-deck", label: "The Deck Cox's Bazar" },
      ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (trimmedName.length < 2) {
      setErrorMsg(
        isBn ? "অনুগ্রহ করে আপনার পুরো নাম লিখুন।" : "Please enter your full name."
      );
      return;
    }

    // Check bangla digits or standard mobile format
    const englishPhone = trimmedPhone.replace(/[০-৯]/g, (d) =>
      String("০১২৩৪৫৬৭৮৯".indexOf(d))
    );
    const phoneRegex = /^(\+?88)?01[3-9]\d{8}$/;
    if (!phoneRegex.test(englishPhone.replace(/[\s-]/g, ""))) {
      setErrorMsg(
        isBn
          ? "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।"
          : "Please enter a valid 11-digit mobile number (e.g. 017XXXXXXXX)."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const projectLabel =
        projectOptions.find((p) => p.id === selectedProject)?.label || "All Projects";

      const res = await submitInquiry({
        name: trimmedName,
        phone: trimmedPhone,
        project: selectedProject === "all" ? "sunset-group" : selectedProject,
        message: `[Quick Opening Popup] Interested in: ${projectLabel}`,
        source: "Sunset Group Website",
      });

      if (res.success) {
        setIsSuccess(true);
        try {
          localStorage.setItem(STORAGE_SUBMITTED_KEY, "true");
        } catch {
          // Ignore
        }
        setTimeout(() => {
          setIsOpen(false);
        }, 3200);
      } else {
        setErrorMsg(
          res.message ||
            (isBn
              ? "আবেদনটি জমা দেওয়া যায়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।"
              : "Failed to submit. Please try again.")
        );
      }
    } catch {
      setErrorMsg(
        isBn
          ? "নেটওয়ার্ক সমস্যা দেখা দিয়েছে। দয়া করে আবার চেষ্টা করুন।"
          : "Network error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#081811]/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-[24px] border border-white/20 bg-white p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(8,24,17,0.45)] z-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[var(--sunset-grey-700)] transition-colors hover:bg-black/10 hover:text-[var(--ink)]"
              aria-label={isBn ? "পপআপ বন্ধ করুন" : "Close popup"}
            >
              <X size={18} />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(18,54,42,0.08)] text-[var(--sunset-green-700)]">
                  <CheckCircle2 size={36} strokeWidth={1.7} />
                </div>
                <h3 className="text-display-sm mb-2 text-[var(--sunset-green-900)]">
                  {isBn ? "ধন্যবাদ! আবেদন সফল হয়েছে" : "Thank you! Enquiry received"}
                </h3>
                <p className="mx-auto max-w-sm text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
                  {isBn
                    ? "সানসেট গ্রুপের বিনিয়োগ উপদেষ্টা শীঘ্রই আপনার সাথে ফোনে যোগাযোগ করে বিস্তারিত ব্রোশার ও তথ্য প্রদান করবেন।"
                    : "A senior investment adviser will contact you shortly with bespoke brochures and ownership details."}
                </p>
              </motion.div>
            ) : (
              <div>
                {/* Header Badge */}
                <div className="mb-3 inline-flex items-center rounded-full bg-[rgba(18,54,42,0.08)] px-3 py-1 text-[11px] font-semibold text-[var(--sunset-green-800)]">
                  <span>
                    {isBn
                      ? "হালাল বিনিয়োগ ও যৌথ মালিকানা"
                      : "Halal Investment & Shared Ownership"}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-display-sm mb-2 text-[var(--sunset-green-900)]">
                  {isBn
                    ? "বিনিয়োগে আগ্রহী? বিনামূল্যে বিবরণী পান"
                    : "Interested in ethical investments?"}
                </h2>
                <p className="text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)] mb-5">
                  {isBn
                    ? "আপনার তথ্য দিন, আমাদের সিনিয়র উপদেষ্টা আপনাকে প্রকল্পভিত্তিক হালাল মুনাফার বিস্তারিত বিবরণী পাঠিয়ে দেবেন।"
                    : "Leave your contact details to receive full project brochures and verified profit projection."}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="mb-1.5 block text-[11.5px] font-semibold text-[var(--ink)]">
                      {isBn ? "আপনার পূর্ণ নাম" : "Full Name"} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isBn ? "উদাঃ মোঃ ফয়জুল বারী" : "e.g. Md. Faizul Bari"}
                      className="form-input text-sm py-2.5"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="mb-1.5 block text-[11.5px] font-semibold text-[var(--ink)]">
                      {isBn ? "মোবাইল নম্বর (বাংলাদেশ)" : "Phone Number (Bangladesh)"} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="form-input text-sm py-2.5"
                    />
                  </div>

                  {/* Project Selector Chips */}
                  <div>
                    <label className="mb-2 block text-[11.5px] font-semibold text-[var(--ink)]">
                      {isBn ? "আগ্রহী প্রকল্প (ঐচ্ছিক)" : "Project of Interest (Optional)"}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {projectOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedProject(opt.id)}
                          className={`rounded-full px-3 py-1 text-[11.5px] font-medium transition-all ${
                            selectedProject === opt.id
                              ? "bg-[var(--sunset-green-900)] text-white shadow-sm"
                              : "border border-[var(--line-strong)] bg-white text-[var(--sunset-grey-700)] hover:bg-[var(--ash)]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="rounded-lg bg-red-50 p-2.5 text-[12px] text-red-600 border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full py-3 justify-center text-sm shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          {isBn ? "পাঠানো হচ্ছে…" : "Sending…"}
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          {isBn ? "বিনিয়োগ তথ্য গ্রহণ করুন" : "Get Free Ownership Details"}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Secondary Dismiss Action */}
                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-[12px] text-[var(--sunset-grey-600)] hover:text-[var(--ink)] underline-offset-2 hover:underline transition-colors"
                    >
                      {isBn ? "এখন নয়, পরে দেখব" : "Not now, explore first"}
                    </button>
                  </div>

                  {/* Trust Footer */}
                  <div className="flex items-center justify-center gap-1.5 text-center text-[10.5px] text-[var(--sunset-grey-600)] pt-1 border-t border-[var(--line)]">
                    <ShieldCheck size={12} className="text-[var(--sunset-green-700)] shrink-0" />
                    <span>
                      {isBn
                        ? "সাফ-কবালা দলিল · শরীয়া সুপারভাইজরি বোর্ড · আপনার তথ্য গোপনীয়"
                        : "Saf-kabala deeded · Shariah supervised · 100% confidential"}
                    </span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
