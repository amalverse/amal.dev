"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiLoader, FiZap } from "react-icons/fi";

const initialMessages = [
  {
    text: "Hi! I'm Amal's AI Assistant. Ask me anything about his projects, skills, or experience.",
    sender: "bot",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I'm currently offline. You can reach out to Amal directly via the contact form!", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl z-[9999] transition-all hover:scale-105 active:scale-95 group ${
          isOpen ? "bg-primary text-white" : "bg-primary text-white"
        }`}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FiX size={26} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FiMessageSquare size={26} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </span>
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-28 right-8 w-80 md:w-96 h-[550px] max-h-[70vh] bg-gray-950/95 backdrop-blur-2xl border border-gray-800 rounded-3xl flex flex-col shadow-2xl z-[9999] overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <FiZap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-none">AI Assistant</h3>
                  <p className="text-[10px] items-center flex gap-1 font-bold text-green-500 mt-1 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-500"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Messages Content */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-5 space-y-4 overflow-y-auto scrollbar-hide dark:bg-transparent"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none shadow-lg shadow-primary/10"
                        : "bg-gray-800/80 text-gray-100 rounded-bl-none border border-gray-700/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-gray-800/40 rounded-2xl rounded-bl-none text-gray-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input field wrapper */}
            <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Amal..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-2xl pl-5 pr-12 py-3.5 text-sm placeholder:text-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:bg-black transition-all shadow-inner"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 p-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 disabled:opacity-0 disabled:scale-90 transition-all"
                >
                  {isTyping ? <FiLoader className="animate-spin" /> : <FiSend />}
                </button>
              </div>
              <p className="text-[10px] text-center text-gray-400 mt-4 tracking-tight">
                AI can make mistakes. Built on Google Gemini.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
