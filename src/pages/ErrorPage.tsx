import { Text, Heading, HStack, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <Box padding={5}>
      <Heading>Oops</Heading>
      <Text>
        {" "}
        {isRouteErrorResponse(error)
          ? "Page couldn't be found"
          : "Unexpected Error"}{" "}
      </Text>
    </Box>
  );
};

export default ErrorPage;
