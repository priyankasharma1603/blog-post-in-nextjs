import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const { data } = await axios.get(`/api/posts?id=${id}`);
          setPost(data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchPost();
    }
  }, [id]);

  return (
    <div>
      <Header />
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostPage;
