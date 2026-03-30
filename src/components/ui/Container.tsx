import React from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-12", className)}>
      {children}
    </div>
  );
}
