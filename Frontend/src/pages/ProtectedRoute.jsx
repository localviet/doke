import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    async function getSession() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error.message);
        setSession(null);
        return;
      }

      setSession(data.session);
    }

    getSession();
  }, []);

  // Still checking session
  if (session === undefined) {
    return <div>Loading...</div>;
  }

  // No logged-in user
  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Access Denied</h1>
        <p>You need to be logged in to view the dashboard.</p>

        <Link to="/login" className="px-4 py-2 rounded bg-black text-white">
          Go to Login
        </Link>
      </div>
    );
  }

  // User is logged in
  return children;
}
