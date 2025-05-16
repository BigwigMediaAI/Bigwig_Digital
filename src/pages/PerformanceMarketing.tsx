import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

function PerformanceMarketing() {
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
            "url('https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1920&q=80')",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Performance Marketing Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
            Drive Measurable Growth with Performance Marketing in Delhi
          </h1>
          <p className="text-xl md:text-2xl italic font-semibold max-w-3xl mx-auto mb-8">
            We deliver results you can track. From ad clicks to conversions, Big
            Wig Digital ensures every penny spent delivers ROI.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto mt-20 px-6 lg:px-8">
        {/* Why Performance Marketing */}
        <section
          id="why-performance"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Why Performance Marketing is Essential
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>
              <strong>Pay for Results:</strong> Only spend when users take
              action—clicks, leads, or conversions.
            </li>
            <li>
              <strong>Trackable ROI:</strong> Get real-time insights on campaign
              performance and returns.
            </li>
            <li>
              <strong>Hyper-Targeted Campaigns:</strong> Reach the right
              audience with precision using behavior and demographic targeting.
            </li>
            <li>
              <strong>Multi-Channel Reach:</strong> Utilize Google Ads, Meta
              Ads, LinkedIn, and more for maximum exposure.
            </li>
            <li>
              <strong>Scalable Campaigns:</strong> Start small, scale fast.
              Performance marketing grows with your business.
            </li>
          </ul>
        </section>

        {/* Our Services */}
        <section
          id="services"
          className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12"
        >
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Our Performance Marketing Services
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>Google Ads (Search, Display, Shopping, YouTube)</li>
            <li>Meta Ads (Facebook & Instagram Campaigns)</li>
            <li>LinkedIn Ads for B2B Growth</li>
            <li>Landing Page Optimization</li>
            <li>Retargeting & Remarketing Strategies</li>
            <li>Performance Analytics & Real-time Dashboards</li>
            <li>Conversion Rate Optimization (CRO)</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section
          id="testimonial"
          className="mb-20 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-12 italic text-gray-300 text-center"
        >
          <blockquote className="text-2xl max-w-4xl mx-auto">
            “We saw a 4X return on ad spend within the first two months of
            partnering with Bigwig Digital. Their paid strategy is sharp,
            focused, and data-driven.”
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
            Our performance marketing experts work with you to create highly
            optimized campaigns that scale profitably. Whether you're selling
            products or generating leads, we ensure you get maximum ROI from
            every channel.
          </p>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}

export default PerformanceMarketing;
