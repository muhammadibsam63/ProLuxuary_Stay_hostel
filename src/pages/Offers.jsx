import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import SectionHeading from "../components/common/SectionHeading";
import { hotels } from "../data/hotels";
import { formatCurrency } from "../utils/format";
import "./Offers.css";

const OFFERS = [
  {
    id: "early-bird",
    hotel: hotels[0],
    discount: 20,
    label: "Early Bird",
    copy: "Book 60 days ahead and save on any Santorini suite.",
    expires: "Aug 31, 2026",
  },
  {
    id: "extended-stay",
    hotel: hotels[2],
    discount: 15,
    label: "Extended Stay",
    copy: "Stay 5 nights or more at Riad Nour and save.",
    expires: "Sep 15, 2026",
  },
  {
    id: "shoulder-season",
    hotel: hotels[5],
    discount: 25,
    label: "Shoulder Season",
    copy: "Visit Ubud between rainy seasons at our lowest rate.",
    expires: "Oct 1, 2026",
  },
  {
    id: "last-minute",
    hotel: hotels[4],
    discount: 18,
    label: "Last Minute",
    copy: "Book Alfama House within 7 days of your stay.",
    expires: "Ongoing",
  },
];

export default function Offers() {
  return (
    <div className="container section">
      <Helmet>
        <title>Offers — Luxury Stay Hostel</title>
      </Helmet>
      <SectionHeading
        eyebrow="Limited time"
        title="Current offers"
        description="Seasonal discounts and last-minute rates across our collection."
      />

      <div className="offers-grid">
        {OFFERS.map((offer) => (
          <Link to={`/hotels/${offer.hotel.id}`} className="offer-card" key={offer.id}>
            <div className="offer-card__media">
              <img src={offer.hotel.heroImage} alt={offer.hotel.name} loading="lazy" />
              <span className="offer-card__badge">-{offer.discount}%</span>
            </div>
            <div className="offer-card__body">
              <span className="eyebrow">{offer.label}</span>
              <h3>{offer.hotel.name}</h3>
              <p>{offer.copy}</p>
              <div className="offer-card__footer">
                <span className="offer-card__price">
                  <s>{formatCurrency(offer.hotel.pricePerNight)}</s>{" "}
                  {formatCurrency(Math.round(offer.hotel.pricePerNight * (1 - offer.discount / 100)))}
                  <small> / night</small>
                </span>
                <span className="offer-card__expiry">
                  <FiClock size={12} /> Ends {offer.expires}
                </span>
              </div>
            </div>
            <FiArrowUpRight className="offer-card__arrow" />
          </Link>
        ))}
      </div>
    </div>
  );
}
