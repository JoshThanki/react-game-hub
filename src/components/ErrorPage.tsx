import { Text, Heading, HStack, Box } from "@chakra-ui/react";
import React from "react";

const ErrorPage = () => {
  return (
    <Box padding={5}>
      <Heading>Oops</Heading>
      <Text> Page couldn't be found </Text>
    </Box>
  );
};

export default ErrorPage;
