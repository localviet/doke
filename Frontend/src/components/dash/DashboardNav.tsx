import { Home, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { supabase } from "../../lib/supabaseClient.js";

import { Link } from "react-router";

export function DashboardNav() {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error.message);
      return;
    }

    navigate("/", { replace: true });
  }

  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-5 py-4 md:px-10"
      style={{
        background: "rgba(255,253,235,0.94)",
        backdropFilter: "blur(12px)",
        borderBottom: "2.5px solid #1a1a1a",
      }}
    >
      <Link to="/" className="flex items-center gap-2">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            background: "#7DAACB",
            border: "2.5px solid #1a1a1a",
            boxShadow: "2px 2px 0 #1a1a1a",
          }}
        >
          <Home size={19} color="#FFFDEB" strokeWidth={2.5} />
        </div>
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "1.85rem",
            fontWeight: 700,
          }}
        >
          doke
        </span>
      </Link>

      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-2 rounded-xl px-4 py-2 font-semibold transition-all hover:scale-105 active:scale-95"
        style={{
          background: "#CE2626",
          color: "#FFFDEB",
          border: "2.5px solid #1a1a1a",
          boxShadow: "3px 3px 0 #1a1a1a",
          fontFamily: "'Caveat', cursive",
          fontSize: "1.1rem",
        }}
      >
        <LogOut size={16} strokeWidth={2.5} />
        Logout
      </button>
    </nav>
  );
}
