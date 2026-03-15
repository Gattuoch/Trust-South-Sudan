import React, { useState, useEffect } from "react";
import { useAdmin } from "./AdminContext";

export default function AdminForm({ adminToEdit, closeForm }) {
  const { addAdmin, updateAdmin } = useAdmin();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "ADMIN",
    isActive: true,
  });

  useEffect(() => {
    if (adminToEdit) {
      setForm({ ...adminToEdit, password: "" });
    }
  }, [adminToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (adminToEdit) {
        await updateAdmin(adminToEdit._id, form);
      } else {
        await addAdmin(form);
      }
      closeForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <div className="mb-2">
        <label className="block">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-1 w-full"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-1 w-full"
          required
        />
      </div>

      {!adminToEdit && (
        <div className="mb-2">
          <label className="block">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border p-1 w-full"
            required
          />
        </div>
      )}

      <div className="mb-2">
        <label className="block">Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-1 w-full"
        >
          <option value="ADMIN">SuperAdmin</option>
          <option value="ADMIN">ContentManager</option>
          <option value="ADMIN">FinanceManager</option>
          <option value="ADMIN">SupportAdmin</option>
        </select>
      </div>

      <div className="mb-2 flex items-center gap-2">
        <input
          type="checkbox"
          name="isActive"
          checked={form.isActive}
          onChange={handleChange}
        />
        <label>Active</label>
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <button
          type="button"
          onClick={closeForm}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          {adminToEdit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
