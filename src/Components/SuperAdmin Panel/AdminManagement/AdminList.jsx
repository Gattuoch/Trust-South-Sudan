import React from "react";
import { useAdmin } from "./AdminContext";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminList({ onEdit }) {
  const { admins, loading, deleteAdmin } = useAdmin();

  if (loading) return <p>Loading admins...</p>;

  return (
    <table className="min-w-full border border-gray-200 rounded-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Role</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <tr key={admin._id} className="border-t">
            <td className="p-2">{admin.name}</td>
            <td className="p-2">{admin.email}</td>
            <td className="p-2">{admin.role}</td>
            <td className="p-2">{admin.isActive ? "Active" : "Inactive"}</td>
            <td className="p-2 flex gap-2">
              <button
                onClick={() => onEdit(admin)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => deleteAdmin(admin._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
