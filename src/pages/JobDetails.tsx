import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";

interface Job {
  _id: string;
  title: string;
  location: string;
  jd: string;
  responsibilities: string[];
  requirements: string[];
  jobType: string;
  workMode: string;
  createdAt: string;
}

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(
          `https://bigwigdigitalbackend.onrender.com/api/jobs/${id}`
        );
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error("Failed to fetch job:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-white border-t-[var(--primary-color)] rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">
          Loading job details...
        </p>
      </div>
    );
  }

  if (!job) {
    return <div className="text-center mt-10 text-red-500">Job not found.</div>;
  }

  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
          <p className="text-gray-600 mb-1">📍 {job.location}</p>
          <p className="text-gray-600 mb-1">🕒 {job.jobType}</p>
          <p className="text-gray-600 mb-6">🏢 {job.workMode}</p>
          <p className="text-gray-600 mb-6">{job.jd}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">What You’ll Do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Requirements / Skills Needed
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content - Application Form */}
        <div className="lg:w-2/3 bg-[#5E3C20] text-black rounded-xl p-6 shadow-lg">
          <ApplicationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
