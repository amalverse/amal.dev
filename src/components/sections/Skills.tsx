"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { 
  SiHtml5, SiCss, SiJavascript,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiVercel, SiPostman
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "REST APIs", icon: <span className="text-primary font-bold">{`{}`}</span> },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            I leverage a resilient, enterprise-grade technology stack to engineer scalable and high-performance software ecosystems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-6 bg-gray-800 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 text-gray-200 rounded-lg text-sm font-semibold border border-gray-700 hover:border-primary hover:bg-gray-800 transition-all cursor-default shadow-sm hover:shadow-md"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
