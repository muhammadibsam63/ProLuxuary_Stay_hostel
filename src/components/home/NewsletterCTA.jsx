import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "./NewsletterCTA.css";

export default function NewsletterCTA() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner glass-panel">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2>Your next stay is one search away.</h2>
        </div>
        <Link to="/hotels" className="btn btn-primary">
          Browse hotels <FiArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
