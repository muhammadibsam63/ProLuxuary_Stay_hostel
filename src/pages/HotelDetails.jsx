import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FiMapPin,
  FiHeart,
  FiShare2,
  FiCheck,
  FiChevronLeft,
} from "react-icons/fi";
import toast from "react-hot-toast";
import RatingStars from "../components/common/RatingStars";
import HotelCard from "../components/hotels/HotelCard";
import SectionHeading from "../components/common/SectionHeading";
import { useWishlist } from "../context/WishlistContext";
import { hotels, getHotelById } from "../data/hotels";
import { formatCurrency, nightsBetween } from "../utils/format";
import "./HotelDetails.css";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = getHotelById(id);
  const { isSaved, toggle } = useWishlist();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(hotel?.rooms?.[0]?.id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  if (!hotel) {
    return (
      <div className="container section hotel-not-found">
        <h2>We couldn't find that stay.</h2>
        <p>It may have been removed from our collection.</p>
        <Link to="/hotels" className="btn btn-primary">
          Back to hotels
        </Link>
      </div>
    );
  }

  const room = hotel.rooms.find((r) => r.id === selectedRoom) ?? hotel.rooms[0];
  const nights = nightsBetween(checkIn, checkOut);
  const subtotal = nights > 0 ? nights * room.price : room.price;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const related = hotels.filter((h) => h.id !== hotel.id && h.country === hotel.country).slice(0, 3);
  const relatedFallback = related.length ? related : hotels.filter((h) => h.id !== hotel.id).slice(0, 3);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      toast.error("Choose your check-in and check-out dates.");
      return;
    }
    if (nights <= 0) {
      toast.error("Check-out must be after check-in.");
      return;
    }
    toast.success("Booking request created.");
    navigate("/bookings");
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: hotel.name, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard.");
    }
  };

  return (
    <div className="hotel-details container section">
      <Helmet>
        <title>{hotel.name} — Luxury Stay Hostel</title>
        <meta name="description" content={hotel.tagline} />
      </Helmet>

      <Link to="/hotels" className="back-link">
        <FiChevronLeft /> All hotels
      </Link>

      <div className="hotel-details__header">
        <div>
          <span className="eyebrow">{hotel.category}</span>
          <h1>{hotel.name}</h1>
          <div className="hotel-details__meta">
            <span>
              <FiMapPin /> {hotel.city}, {hotel.country}
            </span>
            <span className="meta-divider" />
            <RatingStars rating={hotel.rating} />
            <span>
              {hotel.rating} · {hotel.reviews} reviews
            </span>
          </div>
        </div>
        <div className="hotel-details__actions">
          <button
            className={`btn btn-ghost ${isSaved(hotel.id) ? "is-saved" : ""}`}
            onClick={() => toggle(hotel)}
          >
            <FiHeart /> {isSaved(hotel.id) ? "Saved" : "Save"}
          </button>
          <button className="btn btn-ghost" onClick={handleShare}>
            <FiShare2 /> Share
          </button>
        </div>
      </div>

      <div className="hotel-gallery">
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="hotel-gallery__main"
        >
          {hotel.gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`${hotel.name} view ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          watchSlidesProgress
          className="hotel-gallery__thumbs"
        >
          {hotel.gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hotel-details__layout">
        <div className="hotel-details__content">
          <section className="detail-block">
            <h3>About this stay</h3>
            <p>{hotel.description}</p>
          </section>

          <section className="detail-block">
            <h3>Amenities</h3>
            <ul className="amenities-list">
              {hotel.amenities.map((a) => (
                <li key={a}>
                  <FiCheck /> {a}
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-block">
            <h3>Rooms</h3>
            <div className="room-list">
              {hotel.rooms.map((r) => (
                <button
                  key={r.id}
                  className={`room-option ${selectedRoom === r.id ? "is-selected" : ""}`}
                  onClick={() => setSelectedRoom(r.id)}
                >
                  <div>
                    <span className="room-option__name">{r.name}</span>
                    <span className="room-option__meta">
                      {r.size} · Up to {r.occupancy} guests
                    </span>
                  </div>
                  <span className="room-option__price">{formatCurrency(r.price)}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="detail-block">
            <h3>Location</h3>
            <div className="map-placeholder">
              <FiMapPin size={22} />
              <span>
                {hotel.city}, {hotel.country} · {hotel.coordinates.lat.toFixed(2)},{" "}
                {hotel.coordinates.lng.toFixed(2)}
              </span>
            </div>
          </section>
        </div>

        <aside className="booking-card glass-panel">
          <div className="booking-card__price">
            {formatCurrency(room.price)} <small>/ night</small>
          </div>
          <form onSubmit={handleBooking}>
            <div className="booking-card__dates">
              <label>
                Check in
                <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              </label>
              <label>
                Check out
                <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </label>
            </div>
            <label className="booking-card__guests">
              Guests
              <input
                type="number"
                min="1"
                max={room.occupancy}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
            </label>

            {nights > 0 && (
              <div className="booking-card__summary">
                <div>
                  <span>
                    {formatCurrency(room.price)} × {nights} night{nights > 1 ? "s" : ""}
                  </span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div>
                  <span>Taxes & fees</span>
                  <span>{formatCurrency(taxes)}</span>
                </div>
                <div className="booking-card__total">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-block">
              Reserve now
            </button>
            <span className="booking-card__note">You won't be charged yet.</span>
          </form>
        </aside>
      </div>

      <section className="detail-block related-hotels">
        <SectionHeading eyebrow="You might also like" title="More stays nearby" />
        <div className="hotel-grid">
          {relatedFallback.map((h, i) => (
            <HotelCard hotel={h} index={i} key={h.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
