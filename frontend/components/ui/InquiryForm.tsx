"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2, ShieldCheck } from "lucide-react";
import { submitInquiry, InquiryPayload } from "@/lib/api";
import { useLang } from "@/lib/lang";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^(\+?88)?01[3-9]\d{8}$/, "Enter a valid Bangladeshi phone number (e.g. 017XXXXXXXX)"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  project: z.string().min(1, "Please select a project of interest"),
  package: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  defaultProject?: string;
  defaultPackage?: string;
}

export default function InquiryForm({ defaultProject, defaultPackage }: InquiryFormProps) {
  const { t, isBn } = useLang();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      project: defaultProject || "",
      package: defaultPackage || "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setServerError(null);
      const payload: InquiryPayload = {
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        project: data.project,
        package: data.package || undefined,
        message: data.message || undefined,
      };

      const result = await submitInquiry(payload);
      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setServerError(
          "We could not send your enquiry. Please try again or reach us directly on WhatsApp."
        );
      }
    } catch {
      setServerError(
        "An unexpected error occurred. Please contact us by phone or WhatsApp."
      );
    }
  };

  return (
    <div className="rounded-[20px] border border-[var(--line)] bg-white p-6 md:p-9">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="py-12 text-center"
          >
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(18,54,42,0.07)] text-[var(--sunset-green-700)]">
              <CheckCircle2 size={30} strokeWidth={1.5} />
            </span>
            <h3 className="text-display-sm mb-3 text-[var(--sunset-green-900)]">
              {isBn ? "আবেদন গ্রহণ করা হয়েছে" : "Enquiry received"}
            </h3>
            <p className="mx-auto mb-8 max-w-md text-[13px] leading-relaxed text-[var(--sunset-grey-700)]">
              {t.contact.success ||
                (isBn
                  ? "সানসেট গ্রুপে আগ্রহ প্রকাশের জন্য ধন্যবাদ। একজন বিনিয়োগ উপদেষ্টা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবেন।"
                  : "Thank you for your interest in Sunset Group. An investment adviser will contact you within 24 hours.")}
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="btn btn-outline"
            >
              {isBn ? "আরেকটি আবেদন পাঠান" : "Submit another enquiry"}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-5"
            noValidate
          >
            <div className="mb-7">
              <h2 className="text-display-sm mb-2 text-[var(--sunset-green-900)]">
                {isBn ? "পরামর্শের জন্য আবেদন করুন" : "Request a private consultation"}
              </h2>
              <p className="text-[12.5px] leading-relaxed text-[var(--sunset-grey-700)]">
                {isBn
                  ? "কিছু প্রাথমিক তথ্য দিন, আমাদের উপদেষ্টা আপনার জন্য বিস্তারিত মালিকানা প্রস্তাবনা প্রস্তুত করবেন।"
                  : "Share a few details and an adviser will prepare a tailored ownership brief."}
              </p>
            </div>

            <div>
              <label htmlFor="name" className="form-label">
                {t.contact.name} *
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder={isBn ? "উদাঃ মোঃ ফয়জুল বারী" : "e.g. Md. Faizul Bari"}
                {...register("name")}
              />
              {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="form-label">
                  {t.contact.phone} *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  placeholder={t.contact.phonePlaceholder || "01XXXXXXXXX"}
                  {...register("phone")}
                />
                {errors.phone && <p className="form-error">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="yourname@domain.com"
                  {...register("email")}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="project" className="form-label">
                  {t.contact.project} *
                </label>
                <select id="project" className="form-input" {...register("project")}>
                  <option value="">{isBn ? "প্রকল্প নির্বাচন করুন" : "Select project"}</option>
                  {t.contact.projectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.project && <p className="form-error">{errors.project.message}</p>}
              </div>

              <div>
                <label htmlFor="package" className="form-label">
                  {t.contact.package}
                </label>
                <select id="package" className="form-input" {...register("package")}>
                  <option value="">{isBn ? "প্যাকেজ নির্বাচন করুন (ঐচ্ছিক)" : "Select package (optional)"}</option>
                  {t.contact.packageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                placeholder={
                  isBn
                    ? "আপনার বিনিয়োগের দিগন্ত, কোনো প্রশ্ন বা সাইট পরিদর্শনের প্রয়োজনীয়তা সম্পর্কে জানান…"
                    : "Tell us about your investment horizon, questions or site-visit requirements…"
                }
                {...register("message")}
              />
            </div>

            {serverError && (
              <div
                className="rounded-[10px] px-4 py-3 text-[12px]"
                style={{
                  backgroundColor: "rgba(173,90,67,0.08)",
                  color: "var(--sunset-red)",
                  borderLeft: "3px solid var(--sunset-red)",
                }}
              >
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  {isBn ? "পাঠানো হচ্ছে…" : "Sending…"}
                </>
              ) : (
                <>
                  <Send size={14} />
                  {t.contact.submit}
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-[10.5px] leading-relaxed text-[var(--sunset-grey-700)]">
              <ShieldCheck size={12} className="shrink-0 text-[var(--sunset-green-700)]" />
              Shariah-supervised, confidential consultation. We never share your details.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
