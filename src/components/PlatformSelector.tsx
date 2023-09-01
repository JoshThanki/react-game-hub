import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { usePlatform } from "../hooks/usePlatform";
import useGameQueryStore from "../stores/useGameQueryStore";

const PlatformSelector = () => {
  const { gameQuery, setPlatformId } = useGameQueryStore();
  const { data, error, isLoading } = usePlatforms();

  const selectedPlatformObj = usePlatform(gameQuery.platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformObj?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <>
          {isLoading && <Spinner />}

          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
