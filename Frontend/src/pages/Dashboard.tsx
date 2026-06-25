import { ActivityFeed } from "../components/dash/ActivityFeed";
import { DashboardLeaderboard } from "../components/dash/DashboardLeaderboard";
import { DashboardNav } from "../components/dash/DashboardNav";
import { GreetingHeader } from "../components/dash/GreetingHeader";
import { RoomLabel } from "../components/dash/RoomLabel";
import { SharedTodo } from "../components/dash/SharedTodo";
import { GlobalStyles } from "../components/landing/GlobalStyles";

const roomName = "Awesome Apartment";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen overflow-x-hidden pb-16"
      style={{
        background: "radial-gradient(#1a1a1a12 1px, transparent 1px), #FFFDEB",
        backgroundSize: "22px 22px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <GlobalStyles />
      <DashboardNav />

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pt-8 md:px-10 md:pt-10">
        <GreetingHeader roomName={roomName} />
        <RoomLabel roomName={roomName} />

        <section className="grid gap-6 lg:grid-cols-2">
          <ActivityFeed />
          <SharedTodo />
        </section>

        <section>
          <DashboardLeaderboard />
        </section>
      </main>
    </div>
  );
}
