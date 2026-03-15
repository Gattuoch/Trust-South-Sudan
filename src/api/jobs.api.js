import axios from "axios";

const API_URL = "/api/jobs";

export const getApprovedJobs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createJob = async (job, token) => {
  const res = await axios.post(API_URL, job, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
