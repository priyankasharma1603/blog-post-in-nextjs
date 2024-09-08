// pages/api/posts.js
export default function handler(req, res) {
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is the content for Post 1' },
    { id: 2, title: 'Post 2', content: 'This is the content for Post 2' },
  ];

  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
