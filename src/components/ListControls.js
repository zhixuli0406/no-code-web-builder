import React from "react";

const ListControls = ({ selectedComponent, setSelectedComponent }) => {
  const addItemToList = () => {
    const newItem = prompt("Enter new list item:");
    if (newItem) {
      setSelectedComponent((prev) => ({
        ...prev,
        items: [...prev.items, newItem],
      }));
    }
  };

  return (
    <div>
      <label>List Items:</label>
      <ul>
        {selectedComponent.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItemToList} style={{ marginTop: "8px" }}>
        Add Item
      </button>
    </div>
  );
};

export default ListControls;
