import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import {
  ScribbleUnderline,
  SketchCircle,
  StarDoodle,
} from "./shared/Doodles";
import { FloatingBadge } from "./shared/FloatingBadge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1a1a1a22 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute top-28 left-8 md:left-24 float-1 pop-in"
        style={{ animationDelay: "0.4s" }}
      >
        <SketchCircle size={80} color="#7DAACB" />
      </div>
      <div
        className="absolute top-40 right-8 md:right-28 float-2 pop-in"
        style={{ animationDelay: "0.6s" }}
      >
        <StarDoodle size={44} color="#E8DBB3" />
      </div>
      <div
        className="absolute bottom-36 left-12 md:left-40 float-3 pop-in hidden md:block"
        style={{ animationDelay: "0.8s" }}
      >
        <StarDoodle size={32} color="#CE2626" />
      </div>
      <div
        className="absolute bottom-48 right-8 md:right-36 float-1 pop-in"
        style={{ animationDelay: "1s" }}
      >
        <SketchCircle size={55} color="#E8DBB3" />
      </div>

      <FloatingBadge style={{ top: "22%", right: "6%", animationDelay: "0.2s" }}>
        <span className="flex items-center gap-1">
          <CheckCircle2 size={14} color="#CE2626" /> Chores done: 12
        </span>
      </FloatingBadge>
      <FloatingBadge
        style={{
          bottom: "28%",
          left: "4%",
          animationDelay: "1s",
          background: "#7DAACB",
          color: "#FFFDEB",
          border: "2px solid #1a1a1a",
        }}
      >
        <span className="flex items-center gap-1">
          <Users size={14} /> Room: APT 4B
        </span>
      </FloatingBadge>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 pop-in"
          style={{
            background: "#E8DBB3",
            border: "2px solid #1a1a1a",
            boxShadow: "2px 2px 0 #1a1a1a",
          }}
        >
          <Sparkles size={14} style={{ color: "#CE2626" }} />
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem" }}>
            No more chore wars 🕊️
          </span>
        </div>

        <h1
          className="leading-tight mb-2 pop-in"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            animationDelay: "0.1s",
          }}
        >
          Chores, tracked.
        </h1>
        <div
          className="relative inline-block mb-6 pop-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h1
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#CE2626",
            }}
          >
            Drama-free.
          </h1>
          <div className="absolute -bottom-1 left-0 right-0">
            <ScribbleUnderline color="#7DAACB" />
          </div>
        </div>

        <p
          className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed pop-in"
          style={{ color: "#444", animationDelay: "0.3s", fontWeight: 400 }}
        >
          Doke makes sharing a home actually fair. Create a room, post what you
          did, and let the month-end scoreboard do the talking.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pop-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            to="/signup"
            className="group px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            style={{
              background: "#CE2626",
              color: "#FFFDEB",
              border: "2.5px solid #1a1a1a",
              boxShadow: "4px 4px 0 #1a1a1a",
              fontFamily: "'Caveat', cursive",
              fontSize: "1.3rem",
            }}
          >
            Create a room{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/signup"
            className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 active:scale-95"
            style={{
              background: "transparent",
              color: "#1a1a1a",
              border: "2.5px solid #1a1a1a",
              boxShadow: "4px 4px 0 #1a1a1a",
              fontFamily: "'Caveat', cursive",
              fontSize: "1.3rem",
            }}
          >
            Join with code
          </Link>
        </div>

        <div className="mt-14 flex flex-col items-center gap-1 opacity-50">
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem" }}>
            scroll to see more
          </span>
          <ChevronDown
            size={20}
            style={{ animation: "float 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
