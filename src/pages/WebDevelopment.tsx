import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

function WebDesign() {
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
            "url('https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80')",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Web Design and App Development Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight">
            Innovative Web Design & App Development Services in Delhi
          </h1>
          <p className="text-xl md:text-2xl italic font-semibold max-w-3xl mx-auto mb-8">
            Elevate your digital presence with sleek websites and powerful
            mobile apps — designed to impress, built to perform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto mt-20 px-6 lg:px-8">
        {/* Why Web & App Section */}
        <section className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12">
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            Why Choose Our Web & App Development?
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>
              <strong>Responsive Web Design:</strong> Seamless experiences
              across all devices.
            </li>
            <li>
              <strong>Custom App Development:</strong> Android & iOS solutions
              built for your goals.
            </li>
            <li>
              <strong>Fast, Secure, Scalable:</strong> Built with best practices
              and latest tech.
            </li>
            <li>
              <strong>UI/UX Excellence:</strong> Intuitive, clean designs that
              convert users.
            </li>
            <li>
              <strong>Maintenance & Support:</strong> Long-term partnership for
              performance and updates.
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section className="mb-20 bg-black bg-opacity-70 rounded-lg shadow-lg p-12">
          <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed">
            <li>Custom Website Design & Redesign</li>
            <li>Frontend & Backend Web Development</li>
            <li>eCommerce Store Development</li>
            <li>Mobile App Development (Android & iOS)</li>
            <li>CMS Development (WordPress, Shopify, Webflow)</li>
            <li>API Integration & Cloud Deployment</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="mb-20 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-12 italic text-gray-300 text-center">
          <blockquote className="text-2xl max-w-4xl mx-auto">
            “Our website and app were both delivered on time, beautifully
            designed, and fully functional. Bigwig Digital's team brought our
            vision to life with precision and creativity.”
          </blockquote>
          <cite className="block mt-6 font-semibold text-white text-xl">
            - Vipul Dutta, CEO, Bigwig Digital
          </cite>
        </section>

        {/* Closing */}
        <section className="bg-black bg-opacity-70 rounded-lg shadow-lg p-12">
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            From pixel-perfect web design to feature-rich apps, Bigwig Digital
            is your trusted partner for digital excellence. Let's build
            something amazing together — contact us today to get started.
          </p>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}

export default WebDesign;
