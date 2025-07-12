import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App.jsx'; // Homepage
import Layout from './components/Layout.jsx';
import PostList from './components/PostList.jsx';
import PostPage from './components/PostPage.jsx';
import PostForm from './components/PostForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route group with shared layout (Footer etc.) */}
        <Route path="/" element={<Layout />}>
          {/* Homepage (hero, buttons, etc.) */}
          <Route index element={<App />} />

          {/* Blog routes */}
          <Route path="blog" element={<PostList />} />
          <Route path="blog/create" element={<PostForm />} />
          <Route path="blog/edit/:id" element={<PostForm />} />
          <Route path="blog/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
