import React, { useState } from "react";
import AddTodo from "./components/addtodo/AddTodo";
import TodoList from "./components/todolist/TodoList";
import TodoCount from "./components/todocount/TodoCount";

const App = () => {
  const [todos, setTodos] = useState([]); // Shared state for todos

  const addTodo = (todo) => {
    setTodos([...todos, todo]); // Add a new todo to the list
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} /> {/* Pass the state updater to AddTodo */}
      <TodoList todos={todos} setTodos={setTodos} /> {/* Pass the shared state to TodoList */}
      <TodoCount todos={todos} />
    </div>
  );
};

export default App;
