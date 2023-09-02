import { useParams } from "react-router-dom";
import { Game } from "../entities/Game";
import useGame from "../hooks/useGame";
import useTrailers from "../hooks/useTrailers";
import { Box, Spinner, Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  const firstTrailer = trailers?.results[0];
  console.log(trailers?.results);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    throw error;
  }

  return firstTrailer ? (
    <video controls poster={firstTrailer.preview}>
      <source src={firstTrailer.data[480]} />
    </video>
  ) : null;
};

export default GameTrailer;
