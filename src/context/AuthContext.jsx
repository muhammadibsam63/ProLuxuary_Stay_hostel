import { createContext, useContext, useMemo, useState, useCallback } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

// NOTE: This is a mocked auth layer so the app runs end-to-end without a live
// Firebase project. Swap the three functions below for real Firebase Auth
// calls when you're ready — the context shape (user, login, signup, logout,
// loading) is already what the rest of the app expects.

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setUser({
      uid: "demo-user",
      email,
      displayName: email.split("@")[0],
      photoURL: null,
      emailVerified: true,
    });
    setLoading(false);
    toast.success("Welcome back.");
  }, []);

  const signup = useCallback(async (name, email) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setUser({
      uid: "demo-user",
      email,
      displayName: name,
      photoURL: null,
      emailVerified: false,
    });
    setLoading(false);
    toast.success("Account created. Please verify your email.");
  }, []);

  const loginWithProvider = useCallback(async (provider) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setUser({
      uid: "demo-user",
      email: `guest@${provider}.com`,
      displayName: `Guest via ${provider}`,
      photoURL: null,
      emailVerified: true,
    });
    setLoading(false);
    toast.success(`Signed in with ${provider}.`);
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    toast("Signed out.", { icon: "👋" });
  }, []);

  const value = useMemo(
    () => ({ user, loading, login, signup, loginWithProvider, logout }),
    [user, loading, login, signup, loginWithProvider, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
