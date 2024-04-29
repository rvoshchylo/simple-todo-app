import { configureStore } from "@reduxjs/toolkit";
import todosReducer  from "../features/todos.slice";
import deletedTodosReducer from "../features/deletedTodos.slice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    deletedTodos: deletedTodosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
