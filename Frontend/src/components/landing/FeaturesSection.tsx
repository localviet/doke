import { BarChart3, Hash, ListTodo, PenLine } from "lucide-react";
import { FeatureCard } from "./shared/FeatureCard";
import { RevealSection } from "./shared/RevealSection";
import { WiggleLine } from "./shared/Doodles";

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
      <RevealSection className="text-center mb-14">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-2"
          style={{ color: "#7DAACB" }}
        >
          Everything you need
        </p>
        <h2
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Built for real roommates
        </h2>
        <div className="flex justify-center mt-2">
          <WiggleLine color="#CE2626" width={180} />
        </div>
      </RevealSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <FeatureCard
          delay={0}
          color="#7DAACB"
          icon={<Hash size={22} color="#FFFDEB" strokeWidth={2.5} />}
          title="Room Codes"
          desc="Create a room in seconds. Share your 6-digit code to invite housemates — no accounts required to join."
        />
        <FeatureCard
          delay={80}
          color="#E8DBB3"
          icon={<PenLine size={22} color="#1a1a1a" strokeWidth={2.5} />}
          title="Chore Posts"
          desc="Completed the dishes? Post it. Your roommates see a live feed of who's actually doing the work."
        />
        <FeatureCard
          delay={160}
          color="#CE2626"
          icon={<ListTodo size={22} color="#FFFDEB" strokeWidth={2.5} />}
          title="Shared To-Do"
          desc="One board for all. Add tasks, assign them, mark them done. No more sticky notes going missing."
        />
        <FeatureCard
          delay={240}
          color="#1a1a1a"
          icon={<BarChart3 size={22} color="#FFFDEB" strokeWidth={2.5} />}
          title="Monthly Report"
          desc="End-of-month rankings rank everyone's contributions. Fair, transparent, and a little competitive."
        />
      </div>
    </section>
  );
}
