import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import toast from "react-hot-toast";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ destination: "", checkIn: "", checkOut: "", guests: 2 });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.destination) {
      toast.error("Tell us where you're headed.");
      return;
    }
    navigate(`/hotels?destination=${encodeURIComponent(form.destination)}`);
  };

  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          className="hero__bg-image"
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
        />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Independent stays, hand-picked
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Sleep somewhere
          <br />
          <em>worth remembering.</em>
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          1,240 boutique hotels, villas, and riads across 86 cities — each one chosen for character, not
          chain standard.
        </motion.p>

        <motion.form
          className="search-box glass-panel"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <label className="search-field">
            <span><FiMapPin /> Destination</span>
            <input
              name="destination"
              placeholder="Where to?"
              value={form.destination}
              onChange={handleChange}
            />
          </label>
          <span className="search-divider" />
          <label className="search-field">
            <span><FiCalendar /> Check in</span>
            <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} />
          </label>
          <span className="search-divider" />
          <label className="search-field">
            <span><FiCalendar /> Check out</span>
            <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} />
          </label>
          <span className="search-divider" />
          <label className="search-field search-field--guests">
            <span><FiUsers /> Guests</span>
            <input type="number" min="1" max="12" name="guests" value={form.guests} onChange={handleChange} />
          </label>
          <button type="submit" className="btn btn-primary search-submit">
            <FiSearch /> Search
          </button>
        </motion.form>
      </div>
    </section>
  );
}
