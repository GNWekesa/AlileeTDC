// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // or use: import.meta.env.VITE_API_URL if using env vars
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
