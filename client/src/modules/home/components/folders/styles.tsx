import { styled, Button, Text } from "@nextui-org/react";

export const Folder = styled("li", {
  padding: "10px 20px",
  width: "100%",
  borderRadius: "5px",
  backgroundColor: "$white",
  color: "$black",

  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$accents3",
  },
  "&.selected": {
    backgroundColor: "#FFD38C",
  },
});
