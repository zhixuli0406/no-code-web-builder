import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ content, setContent }) => {
  const handleChange = (value) => {
    setContent(value);
  };

  return <ReactQuill value={content} onChange={handleChange} />;
};

export default RichTextEditor;
