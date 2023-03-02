import React from "react";
import { Container, Card, Text, Button } from "@nextui-org/react";
import useLogin from "../services/useLogin";

const LoginPage = () => {
  const { loginGoogle } = useLogin();
  return (
    <Container>
      <Card css={{ marginTop: "$10", padding: "$10" }}>
        <Text h1 css={{ textAlign: "center" }} size={"$xl"}>
          Login
        </Text>
        <Button
          css={{ width: "fit-content", margin: "0 auto" }}
          color="gradient"
          onPress={loginGoogle}
        >
          <Text color="white">Login with google</Text>
        </Button>
      </Card>
    </Container>
  );
};

export default LoginPage;
