import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Vite proxy// this is proxied to http://localhost:5000
});
// the above allows all your components to make backend requests below
// Posts
export const getPosts = () => API.get('/posts');
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Categories
export const getCategories = () => API.get('/categories');
export const createCategory = (data) => API.post('/categories', data);
