import { Grid } from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { useAppContext } from "../../../../contexts/app.context";
import useDebounce from "../../../../hooks/useDebounce";
import { Note } from "../../../../interfaces/note.interface";
import useGetFolder from "../../services/useGetFolder";
import useUpdateNodeContent from "../../services/useUpdateNote";
import Editor from "../editor";
import Folders from "../folders";
import Notes from "../notes";
import { Card, Container } from "./styles";

const NoteContainer: FC = () => {
  const { folders } = useAppContext();
  const [selectedFolderId, setSelectedFolderId] = useState<string>();
  const [selectedNote, setSelectedNote] = useState<Note>();
  const { data, refetch } = useGetFolder({
    folderId: selectedFolderId,
  });
  const { updateNoteContent, data: updateNoteContentData } =
    useUpdateNodeContent();

  const debounce = useDebounce(selectedNote?.content);

  useEffect(() => {
    if (debounce && selectedNote) {
      updateNoteContent({
        variables: {
          noteId: selectedNote._id,
          content: debounce,
        },
      });
    }
  }, [debounce]);

  useEffect(() => {
    if (updateNoteContentData) {
      refetch();
    }
  }, [updateNoteContentData]);

  return (
    <Card>
      <Container css={{ backgroundColor: "white" }}>
        <Grid xs={3}>
          <Folders
            folders={folders}
            onSelectedFolder={(id) => setSelectedFolderId(id)}
            selectedFolderId={selectedFolderId}
          />
        </Grid>
        <Grid xs={3}>
          <Notes
            notes={data?.folder.notes || []}
            selectedFolderId={selectedFolderId}
            reflectFetchNote={refetch}
            setSelectedNote={setSelectedNote}
            selectedNote={selectedNote}
          />
        </Grid>
        <Grid xs={6}>
          {selectedNote && (
            <Editor
              content={selectedNote?.content}
              onChange={(value) =>
                setSelectedNote((prev) =>
                  prev ? { ...prev, content: value } : prev
                )
              }
            />
          )}
        </Grid>
      </Container>
    </Card>
  );
};

export default NoteContainer;
