// app/components/Location.tsx (or wherever your component lives)
import { MapPin } from "lucide-react";

type Location = {
  city: string;
  address: string;
  image: string;
};

const locations: Location[] = [
  {
    city: "Dubai",
    address:
      "Dubai 1703, Damac XL tower, Marasi Drive, Business bay, Dubai, UAE.",
    image:
      "https://mediaim.expedia.com/destination/9/cd8a3f3db7149b0ce36d052aea1182df.jpg",
  },
  {
    city: "Delhi",
    address: "Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQOAYA94K7nXM77wSGlX1svzvszrkWd7O0w&s",
  },

  {
    city: "Delhi",
    address: "S-1, 3rd Floor, Janta Market, Rajouri Garden New Delhi - 110027",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQOAYA94K7nXM77wSGlX1svzvszrkWd7O0w&s",
  },
  {
    city: "Australia",
    address: "Melbourne 80 Lsabella way, Tarneit 3029 Melbourne",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo7qSHU9pmWI516rGGG1xDOiw0G5U0H54YA&s",
  },
];

const LocationCard = ({ city, address, image }: Location) => {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="relative group overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:shadow-lg min-h-[280px]">
      {/* Hover Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10" />

      {/* Content */}
      <div className="relative z-20 space-y-2">
        <MapPin className="text-orange-500" />
        <h3 className="text-xl font-bold group-hover:text-white text-gray-800">
          {city}
        </h3>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg whitespace-pre-line group-hover:text-white text-gray-600  hover:text-blue-400 transition"
        >
          {address}
        </a>
      </div>
    </div>
  );
};

const LocationsSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 pb-8 bg-white text-gray-900">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
        Our Locations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
