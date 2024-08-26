import React from "react";

const CardComponent = ({ component }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
      }}
    >
      {component.image && (
        <img
          src={component.image}
          alt="Card"
          style={{ width: "100%", borderRadius: "4px" }}
        />
      )}
      <h3>{component.title || "Card Title"}</h3>
      <p>{component.content || "Card content goes here."}</p>
    </div>
  );
};

export default CardComponent;
