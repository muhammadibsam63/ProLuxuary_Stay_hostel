import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import HotelCard from "../hotels/HotelCard";

export default function FeaturedHotels({ hotels }) {
  return (
    <section className="section container">
      <SectionHeading
        eyebrow="Handpicked"
        title="Featured stays this month"
        description="A rotating shortlist from our editorial team — properties we'd book for ourselves."
        action={
          <Link to="/hotels" className="btn btn-ghost">
            View all hotels <FiArrowUpRight />
          </Link>
        }
      />
      <div className="hotel-grid">
        {hotels.map((hotel, i) => (
          <HotelCard hotel={hotel} index={i} key={hotel.id} />
        ))}
      </div>
    </section>
  );
}
