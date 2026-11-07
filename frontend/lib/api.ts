/**
 * API STUB
 * All functions here are frontend stubs.
 * TODO: integrate backend
 */

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  project: string;
  package?: string;
  message?: string;
}

/**
 * Submit an investor inquiry.
 * TODO: replace with real API call to /api/inquiry or backend endpoint.
 */
export async function submitInquiry(data: InquiryPayload): Promise<{ success: boolean }> {
  // TODO: integrate backend — replace below with fetch('/api/inquiry', { method: 'POST', body: JSON.stringify(data) })
  console.log("[TODO: integrate backend] submitInquiry called with:", data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Always succeed in mock mode
  return { success: true };
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

