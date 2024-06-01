import { Container, Heading, Text } from "@chakra-ui/react";

const World = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={4}>World News</Heading>
      <Text fontSize="md">Latest updates and news from around the world.</Text>
    </Container>
  );
};

export default World;