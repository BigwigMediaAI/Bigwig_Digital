import React from "react";
import ceo from "../assets/ceo.jpg";
import Footer2 from "../components/Footer2";
import Nav2 from "../components/Nav2";

const Team: React.FC = () => {
  // Sample data for team members

  return (
    <div className="bg-black min-h-screen">
      <div className="mb-0">
        <Nav2 />
      </div>
      <section className=" container mx-auto px-4 lg:px-8 pt-36 ">
        <div className="md:w-11/12 mx-auto md:px-8 gap-8">
          {/* CEO Section */}
          <div className=" bg-[#1f1f1f] p-6 rounded-lg shadow-lg">
            <img
              src={ceo} // Replace with your CEO image
              alt="CEO"
              className="w-48 h-48 mx-auto rounded-full object-fill mb-4"
              draggable="false"
            />
            <h3 className="text-xl text-white font-semibold text-center">
              Vipul Dutta
            </h3>
            <p className="text-white font-semibold text-center my-3">
              Founder & CEO
            </p>
            <p className="w-full md:w-3/4 mx-auto text-white text-justify">
              At BigwigDigital, we help businesses grow! By combining
              creativity, cutting-edge technology, and smart media strategies,
              we increase your sales and strengthen your relationship with your
              customers.
            </p>
            <h2 className="font-semibold text-white mt-6 text-center text-2xl">
              About Team
            </h2>
            <div className="w-full md:w-3/4 mx-auto">
              <h2 className="text-white mt-4 text-justify">
                Team is something that can make or break any foundation. Ours
                fortunately is the BADASS one. When it comes to teamwork, we're
                like ants at a picnic. With over 70 committed professionals in
                our corner, we hustle and haggle - all for your success. We
                believe that with a positive working environment, the results
                are excellent. Out of admiration for our customers, we invented
                a modern company that prioritizes self-realization, admiration
                and indulgence at work. It's with a collective goal; surpassing
                objectives on each client mandate, that we combine our resources
                and skills to contribute in the growth of our Beloved
                Clienteles.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Team;
