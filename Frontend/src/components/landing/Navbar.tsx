import { Home } from "lucide-react";
import { Link } from "react-router";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Rankings", href: "#rankings" },
];

type NavbarProps = {
  scrollY: number;
};

export function Navbar({ scrollY }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        background: scrollY > 40 ? "rgba(255,253,235,0.92)" : "transparent",
        backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
        borderBottom: scrollY > 40 ? "2px solid #1a1a1a" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Link to="/" className="flex items-center gap-2">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
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
            letterSpacing: "-0.5px",
          }}
        >
          doke
        </span>
      </Link>
      <div
        className="hidden md:flex items-center gap-8"
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(item.href)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative group transition-opacity hover:opacity-70"
            style={{ color: "#1a1a1a" }}
          >
            {item.label}
            <span
              className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              style={{ background: "#CE2626", height: 2 }}
            />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="hidden sm:block px-5 py-2 rounded-xl font-semibold transition-all hover:scale-105"
          style={{
            background: "transparent",
            color: "#1a1a1a",
            border: "2.5px solid #1a1a1a",
            boxShadow: "3px 3px 0 #1a1a1a",
            fontFamily: "'Caveat', cursive",
            fontSize: "1.1rem",
          }}
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="px-5 py-2 rounded-xl font-semibold transition-all hover:scale-105"
          style={{
            background: "#CE2626",
            color: "#FFFDEB",
            border: "2.5px solid #1a1a1a",
            boxShadow: "3px 3px 0 #1a1a1a",
            fontFamily: "'Caveat', cursive",
            fontSize: "1.1rem",
          }}
        >
          Get started →
        </Link>
      </div>
    </nav>
  );
}
