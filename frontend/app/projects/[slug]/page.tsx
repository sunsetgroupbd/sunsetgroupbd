import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getStaticProjectSlugs } from "@/data/projects";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getStaticProjectSlugs();
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Investment & Ownership`,
    description: project.tagline + ". " + project.description.slice(0, 140) + "...",
    openGraph: {
      title: `${project.name} | Sunset Group`,
      description: project.tagline,
      images: [{ url: project.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hotelSchema =
    project.slug === "kuakata-hotel"
      ? {
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Sunset Kuakata Hotel & Resort",
          description: project.description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kuakata",
            addressRegion: "Patuakhali",
            addressCountry: "BD",
          },
          starRating: { "@type": "Rating", ratingValue: "5" },
          telephone: "+8801325074535",
        }
      : null;

  return (
    <>
      {hotelSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      )}
      <ProjectDetailContent project={project} />
    </>
  );
}