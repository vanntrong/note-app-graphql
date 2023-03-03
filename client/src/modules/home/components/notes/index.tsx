import { Container, Text } from "@nextui-org/react";
import dayjs from "dayjs";
import { FC } from "react";
import { Note as NoteInterface } from "../../../../interfaces/note.interface";
import { Button, Header, List, Title } from "../../styles";
import { Note } from "./styles";

interface NotesProps {
  notes: NoteInterface[];
  setSelectedNote?: (note: NoteInterface) => void;
  selectedNote?: NoteInterface;
  onAddNote?: () => void;
}

const Notes: FC<NotesProps> = ({
  notes,
  setSelectedNote,
  selectedNote,
  onAddNote,
}) => {
  return (
    <Container
      direction="column"
      css={{ backgroundColor: "#F0EBE3", padding: "5px" }}
    >
      <Header>
        <Title h5>Notes</Title>
        <Button light ghost size={"sm"} onPress={onAddNote}>
          Add
        </Button>
      </Header>

      <List>
        {notes.map((note) => (
          <Note
            key={note._id}
            onClick={() => setSelectedNote?.(note)}
            className={selectedNote?._id === note._id ? "selected" : ""}
          >
            <Text>{note.content}</Text>
            <Text span>
              {dayjs(note.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </Text>
          </Note>
        ))}
      </List>
    </Container>
  );
};

export default Notes;
