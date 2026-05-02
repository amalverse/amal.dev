"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function About() {
  return (
    <Section id="about" className="py-24 bg-white/[0.02]">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-medium"
          >
            Get to know more about who I am and what I do.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Who am I?</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                I’m a Full-Stack Developer specializing in building modern, scalable web applications with real-world functionality.
              </p>
              <p>
                I work across the entire stack — from designing responsive user interfaces to developing secure backend APIs and integrating third-party services like payment gateways, AI models, and authentication systems.
              </p>
              <p>
                My focus is on writing clean, maintainable code and building systems that solve practical problems. I’ve developed projects involving e-commerce platforms, AI-powered applications, analytics dashboards, and automation pipelines.
              </p>
              <p>
                Currently, I’m focused on improving my skills in system design, performance optimization, and building production-level applications that stand out in real-world use cases.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-center shadow-sm">
                <span className="block text-4xl font-black text-primary mb-2">2+</span>
                <span className="block text-sm font-medium text-gray-400 uppercase tracking-wider">Years Exp.</span>
              </div>
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-center shadow-sm">
                <span className="block text-4xl font-black text-primary mb-2">20+</span>
                <span className="block text-sm font-medium text-gray-400 uppercase tracking-wider">Projects Built</span>
              </div>
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800 text-center shadow-sm col-span-2 lg:col-span-1 border-b-4 border-b-primary">
                <span className="block text-4xl font-black text-primary mb-2 flex justify-center items-center"><span className="text-2xl mr-1">☕</span> 1k+</span>
                <span className="block text-sm font-medium text-gray-400 uppercase tracking-wider">Cups of Coffee</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gray-900 border border-gray-800 rounded-[2rem] p-8 lg:p-10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="text-primary text-3xl">👨‍💻</span> Experience & Training
            </h3>

            <div className="relative border-l-2 border-gray-800 space-y-12 pb-4">

              <div className="relative pl-8">
                <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] top-1 outline outline-4 outline-white dark:outline-gray-900 shadow-sm"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-xl text-white">Full Stack Web Development(Training Program)</h4>
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">July 2025 – April 2026</span>
                </div>
                <p className="text-sm font-medium text-gray-400 mb-4">AlmaBetter (Remote)</p>
                <ul className="text-base text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-1">
                  <li>Completed intensive full-stack development training with hands-on project building</li>
                  <li>Built end-to-end applications using React, Node.js, Express, and MongoDB</li>
                  <li>Implemented authentication systems (JWT, OAuth) and third-party integrations</li>
                  <li>Developed AI-powered features and automation workflows using OpenAI APIs and n8n</li>
                  <li>Focused on writing clean, scalable, and production-ready code</li>
                </ul>
              </div>

              <div className="relative pl-8">
                <div className="absolute w-5 h-5 bg-gray-700 rounded-full -left-[11px] top-1 outline outline-4 outline-gray-900 shadow-sm"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-xl text-white">IT Support & Operations Coordinator</h4>
                  <span className="text-xs font-bold px-3 py-1 bg-gray-800 text-gray-400 rounded-full border border-gray-700 w-fit">Feb 2022 – Apr 2024</span>
                </div>
                <p className="text-sm font-medium text-gray-400 mb-4">Manoj Pvt. ITI Institute</p>
                <ul className="text-base text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-1">
                  <li>Managed day-to-day IT operations and ensured smooth functioning of institutional digital systems</li>
                  <li>Provided technical support and resolved system issues across multiple departments</li>
                  <li>Handled student admissions and registrations on government portals (Skill India, NCVT MIS)</li>
                  <li>Maintained and validated large datasets, ensuring data accuracy and consistency</li>
                  <li>Assisted in managing digital records and system updates for institutional compliance</li>
                  <li>Delivered basic technical instruction and guided students in using digital platforms</li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
