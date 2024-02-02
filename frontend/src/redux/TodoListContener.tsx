// src/TodoListContainer.js

import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actions';
import TodoList from './TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);