import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { Platform } from "../data/types";
import { usePlatform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  const selectedPlatformObj = usePlatform(selectedPlatformId);

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
              onClick={() => onSelectPlatform(platform)}
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
