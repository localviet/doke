type DoodleProps = {
  color?: string;
  className?: string;
};

export function WiggleLine({
  color = "#1a1a1a",
  width = 200,
  className = "",
}: DoodleProps & { width?: number }) {
  return (
    <svg
      viewBox={`0 0 ${width} 12`}
      className={className}
      style={{ width, height: 12 }}
      fill="none"
    >
      <path
        d={`M2 6 Q${width * 0.1} 2 ${width * 0.2} 6 Q${width * 0.3} 10 ${width * 0.4} 6 Q${width * 0.5} 2 ${width * 0.6} 6 Q${width * 0.7} 10 ${width * 0.8} 6 Q${width * 0.9} 2 ${width - 2} 6`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SketchCircle({
  size = 60,
  color = "#7DAACB",
  className = "",
}: DoodleProps & { size?: number }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      style={{ width: size, height: size }}
      fill="none"
    >
      <path
        d="M30 5 C48 5 56 14 55 30 C54 46 44 56 28 55 C12 54 4 44 5 28 C6 12 16 4 30 5 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.15"
      />
    </svg>
  );
}

export function ScribbleUnderline({
  color = "#CE2626",
  className = "",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 8"
      className={className}
      style={{ width: "100%", height: 8 }}
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 4 C20 1 40 7 60 4 C80 1 100 7 118 4"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarDoodle({
  color = "#E8DBB3",
  size = 24,
  className = "",
}: DoodleProps & { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width={size}
      height={size}
      fill="none"
    >
      <path
        d="M12 2 L14.5 9.5 L22 9.5 L16 14 L18.5 21.5 L12 17 L5.5 21.5 L8 14 L2 9.5 L9.5 9.5 Z"
        stroke="#1a1a1a"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={color}
      />
    </svg>
  );
}
