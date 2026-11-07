import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Serif_Bengali,
  Hind_Siliguri,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import { LangProvider } from "@/lib/lang";

/* ── Viewport & Theme Color ─────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#12362A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── Typography (Self-hosted Google Fonts with fallback) ───── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ── Global Metadata & SEO ─────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://sunsetgroupbd.com"),
  title: {
    default: "Sunset Group — Luxury & Recreation with Ethical Hospitality",
    template: "%s | Sunset Group",
  },
  description:
    "Sunset Group (Sunset Kuakata Hotel & Resort Ltd.) — Bangladesh's premier halal, Shariah-supervised hospitality & healthcare investment enterprise. Deeded saf-kabala ownership in 5-star Kuakata Resort, Sun Care Hospital, and Dhaka Fantasy Island.",
  keywords: [
    "Sunset Group",
    "Sunset Group Bangladesh",
    "sunsetgroupbd.com",
    "Sunset Kuakata Hotel & Resort",
    "Kuakata hotel investment",
    "halal investment Bangladesh",
    "Shariah compliant hospitality",
    "Sun Care Hospital Mohammadpur",
    "Dhaka Fantasy Island",
    "hotel ownership packages",
    "saf-kabala registration",
    "Musharakah investment",
    "ethical investment Bangladesh",
  ],
  authors: [{ name: "Sunset Group", url: "https://sunsetgroupbd.com" }],
  creator: "Sunset Kuakata Hotel & Resort Ltd.",
  publisher: "Sunset Group Bangladesh",
  applicationName: "Sunset Group Portal",
  alternates: {
    canonical: "https://sunsetgroupbd.com",
    languages: {
      "bn-BD": "https://sunsetgroupbd.com",
      "en-US": "https://sunsetgroupbd.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: "https://sunsetgroupbd.com",
    siteName: "Sunset Group",
    title: "Sunset Group — Luxury & Recreation with Ethical Hospitality",
    description:
      "Own deeded, saf-kabala registered equity in Bangladesh's most ethical, Shariah-supervised hospitality and healthcare projects.",
    images: [
      {
        url: "/images/kuakata/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sunset Kuakata Hotel & Resort — Sunset Group Bangladesh",
      },
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Sunset Group Official Crest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunset Group — Luxury & Recreation with Ethical Hospitality",
    description:
      "Halal, Shariah-supervised hospitality & real-estate investments in Bangladesh. Saf-kabala registration.",
    images: ["/images/kuakata/hero.jpg"],
    creator: "@sunsetkuakatahotel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── JSON-LD Structured Data Schema ─────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sunsetgroupbd.com/#organization",
      name: "Sunset Group",
      legalName: "Sunset Kuakata Hotel & Resort Ltd.",
      url: "https://sunsetgroupbd.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://sunsetgroupbd.com/#logo",
        url: "https://sunsetgroupbd.com/Sunset-Group-Logo.png",
        contentUrl: "https://sunsetgroupbd.com/Sunset-Group-Logo.png",
        caption: "Sunset Group Logo",
      },
      image: "https://sunsetgroupbd.com/web-app-manifest-512x512.png",
      description:
        "Sunset Group is an ethical, Shariah-supervised hospitality and healthcare investment enterprise in Bangladesh offering saf-kabala deeded ownership packages.",
      telephone: "+8801325074535",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "27 Shaptak Square, Lift-11 (Level-11), Plot-2 (New), Road 16, Old Dhanmondi 27",
        addressLocality: "Dhanmondi, Dhaka",
        postalCode: "1209",
        addressCountry: "BD",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+8801325074535",
          contactType: "customer service",
          areaServed: "BD",
          availableLanguage: ["Bengali", "English"],
        },
      ],
      sameAs: [
        "https://facebook.com/sunsetkuakatahotel",
        "https://instagram.com/sunsetkuakatahotel",
        "https://youtube.com/@sunsetkuakatahotel",
        "https://bd.linkedin.com/in/sunsetkuakatahotel",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sunsetgroupbd.com/#website",
      url: "https://sunsetgroupbd.com",
      name: "Sunset Group Bangladesh",
      publisher: {
        "@id": "https://sunsetgroupbd.com/#organization",
      },
      inLanguage: ["bn-BD", "en-US"],
    },
  ],
};

/* ── Root Layout ────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${cormorant.variable} ${manrope.variable} ${notoSerifBengali.variable} ${hindSiliguri.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col antialiased">
        {/* Skip to content (Accessibility standard) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <LangProvider>
          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
          <FloatingActions />
        </LangProvider>
      </body>
    </html>
  );
}
