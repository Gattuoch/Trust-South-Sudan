import React, { useState } from "react";
import { AdminProvider } from "./AdminContext";
import AdminList from "./AdminList";
import AdminForm from "./AdminForm";
import AdminPermissions from "./AdminPermissions";
import { Toaster } from "react-hot-toast";
import Sidebar from "../../SuperAdmin Panel/Sidebar/Sidebar";
import { Plus } from "lucide-react";

export default function AdminManagement() {
  const [showForm, setShowForm] = useState(false);
  const [adminToEdit, setAdminToEdit] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleEdit = (admin) => {
    setAdminToEdit(admin);
    setShowForm(true);
  };

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
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <AdminProvider>
        <main className="flex-1 p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Admin Management
              </h1>
              <p className="text-gray-500 mt-1">
                Manage administrators, roles, and permissions
              </p>
            </div>

            <button
              onClick={() => {
                setAdminToEdit(null);
                setShowForm(true);
              }}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2
              bg-green-600 hover:bg-green-700
              text-white px-5 py-2.5 rounded-lg
              shadow transition"
            >
              <Plus size={18} />
              Add New Admin
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Admin List */}
            <div className="xl:col-span-2 bg-white rounded-xl shadow p-5">
              <AdminList
                onEdit={(admin) => {
                  handleEdit(admin);
                  setSelectedAdmin(admin);
                }}
              />
            </div>

            {/* Permissions Panel */}
            <div className="bg-white rounded-xl shadow p-5">
              {selectedAdmin ? (
                <AdminPermissions admin={selectedAdmin} />
              ) : (
                <div className="text-center text-gray-400 py-10">
                  Select an admin to view permissions
                </div>
              )}
            </div>
          </div>

          {/* Form Modal Area */}
          {showForm && (
            <AdminForm
              adminToEdit={adminToEdit}
              closeForm={() => setShowForm(false)}
            />
          )}
        </main>
      </AdminProvider>
    </div>
  );
}
