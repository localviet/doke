import { ArrowRight, DoorOpen, Home, Plus, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { GlobalStyles } from "../components/landing/GlobalStyles";
import {
  SketchCircle,
  StarDoodle,
  WiggleLine,
} from "../components/landing/shared/Doodles";
import { SketchCard } from "../components/landing/shared/SketchCard";
import {
  RoomActionModal,
  type RoomAction,
} from "../components/roomSelect/RoomActionModal";
import { createRoom, joinRoom } from "../components/roomSelect/roomActions";

export default function RoomSelection() {
  const [activeAction, setActiveAction] = useState<RoomAction | null>(null);
  const [roomName, setRoomName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleCreateRoom = async () => {
    setLoading(true);
    setError("");

    try {
      if (!roomName.trim()) {
        setError("Room name is required");
        return;
      }

      await createRoom(roomName);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to create room");
    } finally {
      setLoading(false);
    }
  };

  const handleJoinRoom = async () => {
    setLoading(true);
    setError("");

    try {
      if (!roomCode.trim()) {
        setError("Room code is required");
        return;
      }

      try {
        await joinRoom(roomCode);
      } catch (error) {
        if (error instanceof Error && error.message === "Room not found") {
          setError("Room not found");
          return;
        }

        throw error;
      }

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to join room");
    } finally {
      setLoading(false);
    }
  };

  const handleRoomActionSubmit = () => {
    if (activeAction === "host") {
      handleCreateRoom();
    } else {
      handleJoinRoom();
    }
  };

  return (
    <main
      className="fixed inset-0 overflow-hidden px-5 py-5 sm:px-6 sm:py-6"
      style={{ background: "#FFFDEB", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#1a1a1a1f 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="float-1 absolute hidden sm:block"
        style={{ left: "7vw", top: "24vh" }}
      >
        <SketchCircle size={68} color="#7DAACB" />
      </div>
      <div
        className="float-2 absolute hidden sm:block"
        style={{ right: "12vw", top: "22vh" }}
      >
        <StarDoodle size={42} color="#E8DBB3" />
      </div>
      <div
        className="float-3 absolute hidden md:block"
        style={{ left: "18vw", bottom: "12vh" }}
      >
        <StarDoodle size={30} color="#CE2626" />
      </div>
      <div
        className="float-1 absolute hidden lg:block"
        style={{ right: "22vw", bottom: "16vh" }}
      >
        <SketchCircle size={54} color="#E8DBB3" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col">
        <header className="flex items-center justify-end">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{
                background: "#7DAACB",
                border: "2.5px solid #1a1a1a",
                boxShadow: "2px 2px 0 #1a1a1a",
              }}
            >
              <Home size={18} color="#FFFDEB" strokeWidth={2.5} />
            </div>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.75rem",
                fontWeight: 700,
              }}
            >
              doke
            </span>
          </Link>
        </header>

        <section className="grid min-h-0 flex-1 place-items-center py-3 sm:py-4">
          <SketchCard className="w-full max-w-2xl p-5 sm:p-6 md:p-7" accent>
            <div className="mx-auto max-w-2xl text-center">
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14"
                style={{
                  background: "#E8DBB3",
                  border: "2.5px solid #1a1a1a",
                  boxShadow: "3px 3px 0 #1a1a1a",
                }}
              >
                <DoorOpen size={26} color="#CE2626" strokeWidth={2.5} />
              </div>
              <h1
                className="leading-none"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(2.5rem, 7vw, 4.35rem)",
                  fontWeight: 700,
                }}
              >
                Looks like you&apos;re not in a room.
              </h1>
              <div className="mx-auto mt-2 max-w-sm">
                <WiggleLine color="#CE2626" width={220} />
              </div>
              <p className="mx-auto mt-3 max-w-lg text-sm text-[#555]">
                Start a new home base for your roommates, or jump into an
                existing one with a room code.
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setActiveAction("host")}
                className="group rounded-2xl p-4 text-left transition-all hover:-translate-y-1 active:translate-y-0"
                style={{
                  background: "#7DAACB",
                  color: "#FFFDEB",
                  border: "2.5px solid #1a1a1a",
                  boxShadow: "4px 4px 0 #1a1a1a",
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: "#FFFDEB",
                      border: "2px solid #1a1a1a",
                    }}
                  >
                    <Plus size={22} color="#CE2626" strokeWidth={2.5} />
                  </div>
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                    strokeWidth={2.5}
                  />
                </div>
                <h2
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  Create / host a room
                </h2>
                <p className="mt-1.5 text-sm text-[#FFFDEB] opacity-90">
                  Make the room, name it, and bring the crew in.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setActiveAction("join")}
                className="group rounded-2xl p-4 text-left transition-all hover:-translate-y-1 active:translate-y-0"
                style={{
                  background: "#E8DBB3",
                  color: "#1a1a1a",
                  border: "2.5px solid #1a1a1a",
                  boxShadow: "4px 4px 0 #1a1a1a",
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: "#FFFDEB",
                      border: "2px solid #1a1a1a",
                    }}
                  >
                    <Users size={22} color="#7DAACB" strokeWidth={2.5} />
                  </div>
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                    strokeWidth={2.5}
                  />
                </div>
                <h2
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  Join a room
                </h2>
                <p className="mt-1.5 text-sm text-[#555]">
                  Already invited? Enter the code and settle in.
                </p>
              </button>
            </div>
          </SketchCard>
        </section>
      </div>

      {activeAction && (
        <RoomActionModal
          action={activeAction}
          roomName={roomName}
          roomCode={roomCode}
          error={error}
          loading={loading}
          onRoomNameChange={setRoomName}
          onRoomCodeChange={setRoomCode}
          onClose={() => setActiveAction(null)}
          onSubmit={handleRoomActionSubmit}
        />
      )}
    </main>
  );
}
