import { Box, Heading, Text, Button } from '@chakra-ui/react';

const BlogCard = ({ post, onDelete }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p="4"
      mb="4"
      shadow="md"
    >
      <Heading size="md" mb="2">{post.title}</Heading>
      <Text mb="4">{post.excerpt}</Text>
      <Button colorScheme="blue" onClick={() => window.location.href = `/posts/${post.id}`}>
        View Post
      </Button>
      <Button colorScheme="red" ml="4" onClick={() => onDelete(post.id)}>
        Delete Post
      </Button>
    </Box>
  );
};

export default BlogCard;
