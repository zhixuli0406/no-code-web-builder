import React from "react";
import RichTextEditor from "./RichTextEditor";

const TextControls = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <div>
      <label>Text Content:</label>
      <RichTextEditor
        content={selectedComponent.content || ""}
        setContent={(content) =>
          setSelectedComponent((prev) => ({ ...prev, content }))
        }
      />
    </div>
  );
};

export default TextControls;
