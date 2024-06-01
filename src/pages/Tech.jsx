import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Tech = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Tech News</Heading>
          <Text mt={4}>Latest updates in technology.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Tech;