import React from "react";
import Editor from "@monaco-editor/react";

const ButtonControls = ({ selectedComponent, setSelectedComponent }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedComponent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setSelectedComponent((prev) => ({
      ...prev,
      jsCode: value,
    }));
  };

  return (
    <div>
      <label>
        Button Label:
        <input
          type="text"
          name="label"
          value={selectedComponent.label}
          onChange={handleInputChange}
          placeholder="Button Label"
        />
      </label>
      <label>
        JS Code:
        <Editor
          height="200px"
          defaultLanguage="javascript"
          defaultValue={selectedComponent.jsCode}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </label>
    </div>
  );
};

export default ButtonControls;
