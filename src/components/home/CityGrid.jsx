import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import "./CityGrid.css";

export default function CityGrid({ cities }) {
  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Where to next"
        title="Popular destinations"
        description="Cities our guests return to again and again."
      />
      <div className="city-grid">
        {cities.map((city, i) => (
          <Link
            to={`/hotels?destination=${encodeURIComponent(city.name)}`}
            className="city-tile"
            key={city.name}
            style={{ "--stagger": i }}
          >
            <img src={city.image} alt={city.name} loading="lazy" />
            <div className="city-tile__overlay">
              <h4>{city.name}</h4>
              <span>{city.count} stays</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
