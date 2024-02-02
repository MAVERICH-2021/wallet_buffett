// src/reducers.js
//多个reducer的情况下，需要使用combineReducers

//初始状态
const initialState = {
   todos: [],
 };
 
 //根Reducer
 function rootReducer(state = initialState, action:any) {
   switch (action.type) {
     case 'ADD_TODO':
       return {
         ...state,
         todos: [...state.todos, action.payload],
       };
     case 'REMOVE_TODO':
       return {
         ...state,
         todos: state.todos.filter((todo) => todo.id !== action.payload),
       };
     default:
       return state;
   }
 }
 
 export default rootReducer;