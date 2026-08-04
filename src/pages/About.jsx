import { Helmet } from "react-helmet";
import { FiCompass, FiFeather, FiHeart, FiShield } from "react-icons/fi";
import SectionHeading from "../components/common/SectionHeading";
import "./About.css";

const VALUES = [
  { icon: FiCompass, title: "Curated, not crowdsourced", body: "Every property is visited and vetted by our editorial team before it's listed." },
  { icon: FiFeather, title: "Character over chain standard", body: "We favor independent hotels, riads, and villas with a story to tell." },
  { icon: FiHeart, title: "Hospitality first", body: "Our concierge team is reachable around the clock, in the language you speak." },
  { icon: FiShield, title: "Booking you can trust", body: "Transparent pricing, flexible cancellation windows, and verified reviews only." },
];

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About — Luxury Stay Hostel</title>
      </Helmet>

      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">Our story</span>
          <h1>We started with one bad hotel booking.</h1>
          <p>
            In 2019, our founders arrived at a "boutique hotel" that looked nothing like its photos. Luxury
            Stay Hostel began as a spreadsheet of properties they'd actually stayed in and trusted — it's
            grown into a collection of over a thousand independent stays across 86 cities, each one
            personally reviewed.
          </p>
        </div>
      </section>

      <section className="section container about-values">
        <SectionHeading eyebrow="What we stand for" title="Four things we don't compromise on" />
        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="value-card glass-panel" key={v.title}>
              <v.icon size={22} />
              <h4>{v.title}</h4>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container about-team">
        <SectionHeading eyebrow="Behind the desk" title="A small team, obsessed with the details" />
        <p className="about-team__copy">
          We're a team of former hoteliers, travel writers, and engineers spread across nine countries.
          Most of us still spend a week a month visiting new properties — because a review is only as good
          as the person who wrote it.
        </p>
      </section>
    </div>
  );
}
