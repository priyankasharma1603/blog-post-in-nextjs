const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

// Middleware
app.use(express.json());

// Mock data file
const postsFilePath = path.join(__dirname, 'data', 'posts.json');

// Load posts from JSON file
const loadPosts = () => {
  const data = fs.readFileSync(postsFilePath);
  return JSON.parse(data);
};

// API routes
app.get('/api/posts', (req, res) => {
  const posts = loadPosts();
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  const posts = loadPosts();
  posts.push(newPost);
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
  res.status(201).json(newPost);
});

app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  let posts = loadPosts();
  posts = posts.filter(post => post.id !== parseInt(id));
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
