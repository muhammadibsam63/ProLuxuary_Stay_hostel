import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Login() {
  const { login, loginWithProvider, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    toast("Demo mode: any valid-looking email and password signs you in.", { icon: "ℹ️" });
  }, []);

  const validate = () => {
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    await login(email);
    navigate("/dashboard");
  };

  const handleProvider = async (provider) => {
    await loginWithProvider(provider);
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>Sign in — Luxury Stay Hostel</title>
      </Helmet>
      <div className="auth-card glass-panel">
        <span className="eyebrow">Welcome back</span>
        <h1>Sign in to your account</h1>
        <p className="auth-sub">Access your bookings, wishlist, and saved stays.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="auth-field">
            <span>Email</span>
            <div className="auth-input">
              <FiMail />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </label>

          <label className="auth-field">
            <span>Password</span>
            <div className="auth-input">
              <FiLock />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="auth-input__toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </label>

          <div className="auth-row">
            <label className="auth-checkbox">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              Remember me
            </label>
            <Link to="/forgot-password" className="auth-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="auth-social">
          <button className="btn btn-ghost btn-block" onClick={() => handleProvider("Google")} disabled={loading}>
            <FcGoogle /> Google
          </button>
          <button className="btn btn-ghost btn-block" onClick={() => handleProvider("GitHub")} disabled={loading}>
            <FiGithub /> GitHub
          </button>
        </div>

        <p className="auth-footer-text">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}
