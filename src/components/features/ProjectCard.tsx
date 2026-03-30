"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import type { ProjectData } from "@/data/projects";

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative">
        {/* Image */}
        <Link
          href={`/projects/${project.slug}`}
          className="block relative h-56 overflow-hidden shrink-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
          {/* Category pill */}
          {project.category && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-xs font-bold text-gray-100 shadow-sm border border-white/10">
              {project.category}
            </div>
          )}
          {/* Hover overlay — "View Details" */}
          <div className="absolute inset-0 flex items-center justify-center bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
              View Details <FiArrowRight />
            </span>
          </div>
        </Link>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-foreground text-background rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
            >
              View Details <FiArrowRight size={14} />
            </Link>
            {project.liveLink && project.liveLink !== "https://your-live-link.com" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-primary/10 text-primary rounded-xl text-sm font-bold hover:bg-primary/20 transition-colors border border-primary/20"
                title="Live Demo"
              >
                <FiExternalLink size={16} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="GitHub"
              >
                <FiGithub size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
