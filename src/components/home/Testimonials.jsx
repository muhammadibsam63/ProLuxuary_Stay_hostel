import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RatingStars from "../common/RatingStars";
import SectionHeading from "../common/SectionHeading";
import "./Testimonials.css";

export default function Testimonials({ testimonials }) {
  return (
    <section className="section container">
      <SectionHeading eyebrow="Guest voices" title="What people say after they stay" />
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={28}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
        className="testimonial-swiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <figure className="testimonial-card">
              <RatingStars rating={t.rating} />
              <blockquote>"{t.quote}"</blockquote>
              <figcaption>
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__meta">
                    {t.location} · Stayed at {t.stayedAt}
                  </span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
