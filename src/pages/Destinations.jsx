import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../components/common/SectionHeading";
import { cities } from "../data/hotels";
import "./Destinations.css";

export default function Destinations() {
  return (
    <div className="container section">
      <Helmet>
        <title>Destinations — Luxury Stay Hostel</title>
      </Helmet>
      <SectionHeading
        eyebrow="Where we go"
        title="Destinations"
        description="Every city in our collection, from cliffside Santorini to jungle Ubud."
      />

      <div className="destinations-list">
        {cities.map((city, i) => (
          <Link
            to={`/hotels?destination=${encodeURIComponent(city.name)}`}
            className="destination-row"
            key={city.name}
            style={{ "--stagger": i }}
          >
            <img src={city.image} alt={city.name} loading="lazy" />
            <div className="destination-row__body">
              <h3>{city.name}</h3>
              <span>{city.country}</span>
            </div>
            <span className="destination-row__count">{city.count} stays</span>
            <FiArrowUpRight className="destination-row__arrow" />
          </Link>
        ))}
      </div>
    </div>
  );
}
