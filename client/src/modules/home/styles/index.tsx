import { styled, Button as B, Text } from "@nextui-org/react";

export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
});

export const Title = styled(Text, {
  marginBottom: 0,
});

export const Button = styled(B, {
  padding: 0,
  border: 0,
});

export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  padding: "$5",
  margin: 0,
  gap: "2px",
});
