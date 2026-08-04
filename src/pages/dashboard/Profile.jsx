import { useState } from "react";
import { Helmet } from "react-helmet";
import { FiCamera, FiLock } from "react-icons/fi";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveProfile = (e) => {
    e.preventDefault();
    toast.success("Profile updated.");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters.");
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    toast.success("Password changed.");
  };

  return (
    <div className="profile-page">
      <Helmet>
        <title>Profile — Luxury Stay Hostel</title>
      </Helmet>
      <h1>Profile settings</h1>
      <p className="overview-sub">Manage how you appear and how you sign in.</p>

      <div className="profile-cover glass-panel">
        <div className="profile-cover__banner" />
        <div className="profile-cover__avatar">
          <span>{name?.[0]?.toUpperCase() || "G"}</span>
          <button className="profile-cover__avatar-edit" aria-label="Change photo" onClick={() => toast("Photo upload is a demo action.", { icon: "📷" })}>
            <FiCamera />
          </button>
        </div>
      </div>

      <div className="profile-grid">
        <form className="profile-card glass-panel" onSubmit={handleSaveProfile}>
          <h3>Personal information</h3>
          <label className="auth-field">
            <span>Full name</span>
            <div className="auth-input">
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </label>
          <label className="auth-field">
            <span>Email</span>
            <div className="auth-input">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </label>
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </form>

        <form className="profile-card glass-panel" onSubmit={handleChangePassword}>
          <h3>
            <FiLock size={15} /> Security
          </h3>
          <label className="auth-field">
            <span>Current password</span>
            <div className="auth-input">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
          </label>
          <label className="auth-field">
            <span>New password</span>
            <div className="auth-input">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
              />
            </div>
          </label>
          <button type="submit" className="btn btn-ghost">
            Update password
          </button>
        </form>
      </div>
    </div>
  );
}
