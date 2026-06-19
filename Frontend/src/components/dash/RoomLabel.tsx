import { Hash, Home } from "lucide-react";

type RoomLabelProps = {
  roomName: string;
};

export function RoomLabel({ roomName }: RoomLabelProps) {
  return (
    <div
      className="flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between"
      style={{
        background: "#E8DBB3",
        border: "2.5px solid #1a1a1a",
        boxShadow: "4px 4px 0 #1a1a1a",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: "#FFFDEB", border: "2px solid #1a1a1a" }}
        >
          <Home size={18} color="#CE2626" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase" style={{ color: "#666" }}>
            You are currently in
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
        className="inline-flex w-fit items-center gap-2 rounded-xl px-3 py-2"
        style={{
          background: "#FFFDEB",
          border: "2px solid #1a1a1a",
          fontFamily: "'Caveat', cursive",
          fontSize: "1.05rem",
          fontWeight: 700,
        }}
      >
        <Hash size={15} />
        AWESOME
      </div>
    </div>
  );
}
