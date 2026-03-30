import { projects, projectsMap } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/features/ProjectDetail";
import type { Metadata } from "next";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsMap[slug];
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsMap[slug];
  if (!project) return {};
  return {
    title: `${project.title} | Amal Kishor`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Amal Kishor`,
      description: project.tagline,
      images: project.coverImage ? [{ url: project.coverImage }] : [],
    },
  };
}
