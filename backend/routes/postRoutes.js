const express = require('express'); 
const router = express.Router();
const Post = require('../models/Post');

// ✅ GET /api/posts — Fetch all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err.message);
    res.status(500).json({ message: 'Failed to fetch posts', error: err.message });
  }
});

// ✅ POST /api/posts — Create a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, content, category } = req.body;

    // Log incoming data
    console.log('Received:', { title, content, category });

    if (!title || !content || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newPost = new Post({ title, content, category });
    const savedPost = await newPost.save();

    req.io?.emit('new_post', savedPost); // Emit socket event if available
    res.status(201).json(savedPost);
  } catch (err) {
    console.error('Post creation error:', err.message);
    res.status(500).json({ message: 'Error creating post', error: err.message });
  }
});

// ✅ GET /api/posts/:id — Get a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error('Error fetching post:', err.message);
    res.status(500).json({ message: 'Error retrieving post', error: err.message });
  }
});

module.exports = router;
