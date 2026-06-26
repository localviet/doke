import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";
import { supabase } from "../lib/supabaseClient";

type Profile = {
  room_id: string | null;
};

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);

  useEffect(() => {
    async function getSessionAndProfile() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error.message);
        setSession(null);
        setProfile(null);
        return;
      }

      const currentSession = data.session;
      setSession(currentSession);

      if (!currentSession) {
        setProfile(null);
        return;
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("room_id")
        .eq("id", currentSession.user.id)
        .maybeSingle();

      if (profileError) {
        console.error(profileError.message);
        setProfile(null);
        return;
      }

      setProfile(profileData);
    }

    getSessionAndProfile();
  }, []);

  if (session === undefined || profile === undefined) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (!profile?.room_id) {
    return <Navigate to="/room-selection" replace />;
  }

  return children;
}
