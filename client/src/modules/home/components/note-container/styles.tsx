import { styled, Grid, Card as C } from "@nextui-org/react";

export const Container = styled(Grid.Container, {
  backgroundColor: "red",
  height: "100%",
});

export const Card = styled(C, {
  height: "600px",
  maxWidth: "1200px",
  margin: "0 auto !important",
});
