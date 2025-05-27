import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import ORM from "../assets/ORM.png";
import ORM2 from "../assets/ORM2.png";
import ORM3 from "../assets/ORM3.png";

function Orm() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[800px] overflow-hidden"
        style={{
          backgroundImage: `url(${ORM})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Online Reputation Management Hero"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug">
            Protect & Elevate Your Brand with Expert Online Reputation
            Management
          </h1>
          <p className="text-sm md:text-xl italic font-medium max-w-3xl">
            Build trust, handle negative feedback, and shine online. Bigwig
            Digital is Delhi’s trusted ORM agency that secures your digital
            credibility.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4">
        {/* Why ORM Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={ORM2}
              alt="Why ORM Matters"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Why Online Reputation Management Matters
            </h2>
            <ul className="list-disc list-inside space-y-3  py-4 leading-relaxed">
              <li>
                <strong>Build Trust & Credibility:</strong> What people say
                online shapes your brand’s image.
              </li>
              <li>
                <strong>Improve Search Results:</strong> Push down negative
                content and highlight positives.
              </li>
              <li>
                <strong>Customer Retention:</strong> Respond to reviews and
                feedback with professionalism.
              </li>
              <li>
                <strong>Crisis Control:</strong> Act fast and strategically to
                limit damage during online controversies.
              </li>
              <li>
                <strong>Influence Buyer Decisions:</strong> Positive reputation
                directly impacts conversions and sales.
              </li>
              <li>
                <strong>Monitor Brand Mentions:</strong> Stay alert to what’s
                being said about your brand across the web.
              </li>
              <li>
                <strong>Generate Positive Reviews:</strong> Encourage satisfied
                customers to share their experiences.
              </li>
              <li>
                <strong>Reputation Insights:</strong> Use sentiment analysis and
                feedback trends to improve service and messaging.
              </li>
              <li>
                <strong>Boost Employer Branding:</strong> Attract top talent
                with a positive company image on platforms like Glassdoor and
                LinkedIn.
              </li>
              <li>
                <strong>Build Long-Term Brand Equity:</strong> A strong,
                positive online presence increases brand value over time.
              </li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Our ORM Services
            </h2>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed">
              <li>Review Monitoring & Response Management</li>
              <li>Negative Content Suppression & Removal (where possible)</li>
              <li>Positive Branding & PR Strategy</li>
              <li>Social Media & Forum Monitoring</li>
              <li>Search Engine Result Optimization</li>
              <li>Wikipedia & Online Profile Management</li>
              <li>Reputation Audits & Recovery Planning</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={ORM3}
              alt="ORM Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>
        </section>

        {/* Closing Section */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md px-6 py-12"
        >
          <p className="text-base md:text-lg leading-relaxed text-center">
            With Bigwig Digital’s ORM services, your brand is protected and
            promoted the right way. Let us help you build a strong, trustworthy
            digital image that earns loyalty and drives business.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default Orm;
