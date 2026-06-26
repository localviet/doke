import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { AppPreviewSection } from "./components/landing/AppPreviewSection";
import { CtaSection } from "./components/landing/CtaSection";
import { FeaturesSection } from "./components/landing/FeaturesSection";
import { Footer } from "./components/landing/Footer";
import { GlobalStyles } from "./components/landing/GlobalStyles";
import { HeroSection } from "./components/landing/HeroSection";
import { HowItWorksSection } from "./components/landing/HowItWorksSection";
import { Navbar } from "./components/landing/Navbar";
import { RankingsSection } from "./components/landing/RankingsSection";
import { SocialProofSection } from "./components/landing/SocialProofSection";

import ProtectedRoute from "./pages/ProtectedRoute";
import RequireAuth from "./pages/RequireAuth";

import { AuthPage } from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import EmailConfirmation from "./pages/extras/EmailConfirm";
import RoomSelection from "./pages/RoomSelection";

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#FFFDEB", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <Navbar scrollY={scrollY} />
      <HeroSection />
      <AppPreviewSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RankingsSection />
      <SocialProofSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
      <Route path="/email-confirm" element={<EmailConfirmation />} />
      <Route
        path="/room-selection"
        element={
          <RequireAuth>
            <RoomSelection />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
