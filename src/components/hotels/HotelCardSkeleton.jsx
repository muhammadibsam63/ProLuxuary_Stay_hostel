import "./HotelCardSkeleton.css";

export default function HotelCardSkeleton() {
  return (
    <div className="hotel-card-skeleton">
      <div className="skeleton hotel-card-skeleton__media" />
      <div className="hotel-card-skeleton__body">
        <div className="skeleton hotel-card-skeleton__line" style={{ width: "70%" }} />
        <div className="skeleton hotel-card-skeleton__line" style={{ width: "45%" }} />
        <div className="skeleton hotel-card-skeleton__line" style={{ width: "90%" }} />
        <div className="skeleton hotel-card-skeleton__line" style={{ width: "35%", marginTop: "1rem" }} />
      </div>
    </div>
  );
}
