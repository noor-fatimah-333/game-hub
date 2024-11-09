import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { LuChevronDown } from "react-icons/lu";
import { Box } from "@chakra-ui/react";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date Added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <MenuRoot size="md">
      <MenuTrigger>
        <Button variant="outline">
          Order By : {currentSortOrder?.label || "Relevance"}
          <LuChevronDown />
        </Button>
      </MenuTrigger>
      <Box
        as={MenuContent}
        maxH="200px"
        overflowY="auto"
        borderRadius="md"
        p="2"
        boxShadow="md"
        width="200px"
      >
        {sortOrders.map((order) => (
          <Box
            as={MenuItem}
            key={order.value}
            _hover={{ bg: "gray.600" }}
            _focus={{ bg: "transparent" }}
            _active={{ bg: "gray.600" }}
            fontSize="sm"
            p="2"
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </Box>
        ))}
      </Box>
    </MenuRoot>
  );
};

export default SortSelector;
