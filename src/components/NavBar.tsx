import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <HStack>
        <ColorModeButton></ColorModeButton>
        <Text whiteSpace="nowrap">
          {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
        </Text>{" "}
      </HStack>
    </HStack>
  );
};

export default NavBar;
