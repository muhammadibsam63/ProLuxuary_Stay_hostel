import { useState } from "react";
import { Helmet } from "react-helmet";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import SectionHeading from "../components/common/SectionHeading";
import { hotels } from "../data/hotels";
import "./Gallery.css";

const IMAGES = hotels.flatMap((h) => h.gallery.map((src) => ({ src, alt: h.name, hotelId: h.id })));

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <div className="container section">
      <Helmet>
        <title>Gallery — Luxury Stay Hostel</title>
      </Helmet>
      <SectionHeading
        eyebrow="A visual tour"
        title="Gallery"
        description="A look inside the properties in our collection."
      />

      <div className="gallery-grid">
        {IMAGES.map((img, i) => (
          <button className="gallery-tile" key={i} onClick={() => setActive(img)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active.src}
              alt={active.alt}
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Close">
              <FiX />
            </button>
            <span className="lightbox__caption">{active.alt}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
