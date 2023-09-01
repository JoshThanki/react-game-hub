import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Grid,
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

const GamesDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <>
      <Heading> {game.name} </Heading>

      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GamesDetail;
