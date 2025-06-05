import Footer2 from "../components/Footer2";

import Nav from "../components/Nav";

import SEO from "../assets/SEO.png";
import SEO2 from "../assets/SEO2.png";
import SEO3 from "../assets/SEO3.png";

function Seo() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col min-h-screen font-raleway">
      {/* Navbar */}

      <Nav />

      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] md:h-[600px] overflow-hidden"
        style={{
          backgroundImage: `url(${SEO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="SEO Hero"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-semibold mb-4 max-w-4xl leading-snug">
            Boost Your Visibility with Leading SEO Services in Delhi!
          </h1>
          <h3 className="text-sm md:text-xl italic font-medium max-w-3xl">
            Climb the Google rankings and attract the right audience. Bigwig
            Digital helps your business grow with proven Search Engine
            Optimization strategies.
          </h3>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow w-11/12 mx-auto mt-16 px-4">
        {/* Why SEO Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-6 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={SEO2}
              alt="Why SEO"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 ">
              More Traffic! More Leads! More Sales!
            </h2>
            <p className="py-6 leading-relaxed">
              Transformational business growth is what you can expect from our
              <a
                className="px-2 hover:text-blue-400"
                href="https://www.bigwigdigital.in/"
              >
                SEO services in Delhi
              </a>
              . Not just getting uplift in rankings and traffic, but also
              upliftment in leads & sales! We will manage your entire SEO
              strategy to be your partners in growth.
            </p>
            <h2 className="text-2xl md:text-2xl   pb-2">
              Drive Organic Traffic with the Best SEO Company in India
            </h2>

            <p className="py-2 leading-relaxed">
              We are a leading SEO Agency in Delhi, providing the best SEO
              services to businesses. With over 14 years of vast experience,
              BigWig Digital has helped countless businesses in Delhi, India,
              and across the globe to achieve their online marketing goals and
              enhance their search engine rankings. Having successfully managed
              10,000+ campaigns and maintained a 95% client retention rate.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 px-4 flex flex-col-reverse md:flex-row gap-8 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 ">
              Trusted SEO Company In Delhi, India with 100% Results
            </h2>
            <p className="py-6 leading-relaxed">
              Creating a visually appealing website is one thing; turning it
              into a lead-generating machine is another. We are one of the{" "}
              <i className="text-blue-400">
                <a href="https://www.bigwigdigital.in/">
                  top SEO Company in Delhi
                </a>
              </i>
              , contact us for our affordable SEO Services in India. We are
              capable of improving the ranking and visibility of your website.
              We follow a strategic and structured approach so that your website
              tops the searches with the desired keywords. As a{" "}
              <a
                href="https://www.bigwigdigital.in/"
                className="italic text-blue-400"
              >
                Best SEO Company in Delhi India
              </a>
              , BigWig Digital, fully understand how to promote your business on
              the top of the searches in Google, Bing & Yahoo. We use advanced
              internet marketing strategy so as to improve your company
              branding. We use various advanced techniques for link building
              like blogging, article submission, press release, SEO content
              writing and various other things in order to improve your
              visibility.
            </p>
            <h2 className="text-2xl md:text-2xl   pb-2">
              Advanced SEO Strategies For Organic Search Results
            </h2>

            <p className="py-2 leading-relaxed">
              SEO is running down in the veins of BigWig Digital, all we are
              masters of the game for the past numerous years. We offer Best SEO
              Service in Delhi that gives you beyond comparable results that
              cross your imaginations. Being one of the{" "}
              <a
                href="https://www.bigwigdigital.in/"
                className="italic text-blue-400"
              >
                Top SEO Company in India
              </a>
              , we apply great strategies that match the need of the Google
              algorithm and helps you to get the Organic SEO results in
              straightaway. If you think you have any doubt, don’t keep it to
              yourself, let’s do some chit-chat and discuss further. To give a
              kick start to your online business your first requirement is
              creating a breathtaking and professional website which helps you
              to sell your products and services in all over the world. Building
              a website is only the first step; ensuring your customers can find
              it an entirely different challenge, for this, you need to create a
              site which is search engine friendly. We offer SEO Services to our
              client at a pocket-friendly budget. Our SEO team have complete
              hands-on knowledge and expertise in making your site SEO-friendly.
              Since 2000, we have been recognized as a reputable{" "}
              <a
                href="https://www.bigwigdigital.in/"
                className="italic text-blue-400"
              >
                Digital Marketing Company in Delhi
              </a>
              .
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={SEO3}
              alt="SEO Services"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row gap-6 items-center bg-black bg-opacity-70 rounded-xl shadow-md">
          {/* Image */}
          <div className="w-full md:w-1/2 md:p-8">
            <img
              src={SEO2}
              alt="Why SEO"
              className="rounded-lg w-full h-auto"
              draggable="false"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl mb-4 border-b border-gray-700 ">
              What is SEO & Why is It Important for Your Business?
            </h2>
            <p className="py-6 leading-relaxed">
              Numerous people have false impression that SEO is just a business
              formality.{" "}
              <a
                href="https://www.bigwigdigital.in/"
                className="italic text-blue-400"
              >
                Search engine optimization
              </a>
              , however, is actually the practice of making a website or online
              content more visible in search engine results pages (SERPs),
              mostly on pages like- Google, Yahoo & Bing. Thus, the better the
              visibility, higher are the chances of appearing in the search
              queries. An SEO strategy typically includes working on four
              crucial aspects – 1.) Keyword Analysis 2.) Backlink Building 3.)
              Content Creation 4.) Technical Maintenance. Regardless of the type
              of SEO, these aspects are the core of the methodologies at various
              SEO agencies.
            </p>
            <h2 className="text-2xl md:text-2xl   pb-2">
              We have assembled a list of SEO statistics that show its
              importance and rising need.
            </h2>

            <ul className="list-disc list-inside space-y-3 py-4 leading-relaxed">
              <li>
                Organic discovery through search engines contributes to 53% of
                overall site visits.
              </li>
              <li>
                Additionally, the SEO industry will amount to grow $122.11
                billion by 2028.
              </li>
              <li>
                Search engines initiate 68% of users’ online interactions.
              </li>
              <li>
                92.96% of global traffic comes from Google (Search, Images
                Google Maps).
              </li>
              <li>
                Out of 100 pages only 5-6 pages will rank in the top 10 search
                results within a year of publication.
              </li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-black bg-opacity-70 md:max-w-5xl mx-auto rounded-xl shadow-md">
          <p className="text-base md:text-lg leading-relaxed mx-auto text-center p-6">
            Our SEO experts help you grow organically and sustainably. Whether
            you're a startup or an established brand, we tailor SEO solutions to
            help you dominate search rankings and outshine your competitors.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}

export default Seo;
