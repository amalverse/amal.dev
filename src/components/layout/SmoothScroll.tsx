"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup: cancel the animation frame loop and destroy lenis on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
