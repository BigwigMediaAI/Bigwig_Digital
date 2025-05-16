import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

function GMB() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen">
      <div className="mb-24 md:mb-28">
        <Nav2 />
      </div>

      {/* Hero Section */}
      <section
        className="relative w-full h-[450px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1920&q=80')",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Google My Business Optimization Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
            Dominate Local Search with Google My Business Optimization
          </h1>
          <p className="text-xl md:text-2xl italic font-semibold max-w-3xl mx-auto mb-8">
            Stand out on Google Maps and local search results. Big Wig Digital
            helps your business capture nearby customers with effective GMB
            strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto mt-20 px-6 lg:px-8">
        {/* Why GMB Section */}
        <section
          id="why-gmb"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Why GMB Optimization Matters
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
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
        </section>

        {/* GMB Services Section */}
        <section
          id="services"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Our GMB Optimization Services
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>Google Business Profile Setup & Verification</li>
            <li>NAP Consistency (Name, Address, Phone)</li>
            <li>Image & Post Optimization</li>
            <li>Review Management & Response Strategy</li>
            <li>GMB SEO for Local Rankings</li>
            <li>Weekly Updates and Reporting</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section
          id="testimonial"
          className="mb-20 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-12 italic text-gray-300 text-center"
        >
          <blockquote className="text-2xl max-w-4xl mx-auto">
            “Thanks to Big Wig Digital’s GMB services, we doubled our foot
            traffic in just 3 months. Our calls and reviews have skyrocketed!”
          </blockquote>
          <cite className="block mt-6 font-semibold text-white text-xl">
            - Vipul Dutta, CEO, Bigwig Digital
          </cite>
        </section>

        {/* Closing */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Our GMB experts ensure your business gets noticed where it matters
            most—locally. Whether you run a salon, restaurant, clinic, or
            service center, we’ll optimize your Google profile for maximum
            impact.
          </p>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}

export default GMB;
