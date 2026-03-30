import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET() {
  return NextResponse.json({
    summary: "Frontend & Full Stack Developer",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
      "PostgreSQL",
    ],
    bestProject: projects[0]?.title || "AI Document Orchestrator",
    allProjects: projects.map(p => ({ title: p.title, tagline: p.tagline })),
    socials: {
        github: "https://github.com/amalverse",
        linkedin: "https://linkedin.com/in/amalverse",
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.amalkishor@gmail.com"
    }
  });
}
