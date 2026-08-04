import { useState } from "react";
import { Helmet } from "react-helmet";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading";
import "./FAQ.css";

const FAQS = [
  {
    q: "How does Luxury Stay Hostel choose its properties?",
    a: "Every hotel, villa, and riad in our collection is visited in person by our editorial team before it's listed, and revisited periodically to make sure standards hold.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Most bookings offer free cancellation up to 48 hours before check-in. Exact terms are shown on each property page before you confirm.",
  },
  {
    q: "Is payment required at the time of booking?",
    a: "For most properties, you'll only be charged once your stay is confirmed by the host — usually within 24 hours of booking.",
  },
  {
    q: "Do you offer group or extended-stay discounts?",
    a: "Yes. Many properties offer reduced nightly rates for stays of 5+ nights, shown automatically in your price summary.",
  },
  {
    q: "What if the property doesn't match its listing?",
    a: "Contact our support team within 24 hours of check-in and we'll help relocate you or issue a refund, per our guest guarantee.",
  },
  {
    q: "How do I contact my host directly?",
    a: "Once a booking is confirmed, a messaging thread with your host opens automatically in your Dashboard.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="container section faq-page">
      <Helmet>
        <title>FAQ — Luxury Stay Hostel</title>
      </Helmet>
      <SectionHeading eyebrow="Support" title="Frequently asked questions" />

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div className={`faq-item ${open === i ? "is-open" : ""}`} key={item.q}>
            <button className="faq-item__question" onClick={() => setOpen(open === i ? -1 : i)}>
              {item.q}
              {open === i ? <FiMinus /> : <FiPlus />}
            </button>
            {open === i && <p className="faq-item__answer">{item.a}</p>}
          </div>
        ))}
      </div>

      <div className="faq-cta glass-panel">
        <h3>Still have questions?</h3>
        <p>Our support team responds within a few hours, every day.</p>
        <Link to="/contact" className="btn btn-primary">
          Contact support
        </Link>
      </div>
    </div>
  );
}
