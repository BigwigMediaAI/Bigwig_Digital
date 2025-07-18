import Footer from "../components/Footer";
import Nav from "../components/Nav";

const benefits = [
  {
    title: "Professional Growth",
    desc: "Learn & grow with real-world projects",
    icon: "📈",
  },
  {
    title: "Skill Enhancement",
    desc: "Access to courses, tools & mentorship",
    icon: "💡",
  },
  {
    title: "Work Culture",
    desc: "Flexible hours, team outings & supportive environment",
    icon: "👥",
  },
  { title: "Creative Freedom", desc: "Your ideas matter here", icon: "🎨" },
  { title: "Fair Compensation", desc: "We value your talent", icon: "💰" },
];

const openings = [
  {
    role: "SEO Executive",
    location: "Delhi NCR",
    type: "Full-time",
    mode: "Hybrid",
    desc: "We're looking for someone who eats, sleeps, and breathes rankings. If that’s you, apply now!",
  },
  // Duplicate or more roles can be added here
];

const process = [
  { title: "Submit your resume", icon: "📄" },
  { title: "Screening", desc: "Telephonic discussion", icon: "📞" },
  { title: "Task Round", desc: "Role-based assignment", icon: "📝" },
  { title: "Interview", desc: "Meet the team", icon: "🤝" },
  { title: "Join Us", desc: "Welcome aboard!", icon: "🎉" },
];

const Career = () => {
  return (
    <div>
      <Nav />
      <div className="bg-white text-black dark:bg-neutral-900 dark:text-white">
        {/* Hero */}
        <section
          className="relative bg-cover bg-center h-[300px] md:h-[400px]"
          style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              We’re Hiring!
            </h1>
            <p className="text-lg md:text-xl mb-4">
              Build the Digital Future With Us
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              View Open Roles
            </button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Why Work With Us */}
          <section className="py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Why Work With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {benefits.map((item, i) => (
                <div key={i} className="border p-4 rounded-lg shadow-sm">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Current Openings */}
          <section className="py-12 px-6 text-center bg-gray-100 dark:bg-neutral-800">
            <h2 className="text-3xl font-bold mb-10">Current Openings</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md border relative"
                >
                  <h4 className="text-xl font-bold mb-3">{job.role}</h4>
                  <p className="text-sm mb-2">
                    📍 {job.location} | 🕒 {job.type} | 🌐 {job.mode}
                  </p>
                  <p className="text-sm mb-4">{job.desc}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300">
                    Apply Now
                  </button>
                  <div className="absolute top-2 left-2 text-2xl">“</div>
                  <div className="absolute bottom-2 right-2 text-2xl">”</div>
                </div>
              ))}
            </div>
          </section>
          {/* Hiring Process */}
          <section className="py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Our Hiring Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
              {process.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <h4 className="font-semibold">{step.title}</h4>
                  {step.desc && <p>{step.desc}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
