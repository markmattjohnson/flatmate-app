import React, { useState } from "react";
import styled from "styled-components";
import "./todo.css";

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
}

function AppTodo() {
  const [todos, setTodos] = useState([
    { todo: "Spülmaschine ausräumen", isCompleted: false },
    { todo: "Toilette putzen", isCompleted: false },
    { todo: "Müll runterbringen", isCompleted: false }
  ]);

  return (
    <div className="todopage">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default AppTodo;
