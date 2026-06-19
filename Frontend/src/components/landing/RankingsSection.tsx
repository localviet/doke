import { Star, Trophy, Zap } from "lucide-react";
import { leaderboard } from "../../data/landingData";
import { RevealSection } from "./shared/RevealSection";
import { SketchCard } from "./shared/SketchCard";

export function RankingsSection() {
  return (
    <section id="rankings" className="px-6 md:px-12 pb-24 max-w-4xl mx-auto">
      <RevealSection>
        <div className="flex items-start gap-3 mb-8">
          <Trophy
            size={32}
            style={{ color: "#CE2626", flexShrink: 0, marginTop: 4 }}
          />
          <div>
            <h2
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              End-of-month rankings
            </h2>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>
              Who actually pulled their weight? The numbers don't lie.
            </p>
          </div>
        </div>

        <SketchCard>
          <div className="flex items-center justify-between mb-5">
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.1rem",
                color: "#888",
              }}
            >
              June 2026 · APT 4B
            </span>
            <span
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "#E8DBB3", border: "1.5px solid #1a1a1a" }}
            >
              <Zap size={12} color="#CE2626" /> 16 days left
            </span>
          </div>

          <div className="space-y-3">
            {leaderboard.map((person, i) => (
              <div key={person.name} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    background: i === 0 ? "#E8DBB3" : "#FFFDEB",
                    border: "2px solid #1a1a1a",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.1rem",
                  }}
                >
                  {i === 0 ? "👑" : `${i + 1}`}
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <span
                    className="w-16 font-semibold"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1.1rem",
                    }}
                  >
                    {person.name}
                  </span>
                  <div
                    className="flex-1 h-5 rounded-full overflow-hidden"
                    style={{
                      background: "#E8DBB322",
                      border: "2px solid #1a1a1a22",
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(person.points / leaderboard[0].points) * 100}%`,
                        background: person.color,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                  <span
                    className="w-14 text-right font-bold text-sm"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1rem",
                      color: "#555",
                    }}
                  >
                    {person.points} pts
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-5 pt-4 flex items-center gap-2"
            style={{ borderTop: "2px dashed #1a1a1a33" }}
          >
            <Star size={16} style={{ color: "#CE2626" }} />
            <p
              className="text-sm"
              style={{
                color: "#666",
                fontFamily: "'Caveat', cursive",
                fontSize: "1rem",
              }}
            >
              Cleo is currently in the lead — but there's still time, Tom 👀
            </p>
          </div>
        </SketchCard>
      </RevealSection>
    </section>
  );
}
