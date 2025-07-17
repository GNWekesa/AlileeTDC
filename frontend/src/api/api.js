// src/api/api.js
import axios from 'axios';

// Use the VITE_API_URL from the .env file
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
