import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import GMB1 from "../assets/GMB.png";
import GMB2 from "../assets/GMB2.png";
import GMB3 from "../assets/GMB3.png";

function GMB() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url(${GMB1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Google My Business Optimization Hero"
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug">
            Dominate Local Search with Google My Business Optimization
          </h1>
          <p className="text-sm md:text-xl italic font-medium max-w-3xl">
            Stand out on Google Maps and local search results. Bigwig Digital
            helps your business capture nearby customers with effective GMB
            strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto mt-16 px-4 md:px-8">
        {/* Why GMB Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md p-8">
          {/* Image */}
          <div className="w-full md:w-2/3 md:p-8">
            <img
              src={GMB2}
              alt="Why GMB Optimization Matters"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl mb-6 border-b border-gray-700 pb-3">
              Why GMB Optimization Matters
            </h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
              <li>
                <strong>Improve Local Visibility:</strong> Appear in map packs
                when people search for your services nearby.
              </li>
              <li>
                <strong>Drive Phone Calls & Visits:</strong> Encourage customers
                to call or visit your physical location.
              </li>
              <li>
                <strong>Gain Trust:</strong> Verified and updated profiles build
                confidence with potential customers.
              </li>
              <li>
                <strong>Boost Reviews & Ratings:</strong> Collect and manage
                positive reviews to enhance credibility.
              </li>
              <li>
                <strong>Track Engagement:</strong> See how people interact with
                your listing using insights and analytics.
              </li>
            </ul>
          </div>
        </section>

        {/* GMB Services Section */}
        <section className="mb-16 flex flex-col-reverse md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md p-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl mb-6 border-b border-gray-700 pb-3">
              Our GMB Optimization Services
            </h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
              <li>Google Business Profile Setup & Verification</li>
              <li>NAP Consistency (Name, Address, Phone)</li>
              <li>Image & Post Optimization</li>
              <li>Review Management & Response Strategy</li>
              <li>GMB SEO for Local Rankings</li>
              <li>Weekly Updates and Reporting</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-2/3 md:p-8">
            <img
              src={GMB3}
              alt="GMB Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>
        </section>

        {/* Closing */}
        <section className="bg-black bg-opacity-70 rounded-xl shadow-md p-12 max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-center">
            Our GMB experts ensure your business gets noticed where it matters
            most—locally. Whether you run a salon, restaurant, clinic, or
            service center, we’ll optimize your Google profile for maximum
            impact.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default GMB;
