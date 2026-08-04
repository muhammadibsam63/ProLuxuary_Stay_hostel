import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import FeaturedHotels from "../components/home/FeaturedHotels";
import CityGrid from "../components/home/CityGrid";
import StatsBand from "../components/home/StatsBand";
import Testimonials from "../components/home/Testimonials";
import NewsletterCTA from "../components/home/NewsletterCTA";
import { hotels, cities, testimonials, stats } from "../data/hotels";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Luxury Stay Hostel — Independent Hotels, Villas & Riads</title>
        <meta
          name="description"
          content="Book boutique hotels, villas, and riads across 86 cities. Curated for character, not chain standard."
        />
      </Helmet>
      <Hero />
      <FeaturedHotels hotels={hotels.slice(0, 6)} />
      <StatsBand stats={stats} />
      <CityGrid cities={cities} />
      <Testimonials testimonials={testimonials} />
      <NewsletterCTA />
    </>
  );
}
