import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

type AnalyticsRow = {
  city: string;
  activeUsers: number;
};

export default function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsRow[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/google/analytics-data")
      .then((res) => {
        const formatted: AnalyticsRow[] = res.data.rows.map((row: any) => ({
          city: row.dimensionValues[0].value,
          activeUsers: parseInt(row.metricValues[0].value),
        }));
        setData(formatted);
      })
      .catch((err) => console.error("Failed to load analytics data", err));
  }, []);

  const totalUsers = data.reduce(
    (sum: any, item: any) => sum + item.activeUsers,
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">City-wise Active Users</h1>

      {/* Total users */}
      <div className="mb-6 p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold">
          Total Active Users: {totalUsers}
        </h2>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" angle={-45} textAnchor="end" height={90} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="activeUsers" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="mt-8 bg-white p-6 shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Detailed Table</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-2">City</th>
              <th className="border-b p-2">Active Users</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="border-b p-2">{row.city}</td>
                <td className="border-b p-2">{row.activeUsers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
