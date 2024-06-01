import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Welcome to Financial Times</Heading>
          <Text mt={4}>Your source for the latest news in World, Business, Markets, Opinion, and Tech.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Top Stories</Heading>
          <Text mt={4}>Stay tuned for the latest updates.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;