import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../stores/useGameQueryStore";

const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          style={{ maxWidth: "60px", maxHeight: "60px" }}
          onClick={() => setSearchText("")}
        />
      </Link>

      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
