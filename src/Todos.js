import React, { useState } from "react";
import styled from "styled-components";
import uid from "uid";

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

function AppTodo() {
  const [todos, setTodos] = useState([
    { todo: "Spülmaschine ausräumen", isCompleted: false },
    { todo: "Toilette putzen", isCompleted: false },
    { todo: "Müll runterbringen", isCompleted: false }
  ]);

  return (
    <div className="todoforapp">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default AppTodo;
