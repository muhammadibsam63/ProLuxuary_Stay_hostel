import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useScrolled } from "../../hooks/useScrolled";
import "./BackToTop.css";

export default function BackToTop() {
  const visible = useScrolled(500);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
