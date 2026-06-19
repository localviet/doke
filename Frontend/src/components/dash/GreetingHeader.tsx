import { CalendarDays, Sparkles, Sun } from "lucide-react";
import { SketchCircle, StarDoodle, WiggleLine } from "../landing/shared/Doodles";
import { SketchCard } from "../landing/shared/SketchCard";

const greetings = [
  "Good day",
  "Hey hey",
  "Rise and shine",
  "Howdy",
  "Look who is home",
  "Fresh start",
];

const randomizedGreeting =
  greetings[Math.floor(Math.random() * greetings.length)];

type GreetingHeaderProps = {
  userName?: string;
  roomName: string;
};

export function GreetingHeader({
  userName = "Khang",
  roomName,
}: GreetingHeaderProps) {
  return (
    <div className="relative">
      <SketchCircle
        size={72}
        color="#7DAACB"
        className="float-1 absolute -right-3 -top-6 hidden md:block"
      />
      <StarDoodle
        size={34}
        color="#E8DBB3"
        className="float-2 absolute -left-3 top-4 hidden sm:block"
      />

      <SketchCard accent className="overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#1a1a1a 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold"
              style={{
                background: "#E8DBB3",
                border: "2px solid #1a1a1a",
                color: "#444",
              }}
            >
              <Sun size={15} color="#CE2626" strokeWidth={2.5} />
              Dashboard
            </div>
            <h1
              className="leading-none"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(2.7rem, 7vw, 5rem)",
                fontWeight: 700,
              }}
            >
              {randomizedGreeting}, {userName}
            </h1>
            <WiggleLine color="#CE2626" width={210} className="mt-2" />
            <p
              className="mt-4 max-w-xl text-sm md:text-base"
              style={{ color: "#555" }}
            >
              Today&apos;s little household happenings, chore wins, and friendly
              scoreboard pressure.
            </p>
          </div>

          <div
            className="rounded-2xl p-4"
            style={{
              background: "#FFFDEB",
              border: "2.5px solid #1a1a1a",
              boxShadow: "3px 3px 0 #1a1a1a",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "#7DAACB", border: "2px solid #1a1a1a" }}
              >
                <Sparkles size={19} color="#FFFDEB" strokeWidth={2.5} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-normal"
                  style={{ color: "#888" }}
                >
                  Current room
                </p>
                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                  }}
                >
                  {roomName}
                </p>
              </div>
            </div>
            <div
              className="mt-4 flex items-center gap-2 border-t pt-3 text-sm"
              style={{ borderColor: "#1a1a1a33", color: "#666" }}
            >
              <CalendarDays size={15} />
              June 2026
            </div>
          </div>
        </div>
      </SketchCard>
    </div>
  );
}
