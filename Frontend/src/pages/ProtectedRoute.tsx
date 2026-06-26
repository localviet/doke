import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router";
import { supabase } from "../lib/supabaseClient";

type Profile = {
  room_id: string | null;
};

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { session, user, loading: authLoading } = useAuth();

  const [profile, setProfile] = useState<Profile | null | undefined>(undefined);

  useEffect(() => {
    async function getProfile() {
      if (authLoading) return;

      if (!user) {
        setProfile(null);
        return;
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("room_id")
        .eq("id", user.id)
        .maybeSingle();

      if (profileError) {
        console.error(profileError.message);
        setProfile(null);
        return;
      }

      setProfile(profileData);
    }

    getProfile();
  }, [user, authLoading]);

  if (authLoading || profile === undefined) {
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
