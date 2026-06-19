import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-10"
      style={{ borderTop: "2.5px solid #1a1a1a", background: "#FFFDEB" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "#7DAACB", border: "2px solid #1a1a1a" }}
          >
            <Home size={16} color="#FFFDEB" strokeWidth={2.5} />
          </div>
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            doke
          </span>
        </div>
        <p
          className="text-xs"
          style={{
            color: "#aaa",
            fontFamily: "'Caveat', cursive",
            fontSize: "0.95rem",
          }}
        >
          Made for roommates everywhere 🏠 · 2026
        </p>
        <div
          className="flex gap-6 text-sm"
          style={{
            color: "#888",
            fontFamily: "'Caveat', cursive",
            fontSize: "1rem",
          }}
        >
          <a href="#" className="hover:opacity-60 transition-opacity">
            Privacy
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Terms
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
