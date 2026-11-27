/**
 * API STUB
 * All functions here are frontend stubs.
 * TODO: integrate backend
 */

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  project?: string;
  package?: string;
  message?: string;
  source?: string;
}

/**
 * Normalizes Bengali numerals to English digits (০-৯ -> 0-9)
 */
function normalizeDigits(str: string): string {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return str.replace(/[০-৯]/g, (d) => String(bnDigits.indexOf(d)));
}

/**
 * Maps project display name (English or Bangla) to API projectSlug
 */
function mapProjectToSlug(project?: string): string {
  if (!project) return "sunset-group";
  const p = project.toLowerCase();
  if (p.includes("sun care") || p.includes("সান কেয়ার") || p === "sun-care") return "sun-care";
  if (p.includes("fantasy") || p.includes("dfi") || p.includes("ডিএফআই")) return "dfi";
  if (p.includes("mangrove") || p.includes("ম্যানগ্রোভ")) return "mangrove";
  if (p.includes("kuakata") || p.includes("কুয়াকাটা")) return "kuakata-hotel";
  if (p.includes("deck") || p.includes("ডেক")) return "the-deck";
  if (p.includes("combo") || p.includes("কম্বো")) return "super-combo";
  return "sunset-group";
}

/**
 * Submit an investor inquiry to Sunset Kuakata's central NestJS backend.
 * CORS is whitelisted for sunsetgroupbd.com.
 * Source attribution is tagged automatically as "Sunset Group Website".
 */
export async function submitInquiry(
  data: InquiryPayload
): Promise<{ success: boolean; message?: string }> {
  try {
    // Clean and normalize phone number
    let cleanPhone = normalizeDigits(data.phone.trim()).replace(/[\s-]/g, "");
    if (cleanPhone.startsWith("+88")) {
      cleanPhone = cleanPhone.slice(3);
    } else if (cleanPhone.startsWith("88") && cleanPhone.length > 11) {
      cleanPhone = cleanPhone.slice(2);
    }

    const projectSlug = mapProjectToSlug(data.project);

    // Format package information if present
    let combinedMessage = data.message?.trim() || "";
    if (data.package && !combinedMessage.includes(data.package)) {
      combinedMessage = combinedMessage
        ? `[Package: ${data.package}] ${combinedMessage}`
        : `[Package: ${data.package}] Interested in ownership opportunities.`;
    }

    const payload = {
      fullName: data.name.trim(),
      phone: cleanPhone,
      email: data.email?.trim() || undefined,
      projectSlug,
      message: combinedMessage || undefined,
      source: "Sunset Group Website",
    };

    const response = await fetch("https://api.sunsetkuakatahotel.com/api/v1/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const resData = await response.json().catch(() => ({}));

    if (response.ok && (resData.success === true || !("success" in resData))) {
      return {
        success: true,
        message: resData.message || "Inquiry submitted successfully",
      };
    }

    return {
      success: false,
      message:
        resData.message ||
        (Array.isArray(resData.errors) ? resData.errors.join(", ") : "Failed to submit inquiry"),
    };
  } catch (error) {
    console.error("submitInquiry error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error. Please try again.",
    };
  }
}

/**
 * Download brochure — currently points to a placeholder PDF.
 * TODO: upload real brochures to /public/brochures/ and update paths below.
 */
export const BROCHURE_PATHS = {
  dfi: "/brochures/dfi-brochure.pdf",
  "sun-care": "/brochures/sun-care-brochure.pdf",
  general: "/brochures/dfi-brochure.pdf", // real brochure
};

export function downloadBrochure(project?: string): void {
  const path =
    project && BROCHURE_PATHS[project as keyof typeof BROCHURE_PATHS]
      ? BROCHURE_PATHS[project as keyof typeof BROCHURE_PATHS]
      : BROCHURE_PATHS.general;

  const link = document.createElement("a");
  link.href = path;
  link.target = "_blank";
  link.download = path.split("/").pop() || "brochure.pdf";
  link.click();
}

