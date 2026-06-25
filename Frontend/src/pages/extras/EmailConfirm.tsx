import { Home, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Inline SVG doodle decorations
const EnvelopeDoodle = () => (
  <svg
    width="80"
    height="60"
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="8"
      width="76"
      height="48"
      rx="3"
      fill="#7DAACB"
      stroke="#1a1a1a"
      strokeWidth="2.5"
    />
    <path
      d="M2 12 L40 36 L78 12"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M2 56 L28 34" stroke="#1a1a1a" strokeWidth="2.5" />
    <path d="M78 56 L52 34" stroke="#1a1a1a" strokeWidth="2.5" />
  </svg>
);

const StarDoodle = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2 L13.5 9 L20 8 L15 13 L17 20 L12 16 L7 20 L9 13 L4 8 L10.5 9 Z"
      fill="#E8DBB3"
      stroke="#1a1a1a"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const WavyLineDoodle = () => (
  <svg
    width="120"
    height="20"
    viewBox="0 0 120 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 10 Q15 2 30 10 Q45 18 60 10 Q75 2 90 10 Q105 18 120 10"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeDasharray="0"
      fill="none"
      opacity="0.3"
    />
  </svg>
);

const DotGrid = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
  >
    <defs>
      <pattern
        id="dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1.2" fill="#1a1a1a" opacity="0.08" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

export default function EmailConfirmation() {
  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "#FFFDEB", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Dot texture background */}
      <DotGrid />

      {/* Scattered background doodles */}
      <div className="absolute top-20 right-12 opacity-40 rotate-12">
        <StarDoodle />
      </div>
      <div className="absolute top-40 left-8 opacity-30 -rotate-6">
        <StarDoodle />
      </div>
      <div className="absolute bottom-32 left-16 opacity-25 rotate-3">
        <StarDoodle />
      </div>
      <div className="absolute bottom-20 right-20 opacity-35 -rotate-12">
        <StarDoodle />
      </div>
      <div className="absolute top-1/3 right-6 opacity-20">
        <WavyLineDoodle />
      </div>
      <div className="absolute bottom-1/3 left-4 opacity-20 rotate-90">
        <WavyLineDoodle />
      </div>

      {/* Nav */}
      <nav className="relative z-10 px-6 py-5">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "#7DAACB",
              border: "2.5px solid #1a1a1a",
              boxShadow: "2px 2px 0 #1a1a1a",
            }}
          >
            <Home size={18} color="#FFFDEB" strokeWidth={2.5} />
          </div>
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.75rem",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#1a1a1a",
            }}
          >
            doke
          </span>
        </Link>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4 py-12">
        <div className="flex flex-col items-center gap-8 w-full max-w-md">
          {/* Card */}
          <div
            className="w-full flex flex-col items-center gap-6 px-8 py-10 rounded-2xl"
            style={{
              background: "#FFFDEB",
              border: "2.5px solid #1a1a1a",
              boxShadow: "5px 5px 0 #1a1a1a",
            }}
          >
            {/* Envelope icon block */}
            <div
              className="flex items-center justify-center rounded-xl p-4"
              style={{
                background: "#E8DBB3",
                border: "2.5px solid #1a1a1a",
                boxShadow: "3px 3px 0 #1a1a1a",
              }}
            >
              <EnvelopeDoodle />
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h1
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "2.6rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.5px",
                }}
              >
                check your email
              </h1>

              {/* Dashed underline accent */}
              <div
                style={{
                  width: "80%",
                  borderBottom: "2.5px dashed #7DAACB",
                  marginTop: "2px",
                }}
              />
            </div>

            {/* Body text */}
            <p
              className="text-center text-base leading-relaxed"
              style={{ color: "#555", maxWidth: "300px" }}
            >
              We sent a confirmation link to your inbox. Click it to get started
              with doke.
            </p>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                borderBottom: "1.5px dashed #1a1a1a",
                opacity: 0.15,
              }}
            />

            {/* Hint */}
            <div className="flex items-start gap-3 w-full">
              <div
                className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "#7DAACB", border: "2px solid #1a1a1a" }}
              >
                <Mail size={12} color="#FFFDEB" strokeWidth={2.5} />
              </div>
              <p className="text-sm" style={{ color: "#888", lineHeight: 1.5 }}>
                Don't see it? Check your spam folder — it might have ended up
                there.
              </p>
            </div>
          </div>

          {/* Back link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#444" }}
          >
            <ArrowRight size={14} strokeWidth={2.5} className="rotate-180" />
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
