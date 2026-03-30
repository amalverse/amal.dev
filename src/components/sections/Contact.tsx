"use client";
import React, { useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiLoader } from "react-icons/fi";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const formEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.amalkishor@gmail.com";
      const response = await fetch(`https://formsubmit.co/ajax/${formEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: `${form.email}`,
          message: `${form.message}`,
          _subject: `New Portfolio Message from ${form.firstName}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="py-24 bg-white/[0.02]">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto bg-gray-900 rounded-[2.5rem] border border-gray-800 shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-5 h-full">
            {/* Left panel */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary to-blue-600 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-black/10 blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold mb-4">Let&apos;s Talk</h3>
                <p className="text-white/80 leading-relaxed mb-10 text-lg">
                  My inbox is always open — whether it&apos;s a project opportunity,
                  collaboration, or just a hello.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center shrink-0">
                      <FiMapPin size={20} />
                    </div>
                    <span className="font-medium">India</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center shrink-0">
                      <FiMail size={20} />
                    </div>
                    <span className="font-medium break-all">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.amalkishor@gmail.com"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4 relative z-10">
                <a
                  href="https://linkedin.com/in/amalverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-primary transition-all hover:scale-110 shadow-sm"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/amalverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-primary transition-all hover:scale-110 shadow-sm"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>

            {/* Right panel — form */}
            <div className="md:col-span-3 p-10 lg:p-12">
              <h3 className="text-3xl font-bold mb-8 text-white">
                Send me a message
              </h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-900/40 flex items-center justify-center text-green-400 text-3xl">
                    ✓
                  </div>
                  <p className="text-xl font-bold text-white">Message sent successfully!</p>
                  <p className="text-gray-700 dark:text-gray-400 text-sm">
                    Thank you for reaching out. I&apos;ve received your message and will get back to you soon at{" "}
                    <span className="text-primary font-semibold">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.amalkishor@gmail.com"}</span>.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); }}
                    className="mt-2 text-sm font-semibold text-primary hover:underline transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 font-medium"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500 font-medium resize-none"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-primary text-white font-bold text-lg rounded-2xl hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <FiLoader className="animate-spin" size={18} />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <FiSend size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
