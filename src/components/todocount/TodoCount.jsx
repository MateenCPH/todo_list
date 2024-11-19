import React from "react";
import "./TodoCount.css"

const TodoCount = ({ todos }) => {
  return (
    <div>
      <h2>Total todos: {todos.length}</h2>
    </div>
  );
};

export default TodoCount;
