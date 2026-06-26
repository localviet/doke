import { ArrowRight, X } from "lucide-react";
import { SketchCard } from "../landing/shared/SketchCard";

export type RoomAction = "host" | "join";

type RoomActionModalProps = {
  action: RoomAction;
  roomName: string;
  roomCode: string;
  error: string;
  loading: boolean;
  onRoomNameChange: (roomName: string) => void;
  onRoomCodeChange: (roomCode: string) => void;
  onClose: () => void;
  onSubmit: () => void;
};

const fieldBaseStyle = {
  border: "2.5px solid #1a1a1a",
  boxShadow: "3px 3px 0 #1a1a1a",
  background: "#FFFDEB",
};

export function RoomActionModal({
  action,
  roomName,
  roomCode,
  error,
  loading,
  onRoomNameChange,
  onRoomCodeChange,
  onClose,
  onSubmit,
}: RoomActionModalProps) {
  const isHosting = action === "host";
  const modalTitle = isHosting ? "Host a room" : "Join a room";
  const modalDescription = isHosting
    ? "Give your shared space a name. You can invite roommates after it is created."
    : "Paste the room code your roommate sent you.";

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center px-5 py-8"
      style={{ background: "rgba(26, 26, 26, 0.38)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-action-title"
    >
      <SketchCard className="w-full max-w-md p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2
              id="room-action-title"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "2.25rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {modalTitle}
            </h2>
            <p className="mt-2 text-sm text-[#666]">{modalDescription}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all hover:scale-105"
            style={{
              background: "#FFFDEB",
              border: "2px solid #1a1a1a",
              boxShadow: "2px 2px 0 #1a1a1a",
            }}
            aria-label="Close room popup"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[#666]">
              {isHosting ? "Room name" : "Room code"}
            </span>
            <input
              type="text"
              value={isHosting ? roomName : roomCode}
              onChange={(event) =>
                isHosting
                  ? onRoomNameChange(event.target.value)
                  : onRoomCodeChange(event.target.value)
              }
              placeholder={isHosting ? "Awesome Apartment" : "APT4B"}
              className="h-12 w-full rounded-xl bg-transparent px-4 text-sm outline-none"
              style={fieldBaseStyle}
              disabled={loading}
            />
          </label>

          {error && (
            <div
              className="rounded-xl px-4 py-3 text-sm font-semibold"
              style={{
                background: "#FEE2E2",
                color: "#991B1B",
                border: "2px solid #1a1a1a",
                boxShadow: "2px 2px 0 #1a1a1a",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 font-bold transition-all hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            style={{
              background: isHosting ? "#CE2626" : "#7DAACB",
              color: "#FFFDEB",
              border: "2.5px solid #1a1a1a",
              boxShadow: loading
                ? "2px 2px 0 #1a1a1a"
                : "4px 4px 0 #1a1a1a",
              fontFamily: "'Caveat', cursive",
              fontSize: "1.25rem",
            }}
          >
            {loading
              ? isHosting
                ? "Creating room..."
                : "Joining room..."
              : isHosting
                ? "Create room"
                : "Join room"}

            {!loading && <ArrowRight size={17} strokeWidth={2.5} />}
          </button>
        </form>
      </SketchCard>
    </div>
  );
}
