/**
 * UTILITY HELPERS FOR LANGUAGE-AWARE FORMATTING
 * Supports English and Bengali formatting for numbers, currency, and metrics.
 */

/**
 * Converts English digits (0-9) to Bengali digits (০-৯)
 */
export function toBnDigits(num: number | string): string {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(num).replace(/[0-9]/g, (d) => bnDigits[Number(d)]);
}

/**
 * Formats a BDT amount in South Asian grouping (e.g. ৳ 32,00,000 / ৳ ৩২,০০,০০০)
 */
export function formatBDT(amount: number, isBn: boolean): string {
  const formatted = amount.toLocaleString("en-IN");
  return isBn ? `৳ ${toBnDigits(formatted)}` : `৳ ${formatted}`;
}

/**
 * Formats a BDT amount in Lac / Lakh representation (e.g. ৳ 8.00 Lac / ৳ ৮.০০ লাখ)
 */
export function formatBDTLac(amount: number, isBn: boolean): string {
  const lac = (amount / 100000).toFixed(2);
  return isBn ? `৳ ${toBnDigits(lac)} লাখ` : `৳ ${lac} Lac`;
}
