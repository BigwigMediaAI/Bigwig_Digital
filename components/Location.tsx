// app/components/Location.tsx
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
  {
    city: "New Zealand",
    address: "9/136 Marua Road, Mount Wellington, Auckland 1051",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Auckland.jpg",
  },
];

const LocationCard = ({ city, address, image }: Location) => {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="group [perspective:1000px] mb-10 py-4">
      <div className="relative h-60 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-xl bg-cover bg-center text-white shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex h-full w-full flex-col justify-end rounded-xl bg-black/50 p-4">
            <MapPin className="text-orange-400 mb-1" />
            <h3 className="text-xl font-semibold">{city}</h3>
          </div>
        </div>

        {/* Back Side - Showing Image and Address */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-cover bg-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex h-full w-full flex-col justify-end rounded-xl bg-black/50 p-4">
            <p className="text-sm mb-4">{address}</p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-orange-500 px-4 py-1 text-sm font-semibold hover:bg-orange-600 transition"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationsSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 bg-black text-white mb-6">
      <h2 className="text-5xl font-bold text-center mb-6">Our Locations</h2>

      <div className="overflow-x-auto sm:overflow-x-visible">
        <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="min-w-[220px] sm:min-w-0">
              <LocationCard {...location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
