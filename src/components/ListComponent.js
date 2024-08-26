import React from "react";

const ListComponent = ({ component }) => {
  return (
    <ul
      style={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      {component.items.map((item, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
