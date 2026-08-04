import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiHeart, FiArrowUpRight } from "react-icons/fi";
import { useWishlist } from "../../context/WishlistContext";
import { hotels } from "../../data/hotels";
import HotelCard from "../../components/hotels/HotelCard";
import "./Wishlist.css";

export default function Wishlist() {
  const { ids } = useWishlist();
  const saved = hotels.filter((h) => ids.includes(h.id));

  return (
    <div className="wishlist-page">
      <Helmet>
        <title>Wishlist — Luxury Stay Hostel</title>
      </Helmet>
      <h1>Your wishlist</h1>
      <p className="overview-sub">Stays you've saved for later.</p>

      {saved.length === 0 ? (
        <div className="wishlist-empty glass-panel">
          <FiHeart size={32} />
          <h3>Nothing saved yet</h3>
          <p>Tap the heart on any hotel to add it here.</p>
          <Link to="/hotels" className="btn btn-primary">
            Browse hotels <FiArrowUpRight />
          </Link>
        </div>
      ) : (
        <div className="hotel-grid">
          {saved.map((hotel, i) => (
            <HotelCard hotel={hotel} index={i} key={hotel.id} />
          ))}
        </div>
      )}
    </div>
  );
}
