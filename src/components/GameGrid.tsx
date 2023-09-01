import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../stores/useGameQueryStore";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames();

  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Box padding={10}>
        <InfiniteScroll
          dataLength={
            data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0
          }
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={
            <HStack justifyContent={"center"} padding={10} my={5}>
              <Spinner />
            </HStack>
          }
          endMessage={
            <Text textAlign={"center"} my={5}>
              You have reached the end
            </Text>
          }
        >
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default GameGrid;
