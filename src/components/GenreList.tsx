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
import { Genre, useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  console.log(data);

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
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  value={genre.name}
                  fontSize="large"
                  variant={"link"}
                  onClick={() => onSelectGenre(genre)}
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
