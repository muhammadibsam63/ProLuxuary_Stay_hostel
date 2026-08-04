import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiMail, FiCheckCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
    toast.success("Reset link sent.");
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>Forgot password — Luxury Stay Hostel</title>
      </Helmet>
      <div className="auth-card glass-panel">
        {sent ? (
          <div className="auth-success">
            <FiCheckCircle size={40} />
            <h1>Check your inbox</h1>
            <p className="auth-sub">
              We sent a password reset link to <strong>{email}</strong>. It expires in 30 minutes.
            </p>
            <Link to="/login" className="btn btn-primary btn-block">
              Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <span className="eyebrow">Reset access</span>
            <h1>Forgot your password?</h1>
            <p className="auth-sub">Enter your email and we'll send you a reset link.</p>

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
                  />
                </div>
                {error && <span className="auth-error">{error}</span>}
              </label>

              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? "Sending…" : "Send reset link"}
              </button>
            </form>

            <p className="auth-footer-text">
              Remembered it? <Link to="/login">Sign in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
