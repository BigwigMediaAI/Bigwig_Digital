import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import WEB1 from "../assets/WEB1.png";
import WEB2 from "../assets/WEB2.png";
import WEB3 from "../assets/WEB3.png";

function WebDesign() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url(${WEB1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Web Design Hero"
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug">
            Innovative Web Design & App Development Services in Delhi
          </h1>
          <p className="text-sm md:text-xl italic font-medium max-w-3xl">
            Elevate your digital presence with sleek websites and powerful
            mobile apps — designed to impress, built to perform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4">
        {/* Why Choose Us */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={WEB2}
              alt="Web Design Development"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Why Choose Our Web & App Development?
            </h2>
            <ul className="list-disc list-inside space-y-3 py-4 leading-relaxed">
              <li>
                <strong>Responsive Web Design:</strong> Seamless experiences
                across all devices.
              </li>
              <li>
                <strong>Custom App Development:</strong> Android & iOS solutions
                built for your goals.
              </li>
              <li>
                <strong>Fast, Secure, Scalable:</strong> Built with best
                practices and latest tech.
              </li>
              <li>
                <strong>UI/UX Excellence:</strong> Intuitive, clean designs that
                convert users.
              </li>
              <li>
                <strong>Maintenance & Support:</strong> Long-term partnership
                for performance and updates.
              </li>
              <li>
                <strong>API Integration:</strong> Seamlessly connect third-party
                tools and platforms.
              </li>
              <li>
                <strong>E-Commerce Ready:</strong> Build powerful stores with
                smooth checkout experiences.
              </li>
              <li>
                <strong>SEO & Performance Optimized:</strong> Improve load times
                and visibility on search engines.
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Consistent
                performance across browsers and devices.
              </li>
              <li>
                <strong>Agile Development Process:</strong> Transparent
                workflows with regular progress updates.
              </li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-3 leading-relaxed">
              <li>Custom Website Design & Redesign</li>
              <li>Frontend & Backend Web Development</li>
              <li>eCommerce Store Development</li>
              <li>Mobile App Development (Android & iOS)</li>
              <li>CMS Development (WordPress, Shopify, Webflow)</li>
              <li>API Integration & Cloud Deployment</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={WEB3}
              alt="Our Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>
        </section>

        {/* Closing */}
        <section className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md">
          <p className="text-base md:text-lg leading-relaxed mx-auto text-center p-6">
            From pixel-perfect web design to feature-rich apps, Bigwig Digital
            is your trusted partner for digital excellence. Let's build
            something amazing together — contact us today to get started.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default WebDesign;
