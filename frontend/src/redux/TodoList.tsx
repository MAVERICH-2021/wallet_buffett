// src/TodoList.js

import React, { useState } from 'react';

function TodoList({ todos, addTodo, removeTodo }) {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default TodoList;