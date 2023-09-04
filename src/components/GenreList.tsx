import {
  HStack,
  Image,
  List,
  ListItem,
  VStack,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/useGameQueryStore";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const { gameQuery, setGenreId } = useGameQueryStore();



  return (
    <>
      {isLoading && <Spinner />}
      {error ? <Text> Genres Not Found </Text> : ""}
      <Heading fontSize={"2xl"} marginBottom={"2"}>
        {" "}
        Genres{" "}
      </Heading>
      <List>
        {data?.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={1}>
              <HStack>
                <Image
                  boxSize="32px"
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius={8}
                  objectFit={"cover"}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={
                    genre.id === gameQuery.genreId ? "bold" : "normal"
                  }
                  value={genre.name}
                  fontSize="large"
                  variant={"link"}
                  onClick={() => setGenreId(genre.id)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
