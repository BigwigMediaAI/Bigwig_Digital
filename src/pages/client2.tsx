import { useEffect, useRef } from "react";
import "./Clients.css";

const images = [
  "https://riverfront.vercel.app/assets/logo-riverfront-DlE3NUiH.png",
  "https://www.eventfaqs.com/Uploads/Jobs/Organization/cineyug-logo-black1.jpg",
  "https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-1/327181153_737700978062011_8544089667636529118_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=nLaEOjYbvA4Q7kNvwHH-D3M&_nc_oc=Adn32FEiorMvQqTbXhyZ-ihjXpr8PJNLbY25kvsW3lOMojntC9mNk5JxXbJGFrcteLFg0RWybgVgxhonPbpxEUlW&_nc_zt=24&_nc_ht=scontent.fdel1-4.fna&_nc_gid=NygIh9BlOQZ2aOGZSQRQ6Q&oh=00_AfE81Q8_JBI9phNhSiKcEYJL_Z2t5O26SjnIxW2LKEDHmQ&oe=6806AFD1",
  "https://laninarestaurant.com/wp-content/themes/lanina-wordpress-theme/static/img/logo_color.png",
  "https://aylesforddubai.com/wp-content/uploads/2024/11/aylesford.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Park_Plaza_logo.svg/2420px-Park_Plaza_logo.svg.png",
  "https://www.shoutlo.com/assets/images/merchant_images/merchant-133212-5c65208474154.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Park_Inn_by_Radisson_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Radisson_Blu_logo.svg/1280px-Radisson_Blu_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ZV5K7FxPkLchCy1bSLTfp6aqptcTl8vGg&s",
  "https://cdn.freebiesupply.com/logos/large/2x/peerless-logo-png-transparent.png",
  "https://searchlogovector.com/wp-content/uploads/2018/11/park-plaza-logo-vector.png",
  "https://companieslogo.com/img/orig/BIDU_BIG-fd4001c8.png?t=1720244491",
  "https://pngimg.com/d/skoda_PNG12322.png",
  "https://static.vecteezy.com/system/resources/previews/019/766/250/non_2x/bajaj-logo-bajaj-icon-transparent-free-png.png",
  "https://freelogopng.com/images/all_img/1680513237airtel-logo-png.png",
  "https://companieslogo.com/img/orig/DABUR.NS-f750fc64.png?t=1720244491",
  "https://cdn.freebiesupply.com/logos/thumbs/2x/cnn-international-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
  "https://brandlogos.net/wp-content/uploads/2014/11/barclays-logo_brandlogos.net_2xdee-512x512.png",
  "https://images.seeklogo.com/logo-png/30/1/itz-cash-logo-png_seeklogo-305185.png",
  "https://www.cablewirefair.com/wp-content/uploads/2024/08/99-electrical-world.png",
  "https://pngimg.com/d/bitcoin_PNG36.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/CARE_Logo_Orange.png/384px-CARE_Logo_Orange.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Castrol_logo_2023.svg/2560px-Castrol_logo_2023.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/CARTOON_NETWORK_logo.png",
  "https://static.cdnlogo.com/logos/d/22/dulux-paints.png",
  "https://companieslogo.com/img/orig/DLF.NS_BIG-9ecd4c66.png?t=1720244491",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Doordarshan_Logo_%281%29.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/ed/GMR_Group_%28logo%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/GAIL.svg/2560px-GAIL.svg.png",
  "https://i.pinimg.com/474x/28/95/2e/28952ecc561a5a5ccb26d3ce0b3d0201.jpg",
  "https://mahakumbhascent.com/wp-content/uploads/2024/12/goibibo-01.png.webp",
  "https://www.reviewadda.com/assets/uploads/college/logo/CSMU_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mgm-u-logo.png",
  "https://www.iipm.edu/public/iipm_logo.png",
];

function Clients2() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const chunks = Array.from({ length: Math.ceil(images.length / 12) }, (_, i) =>
    images.slice(i * 12, i * 12 + 12)
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      }
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10" id="clients">
      <div className="px-4 pb-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Our Clients
        </h2>

        {/* ✅ Mobile View: Auto scroll */}
        <div
          className="block lg:hidden overflow-x-auto scrollbar-hide"
          ref={scrollRef}
        >
          <div className="flex snap-x snap-mandatory">
            {chunks.map((chunk, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-start grid grid-cols-4 grid-rows-3 gap-4 px-2"
              >
                {chunk.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square flex items-center justify-center"
                  >
                    <img
                      src={img}
                      alt={`Client ${index * 12 + i + 1}`}
                      className="w-4/5 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop View: Show first 30 images */}
        <div className="hidden lg:grid grid-cols-10 gap-6">
          {images.slice(0, 30).map((img, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Client ${index + 1}`}
                className="w-4/5 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-4 flex justify-center">
          <button className="inline-block mt-4 bg-[#1752B4] text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 text-sm">
            <a href="/clients">Show More</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clients2;
