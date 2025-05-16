import Footer2 from "../components/Footer2";
import Nav2 from "../components/Nav2";

function SMM() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}
      <div className="mb-16 md:mb-24">
        <Nav2 />
      </div>

      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] md:h-[550px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.theatlantic.com/thumbor/iMhrXbIQnFskuL3cIFfawsz7mdg=/0x428:8256x5072/960x540/media/img/mt/2024/09/WR913lead/original.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Social Media Management Hero"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug">
            Elevate Your Brand with the Best Social Media Management Company in
            Delhi!
          </h1>
          <p className="text-base md:text-lg italic font-medium max-w-3xl">
            Looking for a top social media marketing agency in Delhi to boost
            your online presence? Bigwig Digital is your trusted partner.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4 ">
        {/* Why Choose Us */}
        <section className="mb-16 flex flex-col md:flex-row gap-10 items-center bg-black bg-opacity-70 rounded-xl shadow-md ">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
              alt="Why Choose Us"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl  mb-4 border-b border-gray-700 pb-2">
              Why Choose Us for Social Media Management?
            </h2>
            <ul className="list-disc list-inside space-y-3  leading-relaxed">
              <li>
                <strong>Strategic Social Media Marketing</strong> – Tailored
                campaigns for all platforms.
              </li>
              <li>
                <strong>Content Creation & Curation</strong> – Captivating
                posts, videos, and stories.
              </li>
              <li>
                <strong>Paid Advertising</strong> – Maximize ROI with
                precision-targeted ads.
              </li>
              <li>
                <strong>Community Engagement</strong> – Build loyal followers
                and advocates.
              </li>
              <li>
                <strong>Analytics & Tracking</strong> – Data-driven insights to
                boost performance.
              </li>
              <li>
                <strong>Affordable Packages</strong> – For startups, SMEs, and
                enterprises alike.
              </li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 pb-2">
              Our Social Media Services
            </h2>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed">
              <li>Social Media Strategy & Planning</li>
              <li>Content Creation & Scheduling</li>
              <li>Influencer & Collaborations Marketing</li>
              <li>Paid Ads (Meta, Google, LinkedIn)</li>
              <li>Reputation Management & Monitoring</li>
              <li>Monthly Reports & Optimization</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80"
              alt="Our Services"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Closing */}
        <section
          id="closing"
          className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md "
        >
          <p className="text-base md:text-lg leading-relaxed mx-auto text-center">
            As a leading social media agency in Delhi, we help businesses
            dominate their niche with engaging content and smart ad strategies.
            Whether it’s Facebook, Instagram, or LinkedIn – we’ve got you
            covered.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default SMM;
