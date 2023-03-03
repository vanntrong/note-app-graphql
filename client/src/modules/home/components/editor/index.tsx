import React, { FC, useState } from "react";
import { Container, Text, Textarea } from "@nextui-org/react";

interface EditorProps {
  content?: string;
  onChange?: (value: string) => void;
}

const Editor: FC<EditorProps> = ({ content, onChange }) => {
  return (
    <Container>
      <Text h5>Editor</Text>
      <Textarea
        aria-label="editor"
        css={{ width: "100%" }}
        rows={25}
        value={content}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Container>
  );
};

export default Editor;
