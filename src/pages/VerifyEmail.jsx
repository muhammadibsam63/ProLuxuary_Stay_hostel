import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function VerifyEmail() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [resending, setResending] = useState(false);

  const handleResend = async () => {
    setResending(true);
    await new Promise((r) => setTimeout(r, 900));
    setResending(false);
    toast.success("Verification email resent.");
  };

  const handleSimulateVerify = () => {
    toast.success("Email verified.");
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>Verify your email — Luxury Stay Hostel</title>
      </Helmet>
      <div className="auth-card glass-panel auth-success">
        <FiMail size={40} />
        <h1>Verify your email</h1>
        <p className="auth-sub">
          We sent a verification link to <strong>{user?.email || "your inbox"}</strong>. Click it to
          activate your account.
        </p>
        <button className="btn btn-primary btn-block" onClick={handleSimulateVerify}>
          I've verified my email
        </button>
        <button className="btn btn-ghost btn-block" onClick={handleResend} disabled={resending}>
          {resending ? "Resending…" : "Resend verification email"}
        </button>
        <p className="auth-footer-text">
          Wrong account? <Link to="/login">Sign in again</Link>
        </p>
      </div>
    </div>
  );
}
