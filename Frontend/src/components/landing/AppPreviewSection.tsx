import { useState } from "react";
import { Bell, CheckCircle2, Hash, Home, Plus } from "lucide-react";
import { Link } from "react-router";
import { feedItems, todoItems } from "../../data/landingData";
import { RevealSection } from "./shared/RevealSection";
import { SketchCard } from "./shared/SketchCard";

type PreviewTab = "feed" | "todo";

export function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("feed");

  return (
    <section className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
      <RevealSection>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            {(["feed", "todo"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-xl font-semibold transition-all"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.1rem",
                  background: activeTab === tab ? "#7DAACB" : "transparent",
                  color: activeTab === tab ? "#FFFDEB" : "#1a1a1a",
                  border: "2.5px solid #1a1a1a",
                  boxShadow: activeTab === tab ? "3px 3px 0 #1a1a1a" : "none",
                  transform: activeTab === tab ? "translateY(-2px)" : "none",
                }}
              >
                {tab === "feed" ? "📰 Activity Feed" : "✅ Shared To-Do"}
              </button>
            ))}
          </div>

          <SketchCard className="overflow-hidden">
            <div
              className="flex items-center justify-between pb-4 mb-4"
              style={{ borderBottom: "2px dashed #1a1a1a44" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "#7DAACB",
                    border: "2px solid #1a1a1a",
                  }}
                >
                  <Home size={18} color="#FFFDEB" />
                </div>
                <div>
                  <p
                    className="font-bold leading-tight"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1.25rem",
                    }}
                  >
                    APT 4B 🏠
                  </p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    4 roommates · June 2026
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                  style={{
                    background: "#E8DBB3",
                    border: "2px solid #1a1a1a",
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  <Hash size={14} />
                  <span className="text-sm font-semibold">APT4B</span>
                </div>
                <Bell size={20} style={{ color: "#1a1a1a" }} />
              </div>
            </div>

            {activeTab === "feed" && (
              <div className="space-y-3">
                {feedItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.01]"
                    style={{
                      background: "#FFFDEB",
                      border: "2px solid #1a1a1a44",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{
                        background: "#E8DBB3",
                        border: "2px solid #1a1a1a",
                        minWidth: 40,
                      }}
                    >
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-tight">
                        <span className="font-bold">{item.name}</span>
                        <span style={{ color: "#555" }}> {item.task}</span>
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#999" }}>
                        {item.time}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold"
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
                <Link
                  to="/signup"
                  className="w-full mt-2 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
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
                </Link>
              </div>
            )}

            {activeTab === "todo" && (
              <div className="space-y-3">
                {todoItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.01]"
                    style={{
                      background: item.done ? "#7DAACB18" : "#FFFDEB",
                      border: `2px solid ${item.urgent ? "#CE2626" : "#1a1a1a44"}`,
                      opacity: item.done ? 0.65 : 1,
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center"
                      style={{
                        border: "2px solid #1a1a1a",
                        background: item.done ? "#7DAACB" : "transparent",
                        minWidth: 24,
                      }}
                    >
                      {item.done && (
                        <CheckCircle2
                          size={14}
                          color="#FFFDEB"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium leading-tight"
                        style={{
                          textDecoration: item.done ? "line-through" : "none",
                          color: item.done ? "#999" : "#1a1a1a",
                        }}
                      >
                        {item.task}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#999" }}>
                        → {item.assignee}
                      </p>
                    </div>
                    {item.urgent && (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-md"
                        style={{
                          background: "#CE262618",
                          color: "#CE2626",
                          border: "1.5px solid #CE2626",
                        }}
                      >
                        urgent
                      </span>
                    )}
                  </div>
                ))}
                <Link
                  to="/signup"
                  className="w-full mt-2 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: "#7DAACB",
                    color: "#FFFDEB",
                    border: "2.5px solid #1a1a1a",
                    boxShadow: "3px 3px 0 #1a1a1a",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.1rem",
                  }}
                >
                  <Plus size={16} /> Add a task
                </Link>
              </div>
            )}
          </SketchCard>
        </div>
      </RevealSection>
    </section>
  );
}
