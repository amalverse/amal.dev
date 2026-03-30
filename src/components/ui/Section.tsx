import React from "react";
import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24 sm:py-32 md:py-40", className)}>
      {children}
    </section>
  );
}
