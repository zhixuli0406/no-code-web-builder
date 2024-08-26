import React from "react";

const TextComponent = ({ component }) => {
  return (
    <div
      className="text-component"
      dangerouslySetInnerHTML={{
        __html: component.content || "Click to edit text",
      }}
    />
  );
};

export default TextComponent;
