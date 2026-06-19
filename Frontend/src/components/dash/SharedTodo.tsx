import { CheckCircle2, ClipboardList, Plus } from "lucide-react";
import { todoItems } from "../../data/landingData";
import { SketchCard } from "../landing/shared/SketchCard";

export function SharedTodo() {
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
            Shared to-do
          </p>
          <p className="text-sm" style={{ color: "#777" }}>
            The household list everyone can see.
          </p>
        </div>
        <ClipboardList size={22} color="#CE2626" />
      </div>

      <div className="space-y-3">
        {todoItems.map((item) => (
          <div
            key={item.task}
            className="flex items-center gap-3 rounded-xl p-3 transition-all hover:scale-[1.01]"
            style={{
              background: item.done ? "#7DAACB18" : "#FFFDEB",
              border: `2px solid ${item.urgent ? "#CE2626" : "#1a1a1a44"}`,
              opacity: item.done ? 0.68 : 1,
            }}
          >
            <div
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
              style={{
                border: "2px solid #1a1a1a",
                background: item.done ? "#7DAACB" : "transparent",
              }}
            >
              {item.done && (
                <CheckCircle2 size={14} color="#FFFDEB" strokeWidth={3} />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="text-sm font-medium leading-tight"
                style={{
                  textDecoration: item.done ? "line-through" : "none",
                  color: item.done ? "#999" : "#1a1a1a",
                }}
              >
                {item.task}
              </p>
              <p className="mt-0.5 text-xs" style={{ color: "#999" }}>
                assigned to {item.assignee}
              </p>
            </div>
            {item.urgent && (
              <span
                className="rounded-md px-2 py-0.5 text-xs font-bold"
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
      </div>

      <button
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all hover:scale-[1.01] active:scale-[0.99]"
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
      </button>
    </SketchCard>
  );
}
