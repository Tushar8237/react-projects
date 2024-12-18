import React from "react";
import TodoItems from "./TodoItems";

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
