import React, { useState } from "react";
import "./App.css";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder=" Add New Todo"
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
