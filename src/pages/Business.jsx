import { Container, Heading, Text } from "@chakra-ui/react";

const Business = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={4}>Business News</Heading>
      <Text fontSize="md">Latest updates and news in the business world.</Text>
    </Container>
  );
};

export default Business;