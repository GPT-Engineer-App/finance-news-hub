import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Markets = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Markets News</Heading>
          <Text mt={4}>Latest updates in the financial markets.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Markets;