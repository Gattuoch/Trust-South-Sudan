import React from "react";

export default function JobFormModal({ form, setForm, handleSubmit, resetForm }) {
  return (
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
          onChange={(e) => setForm({ ...form, department: e.target.value })}
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
          onChange={(e) => setForm({ ...form, employmentType: e.target.value })}
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
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Experience (e.g. 3+ years)"
          className="w-full border p-2 rounded"
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
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
          onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
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
  );
}
