import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
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
