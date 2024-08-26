import React from "react";

const FormComponent = ({ component }) => {
  return (
    <form
      style={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      {component.fields.map((field, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            {field.label}
          </label>
          <input
            type={field.type || "text"}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          />
        </div>
      ))}
      <button
        type="submit"
        style={{
          padding: "10px 16px",
          backgroundColor: "#6200ea",
          color: "#fff",
          borderRadius: "4px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
