import { ArrowRight, DoorOpen, Home, Plus, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { GlobalStyles } from "../components/landing/GlobalStyles";
import {
  SketchCircle,
  StarDoodle,
  WiggleLine,
} from "../components/landing/shared/Doodles";
import { SketchCard } from "../components/landing/shared/SketchCard";
import { supabase } from "../lib/supabaseClient";
type RoomAction = "host" | "join";

const fieldBaseStyle = {
  border: "2.5px solid #1a1a1a",
  boxShadow: "3px 3px 0 #1a1a1a",
  background: "#FFFDEB",
};

export default function RoomSelection() {
  const [activeAction, setActiveAction] = useState<RoomAction | null>(null);
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const getCurrentUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      throw new Error("User not logged in");
    }

    return user;
  };
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const isHosting = activeAction === "host";
  const modalTitle = isHosting ? "Host a room" : "Join a room";
  const modalDescription = isHosting
    ? "Give your shared space a name. You can invite roommates after it is created."
    : "Paste the room code your roommate sent you.";

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleCreateRoom = async () => {
    setLoading(true);
    setError("");

    try {
      const user = await getCurrentUser();
      if (!roomName.trim()) {
        setError("Room name is required");
        return;
      }
      const roomCode = generateRoomCode();

      const { data: room, error: roomError } = await supabase
        .from("rooms")
        .insert({
          name: roomName.trim(),
          code: roomCode,
          created_by: user.id,
        })
        .select()
        .single();
      if (roomError) throw roomError;

      const { error: profileError } = await supabase
        .from("profiles")
        .update({ room_id: room.id })
        .eq("id", user.id);

      if (profileError) throw profileError;

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
      const user = await getCurrentUser();
      if (!roomCode.trim()) {
        setError("Room code is required");
        return;
      }

      const { data: room, error: roomError } = await supabase
        .from("rooms")
        .select()
        .eq("code", roomCode.trim())
        .single();
      if (roomError || !room) {
        setError("Room not found");
        return;
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .update({ room_id: room.id })
        .eq("id", user.id);

      if (profileError) throw profileError;

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to join room");
    } finally {
      setLoading(false);
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
                onClick={() => setActiveAction(null)}
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

                if (isHosting) {
                  handleCreateRoom();
                } else {
                  handleJoinRoom();
                }
              }}
            >
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[#666]">
                  {isHosting ? "Room name" : "Room code"}
                </span>
                <input
                  type="text"
                  value={isHosting ? roomName : roomCode}
                  onChange={(e) =>
                    isHosting
                      ? setRoomName(e.target.value)
                      : setRoomCode(e.target.value)
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
      )}
    </main>
  );
}
