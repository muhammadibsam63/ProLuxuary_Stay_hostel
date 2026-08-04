import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiGrid, FiList, FiX } from "react-icons/fi";
import HotelCard from "../components/hotels/HotelCard";
import HotelCardSkeleton from "../components/hotels/HotelCardSkeleton";
import SectionHeading from "../components/common/SectionHeading";
import { hotels } from "../data/hotels";
import "./Hotels.css";

const CATEGORIES = [...new Set(hotels.map((h) => h.category))];
const MAX_PRICE = Math.max(...hotels.map((h) => h.pricePerNight));

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("grid");
  const [query, setQuery] = useState(searchParams.get("destination") || "");
  const [category, setCategory] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sort, setSort] = useState("recommended");
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query, category, minRating, maxPrice, sort]);

  const filtered = useMemo(() => {
    let list = hotels.filter((h) => {
      const matchesQuery =
        !query ||
        h.name.toLowerCase().includes(query.toLowerCase()) ||
        h.city.toLowerCase().includes(query.toLowerCase()) ||
        h.country.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || h.category === category;
      const matchesRating = h.rating >= minRating;
      const matchesPrice = h.pricePerNight <= maxPrice;
      return matchesQuery && matchesCategory && matchesRating && matchesPrice;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.pricePerNight - a.pricePerNight);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [query, category, minRating, maxPrice, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setMinRating(0);
    setMaxPrice(MAX_PRICE);
    setSort("recommended");
    setSearchParams({});
  };

  return (
    <div className="hotels-page container section">
      <Helmet>
        <title>Hotels — Luxury Stay Hostel</title>
        <meta name="description" content="Browse boutique hotels, villas, and riads worldwide." />
      </Helmet>

      <SectionHeading
        eyebrow="Browse"
        title="Every stay, one list"
        description={`${filtered.length} propert${filtered.length === 1 ? "y" : "ies"} match your filters.`}
      />

      <div className="hotels-layout">
        <aside className="hotels-filters glass-panel">
          <div className="filters-head">
            <h4>Filters</h4>
            <button className="filters-clear" onClick={clearFilters}>
              <FiX size={13} /> Reset
            </button>
          </div>

          <div className="filter-group">
            <label htmlFor="search-input">Search</label>
            <input
              id="search-input"
              placeholder="Hotel, city, or country"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="category-select">Category</label>
            <select id="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All categories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="price-range">
              Max price · ${maxPrice}/night
            </label>
            <input
              id="price-range"
              type="range"
              min="200"
              max={MAX_PRICE}
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="rating-select">Minimum rating</label>
            <select id="rating-select" value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
              <option value={0}>Any rating</option>
              <option value={4.5}>4.5+</option>
              <option value={4.8}>4.8+</option>
              <option value={4.9}>4.9+</option>
            </select>
          </div>
        </aside>

        <div className="hotels-results">
          <div className="hotels-toolbar">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort-select">
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
            <div className="view-toggle">
              <button
                className={view === "grid" ? "is-active" : ""}
                onClick={() => setView("grid")}
                aria-label="Grid view"
              >
                <FiGrid />
              </button>
              <button
                className={view === "list" ? "is-active" : ""}
                onClick={() => setView("list")}
                aria-label="List view"
              >
                <FiList />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="hotel-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <HotelCardSkeleton key={i} />
              ))}
            </div>
          ) : paginated.length === 0 ? (
            <div className="hotels-empty glass-panel">
              <h4>No stays match those filters.</h4>
              <p>Try widening your price range or clearing a filter.</p>
              <button className="btn btn-ghost" onClick={clearFilters}>
                Reset filters
              </button>
            </div>
          ) : (
            <div className={view === "grid" ? "hotel-grid" : "hotel-list"}>
              {paginated.map((hotel, i) => (
                <HotelCard hotel={hotel} index={i} key={hotel.id} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={page === i + 1 ? "is-active" : ""}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
