import type { CSSProperties, ReactNode } from "react";

type FloatingBadgeProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function FloatingBadge({ children, style = {} }: FloatingBadgeProps) {
  return (
    <div
      className="absolute px-3 py-1.5 text-sm font-semibold rounded-full"
      style={{
        border: "2px solid #1a1a1a",
        background: "#E8DBB3",
        fontFamily: "'Caveat', cursive",
        fontSize: "1rem",
        boxShadow: "2px 2px 0 #1a1a1a",
        animation: "float 3s ease-in-out infinite",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
