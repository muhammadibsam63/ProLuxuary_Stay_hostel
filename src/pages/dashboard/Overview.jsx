import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiCalendar, FiHeart, FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { hotels } from "../../data/hotels";
import { formatCurrency } from "../../utils/format";
import "./Overview.css";

const MOCK_BOOKINGS = [
  { id: "b1", hotelId: hotels[0].id, status: "Upcoming", checkIn: "2026-09-14", checkOut: "2026-09-19" },
  { id: "b2", hotelId: hotels[2].id, status: "Completed", checkIn: "2026-04-02", checkOut: "2026-04-06" },
];

export default function Overview() {
  const { user } = useAuth();
  const { ids } = useWishlist();
  const firstName = user?.displayName?.split(" ")[0] || "there";

  return (
    <div className="overview">
      <Helmet>
        <title>Dashboard — Luxury Stay Hostel</title>
      </Helmet>

      <h1>Welcome back, {firstName}.</h1>
      <p className="overview-sub">Here's what's happening with your account.</p>

      <div className="overview-stats">
        <div className="overview-stat glass-panel">
          <FiCalendar />
          <span className="overview-stat__value">{MOCK_BOOKINGS.length}</span>
          <span className="overview-stat__label">Bookings</span>
        </div>
        <div className="overview-stat glass-panel">
          <FiHeart />
          <span className="overview-stat__value">{ids.length}</span>
          <span className="overview-stat__label">Saved stays</span>
        </div>
        <div className="overview-stat glass-panel">
          <FiTrendingUp />
          <span className="overview-stat__value">
            {formatCurrency(
              MOCK_BOOKINGS.reduce((sum, b) => {
                const h = hotels.find((x) => x.id === b.hotelId);
                return sum + (h?.pricePerNight || 0);
              }, 0)
            )}
          </span>
          <span className="overview-stat__label">Lifetime spend</span>
        </div>
      </div>

      <div className="overview-section">
        <div className="overview-section__head">
          <h3>Recent bookings</h3>
          <Link to="/bookings" className="auth-link">
            View all <FiArrowUpRight />
          </Link>
        </div>
        <div className="overview-list">
          {MOCK_BOOKINGS.map((b) => {
            const hotel = hotels.find((h) => h.id === b.hotelId);
            if (!hotel) return null;
            return (
              <Link to={`/hotels/${hotel.id}`} className="overview-row" key={b.id}>
                <img src={hotel.heroImage} alt={hotel.name} />
                <div className="overview-row__body">
                  <span className="overview-row__title">{hotel.name}</span>
                  <span className="overview-row__meta">
                    {b.checkIn} → {b.checkOut}
                  </span>
                </div>
                <span className={`status-pill status-pill--${b.status.toLowerCase()}`}>{b.status}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
