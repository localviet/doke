import { testimonials } from "../../data/landingData";
import { RevealSection } from "./shared/RevealSection";
import { StarDoodle } from "./shared/Doodles";

export function SocialProofSection() {
  return (
    <section className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
      <RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <RevealSection key={testimonial.name} delay={i * 100}>
              <div
                className="p-6 rounded-2xl h-full flex flex-col gap-4"
                style={{
                  border: "2.5px solid #1a1a1a",
                  background: i === 1 ? "#7DAACB" : "#FFFDEB",
                  boxShadow: "4px 4px 0 #1a1a1a",
                  color: i === 1 ? "#FFFDEB" : "#1a1a1a",
                }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarDoodle key={j} size={18} color="#E8DBB3" />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.1rem",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs opacity-60">{testimonial.role}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
