"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiBook,
  FiCode,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
  FiBarChart2,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const navLinks = [
  { href: "/#home", label: "Home", icon: <FiHome /> },
  { href: "/#about", label: "About", icon: <FiUser /> },
  { href: "/#education", label: "Education", icon: <FiBook /> },
  { href: "/#skills", label: "Skills", icon: <FiCode /> },
  { href: "/#projects", label: "Projects", icon: <FiBriefcase /> },
  { href: "/stats", label: "Stats", icon: <FiBarChart2 /> },
  { href: "/#contact", label: "Contact", icon: <FiMail /> },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route/hash change
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto"
      >
        <div className="flex items-center justify-between md:justify-center gap-3 md:gap-6 px-4 md:px-6 py-3 rounded-full bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-xl">
          {/* Mobile: brand name */}
          <Link
            href="/#home"
            onClick={handleLinkClick}
            className="md:hidden font-extrabold text-xl tracking-tighter text-white"
          >
            AK.
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm font-extrabold text-gray-300 hover:text-primary transition-all hover:-translate-y-0.5"
              >
                {link.icon}
                <span className="hidden lg:inline">{link.label}</span>
              </Link>
            ))}
          </nav>


          <div className="flex items-center gap-2 border-l border-white/10 pl-4 ml-2">
            {/* Social Links */}
            <a
              href="https://github.com/amalverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-gray-800 text-gray-300 transition-all hover:text-primary"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amalverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-gray-800 text-gray-300 transition-all hover:text-primary"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <FiX size={18} className="text-white" />
              ) : (
                <FiMenu size={18} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 w-[90%] z-40 bg-gray-950/95 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl p-4"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-200 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <span className="text-primary">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-800">
                <a
                  href="https://github.com/amalverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-900 text-sm font-bold"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/amalverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gray-900 text-sm font-bold"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

