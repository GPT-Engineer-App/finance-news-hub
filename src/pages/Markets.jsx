import { Container, Heading, Text } from "@chakra-ui/react";

const Markets = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={4}>Markets News</Heading>
      <Text fontSize="md">Latest updates and news in the markets.</Text>
    </Container>
  );
};

export default Markets;