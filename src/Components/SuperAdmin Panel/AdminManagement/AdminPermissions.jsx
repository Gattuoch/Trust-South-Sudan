import React from "react";

// This is a placeholder; you can enhance it to show permissions dynamically
export default function AdminPermissions({ admin }) {
  if (!admin) return null;

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h3 className="font-bold mb-2">Permissions for {admin.name}</h3>
      <ul className="list-disc ml-5">
        {admin.role === "SuperAdmin" && <li>All permissions</li>}
        {admin.role === "ContentManager" && <li>Manage content</li>}
        {admin.role === "FinanceManager" && <li>View financial reports</li>}
        {admin.role === "SupportAdmin" && <li>Manage users/support</li>}
      </ul>
    </div>
  );
}
