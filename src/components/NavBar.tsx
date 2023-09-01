import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => (
  <HStack padding="10px">
    <Link to="/">
      <Image src={logo} style={{ maxWidth: "60px", maxHeight: "60px" }} />
    </Link>

    <SearchInput />
    <ColourModeSwitch />
  </HStack>
);

export default NavBar;
