import { createSlice } from '@reduxjs/toolkit';
import { initialStateTodo } from '../types/initialStateTodo';

const initialState: initialStateTodo = {
  todos: [],
};

const deletedTodosSlice = createSlice({
  name: "deletedTodos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { actions } = deletedTodosSlice;
export default deletedTodosSlice.reducer;