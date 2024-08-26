import React from "react";
import { useDrop } from "react-dnd";
import ButtonComponent from "./ButtonComponent";
import ImageCarousel from "./ImageCarousel";
import TextComponent from "./TextComponent";
import CardComponent from "./CardComponent";
import ListComponent from "./ListComponent";
import FormComponent from "./FormComponent";

const Editor = ({
  components,
  setComponents,
  selectedComponent,
  setSelectedComponent,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item) => addComponent(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponent = (name) => {
    const newComponent = {
      id: Date.now(),
      name,
    };

    if (name === "Image") {
      newComponent.images = ["https://via.placeholder.com/150"];
      newComponent.width = 150;
      newComponent.height = 150;
      newComponent.interval = 3000;
    } else if (name === "Button") {
      newComponent.label = "Click Me";
      newComponent.jsCode = 'alert("Button clicked!");';
    } else if (name === "Card") {
      newComponent.title = "Card Title";
      newComponent.content = "Card content goes here.";
      newComponent.image = "";
    } else if (name === "List") {
      newComponent.items = ["Item 1", "Item 2", "Item 3"];
    } else if (name === "Form") {
      newComponent.fields = [{ label: "Name", type: "text" }];
    } else {
      newComponent.content = "";
    }

    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };

  const exportComponents = () => {
    const dataStr = JSON.stringify(components, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "components.json";
    link.click();
  };

  const importComponents = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const importedComponents = JSON.parse(e.target.result);
        setComponents(importedComponents);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div
      ref={drop}
      style={{
        width: "100%",
        height: "100vh",
        padding: "20px",
        backgroundColor: isOver ? "#e3f2fd" : "#fafafa",
        borderRadius: "8px",
        boxShadow: isOver ? "0px 0px 10px rgba(0, 123, 255, 0.3)" : "none",
        overflow: "auto",
      }}
    >
      <h2>Editor</h2>
      <div
        style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
      >
        <button
          onClick={exportComponents}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Export Components
        </button>
        <label
          htmlFor="importFile"
          style={{
            padding: "10px 20px",
            backgroundColor: "#008CBA",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#007bb5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#008CBA")}
        >
          Import Components
        </label>
        <input
          id="importFile"
          type="file"
          accept="application/json"
          onChange={importComponents}
          style={{ display: "none" }}
        />
      </div>
      {components.map((component) => (
        <div
          key={component.id}
          onClick={() => setSelectedComponent(component)}
          style={{
            margin: "16px 0",
            padding: "16px",
            backgroundColor:
              selectedComponent && selectedComponent.id === component.id
                ? "#d3d3d3"
                : "#fff",
            borderRadius: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {component.name === "Image" ? (
            <ImageCarousel component={component} />
          ) : component.name === "Button" ? (
            <ButtonComponent component={component} />
          ) : component.name === "Card" ? (
            <CardComponent component={component} />
          ) : component.name === "List" ? (
            <ListComponent component={component} />
          ) : component.name === "Form" ? (
            <FormComponent component={component} />
          ) : (
            <TextComponent component={component} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Editor;
