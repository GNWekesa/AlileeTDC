import { useEffect, useState } from 'react';
import api from '../api/api';
import useSocket from '../hooks/useSocket';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const socket = useSocket();

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Listen for new posts via socket
  useEffect(() => {
    if (socket) {
      socket.on('new_post', (newPost) => {
        setPosts((prev) => [newPost, ...prev]);
      });
    }

    return () => {
      socket?.off('new_post');
    };
  }, [socket]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
