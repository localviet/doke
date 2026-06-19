import { Star, Trophy, Zap } from "lucide-react";
import { leaderboard } from "../../data/landingData";
import { SketchCard } from "../landing/shared/SketchCard";

export function DashboardLeaderboard() {
  return (
    <SketchCard>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Trophy size={30} color="#CE2626" strokeWidth={2.4} />
          <div>
            <h2
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "2rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Room leaderboard
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#666" }}>
              June points for Awesome Apartment.
            </p>
          </div>
        </div>
        <span
          className="hidden items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold sm:flex"
          style={{ background: "#E8DBB3", border: "1.5px solid #1a1a1a" }}
        >
          <Zap size={12} color="#CE2626" /> 16 days left
        </span>
      </div>

      <div className="space-y-3">
        {leaderboard.map((person, index) => (
          <div key={person.name} className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-bold"
              style={{
                background: index === 0 ? "#E8DBB3" : "#FFFDEB",
                border: "2px solid #1a1a1a",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.15rem",
              }}
            >
              {index === 0 ? "1" : index + 1}
            </div>
            <span
              className="w-16 shrink-0 font-semibold"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.12rem",
              }}
            >
              {person.name}
            </span>
            <div
              className="h-5 min-w-0 flex-1 overflow-hidden rounded-full"
              style={{
                background: "#E8DBB322",
                border: "2px solid #1a1a1a22",
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(person.points / leaderboard[0].points) * 100}%`,
                  background: person.color,
                  opacity: 0.82,
                }}
              />
            </div>
            <span
              className="w-14 text-right text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1rem",
                color: "#555",
              }}
            >
              {person.points}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mt-5 flex items-center gap-2 pt-4"
        style={{ borderTop: "2px dashed #1a1a1a33" }}
      >
        <Star size={16} color="#CE2626" />
        <p
          className="text-sm"
          style={{
            color: "#666",
            fontFamily: "'Caveat', cursive",
            fontSize: "1rem",
          }}
        >
          Cleo is in first, but this month is still wide open.
        </p>
      </div>
    </SketchCard>
  );
}
