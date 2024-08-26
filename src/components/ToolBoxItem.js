import React from "react";
import { useDrag } from "react-dnd";

const ToolBoxItem = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="ToolBoxItem"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {name}
    </div>
  );
};

export default ToolBoxItem;
