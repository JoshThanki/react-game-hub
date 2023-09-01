import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GamesDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <>
      <Heading> {game.name} </Heading>
      <Text> {game.description_raw} </Text>
    </>
  );
};

export default GamesDetail;
