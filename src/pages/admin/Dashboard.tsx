import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBook } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const GRADIENTS = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-sky-500 via-blue-500 to-indigo-600",
];

interface LeadStat {
  date: string;
  count: number;
}

const Dashboard = () => {
  const [counts, setCounts] = useState({
    leads: 0,
    blogs: 0,
    jobApplications: 0,
  });

  const [leadGraphData, setLeadGraphData] = useState<LeadStat[]>([]);

  useEffect(() => {
    Promise.all([
      fetch(`${baseURL}/api/lead/all`).then((r) => r.json()),
      fetch(`${baseURL}/viewblog`).then((r) => r.json()),
      fetch(`${baseURL}/api/jobs/all`).then((r) => r.json()),
      fetch(`${baseURL}/api/lead/last10days`).then((r) => r.json()),
    ])
      .then(([leads, blogs, jobApplications, leadStats]) => {
        setCounts({
          leads: Array.isArray(leads) ? leads.length : 0,
          blogs: Array.isArray(blogs) ? blogs.length : 0,
          jobApplications: Array.isArray(jobApplications)
            ? jobApplications.length
            : 0,
        });

        if (Array.isArray(leadStats)) {
          setLeadGraphData(leadStats);
        }
      })
      .catch((error) => {
        console.error("Error loading dashboard data:", error);
      });
  }, []);

  const cards = [
    { title: "Leads", icon: <FaPhoneAlt />, count: counts.leads },
    { title: "Blogs Data", icon: <FaBook />, count: counts.blogs },
    {
      title: "Job Application Data",
      icon: <FaBook />,
      count: counts.jobApplications,
    },
  ];

  return (
    <section className="px-4 py-8 space-y-10">
      <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {cards.map((card, idx) => (
          <StatCard
            key={card.title}
            {...card}
            gradient={GRADIENTS[idx % GRADIENTS.length]}
          />
        ))}
      </div>

      {/* Leads Graph */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Leads in Last 10 Days
        </h3>
        {leadGraphData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={leadGraphData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No data to display.</p>
        )}
      </div>
    </section>
  );
};

const StatCard = ({
  title,
  icon,
  count,
  gradient,
}: {
  title: string;
  icon: JSX.Element;
  count: number;
  gradient: string;
}) => (
  <div
    className={`w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white bg-gradient-to-br ${gradient}`}
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold mb-1 text-center">{title}</h3>
    <p className="text-3xl font-bold">{count}</p>
  </div>
);

export default Dashboard;
