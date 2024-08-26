// src/components/ImageControls.js
import React from "react";

const ImageControls = ({ selectedComponent, setSelectedComponent }) => {
  const addImage = () => {
    const newImageUrl = prompt("Enter the URL of the new image:");
    if (newImageUrl) {
      setSelectedComponent((prev) => ({
        ...prev,
        images: [...(prev.images || []), newImageUrl],
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedComponent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {selectedComponent.images.map((url, index) => (
        <div key={index}>
          <label>
            Image {index + 1} URL:
            <input
              type="text"
              value={url}
              onChange={(e) => {
                const newImages = [...selectedComponent.images];
                newImages[index] = e.target.value;
                setSelectedComponent((prev) => ({
                  ...prev,
                  images: newImages,
                }));
              }}
            />
          </label>
        </div>
      ))}
      <button onClick={addImage} style={{ marginTop: "8px" }}>
        Add Image
      </button>
      <label>
        Carousel Interval (millisecond):
        <input
          type="number"
          name="interval"
          value={selectedComponent.interval}
          onChange={(e) => {
            handleInputChange({
              target: { name: "interval", value: e.target.value },
            });
          }}
          placeholder="Interval"
          style={{ marginLeft: "8px" }}
        />
      </label>
    </div>
  );
};

export default ImageControls;
