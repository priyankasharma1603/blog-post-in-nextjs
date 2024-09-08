import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const PostForm = ({ initialData, onSuccess }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData) {
        await axios.put(`/api/posts/${initialData.id}`, { title, content });
      } else {
        await axios.post('/api/posts', { title, content });
      }
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p="4" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb="4" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="content" mb="4" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          {initialData ? 'Update Post' : 'Create Post'}
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
