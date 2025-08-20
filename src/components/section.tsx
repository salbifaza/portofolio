import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 transition-colors duration-300", className)}>
      <div className="container mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
}
