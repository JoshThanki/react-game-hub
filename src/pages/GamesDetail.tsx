import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import { useGenres } from "../hooks/useGenres";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/Screenshots";

const GamesDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  useEffect(() => {
    document.title = game?.name || "Details";
  }, [game]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading> {game.name} </Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <Screenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GamesDetail;
