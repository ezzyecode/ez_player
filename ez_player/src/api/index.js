// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // แก้ไขเป็น URL ของ API ของคุณ

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const getVideos = async () => {
  const response = await axios.get(`${API_URL}/videos`);
  return response.data;
};

export const uploadVideo = async (videoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/videos`, videoData, config);
  return response.data;
};

export const getVideoById = async (videoId) => {
  const response = await axios.get(`${API_URL}/videos/${videoId}`);
  return response.data;
};
