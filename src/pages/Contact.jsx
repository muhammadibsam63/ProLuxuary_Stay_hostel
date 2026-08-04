import { useState } from "react";
import { Helmet } from "react-helmet";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import SectionHeading from "../components/common/SectionHeading";
import "./Contact.css";

// EmailJS integration point: swap the mocked submit below for emailjs.send(
// SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY) once you add your
// EmailJS credentials as environment variables.

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast.success("Message sent — we'll reply within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container section">
      <Helmet>
        <title>Contact — Luxury Stay Hostel</title>
      </Helmet>
      <SectionHeading eyebrow="Get in touch" title="We're here to help" />

      <div className="contact-layout">
        <form className="contact-form glass-panel" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <label className="auth-field">
              <span>Name</span>
              <div className="auth-input">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              </div>
              {errors.name && <span className="auth-error">{errors.name}</span>}
            </label>
            <label className="auth-field">
              <span>Email</span>
              <div className="auth-input">
                <input name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
              </div>
              {errors.email && <span className="auth-error">{errors.email}</span>}
            </label>
          </div>
          <label className="auth-field">
            <span>Subject</span>
            <div className="auth-input">
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" />
            </div>
          </label>
          <label className="auth-field">
            <span>Message</span>
            <div className="auth-input auth-input--textarea">
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more..."
              />
            </div>
            {errors.message && <span className="auth-error">{errors.message}</span>}
          </label>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? "Sending…" : "Send message"} <FiSend size={14} />
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-info__item glass-panel">
            <FiMail />
            <div>
              <span>Email us</span>
              <a href="mailto:hello@luxurystayhostel.com">hello@luxurystayhostel.com</a>
            </div>
          </div>
          <div className="contact-info__item glass-panel">
            <FiPhone />
            <div>
              <span>Call us</span>
              <a href="tel:+18005550134">+1 (800) 555-0134</a>
            </div>
          </div>
          <div className="contact-info__item glass-panel">
            <FiMapPin />
            <div>
              <span>Headquarters</span>
              <p>44 Ellery Street, Lisbon, Portugal</p>
            </div>
          </div>
          <div className="contact-map glass-panel">
            <FiMapPin size={22} />
            <span>Map view</span>
          </div>
        </div>
      </div>
    </div>
  );
}
