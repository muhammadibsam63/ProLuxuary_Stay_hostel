export const hotels = [
  {
    id: "azure-cliff-santorini",
    name: "Azure Cliff Residence",
    city: "Santorini",
    country: "Greece",
    category: "Cliffside Villa",
    rating: 4.9,
    reviews: 312,
    pricePerNight: 640,
    currency: "USD",
    tagline: "Whitewashed suites carved into the caldera.",
    description:
      "Perched above the Aegean, Azure Cliff Residence pairs Cycladic architecture with private plunge pools and uninterrupted sunset views. Each suite opens onto a terrace carved directly into volcanic rock.",
    heroImage:
      "https://images.unsplash.com/photo-1570213489059-0aac6626cade?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570213489059-0aac6626cade?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=1200&auto=format&fit=crop",
    ],
    amenities: [
      "Private Pool",
      "Sea View",
      "Spa Access",
      "Breakfast Included",
      "Airport Transfer",
      "Concierge",
    ],
    rooms: [
      {
        id: "r1",
        name: "Caldera Suite",
        size: "42 m²",
        occupancy: 2,
        price: 640,
      },
      {
        id: "r2",
        name: "Horizon Villa",
        size: "68 m²",
        occupancy: 4,
        price: 980,
      },
    ],
    coordinates: { lat: 36.3932, lng: 25.4615 },
  },

  {
    id: "kyoto-machiya-house",
    name: "Kyoto Machiya House",
    city: "Kyoto",
    country: "Japan",
    category: "Heritage Townhouse",
    rating: 4.8,
    reviews: 204,
    pricePerNight: 410,
    currency: "USD",
    tagline: "A restored merchant house beside the Philosopher's Path.",
    description:
      "This century-old machiya blends tatami interiors with quiet modern comfort — a private cedar bath, a moss courtyard, and shoji screens that filter Kyoto's early light.",
    heroImage:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1200&auto=format&fit=crop",
    ],
    amenities: [
      "Cedar Bath",
      "Courtyard",
      "Tea Ceremony",
      "Bicycle Rental",
      "Kitchen",
      "Wi-Fi",
    ],
    rooms: [
      {
        id: "r1",
        name: "Tatami Room",
        size: "28 m²",
        occupancy: 2,
        price: 410,
      },
      {
        id: "r2",
        name: "Full Machiya",
        size: "95 m²",
        occupancy: 6,
        price: 1150,
      },
    ],
    coordinates: { lat: 35.0116, lng: 135.7681 },
  },

  {
    id: "marrakech-riad-nour",
    name: "Riad Nour",
    city: "Marrakech",
    country: "Morocco",
    category: "Riad",
    rating: 4.95,
    reviews: 428,
    pricePerNight: 285,
    currency: "USD",
    tagline: "A hidden courtyard riad in the heart of the Medina.",
    description:
      "Behind an unmarked door in the Medina, Riad Nour opens onto a citrus courtyard with a plunge pool, hand-carved plasterwork, and a rooftop set for dinner beneath the Atlas Mountains.",
    heroImage:
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512958789358-4257f5398bc1?q=80&w=1200&auto=format&fit=crop",
    ],
    amenities: [
      "Courtyard Pool",
      "Rooftop Terrace",
      "Hammam",
      "Private Chef",
      "Airport Pickup",
      "Wi-Fi",
    ],
    rooms: [
      {
        id: "r1",
        name: "Courtyard Room",
        size: "24 m²",
        occupancy: 2,
        price: 285,
      },
      {
        id: "r2",
        name: "Rooftop Suite",
        size: "38 m²",
        occupancy: 3,
        price: 420,
      },
    ],
    coordinates: { lat: 31.6295, lng: -7.9811 },
  },

  {
    id: "banff-timber-lodge",
    name: "Timberline Lodge",
    city: "Banff",
    country: "Canada",
    category: "Mountain Lodge",
    rating: 4.85,
    reviews: 176,
    pricePerNight: 520,
    currency: "USD",
    tagline: "Cedar and stone facing the Fairholme Range.",
    description:
      "Floor-to-ceiling glass frames the Rockies from every room. A wood-fired sauna, a stone hearth lounge, and ski-in access make Timberline Lodge a quiet retreat above the valley.",
    heroImage:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517320964276-a002fa203177?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1200&auto=format&fit=crop",
    ],
    amenities: [
      "Sauna",
      "Fireplace Lounge",
      "Ski Access",
      "Mountain View",
      "Breakfast Included",
      "Parking",
    ],
    rooms: [
      {
        id: "r1",
        name: "Alpine Room",
        size: "34 m²",
        occupancy: 2,
        price: 520,
      },
      {
        id: "r2",
        name: "Summit Suite",
        size: "60 m²",
        occupancy: 4,
        price: 890,
      },
    ],
    coordinates: { lat: 51.1784, lng: -115.5708 },
  },

  {
    id: "lisbon-alfama-house",
    name: "Alfama House",
    city: "Lisbon",
    country: "Portugal",
    category: "Boutique Townhouse",
    rating: 4.75,
    reviews: 251,
    pricePerNight: 230,
    currency: "USD",
    tagline: "Azulejo tiles and tram bells on a cobbled hill.",
    description:
      "A five-story house on Alfama's steepest lane, restored with hand-painted azulejos, a hidden roof terrace over the Tagus, and mornings that smell like the bakery next door.",
    heroImage:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555881880-0165fd9c74f0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41cabfe98bd?q=80&w=1200&auto=format&fit=crop",
    ],
    amenities: [
      "Roof Terrace",
      "River View",
      "Wi-Fi",
      "Kitchen",
      "Self Check-in",
      "Air Conditioning",
    ],
    rooms: [
      {
        id: "r1",
        name: "Tile Room",
        size: "22 m²",
        occupancy: 2,
        price: 230,
      },
      {
        id: "r2",
        name: "Terrace Suite",
        size: "40 m²",
        occupancy: 3,
        price: 365,
      },
    ],
    coordinates: { lat: 38.7139, lng: -9.1307 },
  },

  {
    id: "ubud-canopy-villa",
    name: "Canopy Villa",
    city: "Ubud",
    country: "Indonesia",
    category: "Jungle Villa",
    rating: 4.9,
    reviews: 389,
    pricePerNight: 340,
    currency: "USD",
    tagline: "An open-air villa suspended above the rice terraces.",
    description:
      "Bamboo and glass dissolve the line between room and jungle. An infinity pool overlooks the Tjampuhan ridge, with yoga at sunrise and gamelan drifting up from the village below.",
    heroImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=1200&auto=format&fit=crop",
    ],
    amenities: [
      "Infinity Pool",
      "Jungle View",
      "Daily Yoga",
      "Private Chef",
      "Spa",
      "Rice Terrace Access",
    ],
    rooms: [
      {
        id: "r1",
        name: "Canopy Room",
        size: "36 m²",
        occupancy: 2,
        price: 340,
      },
      {
        id: "r2",
        name: "Ridge Villa",
        size: "72 m²",
        occupancy: 4,
        price: 610,
      },
    ],
    coordinates: { lat: -8.5069, lng: 115.2625 },
  },
];

export const cities = [
  {
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    count: 18,
  },
  {
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    count: 24,
  },
  {
    name: "Marrakech",
    country: "Morocco",
    image:
      "https://images.unsplash.com/photo-1597212720158-2e6d9b5d8a0d?q=80&w=800&auto=format&fit=crop",
    count: 15,
  },
  {
    name: "Banff",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1465310477141-6fb93167a273?q=80&w=800&auto=format&fit=crop",
    count: 9,
  },
  {
    name: "Lisbon",
    country: "Portugal",
    image:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=800&auto=format&fit=crop",
    count: 21,
  },
  {
    name: "Ubud",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    count: 17,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Elena Vasquez",
    location: "Madrid, Spain",
    quote:
      "Every stay felt considered down to the last detail — the kind of quiet luxury that doesn't need to announce itself.",
    stayedAt: "Azure Cliff Residence",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Singapore",
    quote:
      "Booking took minutes, the property matched every photo, and the concierge team answered at 2am without missing a beat.",
    stayedAt: "Kyoto Machiya House",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    quote:
      "Riad Nour was the highlight of our entire trip. Waking up to that courtyard is something I still think about.",
    stayedAt: "Riad Nour",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

export const stats = [
  { label: "Curated Properties", value: 1240, suffix: "+" },
  { label: "Cities Worldwide", value: 86, suffix: "" },
  { label: "Guests Hosted", value: 58000, suffix: "+" },
  { label: "Average Rating", value: 4.9, suffix: "/5" },
];

export function getHotelById(id) {
  return hotels.find((h) => h.id === id);
}