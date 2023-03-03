import React, { FC, useState } from "react";
import { Container, Text } from "@nextui-org/react";
import { Folder } from "./styles";
import { Button, Header, List, Title } from "../../styles";
import AddFolderModal from "../add-folder-modal";
import { Folder as IFolder } from "../../../../interfaces/folder.interface";
import useAddFolder from "../../services/useAddFolder";

interface FoldersProps {
  folders: IFolder[];
  onSelectedFolder: (folderId: string) => void;
  selectedFolderId?: string;
}

const Folders: FC<FoldersProps> = ({
  folders,
  onSelectedFolder,
  selectedFolderId,
}) => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);
  const { addFolder } = useAddFolder();

  return (
    <Container
      direction="column"
      css={{ backgroundColor: "#7D9D9C", padding: "5px" }}
    >
      <Header>
        <Title h5>Folders</Title>
        <Button
          light
          ghost
          size={"sm"}
          onPress={() => setIsAddFolderModalOpen(true)}
        >
          Add
        </Button>
      </Header>
      <List>
        {folders.map((fo) => (
          <Folder
            key={fo._id}
            onClick={() => onSelectedFolder(fo._id)}
            className={selectedFolderId === fo._id ? "selected" : ""}
          >
            <Text>{fo.name}</Text>
          </Folder>
        ))}
      </List>
      <AddFolderModal
        open={isAddFolderModalOpen}
        onClose={() => setIsAddFolderModalOpen(false)}
        onConfirm={(name) => {
          addFolder({ variables: { name } });
        }}
        closeAfterConfirm
      />
    </Container>
  );
};

export default Folders;
