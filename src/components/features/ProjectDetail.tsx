"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCode,
  FiZap,
  FiAlertTriangle,
  FiBookOpen,
} from "react-icons/fi";
import type { ProjectData } from "@/data/projects";

// ── Animation helpers ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionHeading({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground"
    >
      <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
        {icon}
      </span>
      {children}
    </motion.h2>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <motion.span
      variants={listItem}
      className="px-4 py-2 rounded-full text-sm font-semibold border border-primary/25 bg-primary/8 text-primary hover:bg-primary/15 transition-colors cursor-default"
    >
      {label}
    </motion.span>
  );
}

function BulletItem({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <motion.li
      variants={listItem}
      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed"
    >
      <span
        className={`mt-2 min-w-[8px] min-h-[8px] rounded-full shrink-0 ${accent ? "bg-amber-400" : "bg-primary"
          }`}
      />
      {text}
    </motion.li>
  );
}

function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-0" />
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function ProjectDetailPage({ project }: { project: ProjectData }) {
  return (
    <div className="min-h-screen">
      {/* ── Back nav ── */}
      <div className="pt-28 pb-4 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>
        </motion.div>
      </div>

      {/* ── Hero header ── */}
      <header className="px-6 max-w-5xl mx-auto mb-10">
        <motion.h1
          variants={fadeUp}
          custom={0.12}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-foreground"
        >
          {project.title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-primary/80 font-medium mb-6"
        >
          {project.tagline}
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={0.28}
          initial="hidden"
          animate="visible"
          className="text-gray-700 dark:text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed mb-8"
        >
          {project.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.35}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4"
        >
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-primary/25"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-gray-700 bg-gray-800 text-white font-bold text-sm hover:bg-gray-700 hover:scale-105 transition-all shadow-sm"
            >
              <FiGithub size={16} />
              Source Code
            </a>
          )}
        </motion.div>
      </header>

      {/* ── Cover image ── */}
      {project.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto px-6 mb-16"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-2xl ring-1 ring-white/5">
            <Image
              src={project.coverImage}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* Subtle gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      )}

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-6 space-y-16 pb-36">
        <Divider />

        {/* Tech Stack */}
        <section>
          <SectionHeading icon={<FiCode size={18} />}>Tech Stack</SectionHeading>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* Features */}
        <section>
          <SectionHeading icon={<FiZap size={18} />}>Key Features</SectionHeading>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 pl-1"
          >
            {project.features.map((f, i) => (
              <BulletItem key={i} text={f} />
            ))}
          </motion.ul>
        </section>

        <Divider />

        {/* Challenges */}
        <section>
          <SectionHeading icon={<FiAlertTriangle size={18} />}>
            Challenges
          </SectionHeading>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 pl-1"
          >
            {project.challenges.map((c, i) => (
              <BulletItem key={i} text={c} accent />
            ))}
          </motion.ul>
        </section>

        <Divider />

        {/* Learnings */}
        <section>
          <SectionHeading icon={<FiBookOpen size={18} />}>
            Key Learnings
          </SectionHeading>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 pl-1"
          >
            {project.learnings.map((l, i) => (
              <BulletItem key={i} text={l} />
            ))}
          </motion.ul>
        </section>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl border border-gray-800 bg-gray-900/50"
        >
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">
              Explore More
            </p>
            <p className="text-lg font-bold text-foreground">
              Interested in this project?
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Check out the live demo or browse the source code on GitHub.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
              >
                <FiExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 font-bold text-sm hover:bg-gray-800 hover:scale-105 transition-all"
              >
                <FiGithub size={15} />
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
