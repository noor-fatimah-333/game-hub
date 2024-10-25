import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <Card.Header>
        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card.Root>
  );
};

export default GameCard;
