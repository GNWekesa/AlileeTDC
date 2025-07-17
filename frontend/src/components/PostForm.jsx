import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import useSocket from '../hooks/useSocket';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const socket = useSocket(); // ✅ use the socket here

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/posts', {
        title,
        content,
        category,
      });

      if (response.status === 201) {
        // ✅ Emit a real-time event
        socket?.emit('new_post', {
          title,
          category,
          createdAt: new Date(),
        });

        navigate('/blog');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full border px-3 py-2 rounded min-h-[150px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Category"
          className="w-full border px-3 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#DA70D6] text-white px-4 py-2 rounded hover:bg-pink-500 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
