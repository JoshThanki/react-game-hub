import { Heading } from "@chakra-ui/react";
import React from "react";
import { usePlatforms } from "../hooks/usePlatforms";
import { useGenres } from "../hooks/useGenres";
import { usePlatform } from "../hooks/usePlatform";
import { useGenre } from "../hooks/useGenre";
import useGameQueryStore from "../hooks/useGameQueryStore";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();

  const selectedPlatformObj = usePlatform(gameQuery.platformId);

  const selectedGenreObj = useGenre(gameQuery.genreId);

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {(selectedPlatformObj?.name || "") +
        (" " + (selectedGenreObj?.name || ""))}
      {"  "}
      Games
    </Heading>
  );
};

export default GameHeading;
