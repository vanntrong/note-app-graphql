import { styled } from "@nextui-org/react";

export const Note = styled("li", {
  padding: "10px 20px",
  width: "100%",
  borderRadius: "5px",
  backgroundColor: "$white",
  color: "$black",

  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$accents3",
  },

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "& > p": {
    fontWeight: "$medium",
    fontSize: "$sm",
    marginBottom: 2,
    lineHeight: 1,
  },

  "& > span": {
    fontSize: "$xs",
    color: "$accents6",
    display: "inline-block",
    lineHeight: 1,
  },

  "&.selected": {
    backgroundColor: "#FFD38C",
  },
});
