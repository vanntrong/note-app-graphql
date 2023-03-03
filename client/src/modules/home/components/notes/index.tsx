import { Container, Text } from "@nextui-org/react";
import { Button, Header, List, Title } from "../../styles";
import { Note } from "./styles";
import { Note as NoteInterface } from "../../../../interfaces/note.interface";
import { FC, useEffect } from "react";
import dayjs from "dayjs";
import useAddNote from "../../services/useAddNote";

interface NotesProps {
  notes: NoteInterface[];
  selectedFolderId?: string;
  reflectFetchNote?: () => void;
  setSelectedNote?: (note: NoteInterface) => void;
  selectedNote?: NoteInterface;
}

const Notes: FC<NotesProps> = ({
  notes,
  selectedFolderId,
  reflectFetchNote,
  setSelectedNote,
  selectedNote,
}) => {
  const { addNote, data } = useAddNote();

  useEffect(() => {
    if (data) {
      reflectFetchNote?.();
    }
  }, [data]);

  return (
    <Container
      direction="column"
      css={{ backgroundColor: "#F0EBE3", padding: "5px" }}
    >
      <Header>
        <Title h5>Notes</Title>
        <Button
          light
          ghost
          size={"sm"}
          onPress={() =>
            addNote({
              variables: { content: "empty", folderId: selectedFolderId },
            })
          }
        >
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
