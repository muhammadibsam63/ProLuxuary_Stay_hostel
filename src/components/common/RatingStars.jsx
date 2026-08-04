import { FiStar } from "react-icons/fi";
import "./RatingStars.css";

export default function RatingStars({ rating = 0, size = 14 }) {
  const rounded = Math.round(rating);
  return (
    <span className="rating-stars" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          size={size}
          className={i < rounded ? "star star--filled" : "star"}
        />
      ))}
    </span>
  );
}
