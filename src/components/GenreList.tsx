import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { FaBold } from "react-icons/fa";
interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List.Root variant={"plain"}>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={"5px"} fontSize={"large"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Link
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
