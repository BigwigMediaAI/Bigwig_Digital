import about from "../assets/ABOUT.png"

const AboutUs = () => {
  return (
    <section id="about" className=" px-8 md:px-14 lg:px-20">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
            About Us
          </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div>

          <p className="text-lg text-justify text-gray-600 mt-4 md:text-md">
          Ever wondered what you'd get if you crossed a digital advertising agency with Artificial Intelligence & Machine learning technology? Well, stop racking your brain cells! The answer is BIGWIG MEDIA, an AI & ML infused, pow-bam-slammingly amazing digital advertising agency that's breaking the internet!
          </p>
          <p className="text-md text-gray-600 mt-4 text-justify">
          With AI and ML as our trusty sidekicks, we're transforming the online ad world, offering ground-breaking services that help businesses master the digital arena. Our special blend for success includes our very own AI tech, marketing prowess, dynamite creative skills, top-notch tech solutions, streamlined processes, and our Sherlock-Holmes-like understanding of analytics. We don't just partner with our clients to reach their goals. We're like the suave secret agent, always aiming to outperform and exceed expectations!
          </p>
          <p className="text-md text-gray-600 mt-4 text-justify">
          At Bigwig Media, we don't just click buttons and pull levers behind the screen! We're the mad scientists, the innovators, the trailblazers at the frontier of the digital marketing universe!          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            // src="https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?t=st=1734522063~exp=1734525663~hmac=0173b10e7d1b47300e9882cbd216299d458cb3b4601fad857cef4df878b0abd6&w=996" // Replace this URL with your actual image source
            src={about}
            alt="About Us"
            className="w-full max-w-sm md:max-w-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
