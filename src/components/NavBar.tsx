import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack padding="10px">
    <Image src={logo} boxSize="60px"></Image>
    <SearchInput />
    <ColourModeSwitch />
  </HStack>
);

export default NavBar;
