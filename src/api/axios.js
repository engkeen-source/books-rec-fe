// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8000', // FastAPI server URL
  baseURL: 'https://books-rec-be-production.up.railway.app', // FastAPI server URL
});

export default axiosInstance;
