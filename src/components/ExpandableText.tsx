import { Text, Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Props {
  maxChars?: number;
  children?: string;
}

const ExpandableText = ({ maxChars = 500, children = "" }: Props) => {
  if (children.length <= maxChars) return <Text> {children} </Text>;

  const [isExpanded, setExpanded] = useState(false);

  const displayedText = isExpanded
    ? children
    : children.slice(0, maxChars) + "...";

  return (
    <Text>
      {displayedText}
      <Button
        size={"xs"}
        marginLeft={1}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
