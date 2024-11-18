import { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticStore from "./CriticStore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Header>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticStore score={game.metacritic}></CriticStore>
        </HStack>
      </Card.Header>
      <Card.Body>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
