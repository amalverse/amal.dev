"use client";
import React from "react";
import Container from "../ui/Container";
import Magnetic from "../ui/Magnetic";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/amalverse" },
  { name: "LinkedIn", href: "https://linkedin.com/in/amalverse" },
];

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 sm:py-20 bg-black text-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="text-2xl font-extrabold tracking-tighter mb-3">AK.</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Building scalable, high-performance web applications with modern UI &amp;
              AI integration.
            </p>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.amalkishor@gmail.com"}`}
              className="mt-4 inline-block text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.amalkishor@gmail.com"}
            </a>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-4">
              Social
            </p>
            <div className="flex flex-col items-start md:items-end gap-3">
              {socialLinks.map((link) => (
                <Magnetic key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Amal Kishor. All rights reserved.</p>
          <p>Designed &amp; built by Amal Kishor</p>
        </div>
      </Container>
    </footer>
  );
}
