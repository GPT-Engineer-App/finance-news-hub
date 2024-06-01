import { Container, Heading, Text } from "@chakra-ui/react";

const Opinion = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={4}>Opinion</Heading>
      <Text fontSize="md">Latest opinion pieces and editorials.</Text>
    </Container>
  );
};

export default Opinion;