import { createSlice } from '@reduxjs/toolkit';
import {getRandomID} from '../utils/getRandomID';
import { Todo } from '../types/Todo';
import { initialStateTodo } from '../types/initialStateTodo';

const initialState: initialStateTodo = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const newTodo: Todo = {
        id: getRandomID(),
        text: action.payload.text,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  },
});

export const { actions } = todosSlice;
export default todosSlice.reducer;
