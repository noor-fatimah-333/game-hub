import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { LuChevronDown } from "react-icons/lu";
import usePlatforms from "../hooks/usePlatforms";
import { Box } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <MenuRoot size="md">
      <MenuTrigger>
        <Button variant="outline">
          {selectedPlatform?.name || "Platforms"} <LuChevronDown />
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
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </Box>
        ))}
      </Box>
    </MenuRoot>
  );
};

export default PlatformSelector;
