import React from "react";
import RichTextEditor from "./RichTextEditor";

const CardControls = ({ selectedComponent, setSelectedComponent }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedComponent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={selectedComponent.title || ""}
          onChange={handleInputChange}
          placeholder="Card Title"
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={selectedComponent.image || ""}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
      </label>
      <label>Content:</label>
      <RichTextEditor
        content={selectedComponent.content || ""}
        setContent={(content) =>
          setSelectedComponent((prev) => ({ ...prev, content }))
        }
      />
    </div>
  );
};

export default CardControls;
