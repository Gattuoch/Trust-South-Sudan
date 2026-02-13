import React, { useState } from "react";
import { Plus, Trash2, Edit, Search, Menu, Clock } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";

const PROGRAMS = [
  "Healing the Nation",
  "Empowering Tomorrow",
  "Women Rise",
  "Food for Peace",
  "Healthy Communities",
  "Accountable Leaders",
  "Green South Sudan",
];

export default function AdminNewsPage() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [programFilter, setProgramFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    id: null,
    title: "",
    summary: "",
    content: "",
    program: "",
    status: "Draft", // Draft | Pending
    coverImage: null,
    createdAt: new Date().toISOString().slice(0, 10),
  });

  /* ===================== SUBMIT ===================== */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      setNews((prev) =>
        prev.map((n) => (n.id === form.id ? form : n))
      );
      toast.success("News updated");
    } else {
      setNews((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
      toast.success("News created and saved");
    }

    resetForm();
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      summary: "",
      content: "",
      program: "",
      status: "Draft",
      coverImage: null,
      createdAt: new Date().toISOString().slice(0, 10),
    });
    setShowForm(false);
  };

  /* ===================== ACTIONS ===================== */
  const handleEdit = (item) => {
    setForm(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (confirm("Delete this news item?")) {
      setNews((prev) => prev.filter((n) => n.id !== id));
      toast.success("News deleted");
    }
  };

  /* ===================== FILTER ===================== */
  const filteredNews = news.filter((n) => {
    return (
      n.title.toLowerCase().includes(search.toLowerCase()) &&
      (programFilter ? n.program === programFilter : true) &&
      (statusFilter ? n.status === statusFilter : true)
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

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setOpenSidebar(true)}
            >
              <Menu />
            </button>
            <h1 className="text-2xl font-bold text-emerald-700">
              News Management
            </h1>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
          >
            <Plus size={18} /> Create News
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
            <input
              placeholder="Search news..."
              className="pl-8 pr-3 py-2 border rounded-lg w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => setProgramFilter(e.target.value)}
          >
            <option value="">All Programs</option>
            {PROGRAMS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <select
            className="border rounded-lg px-3 py-2"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option>Draft</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Program</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Created</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredNews.length ? (
                filteredNews.map((item, i) => (
                  <tr key={item.id} className={i % 2 ? "bg-gray-50" : ""}>
                    <td className="p-3 font-medium">{item.title}</td>
                    <td className="p-3">{item.program}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-1 text-xs rounded font-semibold ${
                          item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">{item.createdAt}</td>
                    <td className="p-3 flex justify-center gap-3">
                      <button onClick={() => handleEdit(item)}>
                        <Edit size={18} className="text-blue-600" />
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    No news found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-full max-w-lg space-y-4"
          >
            <h2 className="text-xl font-semibold text-emerald-700">
              {form.id ? "Edit News" : "Create News"}
            </h2>

            <input
              required
              placeholder="Title"
              className="w-full border p-2 rounded"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <textarea
              placeholder="Summary"
              className="w-full border p-2 rounded h-20"
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
            />

            <textarea
              placeholder="Full Content"
              className="w-full border p-2 rounded h-32"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />

            <select
              className="w-full border p-2 rounded"
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
            >
              <option value="">Select Program</option>
              {PROGRAMS.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>

            <select
              className="w-full border p-2 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option>Draft</option>
              <option>Pending</option>
            </select>

            <input
              type="file"
              onChange={(e) =>
                setForm({ ...form, coverImage: e.target.files[0] })
              }
            />

            <div className="flex justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded"
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
