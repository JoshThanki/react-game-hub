import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Grid, HStack, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  console.log(screenshots);
  if (isLoading) {
    return <Spinner />;
  }

  if (error || !screenshots) {
    throw error;
  }

  return (
    <SimpleGrid padding={"10px"} columns={{ sm: 1, md: 2 }} spacing={2}>
      {screenshots.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
