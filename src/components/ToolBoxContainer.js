import React from "react";
import ToolBoxItem from "./ToolBoxItem";
import ImageControls from "./ImageControls";
import ButtonControls from "./ButtonControls";
import TextControls from "./TextControls";
import CardControls from "./CardControls";
import ListControls from "./ListControls";
import FormControls from "./FormControls";

const ToolBoxContainer = ({
  selectedComponent,
  setSelectedComponent,
  saveComponent,
  deleteComponent,
}) => {
  return (
    <div>
      <h2>Toolbox</h2>
      {selectedComponent ? (
        <>
          {selectedComponent.name === "Image" && (
            <ImageControls
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent.name === "Button" && (
            <ButtonControls
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent.name === "Text" && (
            <TextControls
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent.name === "Card" && (
            <CardControls
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent.name === "List" && (
            <ListControls
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent.name === "Form" && (
            <FormControls
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          <button onClick={saveComponent} style={{ marginTop: "16px" }}>
            Save
          </button>
          <button
            onClick={deleteComponent}
            style={{
              marginLeft: "8px",
              marginTop: "16px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Delete
          </button>
          <button
            onClick={() => setSelectedComponent(null)}
            style={{ marginLeft: "8px", marginTop: "16px" }}
          >
            Deselect
          </button>
        </>
      ) : (
        <>
          <div>
            <h3>Basic Components</h3>
            <ToolBoxItem name="Text" />
            <ToolBoxItem name="Image" />
            <ToolBoxItem name="Button" />
          </div>
          <div style={{ marginTop: "16px" }}>
            <h3>Advanced Components</h3>
            <ToolBoxItem name="Card" />
            <ToolBoxItem name="List" />
            <ToolBoxItem name="Form" />
          </div>
        </>
      )}
    </div>
  );
};

export default ToolBoxContainer;
