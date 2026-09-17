import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import commentReducer from "./features/comments/commentsSlice";
import todoReducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    myCounter: counterReducer,
    myComment: commentReducer,
    myTodo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
