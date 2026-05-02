"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { uiComponentsData, UIComponent } from "@/data/uiComponents";

const categories = ["All", "Buttons", "Inputs", "Cards", "Feedback", "Data Display"] as const;

const categoryMap: Record<string, string[]> = {
  Buttons: ["comp-1", "comp-2", "comp-3", "comp-4", "comp-5"],
  Inputs: ["comp-6", "comp-7", "comp-8", "comp-9", "comp-10"],
  Cards: ["comp-17", "comp-18", "comp-19", "comp-20"],
  Feedback: ["comp-15", "comp-16", "comp-22", "comp-23", "comp-25"],
  "Data Display": ["comp-11", "comp-12", "comp-13", "comp-14", "comp-21", "comp-24"],
};

/** Convert JSX-like props to valid HTML attrs for iframe preview */
function jsxToHtml(code: string): string {
  return code
    .replace(/className=/g, "class=")
    .replace(/strokeLinecap=/g, "stroke-linecap=")
    .replace(/strokeLinejoin=/g, "stroke-linejoin=")
    .replace(/strokeWidth=\{(\d+)\}/g, 'stroke-width="$1"')
    .replace(/strokeWidth="([^"]+)"/g, 'stroke-width="$1"')
    .replace(/fillRule=/g, "fill-rule=")
    .replace(/clipRule=/g, "clip-rule=")
    .replace(/defaultChecked/g, "checked")
    .replace(/htmlFor=/g, "for=")
    .replace(/tabIndex=/g, "tabindex=")
    .replace(/style=\{\{([^}]+)\}\}/g, (_m, inner) => {
      const inlineStyle = inner
        .replace(/'/g, "")
        .replace(/width:\s*'([^']+)'/g, "width: $1")
        .replace(/,\s*/g, "; ")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase();
      return `style="${inlineStyle.trim()}"`;
    })
    .replace(/\{(\d+)\}/g, "$1")
    .replace(/\{`([^`]*)`\}/g, "$1")
    .replace(/aria-hidden=\{true\}/g, 'aria-hidden="true"')
    .replace(/rows=\{(\d+)\}/g, 'rows="$1"');
}

function PreviewFrame({ code }: { code: string }) {
  const htmlCode = jsxToHtml(code);
  const doc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<script src="https://cdn.tailwindcss.com"></script>
<style>
  body {
    background: #030712;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 16px;
    font-family: ui-sans-serif, system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
</style>
</head>
<body>
  ${htmlCode}
</body>
</html>`;

  return (
    <iframe
      srcDoc={doc}
      sandbox="allow-scripts allow-same-origin"
      className="w-full border-0 bg-gray-950"
      style={{ height: 130 }}
      title="Component preview"
    />
  );
}

function ComponentCard({ comp, index }: { comp: UIComponent; index: number }) {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(comp.code);
    } catch {
      const el = document.createElement("textarea");
      el.value = comp.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [comp.code]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Card header — traffic lights + name + action buttons */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950/60">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
          </span>
          <span className="ml-2 text-xs font-semibold text-gray-300 truncate">{comp.name}</span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Preview / Code toggle */}
          <button
            onClick={() => setShowCode((v) => !v)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border ${
              showCode
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-gray-800 text-gray-400 hover:text-gray-200 border-gray-700"
            }`}
          >
            {showCode ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </>
            )}
          </button>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border ${
              copied
                ? "bg-green-500/15 text-green-400 border-green-500/30"
                : "bg-gray-800 text-gray-400 hover:text-gray-200 border-gray-700"
            }`}
          >
            {copied ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 overflow-hidden" style={{ minHeight: 130 }}>
        <AnimatePresence mode="wait" initial={false}>
          {showCode ? (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="h-full overflow-auto"
              style={{ minHeight: 130 }}
            >
              <pre className="p-4 text-[11px] text-emerald-300/80 font-mono leading-relaxed whitespace-pre-wrap break-all bg-gray-950 h-full">
                <code>{comp.code}</code>
              </pre>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ minHeight: 130 }}
            >
              <PreviewFrame code={comp.code} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function UIComponents() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? uiComponentsData
      : uiComponentsData.filter((c) => categoryMap[activeFilter]?.includes(c.id));

  return (
    <Section id="ui-components" className="py-24">
      <Container>
        {/* ── Heading ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Component Library
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Reusable{" "}
            <span className="text-primary">React Components</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Constructed{" "}
            <span className="text-white font-semibold">24+ reusable React components</span>,
            decreasing feature development time by{" "}
            <span className="text-primary font-semibold">15%</span>.
            A curated set of the 25 most impactful, production-ready components — click{" "}
            <em className="not-italic text-gray-300 font-medium">Code</em> to see the
            source or{" "}
            <em className="not-italic text-gray-300 font-medium">Copy</em> to grab it instantly.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-8 mb-10"
          >
            {[
              { value: "25+", label: "Components" },
              { value: "15%", label: "Faster Dev" },
              { value: "100%", label: "Tailwind" },
              { value: "0", label: "Dependencies" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-extrabold text-primary">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                    : "bg-gray-800/70 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className={`ml-1.5 text-xs ${activeFilter === cat ? "text-white/60" : "text-gray-600"}`}>
                    ({categoryMap[cat]?.length ?? 0})
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Component grid ── */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((comp, i) => (
              <ComponentCard key={comp.id} comp={comp} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          All components use{" "}
          <span className="text-gray-400">Tailwind CSS</span> — paste the JSX directly into your React / Next.js project.
        </motion.p>
      </Container>
    </Section>
  );
}
