import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColourModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Text whiteSpace={"nowrap"}>
          {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
        </Text>
      </HStack>
    </div>
  );
};

export default ColourModeSwitch;
