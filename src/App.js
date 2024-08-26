import React, { useState } from "react";
import "./App.css";
import ToolBoxContainer from "./components/ToolBoxContainer";
import Editor from "./components/Editor";

function App() {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const updateComponent = (id, updatedData) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, ...updatedData } : component
      )
    );
  };

  const saveComponent = () => {
    if (selectedComponent) {
      updateComponent(selectedComponent.id, selectedComponent);
      setSelectedComponent(null);
    }
  };

  const deleteComponent = () => {
    if (selectedComponent) {
      setComponents((prevComponents) =>
        prevComponents.filter(
          (component) => component.id !== selectedComponent.id
        )
      );
      setSelectedComponent(null);
    }
  };

  return (
    <div className="App">
      <div className="sidebar">
        <ToolBoxContainer
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
          saveComponent={saveComponent}
          deleteComponent={deleteComponent}
        />
      </div>
      <div className="editor">
        <Editor
          components={components}
          setComponents={setComponents}
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </div>
    </div>
  );
}

export default App;
