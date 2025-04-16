import Nav2 from "../components/Nav2";
import "./Clients.css";

const images = [
  "https://sodel.jnujaipur.ac.in/img/jnu-logo-final.jpg",
  "https://images.seeklogo.com/logo-png/38/2/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png",
  "https://www.vedicascholars.com/ywli/images/Logo.svg",
  "https://www.gisbindia.com/wp-content/uploads/2024/07/GISB-Logo-Horizontal-Black.png",
  "https://ciicpl.com/wp-content/uploads/2022/12/jklu-logo-2.png",
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
                      className="w-4/5 object-contain"
                    />
                  </div>
                  <div
                    className={`flip-back bg-white ${border} border-8 rounded-sm flex items-center justify-center w-full h-full`}
                  >
                    <img
                      src={img}
                      alt={`Client ${index + 1}`}
                      className="w-4/5 object-contain"
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
