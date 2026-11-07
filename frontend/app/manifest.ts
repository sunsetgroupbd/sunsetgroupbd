import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sunset Group — Luxury & Recreation with Ethical Hospitality",
    short_name: "Sunset Group",
    description:
      "Halal, Shariah-supervised hospitality & real-estate investments in Bangladesh: Kuakata Hotel & Resort, Sun Care Hospital, Dhaka Fantasy Island.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF9F5",
    theme_color: "#0C3820",
    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

