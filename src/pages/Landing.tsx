import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CaseCard from "../components/CaseCard";
import Hero from "../components/Hero";
import FlipCard from "../components/FlipCard";
import ScrollOverlappingSections from "../components/ScrollSection";
import AboutUs from "../components/About";
import FAQ from "../components/Faq";
import { useState } from "react";
import Blog from "../components/Blog";
import ImageSlider from "../components/ImageSlider";
import ContactUs from "../components/Contact";
import { IoMdClose } from "react-icons/io";
import Stats from "../components/Stats";
import { MessageCircle, Phone } from "lucide-react";
import Partners from "../components/Partners";
import LocationsSection from "../components/Location";
import HowWeWork from "../components/HowWeWork";
import ContactSidebar from "../components/ContactSidebar";
import Client from "../components/Clients";

function Landing() {
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  const openContactPanel = () => {
    setIsContactPanelOpen(true);
  };

  const closeContactPanel = () => {
    setIsContactPanelOpen(false);
  };

  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <Partners />
      <Stats />
      <Client />
      <ScrollOverlappingSections />
      <FlipCard />
      <ImageSlider />
      <AboutUs />
      <CaseCard />
      <HowWeWork />

      <Blog />

      <FAQ />
      <LocationsSection />
      <Footer />

      {/* WhatsApp and Contact Icon - Hidden on Mobile */}
      <div className=" hidden md:flex">
        <ContactSidebar />
      </div>

      {/* Mobile Bottom Buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden">
        <a
          href="tel:+918368573451"
          className="w-1/2 bg-[#D10B0B] text-white text-center py-4 font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Call Me
        </a>
        <button
          onClick={openContactPanel}
          className="w-1/2 bg-[#1752B4] text-white text-center py-4 font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          I'm Interested
        </button>
      </div>

      {/* Contact Us Panel */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#2c2c2c] rounded-lg shadow-lg p-6 z-50 transform ${
          isContactPanelOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col justify-center`}
      >
        <button
          onClick={closeContactPanel}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 border-2 p-2 border-blue-600 rounded-full text-blue-600 hover:text-blue-800"
        >
          <IoMdClose className="w-6 h-6" />
        </button>

        <h2 className="text-2xl text-white font-bold mb-6 text-center mt-12">
          Contact Us
        </h2>

        <div className="overflow-y-auto max-h-[calc(100vh-100px)]">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Landing;
