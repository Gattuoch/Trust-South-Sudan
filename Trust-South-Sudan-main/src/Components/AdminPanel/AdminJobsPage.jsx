import React, { useEffect, useState } from "react";
import { Plus, Trash2, Edit, Search, Menu } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";
import axios from "../../utils/axios"; // adjust path if needed

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    id: null,
    title: "",
    department: "",
    location: "",
    employmentType: "Full-time",
    description: "",
    experience: "",
    skills: "",
    applicationDeadline: "",
    contactEmail: "",
    status: "Pending",
  });

  /* ================= FETCH JOBS ================= */
  const fetchJobs = async () => {
    const res = await axios.get("/jobs/admin");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id) {
        await axios.put(`/jobs/${form.id}`, {
          ...form,
          skills: form.skills.split(","),
        });
        toast.success("Job updated & resubmitted");
      } else {
        await axios.post("/jobs", {
          ...form,
          skills: form.skills.split(","),
        });
        toast.success("Job submitted for approval");
      }

      resetForm();
      fetchJobs();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      department: "",
      location: "",
      employmentType: "Full-time",
      description: "",
      experience: "",
      skills: "",
      applicationDeadline: "",
      contactEmail: "",
      status: "Pending",
    });
    setShowForm(false);
  };

  const handleEdit = (job) => {
    setForm({
      id: job._id,
      title: job.title,
      department: job.department,
      location: job.location,
      employmentType: job.employmentType,
      description: job.description,
      experience: job.experience,
      skills: job.skills?.join(", "),
      applicationDeadline: job.applicationDeadline?.slice(0, 10),
      contactEmail: job.contactEmail,
      status: job.status,
    });
    setShowForm(true);
  };

  /* ================= FILTER ================= */
  const filteredJobs = jobs.filter((j) => {
    return (
      j.title.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter ? j.employmentType === typeFilter : true) &&
      (statusFilter ? j.status === statusFilter : true)
    );
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Toaster position="top-right" />

      {/* Mobile Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static`}
      >
        <Sidebar />
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setOpenSidebar(true)}>
              <Menu />
            </button>
            <h1 className="text-2xl font-bold text-emerald-700">
              Jobs Management
            </h1>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg"
          >
            <Plus size={18} /> Add Job
          </button>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
            <input
              placeholder="Search job..."
              className="pl-8 pr-3 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="border rounded-lg px-3 py-2"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>

          <select
            className="border rounded-lg px-3 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option>Pending</option>
            <option>Published</option>
            <option>Rejected</option>
            <option>Closed</option>
          </select>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Job Title</th>
                <th>Department</th>
                <th>Type</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredJobs.map((job) => (
                <tr key={job._id} className="border-t">
                  <td className="p-3 font-medium">{job.title}</td>
                  <td>{job.department}</td>
                  <td>{job.employmentType}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        job.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : job.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </td>
                  <td className="flex gap-3 py-2">
                    <button onClick={() => handleEdit(job)}>
                      <Edit className="text-blue-600" size={18} />
                    </button>
                    <button disabled>
                      <Trash2 className="text-gray-400" size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* ================= MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 w-full max-w-lg rounded-xl space-y-3"
          >
            <h2 className="text-xl font-semibold text-emerald-700">
              {form.id ? "Edit Job" : "Add Job"}
            </h2>

            <input
              required
              placeholder="Job Title"
              className="w-full border p-2 rounded"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
              required
              placeholder="Department / Program"
              className="w-full border p-2 rounded"
              value={form.department}
              onChange={(e) =>
                setForm({ ...form, department: e.target.value })
              }
            />

            <input
              required
              placeholder="Location"
              className="w-full border p-2 rounded"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <select
              className="w-full border p-2 rounded"
              value={form.employmentType}
              onChange={(e) =>
                setForm({ ...form, employmentType: e.target.value })
              }
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>

            <textarea
              placeholder="Job Description"
              className="w-full border p-2 rounded h-24"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <input
              placeholder="Experience (e.g. 3+ years)"
              className="w-full border p-2 rounded"
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
            />

            <input
              placeholder="Skills (comma separated)"
              className="w-full border p-2 rounded"
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
            />

            <input
              type="date"
              className="w-full border p-2 rounded"
              value={form.applicationDeadline}
              onChange={(e) =>
                setForm({ ...form, applicationDeadline: e.target.value })
              }
            />

            <input
              required
              placeholder="Contact Email"
              className="w-full border p-2 rounded"
              value={form.contactEmail}
              onChange={(e) =>
                setForm({ ...form, contactEmail: e.target.value })
              }
            />

            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border rounded hover:bg-red-500 hover:text-white"
              >
                Cancel
              </button>
                                    
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
