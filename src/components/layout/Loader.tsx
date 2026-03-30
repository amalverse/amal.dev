"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="relative flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-2"
            >
              AMAL KISHOR
            </motion.h1>
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <motion.p 
              className="mt-4 text-xs font-mono text-white/40 tracking-[0.2em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {progress === 100 ? "READY" : `LOADING ${progress}%`}
            </motion.p>
          </div>
          
          {/* Subtle background details */}
          <div className="absolute bottom-10 left-10 text-[10px] font-mono text-white/20 tracking-widest hidden md:block">
            PORTFOLIO V2.0 // 2026
          </div>
          <div className="absolute bottom-10 right-10 text-[10px] font-mono text-white/20 tracking-widest hidden md:block">
            FULL STACK DEVELOPER
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
