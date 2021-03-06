import React, { useState, useEffect } from "react";
import { TodoPage, TodoList, Todos } from "../common/todosStyles";
import { getTodos, getFromLocal, setToLocal } from "../services";

function Todo({ todo, index, finishedTodo, deleteTodo }) {
  return (
    <Todos
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "none"
      }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => finishedTodo(index)}>Erledigt</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </Todos>
  );
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
        autoFocus
        className="input"
        value={value}
        placeholder="Todo hinzufügen"
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
}

function AppTodo() {
  const [todos, setTodos] = useState(getFromLocal("todos") || []);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    setToLocal("todos", todos);
  }, [todos]);

  function loadTodos() {
    getTodos()
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const finishedTodo = index => {
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], isCompleted: !todos[index].isCompleted },
      ...todos.slice(index + 1)
    ]);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoPage>
        <TodoList>
          {todos.map((todo, index) => (
            <Todo
              key={todo.text + index}
              index={index}
              todo={todo}
              finishedTodo={finishedTodo}
              deleteTodo={deleteTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </TodoList>
      </TodoPage>
    </div>
  );
}

export default AppTodo;
