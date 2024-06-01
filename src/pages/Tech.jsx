import { Container, Heading, Text } from "@chakra-ui/react";

const Tech = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={4}>Tech News</Heading>
      <Text fontSize="md">Latest updates and news in the tech world.</Text>
    </Container>
  );
};

export default Tech;