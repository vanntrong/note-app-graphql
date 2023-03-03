import { Avatar, Container, Text } from "@nextui-org/react";
import { useAuthContext } from "../../../contexts/auth.context";
import NoteContainer from "../components/note-container";
import useGetAllFolders from "../services/useGetAllFolders";

const HomePage = () => {
  const { user } = useAuthContext();
  useGetAllFolders();

  return (
    <Container
      display="flex"
      justify="center"
      direction="column"
      alignItems="center"
      css={{ paddingTop: "$10" }}
    >
      <Text h1 size={"$3xl"}>
        Note App
      </Text>
      <div style={{ width: "100%" }}>
        {user && (
          <Container
            display="flex"
            alignItems="center"
            justify="flex-end"
            css={{ maxWidth: "1200px", marginBottom: "10px" }}
          >
            <Text css={{ marginRight: "10px" }}>{user.displayName}</Text>
            <Avatar size={"sm"} src={user.avatar} />
          </Container>
        )}
        <NoteContainer />
      </div>
    </Container>
  );
};

export default HomePage;
