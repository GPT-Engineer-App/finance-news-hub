import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Business = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Business News</Heading>
          <Text mt={4}>Latest updates in the business world.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Business;