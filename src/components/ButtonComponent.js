import React from "react";

const ButtonComponent = ({ component }) => {
  const handleButtonClick = (jsCode) => {
    try {
      // eslint-disable-next-line no-eval
      eval(jsCode);
    } catch (error) {
      console.error("Error executing custom JS:", error);
    }
  };

  return (
    <button
      className="button"
      onClick={() => handleButtonClick(component.jsCode)}
      style={{ width: "100%" }}
    >
      {component.label}
    </button>
  );
};

export default ButtonComponent;
