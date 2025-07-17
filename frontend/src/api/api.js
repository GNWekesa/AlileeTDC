// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // ✅ Relative base URL, so Vite proxy handles it
});

export default api;
