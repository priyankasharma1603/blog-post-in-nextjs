import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <Flex
      as="header"
      bg="teal.500"
      color="white"
      p="4"
      align="center"
      justify="space-between"
    >
      <Heading size="lg">My Blog</Heading>
      <Button colorScheme="teal" onClick={() => router.push('/create')}>
        Create Post
      </Button>
    </Flex>
  );
};

export default Header;
