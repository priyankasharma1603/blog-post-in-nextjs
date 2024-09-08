import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get('/api/posts');
    setPosts(data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </main>
    </div>
  );
};

export default Home;
