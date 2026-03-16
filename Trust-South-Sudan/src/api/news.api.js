import axios from "axios";

const API_URL = "/api/news";

export const getApprovedNews = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createNews = async (news, token) => {
  const res = await axios.post(API_URL, news, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
