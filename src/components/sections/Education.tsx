"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Education() {
  return (
    <Section id="education" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Education & <span className="text-primary">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            My academic background and professional certifications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 lg:p-10 shadow-lg h-full"
          >
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="text-primary text-3xl">🎓</span> Education
            </h3>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 space-y-12 pb-4">
              <div className="relative pl-8">
                <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1 outline outline-4 outline-white dark:outline-gray-900 shadow-sm"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">Master of Science (Computer Science – Cloud Computing)</h4>
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full w-fit whitespace-nowrap">July 2025 – Present</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Woolf University</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full -left-[11px] top-1 outline outline-4 outline-white dark:outline-gray-900 shadow-sm"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">Bachelor of Technology (Electrical Engineering)</h4>
                  <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700 w-fit whitespace-nowrap">2017 – 2021</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Aryabhatta Knowledge University</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">CGPA: 7.41</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 lg:p-10 shadow-lg h-full"
          >
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="text-primary text-3xl">📜</span> Certifications
            </h3>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 space-y-12 pb-4">
              <div className="relative pl-8">
                <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1 outline outline-4 outline-white dark:outline-gray-900 shadow-sm"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">The Complete Full-Stack Web Development Bootcamp</h4>
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full w-fit whitespace-nowrap">July 2025</span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-4">Udemy</p>
                <ul className="text-base text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-2 mb-6">
                  <li>Mastered advanced full-stack architectures integrating React, Node.js, and complex relational databases.</li>
                  <li>Engineered highly resilient and concurrent RESTful APIs with hardened authentication flows.</li>
                  <li>Developed production-ready systems incorporating modern SSR/SSG patterns and dynamic state management.</li>
                  <li>Solidified best practices in secure system design, Web Vitals optimization, and robust CI/CD principles.</li>
                </ul>
                <a 
                  href="https://www.udemy.com/certificate/UC-77b849e2-5ab8-44e3-a88e-df71a1c19b39/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg border border-primary/20"
                >
                  👉 🔗 View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
