import { ArrowLeft, Home, KeyRound, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { GlobalStyles } from "../components/landing/GlobalStyles";
import {
  SketchCircle,
  StarDoodle,
  WiggleLine,
} from "../components/landing/shared/Doodles";
import { SketchCard } from "../components/landing/shared/SketchCard";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

type AuthPageProps = {
  mode: "login" | "signup";
};

const fieldBaseStyle = {
  border: "2.5px solid #1a1a1a",
  boxShadow: "3px 3px 0 #1a1a1a",
  background: "#FFFDEB",
};

export function AuthPage({ mode }: AuthPageProps) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const [wrongLogin, setWrongLogin] = useState(false);
  const [error, setError] = useState("");

  async function ensureProfile(user, name = null) {
    if (!user) throw new Error("No user found");

    const { data: existingProfile, error: fetchError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (fetchError) throw fetchError;

    if (!existingProfile) {
      const { error: insertError } = await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
        name: name,
      });

      if (insertError) throw insertError;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        console.error(error.message);
        setError(error.message);
        setWrongLogin(true);
        return;
      }

      try {
        if (data.user) await ensureProfile(data.user, name);
      } catch (profileError) {
        console.error(profileError);
        setError("Failed to create profile");
        return;
      }

      console.log("Signed up:", data);
      navigate("/email-confirm");
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error(error.message);
        setError(error.message);
        setWrongLogin(true);
        return;
      }

      try {
        if (data.user) {
          await ensureProfile(data.user);
        }
      } catch (profileError) {
        console.error(profileError);
        setError("Failed to load profile");
        return;
      }

      console.log("Logged in:", data);
      navigate("/dashboard");
    }
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 py-8"
      style={{ background: "#FFFDEB", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1a1a1a1f 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute float-1 hidden sm:block"
        style={{ left: "6vw", top: "30vh" }}
      >
        <SketchCircle size={64} color="#7DAACB" />
      </div>
      <div
        className="absolute float-2 hidden sm:block"
        style={{ right: "8vw", top: "18vh" }}
      >
        <StarDoodle size={40} color="#E8DBB3" />
      </div>
      <div
        className="absolute float-3 hidden md:block"
        style={{ left: "18vw", bottom: "10vh" }}
      >
        <StarDoodle size={28} color="#CE2626" />
      </div>
      <div
        className="absolute float-1 hidden lg:block"
        style={{ right: "22vw", bottom: "22vh" }}
      >
        <SketchCircle size={48} color="#E8DBB3" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col">
        <header className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
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
              }}
            >
              doke
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl px-4 py-2 font-semibold transition-all hover:scale-105"
            style={{
              ...fieldBaseStyle,
              fontFamily: "'Caveat', cursive",
              fontSize: "1.05rem",
            }}
          >
            <ArrowLeft size={16} /> Home
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-8 py-12 md:grid-cols-[1fr_0.92fr]">
          <div className="max-w-xl">
            <h1
              className="mb-3 leading-none"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(3rem, 8vw, 5.75rem)",
                fontWeight: 700,
              }}
            >
              {isSignup ? "Make chores fair." : "Back to the board."}
            </h1>
            <div className="mb-6 max-w-sm">
              <WiggleLine
                color={isSignup ? "#CE2626" : "#7DAACB"}
                width={240}
              />
            </div>
          </div>

          <SketchCard className="p-7">
            <div className="mb-6">
              <h2
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "2.25rem",
                  fontWeight: 700,
                }}
              >
                {isSignup ? "Create your account" : "Log in"}
              </h2>
              <p className="mt-1 text-sm text-[#666]">
                {isSignup
                  ? "Set up Doke now. Room creation comes next."
                  : "Use the details you signed up with."}
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {isSignup && (
                <label className="block">
                  <span
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: "#666" }}
                  >
                    Name
                  </span>
                  <div
                    className="flex items-center overflow-hidden"
                    style={{
                      border: "2.5px solid #1a1a1a",
                      borderRadius: 14,
                      boxShadow: "3px 3px 0 #1a1a1a",
                      background: "#FFFDEB",
                      height: 48,
                    }}
                  >
                    <div className="flex items-center justify-center w-11 h-full shrink-0">
                      <User size={18} color="#000000" />
                    </div>
                    <div
                      className="w-px self-stretch my-2 shrink-0"
                      style={{ background: "#ccc" }}
                    />
                    <input
                      name="name"
                      type="text"
                      placeholder="Maya"
                      className="flex-1 h-full bg-transparent outline-none px-3.5 text-sm"
                      style={{ color: "#1a1a1a" }}
                    />
                  </div>
                </label>
              )}

              <label className="block">
                <span
                  className="mb-1.5 block text-sm font-medium"
                  style={{ color: "#666" }}
                >
                  Email
                </span>
                <div
                  className="flex items-center overflow-hidden"
                  style={{
                    border: "2.5px solid #1a1a1a",
                    borderRadius: 14,
                    boxShadow: "3px 3px 0 #1a1a1a",
                    background: "#FFFDEB",
                    height: 48,
                  }}
                >
                  <div className="flex items-center justify-center w-11 h-full shrink-0">
                    <Mail size={18} color="#000000" />
                  </div>
                  <div
                    className="w-px self-stretch my-2 shrink-0"
                    style={{ background: "#ccc" }}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="you@home.com"
                    className="flex-1 h-full bg-transparent outline-none px-3.5 text-sm"
                    style={{ color: "#1a1a1a" }}
                  />
                </div>
              </label>

              <label className="block">
                <span
                  className="mb-1.5 block text-sm font-medium"
                  style={{ color: "#666" }}
                >
                  Password
                </span>
                <div
                  className="flex items-center overflow-hidden"
                  style={{
                    border: "2.5px solid #1a1a1a",
                    borderRadius: 14,
                    boxShadow: "3px 3px 0 #1a1a1a",
                    background: "#FFFDEB",
                    height: 48,
                  }}
                >
                  <div className="flex items-center justify-center w-11 h-full shrink-0">
                    <KeyRound size={18} color="#000000" />
                  </div>
                  <div
                    className="w-px self-stretch my-2 shrink-0"
                    style={{ background: "#ccc" }}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder={
                      isSignup ? "Make it memorable" : "Your password"
                    }
                    className="flex-1 h-full bg-transparent outline-none px-3.5 text-sm"
                    style={{ color: "#1a1a1a" }}
                  />
                </div>
              </label>

              {wrongLogin && <p className="text-red-500 text-sm">{error}</p>}

              {!isSignup && (
                <div className="flex items-center justify-between text-sm pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#CE2626]"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="font-semibold text-[#CE2626]"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-2xl py-4 font-bold transition-all hover:scale-[1.02] active:scale-[0.99] mt-8"
                style={{
                  background: "#CE2626",
                  color: "#FFFDEB",
                  border: "2.5px solid #1a1a1a",
                  boxShadow: "4px 4px 0 #1a1a1a",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.35rem",
                }}
              >
                {isSignup ? "Create account" : "Log in"}
              </button>
            </form>

            <div
              className="mt-6 rounded-2xl p-4"
              style={{
                background: "#7DAACB1f",
                border: "2px dashed #1a1a1a55",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    {isSignup ? "Already have a room?" : "New to Doke?"}
                  </p>
                  <p className="text-sm text-[#666]">
                    {isSignup
                      ? "Join by code after creating your account."
                      : "Create a room and invite everyone in seconds."}
                  </p>
                </div>
                <Link
                  to={isSignup ? "/login" : "/signup"}
                  className="shrink-0 rounded-xl px-4 py-2 font-semibold transition-all hover:scale-105"
                  style={{
                    background: "#E8DBB3",
                    border: "2px solid #1a1a1a",
                    boxShadow: "2px 2px 0 #1a1a1a",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1rem",
                  }}
                >
                  {isSignup ? "Log in" : "Sign up"}
                </Link>
              </div>
            </div>
          </SketchCard>
        </section>
      </div>
    </main>
  );
}
