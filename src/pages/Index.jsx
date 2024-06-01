import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="2xl">Welcome to Financial Times</Heading>
        <Text fontSize="lg">Your source for the latest news in World, Business, Markets, Opinion, and Tech.</Text>
      </VStack>
    </Container>
  );
};

export default Index;