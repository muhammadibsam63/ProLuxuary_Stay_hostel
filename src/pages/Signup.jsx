import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Signup() {
  const { signup, loginWithProvider, loading } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    if (!agree) next.agree = "You must accept the terms to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    await signup(name, email);
    navigate("/verify-email");
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>Create account — Luxury Stay Hostel</title>
      </Helmet>
      <div className="auth-card glass-panel">
        <span className="eyebrow">Join us</span>
        <h1>Create your account</h1>
        <p className="auth-sub">Save favorites, book faster, track your trips.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="auth-field">
            <span>Full name</span>
            <div className="auth-input">
              <FiUser />
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Ellis" />
            </div>
            {errors.name && <span className="auth-error">{errors.name}</span>}
          </label>

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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                autoComplete="new-password"
              />
            </div>
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </label>

          <label className="auth-checkbox auth-checkbox--terms">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>
          </label>
          {errors.agree && <span className="auth-error">{errors.agree}</span>}

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="auth-social">
          <button
            className="btn btn-ghost btn-block"
            onClick={async () => {
              await loginWithProvider("Google");
              navigate("/dashboard");
            }}
            disabled={loading}
          >
            <FcGoogle /> Google
          </button>
        </div>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
