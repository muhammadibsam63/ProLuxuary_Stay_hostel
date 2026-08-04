import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiMapPin, FiDownload } from "react-icons/fi";
import toast from "react-hot-toast";
import { hotels } from "../../data/hotels";
import { formatCurrency } from "../../utils/format";
import "./Bookings.css";

const INITIAL_BOOKINGS = [
  {
    id: "BK-10234",
    hotelId: hotels[0].id,
    checkIn: "2026-09-14",
    checkOut: "2026-09-19",
    guests: 2,
    status: "Upcoming",
    total: 3200,
  },
  {
    id: "BK-09871",
    hotelId: hotels[2].id,
    checkIn: "2026-04-02",
    checkOut: "2026-04-06",
    guests: 2,
    status: "Completed",
    total: 1140,
  },
  {
    id: "BK-09340",
    hotelId: hotels[4].id,
    checkIn: "2026-01-10",
    checkOut: "2026-01-13",
    guests: 3,
    status: "Cancelled",
    total: 690,
  },
];

const FILTERS = ["All", "Upcoming", "Completed", "Cancelled"];

export default function Bookings() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [filter, setFilter] = useState("All");

  const visible = bookings.filter((b) => filter === "All" || b.status === filter);

  const cancelBooking = (id) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: "Cancelled" } : b)));
    toast.success("Booking cancelled.");
  };

  return (
    <div className="bookings-page">
      <Helmet>
        <title>My Bookings — Luxury Stay Hostel</title>
      </Helmet>
      <h1>My bookings</h1>
      <p className="overview-sub">Track upcoming stays and review past trips.</p>

      <div className="bookings-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={filter === f ? "is-active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="bookings-empty glass-panel">
          <p>No {filter.toLowerCase()} bookings yet.</p>
        </div>
      ) : (
        <div className="bookings-list">
          {visible.map((b) => {
            const hotel = hotels.find((h) => h.id === b.hotelId);
            if (!hotel) return null;
            return (
              <div className="booking-row glass-panel" key={b.id}>
                <img src={hotel.heroImage} alt={hotel.name} />
                <div className="booking-row__body">
                  <div className="booking-row__top">
                    <div>
                      <span className="booking-row__id">{b.id}</span>
                      <Link to={`/hotels/${hotel.id}`} className="booking-row__title">
                        {hotel.name}
                      </Link>
                      <span className="booking-row__location">
                        <FiMapPin size={12} /> {hotel.city}, {hotel.country}
                      </span>
                    </div>
                    <span className={`status-pill status-pill--${b.status.toLowerCase()}`}>{b.status}</span>
                  </div>
                  <div className="booking-row__meta">
                    <span>{b.checkIn} → {b.checkOut}</span>
                    <span>{b.guests} guests</span>
                    <span>{formatCurrency(b.total)}</span>
                  </div>
                  <div className="booking-row__actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => toast.success("Invoice downloaded.")}>
                      <FiDownload size={13} /> Invoice
                    </button>
                    {b.status === "Upcoming" && (
                      <button className="btn btn-ghost btn-sm" onClick={() => cancelBooking(b.id)}>
                        Cancel booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
