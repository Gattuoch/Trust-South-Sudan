import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import axios from "axios";

const AdminDashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [newsPosts, setNewsPosts] = useState([]);
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch News & Jobs from backend
  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch news
      const newsResponse = await axios.get("/api/news", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // Ensure array
      setNewsPosts(Array.isArray(newsResponse.data) ? newsResponse.data : []);

      // Fetch jobs
      const jobsResponse = await axios.get("/api/jobs", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // If response is { jobs: [...] }, grab the array
      const jobsData = Array.isArray(jobsResponse.data)
        ? jobsResponse.data
        : Array.isArray(jobsResponse.data.jobs)
        ? jobsResponse.data.jobs
        : [];
      setJobListings(jobsData);

      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch data from server");
      setNewsPosts([]);
      setJobListings([]);
      setLoading(false);
    }
  };

  fetchData();
}, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Toaster position="top-right" />

      {openSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static`}
      >
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-72 px-4 sm:px-6 lg:px-8 py-8">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            className="lg:hidden bg-white p-2 rounded-md shadow"
            onClick={() => setOpenSidebar(true)}
          >
            ☰
          </button>

          <p className="text-sm text-gray-500">Dashboard / Overview</p>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full"
              alt="avatar"
            />
            <span className="font-medium">Admin User</span>
          </div>
        </div>

        {/* Welcome */}
        <h2 className="text-2xl font-semibold mb-6">Welcome Admin 👋</h2>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Total News Posts"
            value={newsPosts.length}
            info="+12% from last month"
            color="text-green-600"
          />

          <StatCard
            title="Active Job Listings"
            value={jobListings.filter(job => job.status === "Active").length}
            info="No change"
            color="text-gray-500"
          />

          <StatCard
            title="Pending Reviews"
            value={newsPosts.filter(news => news.status === "Draft").length}
            info="Requires attention"
            color="text-orange-600"
          />
        </div>

        {/* ================= NEWS TABLE ================= */}
        <DataTable title="Recent News Posts" data={newsPosts} type="news" />

        {/* ================= JOB TABLE ================= */}
        <DataTable title="Recent Job Listings" data={jobListings} type="job" />

      </main>
    </div>
  );
};

export default AdminDashboard;

/* ================= STAT CARD ================= */
function StatCard({ title, value, info, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
      <p className={`text-sm mt-2 ${color}`}>{info}</p>
    </div>
  );
}

/* ================= DATA TABLE ================= */
function DataTable({ title, data, type }) {
  return (
    <div className="bg-white rounded-xl shadow-md border overflow-hidden mb-10">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50 text-sm text-gray-500 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Title</th>
              <th className="px-6 py-4 text-left font-medium">Date</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
              <th className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {data.map(item => (
              <TableRow key={item._id} item={item} type={type} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= TABLE ROW ================= */
function TableRow({ item, type }) {
  const { title, createdAt, status } = item;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const statusColor =
    type === "news"
      ? status === "Published"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
      : status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <tr className="even:bg-gray-50 hover:bg-emerald-50 transition-all duration-200 hover:shadow-sm">
      <td className="px-6 py-4 font-medium text-gray-800">{title}</td>
      <td className="px-6 py-4 text-gray-500">{formattedDate}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-3">
          <button className="p-2 rounded-md text-blue-600 hover:bg-blue-50 hover:scale-110 cursor-pointer transition">
            <Pencil size={16} />
          </button>
          <button className="p-2 rounded-md text-red-600 hover:bg-red-50 hover:scale-110 cursor-pointer transition">
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}
