import { Home, Trophy, Users } from "lucide-react";
import { RevealSection } from "./shared/RevealSection";
import { SketchCard } from "./shared/SketchCard";
import { WiggleLine } from "./shared/Doodles";

const steps = [
  {
    step: "01",
    title: "Create your room",
    desc: "Pick a name, set up your space. You'll get a shareable room code instantly.",
    icon: <Home size={28} color="#FFFDEB" />,
    bg: "#7DAACB",
    note: "Takes ~10 seconds",
  },
  {
    step: "02",
    title: "Invite your roommates",
    desc: "Share the code over text, Slack, wherever. They join with one tap, no sign-up friction.",
    icon: <Users size={28} color="#1a1a1a" />,
    bg: "#E8DBB3",
    note: "Works on any device",
  },
  {
    step: "03",
    title: "Do chores, post proof",
    desc: "Clean something? Post it. Tick off to-dos. Watch the leaderboard shift. Month-end: glory.",
    icon: <Trophy size={28} color="#FFFDEB" />,
    bg: "#CE2626",
    note: "Finally, accountability",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-12 pb-24 max-w-4xl mx-auto"
    >
      <RevealSection className="text-center mb-14">
        <h2
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 700,
          }}
        >
          Up and running in 3 steps
        </h2>
        <div className="flex justify-center mt-2">
          <WiggleLine color="#7DAACB" width={200} />
        </div>
      </RevealSection>

      <div className="relative">
        <div
          className="absolute left-8 top-12 bottom-12 w-0.5 hidden md:block"
          style={{ borderLeft: "3px dashed #1a1a1a33" }}
        />

        {steps.map((item, i) => (
          <RevealSection key={item.step} delay={i * 120} className="mb-6">
            <div className="flex items-start gap-6 md:gap-8">
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: item.bg,
                    border: "2.5px solid #1a1a1a",
                    boxShadow: "3px 3px 0 #1a1a1a",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "0.9rem",
                    color: "#aaa",
                    fontWeight: 600,
                  }}
                >
                  {item.step}
                </span>
              </div>
              <SketchCard className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: "#555" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <span
                    className="flex-shrink-0 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap"
                    style={{
                      background: "#E8DBB3",
                      border: "2px solid #1a1a1a",
                      fontFamily: "'Caveat', cursive",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.note}
                  </span>
                </div>
              </SketchCard>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
