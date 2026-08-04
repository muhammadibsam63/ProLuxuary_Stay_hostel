import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHeart, FiUser } from "react-icons/fi";
import { useScrolled } from "../../hooks/useScrolled";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

const NAV_LINKS = [
  { label: "Hotels", to: "/hotels" },
  { label: "Destinations", to: "/destinations" },
  { label: "Offers", to: "/offers" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner container">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand__mark">LS</span>
          <span className="brand__word">
            Luxury Stay<span className="brand__word-accent">Hostel</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            <FiHeart />
          </Link>
          {user ? (
            <button className="icon-btn" aria-label="Dashboard" onClick={() => navigate("/dashboard")}>
              <FiUser />
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Sign in
            </Link>
          )}
          <button
            className="icon-btn nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile"
          >
            <div className="container nav-mobile__list">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={close} className="nav-mobile__link">
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/login" onClick={close} className="nav-mobile__link">
                Sign in
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
