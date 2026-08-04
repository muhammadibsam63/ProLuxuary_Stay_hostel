import { Helmet } from "react-helmet";
import "./Legal.css";

export default function Terms() {
  return (
    <div className="container section legal-page">
      <Helmet>
        <title>Terms of Service — Luxury Stay Hostel</title>
      </Helmet>
      <h1>Terms of Service</h1>
      <span className="legal-updated">Last updated: July 1, 2026</span>

      <p>
        These Terms govern your use of Luxury Stay Hostel. This is placeholder legal copy — replace it with
        text reviewed by your legal counsel before launch.
      </p>

      <h2>Bookings</h2>
      <p>
        Bookings made through our platform are subject to the cancellation and payment policy shown on each
        property page at the time of booking. We act as an intermediary between guests and independent
        hosts.
      </p>

      <h2>Account responsibilities</h2>
      <ul>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li>You must provide accurate information when creating an account or making a booking.</li>
        <li>Misuse of the platform, including fraudulent bookings, may result in account suspension.</li>
      </ul>

      <h2>Limitation of liability</h2>
      <p>
        Luxury Stay Hostel is not liable for the condition, safety, or legality of properties listed by
        independent hosts, beyond the guarantees stated in our guest protection policy.
      </p>

      <h2>Changes to these terms</h2>
      <p>We may update these Terms periodically. Continued use of the platform constitutes acceptance.</p>
    </div>
  );
}
