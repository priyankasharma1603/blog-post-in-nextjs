import { useRouter } from 'next/router';
import PostForm from '../components/PostForm';
import Header from '../components/Header';

const CreatePostPage = () => {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/');
  };

  return (
    <div>
      <Header />
      <h1>Create a New Post</h1>
      <PostForm onSuccess={handleSuccess} />
    </div>
  );
};

export default CreatePostPage;
