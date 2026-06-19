import type { ReactNode } from "react";
import { useReveal } from "../../../hooks/useReveal";

type RevealSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function RevealSection({
  children,
  delay = 0,
  className = "",
}: RevealSectionProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(40px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
