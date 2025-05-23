import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import SMM1 from "../assets/SMM.png";
import SMM2 from "../assets/SMM2.png";
import SMM3 from "../assets/SMM3.png";

function SMM() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url(${SMM1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Social Media Management Hero"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-3xl leading-snug mt-28">
            Elevate Your Brand with the Best Social Media Management Company in
            Delhi!
          </h1>
          <p className="text-sm md:text-lg italic font-medium max-w-3xl">
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
              src={SMM2}
              alt="Why Choose Us"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl  mb-4 border-b border-gray-700 pb-2">
              Why Choose Us for Social Media Management?
            </h2>
            <ul className="list-disc list-inside space-y-3 py-4 leading-relaxed">
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
              <li>
                <strong>Platform-Specific Expertise</strong> – Custom strategies
                for Instagram, TikTok, LinkedIn, Twitter, and more.
              </li>
              <li>
                <strong>Brand Voice Development</strong> – Consistent messaging
                that reflects your values and tone.
              </li>
              <li>
                <strong>Trend Monitoring</strong> – Stay ahead with timely,
                trend-driven content that resonates.
              </li>
              <li>
                <strong>Campaign Management</strong> – End-to-end planning,
                execution, and optimization.
              </li>
              <li>
                <strong>24/7 Monitoring & Support</strong> – Proactive responses
                and crisis management when needed.
              </li>
              <li>
                <strong>Growth Hacking Techniques</strong> – Creative strategies
                to rapidly grow your online presence.
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
              src={SMM3}
              alt="Our Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
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
