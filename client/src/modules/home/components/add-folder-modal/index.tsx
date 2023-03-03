import React, { FC, useState } from "react";
import { Modal, Text, Button, Input } from "@nextui-org/react";

interface AddFolderModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
  closeAfterConfirm?: boolean;
}

const AddFolderModal: FC<AddFolderModalProps> = ({
  open,
  onClose,
  onConfirm,
  closeAfterConfirm = false,
}) => {
  const [name, setName] = useState<string>("");

  return (
    <Modal open={open}>
      <Modal.Header>
        <Text h5 size={18}>
          Add new folder
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          placeholder="Folder name"
          bordered
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat animated bordered color="error" onPress={onClose}>
          Cancel
        </Button>
        <Button
          auto
          animated
          disabled={name.length === 0}
          onPress={() => {
            onConfirm(name);
            if (closeAfterConfirm) {
              onClose();
            }
          }}
        >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFolderModal;
