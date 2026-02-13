import { createContext, useContext, useState, useEffect } from "react";
import * as adminService from "../../services/adminService";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const data = await adminService.getAdmins();
      setAdmins(data);
    } catch (error) {
      console.error("Failed to fetch admins:", error);
    } finally {
      setLoading(false);
    }
  };

  const addAdmin = async (admin) => {
    const data = await adminService.createAdmin(admin);
    setAdmins((prev) => [...prev, data]);
  };

  const updateAdmin = async (id, updates) => {
    const updated = await adminService.updateAdmin(id, updates);
    setAdmins((prev) =>
      prev.map((admin) => (admin._id === id ? updated : admin))
    );
  };

  const deleteAdmin = async (id) => {
    await adminService.deleteAdmin(id);
    setAdmins((prev) => prev.filter((admin) => admin._id !== id));
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <AdminContext.Provider
      value={{ admins, loading, fetchAdmins, addAdmin, updateAdmin, deleteAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};
