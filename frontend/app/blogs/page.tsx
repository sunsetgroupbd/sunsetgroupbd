import type { Metadata } from "next";
import BlogsContent from "@/components/blogs/BlogsContent";

export const metadata: Metadata = {
  title: "Blog & Market Insights — Sunset Group",
  description:
    "Read articles on tourism development in Kuakata, Islamic real-estate investment principles, and the healthcare market in Bangladesh.",
};

export default function BlogsPage() {
  return <BlogsContent />;
}