import Nav2 from "../components/Nav2";
import "./Clients.css";

const images = [
  "https://i.pinimg.com/736x/2c/06/d5/2c06d53983ee08766feb4b4582239c5b.jpg",
  "https://seeklogo.com/images/S/srm-institute-of-science-and-technology-logo-A378D5138F-seeklogo.com.png",
  // Add more
];

const stylePairs = [
  { bg: "bg-red-100", border: "border-red-500" },
  { bg: "bg-green-100", border: "border-green-500" },
  { bg: "bg-blue-100", border: "border-blue-500" },
  { bg: "bg-yellow-100", border: "border-yellow-500" },
  { bg: "bg-purple-100", border: "border-purple-500" },
  { bg: "bg-pink-100", border: "border-pink-500" },
];

function Clients() {
  return (
    <div>
      <div className="mb-28 md:mb-32">
        <Nav2 />
      </div>

      <div className="px-4 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => {
            const { bg, border } = stylePairs[index % stylePairs.length];
            return (
              <div key={index} className="flip-card aspect-square w-full">
                <div className="flip-inner w-full h-full">
                  <div
                    className={`flip-front ${bg} ${border} border-8 rounded-sm flex items-center justify-center w-full h-full`}
                  >
                    <img
                      src={img}
                      alt={`Client ${index + 1}`}
                      className="w-3/5 object-contain"
                    />
                  </div>
                  <div
                    className={`flip-back bg-white ${border} border-8 rounded-sm flex items-center justify-center w-full h-full`}
                  >
                    <img
                      src={img}
                      alt={`Client ${index + 1}`}
                      className="w-3/5 object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
