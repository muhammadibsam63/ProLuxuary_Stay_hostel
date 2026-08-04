import { Link } from "react-router-dom";
import { FiHeart, FiMapPin } from "react-icons/fi";
import RatingStars from "../common/RatingStars";
import { useWishlist } from "../../context/WishlistContext";
import { formatCurrency } from "../../utils/format";
import "./HotelCard.css";

export default function HotelCard({ hotel, index = 0 }) {
  const { isSaved, toggle } = useWishlist();
  const saved = isSaved(hotel.id);

  return (
    <article className="hotel-card" style={{ "--stagger": index }}>
      <Link to={`/hotels/${hotel.id}`} className="hotel-card__media-link">
        <div className="hotel-card__media">
          <img src={hotel.heroImage} alt={hotel.name} loading="lazy" />
          <span className="hotel-card__category">{hotel.category}</span>
        </div>
      </Link>
      <button
        className={`hotel-card__wishlist ${saved ? "is-saved" : ""}`}
        aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
        onClick={() => toggle(hotel)}
      >
        <FiHeart />
      </button>

      <div className="hotel-card__body">
        <div className="hotel-card__top">
          <h3>
            <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
          </h3>
          <div className="hotel-card__rating">
            <RatingStars rating={hotel.rating} size={12} />
            <span>{hotel.rating}</span>
          </div>
        </div>

        <span className="hotel-card__location">
          <FiMapPin size={13} /> {hotel.city}, {hotel.country}
        </span>

        <p className="hotel-card__tagline">{hotel.tagline}</p>

        <div className="hotel-card__footer">
          <span className="hotel-card__price">
            {formatCurrency(hotel.pricePerNight, hotel.currency)}
            <small> / night</small>
          </span>
          <Link to={`/hotels/${hotel.id}`} className="btn btn-ghost btn-sm">
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
