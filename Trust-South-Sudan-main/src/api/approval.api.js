import axios from "axios";

const API_URL = "/api/approval";

// Get all pending content
export const getPendingContent = async (token) => {
  const res = await axios.get(`${API_URL}/pending`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Approve content (type = 'news' | 'job')
export const approveContent = async (type, id, token) => {
  const res = await axios.put(`${API_URL}/approve/${type}/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Reject content with reason
export const rejectContent = async (type, id, reason, token) => {
  const res = await axios.put(
    `${API_URL}/reject/${type}/${id}`,
    { reason },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
