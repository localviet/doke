import { useState, type ReactNode } from "react";
import { useReveal } from "../../../hooks/useReveal";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  delay: number;
  color: string;
};

export function FeatureCard({
  icon,
  title,
  desc,
  delay,
  color,
}: FeatureCardProps) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-6px) rotate(-0.5deg)"
            : "translateY(0px) rotate(0deg)"
          : "translateY(50px)",
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
        border: "2.5px solid #1a1a1a",
        boxShadow: hovered
          ? `6px 6px 0px 0px ${color}`
          : "3px 3px 0px 0px #1a1a1a",
        background: "#FFFDEB",
        borderRadius: "1rem",
        padding: "1.75rem",
        cursor: "default",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: color, border: "2px solid #1a1a1a" }}
      >
        {icon}
      </div>
      <h3
        className="font-bold text-xl mb-2"
        style={{ fontFamily: "'Caveat', cursive", fontSize: "1.4rem" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "#444", fontFamily: "'Inter', sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}
