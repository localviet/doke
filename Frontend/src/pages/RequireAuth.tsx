import type { ReactNode } from "react";
import { Navigate } from "react-router";

import { useAuth } from "../context/useAuth";

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session === null) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
