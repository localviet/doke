import { Bell, Plus } from "lucide-react";
import { feedItems } from "../../data/landingData";
import { SketchCard } from "../landing/shared/SketchCard";

export function ActivityFeed() {
  return (
    <SketchCard className="h-full">
      <div
        className="mb-4 flex items-center justify-between pb-4"
        style={{ borderBottom: "2px dashed #1a1a1a44" }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.65rem",
              fontWeight: 700,
            }}
          >
            Activity feed
          </p>
          <p className="text-sm" style={{ color: "#777" }}>
            Tiny proof that things are getting done.
          </p>
        </div>
        <Bell size={21} color="#1a1a1a" />
      </div>

      <div className="space-y-3">
        {feedItems.map((item) => (
          <div
            key={`${item.name}-${item.task}`}
            className="flex items-center gap-3 rounded-xl p-3 transition-all hover:scale-[1.01]"
            style={{
              background: "#FFFDEB",
              border: "2px solid #1a1a1a44",
            }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg"
              style={{
                background: "#E8DBB3",
                border: "2px solid #1a1a1a",
              }}
            >
              {item.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-tight">
                <span className="font-bold">{item.name}</span>
                <span style={{ color: "#555" }}> {item.task}</span>
              </p>
              <p className="mt-0.5 text-xs" style={{ color: "#999" }}>
                {item.time}
              </p>
            </div>
            <div
              className="rounded-lg px-2.5 py-1 text-xs font-bold"
              style={{
                background: "#7DAACB22",
                border: "1.5px solid #7DAACB",
                color: "#1a6a9a",
                whiteSpace: "nowrap",
              }}
            >
              +{item.points} pts
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all hover:scale-[1.01] active:scale-[0.99]"
        style={{
          background: "#CE2626",
          color: "#FFFDEB",
          border: "2.5px solid #1a1a1a",
          boxShadow: "3px 3px 0 #1a1a1a",
          fontFamily: "'Caveat', cursive",
          fontSize: "1.1rem",
        }}
      >
        <Plus size={16} /> Post what you did
      </button>
    </SketchCard>
  );
}
