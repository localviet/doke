import { Link } from "react-router";
import { StarDoodle } from "./shared/Doodles";
import { RevealSection } from "./shared/RevealSection";

export function CtaSection() {
  return (
    <section className="px-6 md:px-12 pb-32 max-w-3xl mx-auto">
      <RevealSection>
        <div
          className="relative text-center px-8 py-16 rounded-3xl overflow-hidden"
          style={{ background: "#1a1a1a", border: "3px solid #1a1a1a" }}
        >
          <div
            className="absolute -top-6 -left-6 w-20 h-20 rounded-full opacity-30"
            style={{ background: "#7DAACB" }}
          />
          <div
            className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-20"
            style={{ background: "#CE2626" }}
          />
          <div className="absolute top-4 right-12 opacity-40">
            <StarDoodle size={36} color="#E8DBB3" />
          </div>

          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#7DAACB" }}
          >
            Ready to end chore drama?
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              color: "#FFFDEB",
              lineHeight: 1.1,
            }}
          >
            Your cleanest home starts today.
          </h2>
          <p
            className="mb-10 max-w-md mx-auto"
            style={{ color: "#FFFDEB88", fontSize: "0.95rem" }}
          >
            Free to use. No credit card. Just you, your roommates, and finally —
            some accountability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
              style={{
                background: "#CE2626",
                color: "#FFFDEB",
                border: "2.5px solid #FFFDEB",
                boxShadow: "4px 4px 0 #CE262666",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.35rem",
              }}
            >
              Create a room — it's free
            </Link>
          </div>
          <p className="mt-5 text-xs" style={{ color: "#FFFDEB44" }}>
            Already have a code? Join after signing up.
          </p>
        </div>
      </RevealSection>
    </section>
  );
}
