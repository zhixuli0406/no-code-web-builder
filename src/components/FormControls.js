import React from "react";

const FormControls = ({ selectedComponent, setSelectedComponent }) => {
  const addFormField = () => {
    const label = prompt("Enter field label:");
    const type = prompt("Enter field type (text, email, password, etc.):");
    if (label && type) {
      setSelectedComponent((prev) => ({
        ...prev,
        fields: [...prev.fields, { label, type }],
      }));
    }
  };

  return (
    <div>
      <label>Form Fields:</label>
      <ul>
        {selectedComponent.fields.map((field, index) => (
          <li key={index}>
            {field.label} ({field.type})
          </li>
        ))}
      </ul>
      <button onClick={addFormField} style={{ marginTop: "8px" }}>
        Add Field
      </button>
    </div>
  );
};

export default FormControls;
