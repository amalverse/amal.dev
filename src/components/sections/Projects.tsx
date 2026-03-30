"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";
import ProjectCard from "../features/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", "Full-Stack", "Frontend", "Backend"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <Section id="projects" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
          >
            A curated selection of enterprise-grade architectures and scalable full-stack solutions I&apos;ve engineered.
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  filter === category
                    ? "bg-primary text-white scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
