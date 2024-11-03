import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="400px">
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
