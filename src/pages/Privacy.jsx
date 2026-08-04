import { Helmet } from "react-helmet";
import "./Legal.css";

export default function Privacy() {
  return (
    <div className="container section legal-page">
      <Helmet>
        <title>Privacy Policy — Luxury Stay Hostel</title>
      </Helmet>
      <h1>Privacy Policy</h1>
      <span className="legal-updated">Last updated: July 1, 2026</span>

      <p>
        This Privacy Policy explains how Luxury Stay Hostel ("we", "us") collects, uses, and protects
        information when you use our website and booking services. This is placeholder legal copy — replace
        it with text reviewed by your legal counsel before launch.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Account details you provide, such as name, email, and profile photo.</li>
        <li>Booking details, including stay dates, guest counts, and payment confirmation status.</li>
        <li>Usage data such as pages visited and search filters applied.</li>
      </ul>

      <h2>How we use your information</h2>
      <p>
        We use collected information to process bookings, personalize recommendations, communicate booking
        updates, and improve our platform. We do not sell personal information to third parties.
      </p>

      <h2>Data retention</h2>
      <p>
        Account and booking data is retained for as long as your account is active, or as required to
        comply with legal obligations.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data at any time by
        contacting our support team.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy can be sent to privacy@luxurystayhostel.com.</p>
    </div>
  );
}
