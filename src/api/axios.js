import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: process.env.BACKEND_BASE_URL, // FastAPI server URL
  baseURL: 'http://localhost:8000', // FastAPI server URL
  });

export default axiosInstance;