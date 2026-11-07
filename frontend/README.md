# Sunset Group Bangladesh — Corporate Frontend

> **"Luxury & Recreation with Ethical Hospitality"**  
> Corporate Web Portal: [sunsetgroupbd.com](https://sunsetgroupbd.com)  
> Parent Company: **Sunset Kuakata Hotel & Resort Ltd.** (Registered under Company Act 1994)  
> Governance: **Shariah Supervisory Committee** · Ownership: **Saf-Kabala Legal Registration**

---

## Table of Contents
1. [Project Overview & Architecture](#project-overview--architecture)
2. [Design Tokens & Solid-Color System](#design-tokens--solid-color-system)
3. [Running the Application](#running-the-application)
4. [Folder Map](#folder-map)
5. [Required Image Assets & Specifications](#required-image-assets--specifications)
6. [Backend Integration Points (TODOs)](#backend-integration-points-todos)
7. [How to Add a New Project](#how-to-add-a-new-project)
8. [Internationalization (Bilingual EN/BN)](#internationalization-bilingual-enbn)
9. [Legal & Compliance Notice](#legal--compliance-notice)

---

## 1. Project Overview & Architecture

This is a production-grade **Next.js (App Router) + TypeScript + Tailwind CSS** frontend built for **Sunset Group**. The platform showcases the company's shared-ownership hospitality, healthcare, and eco-tourism projects with a strict **solid-color, minimal, quiet luxury** aesthetic (zero gradients, zero box-shadows, 1px hairline borders).

### Key Technical Specs
- **Next.js**: 16.x App Router with Server Components by default
- **Motion**: Framer Motion (`cubic-bezier(0.22, 1, 0.36, 1)`, scroll reveals, layout animations)
- **Forms & Validation**: `react-hook-form` + `zod`
- **Typography**: Self-hosted/Google display serif (*Cormorant Garamond*), UI sans (*Manrope*), and Bengali fonts (*Noto Serif Bengali*, *Hind Siliguri*)
- **Icons**: Lucide icons (stroke width: 1.5px) + custom inline brand SVGs
- **SEO**: Full metadata, OpenGraph, JSON-LD Organization & Hotel schemas, `sitemap.ts`, `robots.ts` (with `index: true, follow: true`)

---

## 2. Design Tokens & Solid-Color System

The brand palette is derived strictly from the Sunset Group wordmark and architectural motifs:

| Token | Hex | Role | Usage |
|---|---|---|---|
| `--sunset-green-900` | `#0F4D2A` | Deep Wordmark Green | Primary dark sections, primary headings, footer, brand identity |
| `--sunset-green-600` | `#1E8A3C` | Accent Green | Eyebrows, trust badges, verified checkmarks |
| `--sunset-red` | `#E5312B` | Sun Red | High-priority CTAs, key numerical highlights (approx. 5% surface) |
| `--sunset-blue-800` | `#12406E` | Wave Blue | Maritime motifs, secondary dark accents |
| `--sunset-blue-500` | `#2B7BB9` | Mid Wave Blue | Wave SVG layers, secondary accents |
| `--sunset-grey-700` | `#5C6168` | Building Grey | Secondary body text, structural silhouettes |
| `--ink` | `#0E1512` | Deep Ink | Text on light backgrounds |
| `--paper` | `#FAF8F3` | Warm Off-White | Primary canvas background |
| `--sand` | `#EFEADF` | Warm Sand | Alternating section backgrounds, card containers |
| `--white` | `#FFFFFF` | Pure White | Elevated card faces |

> ⚠️ **Design Invariant:** Never apply `box-shadow` or CSS gradients (`linear-gradient`, `radial-gradient`). Elevation is established exclusively through solid tone alternation, negative space, and hairline 1px borders (`rgba(14,21,18,0.12)`).

---

## 3. Running the Application

### Prerequisites
- Node.js 18.17+ or 20+
- npm (or pnpm / yarn)

### Installation
```bash
cd frontend
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portal.

### Production Build
```bash
npm run build
npm run start
```

---

## 4. Folder Map

```
frontend/
├── app/
│   ├── about/                    # Company story, Shariah board, registrations
│   ├── blogs/                    # Market insights & research articles
│   │   └── [slug]/               # Dynamic blog post template
│   ├── contact/                  # Contact channels, office map, inquiry form
│   ├── gallery/                  # Filterable project gallery with lightbox
│   ├── packages/                 # Full ownership packages comparison table
│   ├── privacy-policy/           # Data protection & investor privacy terms
│   ├── profit-calculator/        # Interactive unit & installment calculator
│   ├── projects/                 # Flagship projects portfolio overview
│   │   └── [slug]/               # Dynamic project page (generateStaticParams)
│   ├── source-of-income/         # 5-step lifecycle & commercial revenue streams
│   ├── terms/                    # Legal shareholding terms & conditions
│   ├── favicon.ico
│   ├── globals.css               # Design tokens, button primitives & utility classes
│   ├── layout.tsx                # Root layout, fonts, JSON-LD & LangProvider
│   ├── not-found.tsx             # Branded 404 page
│   ├── page.tsx                  # 12-section editorial home page
│   ├── robots.ts                 # Crawler directives
│   └── sitemap.ts                # XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with lang switch & mobile overlay
│   │   └── Footer.tsx            # Corporate footer with legal notice & contacts
│   ├── sections/                 # Home page section modules
│   │   ├── AboutSnippet.tsx      # Intro with arch mask & count-up metrics
│   │   ├── CalculatorTeaser.tsx  # Compact calculator card linking to full tool
│   │   ├── FAQSection.tsx        # Smooth animated accordion
│   │   ├── FinalCTA.tsx          # Full-bleed closing action block
│   │   ├── GalleryPreview.tsx    # Asymmetric 5-image masonry teaser
│   │   ├── HeroSection.tsx       # Parallax hero with SVG motif & trust strip
│   │   ├── PackagesSection.tsx   # 4 ownership cards (Platinum highlighted)
│   │   ├── ProjectsShowcase.tsx  # Alternating editorial project features
│   │   ├── Testimonials.tsx      # Shareholder reviews with slider controls
│   │   ├── Timeline.tsx          # 2023 → 2029 animated progress rail
│   │   ├── WhyInvest.tsx         # 6-card grid with custom line icons
│   │   └── WhyKuakata.tsx        # Dark green section with infrastructure highlights
│   ├── svg/
│   │   ├── index.tsx             # SunArc, WaveBand, TowerMark, PalmMark, etc.
│   │   └── SocialIcons.tsx       # 1.5px stroke Facebook, Instagram, YouTube, LinkedIn
│   └── ui/
│       ├── CountUp.tsx           # Intersection-observer driven numeric counter
│       ├── FloatingActions.tsx   # Floating WhatsApp button & brochure download
│       ├── InquiryForm.tsx       # Zod-validated react-hook-form component
│       └── ProfitCalculator.tsx  # Interactive multi-unit package calculator
├── content/
│   ├── bn.ts                     # Bengali copy dictionary
│   └── en.ts                     # English copy dictionary
├── data/
│   ├── blog.ts                   # Blog posts schema & typed mock articles
│   ├── calculator.config.ts      # Calculator package pricing & rate configs
│   ├── faqs.ts                   # Categorized questions & answers
│   ├── gallery.ts                # Image catalog & category definitions
│   ├── packages.ts               # Platinum, Gold, Silver, Bronze package specs
│   ├── projects.ts               # Single source of truth for all projects
│   └── testimonials.ts           # Shareholder testimonials & credentials
├── lib/
│   ├── api.ts                    # Backend integration stubs (submitInquiry, downloadBrochure)
│   └── lang.tsx                  # React Context for bilingual switching
└── public/
    └── images/                   # Local image assets copied from project resources
        ├── dfi/                  # Dhaka Fantasy Island renders
        ├── kuakata/              # Sunset Kuakata Hotel & Resort renders
        ├── mangrove/             # Mangrove Eco-Resort renders
        ├── sun-care/             # Sun Care Hospital renders & exterior photos
        └── the-deck/             # The Deck lifestyle venue renders
```

---

## 5. Required Image Assets & Specifications

All project imagery has been staged into `/public/images/`. When replacing placeholder renders with high-resolution photography, adhere to the following dimensions and aspect ratios:

| Target Location | Recommended Dimensions | Aspect Ratio | Format | File Name |
|---|---|---|---|---|
| **Kuakata Hero Banner** | `1920 × 1080 px` | 16:9 | WebP / JPEG | `/public/images/kuakata/hero.jpg` |
| **Arch-Mask Featured Image** | `800 × 1066 px` | 3:4 | WebP / JPEG | `/public/images/kuakata/gallery-01.jpg` |
| **Project Card Covers** | `1200 × 750 px` | 16:10 | WebP / JPEG | `/public/images/[project]/hero.jpg` |
| **Sun Care Hospital Views** | `1200 × 800 px` | 3:2 | WebP / JPEG | `/public/images/sun-care/hero.jpg` |
| **DFI Architectural Master Plan** | `1600 × 900 px` | 16:9 | WebP / PNG | `/public/images/dfi/DFI-top-view.png` |
| **Shareholder Headshots** | `400 × 400 px` | 1:1 | WebP / JPEG | `/public/images/testimonials/[name].jpg` |
| **OpenGraph Social Preview** | `1200 × 630 px` | 1.91:1 | JPEG | `/public/images/og-image.jpg` |
| **Vector Corporate Logo** | `400 × 120 px` | Transparent | SVG / PNG | `/public/images/logo.png` |

---

## 6. Backend Integration Points (TODOs)

The frontend is complete and decoupled from backend infrastructure. Integrate your production APIs at the following locations:

### A. Investor Inquiry Submission
* **File:** [`lib/api.ts`](file:///c:/Users/Hp/Downloads/sunsetproj/sunsetgroupbd/frontend/lib/api.ts)
* **Function:** `submitInquiry(data: InquiryPayload)`
* **Current State:** Simulates a 1200ms network round-trip and resolves `{ success: true }`.
* **Backend Hook:** Replace with a `POST` request to your CRM, Node/Express/Next.js Route Handler, or email service (Resend, SendGrid, Brevo):
  ```typescript
  export async function submitInquiry(data: InquiryPayload) {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }
  ```

### B. PDF Brochure Downloads
* **File:** [`lib/api.ts`](file:///c:/Users/Hp/Downloads/sunsetproj/sunsetgroupbd/frontend/lib/api.ts)
* **Object:** `BROCHURE_PATHS`
* **Current State:** Points to placeholder filenames (`/brochures/...`).
* **Backend Hook:** Place your official multi-page promotional PDF brochures into `/public/brochures/` (e.g. `sunset-group-brochure.pdf`, `dfi-brochure.pdf`, `sun-care-brochure.pdf`).

### C. Profit Calculator Rates
* **File:** [`data/calculator.config.ts`](file:///c:/Users/Hp/Downloads/sunsetproj/sunsetgroupbd/frontend/data/calculator.config.ts)
* **Variable:** `illustrativeAnnualRate` on each package object.
* **Current State:** Set to `0.0` with explicit `"Rate to be announced (Board Pending)"` notice.
* **Backend Hook:** Once approved by the Board of Directors and Shariah Supervisory Committee, update the decimal rate (e.g., `0.14` for 14% illustrative annual distribution).

### D. Blog & News Content (Headless CMS / MDX)
* **File:** [`data/blog.ts`](file:///c:/Users/Hp/Downloads/sunsetproj/sunsetgroupbd/frontend/data/blog.ts)
* **Current State:** Typed in-memory mock posts with HTML markup.
* **Backend Hook:** Connect `getStaticProps` or fetch inside `app/blogs/page.tsx` and `app/blogs/[slug]/page.tsx` to Strapi, Sanity, WordPress REST API, or a local Markdown directory.

---

## 7. How to Add a New Project

The project architecture is completely **data-driven**. Adding a new venture requires appending **one object** to [`data/projects.ts`](file:///c:/Users/Hp/Downloads/sunsetproj/sunsetgroupbd/frontend/data/projects.ts):

```typescript
{
  slug: "new-resort",
  number: "07",
  name: "New Resort & Convention Center",
  nameBn: "নতুন রিসোর্ট ও কনভেনশন সেন্টার",
  tagline: "Prime waterfront luxury with Shariah oversight.",
  taglineBn: "শরীয়া তদারকিতে প্রিমিয়াম ওয়াটারফ্রন্ট লাক্সারি।",
  location: "Cox's Bazar / Kuakata, Bangladesh",
  locationBn: "কক্সবাজার / কুয়াকাটা, বাংলাদেশ",
  description: "Comprehensive architectural and investment narrative...",
  descriptionBn: "বিস্তারিত বাংলা বিবরণ...",
  heroImage: "/images/new-resort/hero.jpg",
  galleryImages: [
    "/images/new-resort/render-01.jpg",
    "/images/new-resort/render-02.jpg",
  ],
  keyFacts: [
    { label: "Project Type", value: "Luxury Eco-Resort" },
    { label: "Land Area", value: "10 Acres" },
  ],
  whyInvest: [
    "High capital appreciation potential",
    "Saf-kabala registered ownership",
  ],
  safKabala: true,
  badge: "New Release",
  badgeBn: "নতুন প্রকল্প",
}
```

Because `app/projects/[slug]/page.tsx` employs `generateStaticParams()`, Next.js will automatically:
1. Generate the static detail page `/projects/new-resort` at build time.
2. Include the new card on the `/projects` directory grid.
3. Add the project to the navigation dropdown and footer lists.
4. Inject the URL into `sitemap.xml` and generate dynamic SEO tags.

---

## 8. Internationalization (Bilingual EN/BN)

- **Default Language:** Bengali (`bn`) with instant English (`en`) toggle.
- **Persistence:** User selection persists in `localStorage` (`sg-locale`).
- **Typography Adaptation:** Automatically applies `line-height: 1.7` and sets Bengali typefaces (`Noto Serif Bengali` / `Hind Siliguri`) when Bengali is active.
- **Bangla Numerals:** Numeric values across packages, calculators, and timelines support localized Bengali numerals (`১১২ দিন`, `৳ ৩৬,০০,০০০`).

---

## 9. Legal & Compliance Notice

Sunset Group prioritizes strict regulatory compliance. Per corporate standards:
- **No Guaranteed Returns:** Copy throughout the portal uses the terms *"profit-sharing"*, *"projected"*, and *"contingent upon actual operational performance"*. Phrases such as *"guaranteed profit"* or *"risk-free"* are strictly prohibited.
- **Company Act 1994:** Parent company *Sunset Kuakata Hotel & Resort Ltd.* is incorporated under RJSC Dhaka.
- **Deeded Saf-Kabala:** Ownership shares are legally deeded at government sub-registry offices.
- **Shariah Supervision:** An independent board of Islamic scholars reviews and certifies all commercial and partnership instruments.

---
© 2026 Sunset Group (Sunset Kuakata Hotel & Resort Ltd.). All rights reserved.
