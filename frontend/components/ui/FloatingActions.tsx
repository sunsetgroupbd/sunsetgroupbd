"use client";

import { Download, MessageCircle } from "lucide-react";
import { downloadBrochure } from "@/lib/api";

export default function FloatingActions() {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5"
      aria-label="Quick contact actions"
    >
      <button
        type="button"
        onClick={() => downloadBrochure()}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/95 px-3.5 py-2 text-[11.5px] font-semibold text-[var(--ink)] shadow-[0_4px_18px_-6px_rgba(14,42,31,0.25)] backdrop-blur transition-colors hover:bg-white"
        aria-label="Download the Sunset Group brochure"
      >
        <Download size={13} />
        Brochure
      </button>

      <a
        href="https://wa.me/8801325074535"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact Sunset Group on WhatsApp"
      >
        <MessageCircle size={23} fill="currentColor" stroke="none" />
      </a>
    </div>
  );
}
