import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";
import { supabase } from "../lib/supabaseClient";

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

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

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
