import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FiHome, FiSearch } from "react-icons/fi";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <Helmet>
        <title>Page not found — Luxury Stay Hostel</title>
      </Helmet>
      <motion.span
        className="not-found__code"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        404
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        This room is unbooked.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
      >
        The page you're looking for doesn't exist or has moved.
      </motion.p>
      <motion.div
        className="not-found__actions"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.26 }}
      >
        <Link to="/" className="btn btn-primary">
          <FiHome /> Back home
        </Link>
        <Link to="/hotels" className="btn btn-ghost">
          <FiSearch /> Browse hotels
        </Link>
      </motion.div>
    </div>
  );
}
