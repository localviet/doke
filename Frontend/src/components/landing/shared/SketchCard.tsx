import type { ReactNode } from "react";

type SketchCardProps = {
  children: ReactNode;
  className?: string;
  accent?: boolean;
};

export function SketchCard({
  children,
  className = "",
  accent = false,
}: SketchCardProps) {
  return (
    <div
      className={`relative bg-[#FFFDEB] rounded-2xl p-6 ${className}`}
      style={{
        border: "2.5px solid #1a1a1a",
        boxShadow: `4px 4px 0px 0px ${accent ? "#CE2626" : "#1a1a1a"}`,
      }}
    >
      {children}
    </div>
  );
}
