import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api', 
  // ✅ Uses live backend URL in production and '/api' during local dev (with Vite proxy)
});

export default api;
