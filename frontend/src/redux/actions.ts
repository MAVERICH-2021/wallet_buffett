// src/actions.js

let nextTodoId = 1;

export const addTodo = (text:string) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});