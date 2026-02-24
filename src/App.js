import { useState } from "react";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div>
      <h1>Todo List App</h1>;
      <TodoForm onAdd={addTodo} />
    </div>
  );
}

export default App;
