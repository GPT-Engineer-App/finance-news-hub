import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const World = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">World News</Heading>
          <Text mt={4}>Latest updates from around the globe.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default World;