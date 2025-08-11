import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import cover_img from "../assets/ABC (1).svg";
import { Helmet } from "react-helmet-async";

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

const process = [
  { title: "Submit your resume", icon: "📄" },
  { title: "Screening", desc: "Telephonic discussion", icon: "📞" },
  { title: "Task Round", desc: "Role-based assignment", icon: "📝" },
  { title: "Interview", desc: "Meet the team", icon: "🤝" },
  { title: "Join Us", desc: "Welcome aboard!", icon: "🎉" },
];

interface JobOpening {
  _id: string;
  title: string;
  location: string;
  jd: string;
  jobType: string;
  workMode: string;
}

const Career = () => {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bigwigdigitalbackend.onrender.com/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Nav />
      <Helmet>
        <title>Careers at BigWig Digital</title>
        <meta
          name="description"
          content="Join our team of digital innovators and build a rewarding career in marketing and tech."
        />
        <link
          rel="canonical"
          href="https://www.bigwigmediadigital.com/career"
        />
      </Helmet>
      <div className="bg-white text-black ">
        {/* Hero */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={cover_img}
            alt="Hiring Cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              We’re Hiring!
            </h1>
            <p className="text-lg md:text-xl mb-4 text-white">
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
          <section className="py-12 px-6 text-center bg-gray-100 ">
            <h2 className="text-3xl font-bold mb-10">Current Openings</h2>

            {loading ? (
              <p>Loading jobs...</p>
            ) : jobs.length === 0 ? (
              <p>No job openings right now. Check back soon!</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-3">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white  p-6 rounded-xl shadow-md border text-left"
                  >
                    <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                    <p className="text-sm mb-1">📍 {job.location}</p>
                    <p className="text-sm mb-1">🧾 {job.jobType}</p>
                    <p className="text-sm mb-1">💼 {job.workMode}</p>
                    <p className="text-sm mb-4">{job.jd}</p>

                    <button
                      className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 "
                      onClick={() => navigate(`/job/${job._id}`)}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            )}
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
