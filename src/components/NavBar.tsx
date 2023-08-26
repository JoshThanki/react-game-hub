import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => (
  <div>
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch} />
      <ColourModeSwitch />
    </HStack>
  </div>
);

export default NavBar;
