"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
}: {
  children: React.ReactElement<{ ref?: React.Ref<HTMLElement> }>;
}) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.5);
        yTo(y * 0.5);
      });

      magnetic.current.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  // eslint-disable-next-line react-hooks/refs
  return React.cloneElement(children, { ref: magnetic });
}
