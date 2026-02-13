import axios from "axios";

const API_URL = "http://localhost:5000/api/superadminRoutes";

const getToken = () => localStorage.getItem("token"); // JWT stored in localStorage

const config = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const getAdmins = async () => {
  const res = await axios.get(API_URL, config());
  return res.data;
};

export const createAdmin = async (admin) => {
  const res = await axios.post(API_URL, admin, config());
  return res.data.admin;
};

export const updateAdmin = async (id, updates) => {
  const res = await axios.put(`${API_URL}/${id}`, updates, config());
  return res.data.admin;
};

export const deleteAdmin = async (id) => {
  await axios.delete(`${API_URL}/${id}`, config());
};
