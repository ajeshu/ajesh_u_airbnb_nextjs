'use client';
import { useState } from 'react';
import { Heart, Star } from 'lucide-react';

const initialData = [
  {
    id: 1,
    title: "Beachfront Villa",
    location: "Bali, Indonesia",
    price: "$210 night",
    rating: 4.96,
    image: "/assets/bali2.jpg",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Mountain Retreat",
    location: "Nepal, Nepal",
    price: "$150 night",
    rating: 4.8,
    image: "/assets/nepal.jpg",
    isFavorite: false,
  },
  {
    id: 3,
    title: "City Escape",
    location: "New York, USA",
    price: "$120 night",
    rating: 4.7,
    image: "/assets/newyork.jpg",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Island Paradise",
    location: "Maldives, Maldives",
    price: "$180 night",
    rating: 4.9,
    image: "/assets/maldives.jpg",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Mountain Retreat",
    location: "Meghalaya, India",
    price: "$180 night",
    rating: 4.9,
    image: "/assets/meghalaya.jpg",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Budha Stupa",
    location: "Bhutan, Bhutan",
    price: "$180 night",
    rating: 4.9,
    image: "/assets/bhutan.jpg",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Taj Mahal",
    location: "Agra, India",
    price: "$180 night",
    rating: 4.9,
    image: "/assets/taj.jpg",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Thailand",
    location: "Thailand, Thailand",
    price: "$180 night",
    rating: 4.9,
    image: "/assets/thai.jpg",
    isFavorite: false,
  },
];

const FeatureListing = () => {
  const [listings, setListings] = useState(initialData);

  const toggleFavorite = (id) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Trending Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listings.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <button
                aria-label="Toggle favorite"
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-3 right-3 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition"
              >
                <Heart
                  className={`h-5 w-5 ${
                    item.isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-700'
                  }`}
                />
              </button>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-base text-gray-800">{item.title}</h3>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-black fill-black" />
                  <span className="ml-1">{item.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-sm text-gray-400">5 nights · Nov 12–17</p>
              <p className="text-sm text-gray-800">
                <span className="font-semibold">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureListing;
