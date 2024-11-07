import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { LuChevronDown } from "react-icons/lu";
import usePlatforms from "../hooks/usePlatforms";
import { Box } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot size="md">
      <MenuTrigger>
        <Button variant="outline">
          Platforms <LuChevronDown />
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
        {data.map((platform) => (
          <Box
            as={MenuItem}
            key={platform.id}
            _hover={{ bg: "gray.600" }}
            _focus={{ bg: "transparent" }}
            _active={{ bg: "gray.600" }}
            fontSize="sm"
            p="2"
          >
            {platform.name}
          </Box>
        ))}
      </Box>
    </MenuRoot>
  );
};

export default PlatformSelector;
