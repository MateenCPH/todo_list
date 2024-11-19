import React from "react";
import "./TodoList.css"

const TodoList = ({ todos, setTodos }) => {
  const clickHandler = (name) => {
    setTodos([...todos.filter((nameElement) => nameElement !== name)]);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => clickHandler(todo)}>Delete</button>
        </li> // Display each todo
      ))}
    </ul>
  );
};

export default TodoList;
