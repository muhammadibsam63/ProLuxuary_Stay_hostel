import { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiFacebook, FiArrowUpRight } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Footer.css";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Hotels", to: "/hotels" },
      { label: "Destinations", to: "/destinations" },
      { label: "Offers", to: "/offers" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }
    toast.success("You're on the list.");
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="eyebrow">Stay in the know</span>
            <h3>Quiet arrivals, first look at new properties.</h3>
          </div>
          <form className="footer-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe <FiArrowUpRight />
            </button>
          </form>
        </div>

        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <Link to="/" className="brand">
              <span className="brand__mark">LS</span>
              <span className="brand__word">
                Luxury Stay<span className="brand__word-accent">Hostel</span>
              </span>
            </Link>
            <p className="footer-tagline">
              A curated collection of independent hotels, villas, and riads — chosen for character, not chain
              standard.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FiFacebook />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Luxury Stay Hostel. All rights reserved.</span>
          <span className="footer-bottom__mono">Crafted for slow travel.</span>
        </div>
      </div>
    </footer>
  );
}
