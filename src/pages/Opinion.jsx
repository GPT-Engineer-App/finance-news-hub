import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Opinion = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Opinion</Heading>
          <Text mt={4}>Latest opinion pieces and editorials.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Opinion;