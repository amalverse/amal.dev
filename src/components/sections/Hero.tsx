"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Link from "next/link";
import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <Section
      id="home"
      className="pt-32 pb-16 min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left z-10"
          >
            {/* Single combined badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold tracking-wide text-sm mb-6 border border-primary/20 shadow-sm text-center md:text-left text-balance">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              Full-Stack Developer building AI-powered web applications
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Amal Kishor
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              I build scalable, production-ready applications using the MERN stack, modern frontend tools, and AI integrations. From secure authentication systems to payment gateways and automation pipelines — I focus on building real-world products that solve meaningful problems.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                href="/#projects"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/25"
              >
                View My Work <FiArrowRight />
              </Link>
              <a
                href="/resume/Full-Stack Developer Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gray-900 border-2 border-gray-800 text-white font-bold rounded-full hover:bg-gray-800 transition-all shadow-md active:scale-95"
              >
                Download Resume <FiDownload />
              </a>
            </div>

          </motion.div>

          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center md:justify-end z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-background shadow-2xl p-2 bg-gradient-to-tr from-primary to-blue-400">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/image/amal-img/amal-1.jpg"
                  alt="Amal Kishor"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
