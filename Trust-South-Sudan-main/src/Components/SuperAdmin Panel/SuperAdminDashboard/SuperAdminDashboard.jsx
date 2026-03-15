import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "../Sidebar/Sidebar.jsx";
import axios from "../../../utils/axios";

const SuperAdminDashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    activeAdmins: 0,
    pendingApprovals: 0,
    systemHealth: "Good",
  });

  const [pendingJobs, setPendingJobs] = useState([]);

  // Fetch metrics and pending jobs
  const fetchMetrics = async () => {
    try {
      const resUsers = await axios.get("/users/count");
      const resAdmins = await axios.get("/admins/count");
      const resPending = await axios.get("/jobs/admin"); // your backend for jobs

      const pending = resPending.data.filter((job) => job.status === "Pending");
      setPendingJobs(pending);

      setMetrics({
        totalUsers: resUsers.data.count || 0,
        activeAdmins: resAdmins.data.active || 0,
        pendingApprovals: pending.length,
        systemHealth: "Good",
      });
    } catch (err) {
      toast.error("Failed to fetch dashboard metrics");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  // Approve Job
  const approveJob = async (id) => {
    try {
      await axios.put(`/jobs/${id}/approve`);
      toast.success("Job approved");
      fetchMetrics();
    } catch {
      toast.error("Failed to approve job");
    }
  };

  // Reject Job
  const rejectJob = async (id) => {
    try {
      await axios.put(`/jobs/${id}/reject`);
      toast.error("Job rejected");
      fetchMetrics();
    } catch {
      toast.error("Failed to reject job");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* Mobile Overlay */}
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

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Super Admin Dashboard</h1>
          <button className="lg:hidden" onClick={() => setOpenSidebar(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Metrics Overview */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">Total Users</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.totalUsers}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">Active Admins</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.activeAdmins}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">Pending Approvals</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.pendingApprovals}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500">System Health</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">{metrics.systemHealth}</p>
          </div>
        </section>

        {/* Pending Jobs Table */}
        {pendingJobs.length > 0 && (
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Approvals</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="px-6 py-3 text-left">Job Title</th>
                    <th className="px-6 py-3 text-left">Department</th>
                    <th className="px-6 py-3 text-left">Posted By</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {pendingJobs.map((job) => (
                    <tr key={job._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{job.title}</td>
                      <td className="px-6 py-4">{job.department}</td>
                      <td className="px-6 py-4">{job.postedBy?.name || "Admin"}</td>
                      <td className="px-6 py-4 flex gap-3">
                        <button
                          onClick={() => approveJob(job._id)}
                          className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs hover:bg-green-600 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => rejectJob(job._id)}
                          className="border border-red-300 text-red-600 px-4 py-1.5 rounded-md text-xs hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Quick Navigation / Actions */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Manage Users
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Manage Admins
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Pending Jobs
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              System Logs
            </button>
          </div>
        </section>

        {/* Optional: Graphs / Charts Placeholder */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Overview Charts</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">
            {/* Insert chart components here */}
            Charts will be displayed here
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuperAdminDashboard;
