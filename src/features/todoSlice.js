import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setChange: (state, action) => {
      state.todoList.forEach((item) => {
        if (action.payload === item.id) item.done = !item.done;
      });
    },
  },
});

export const { saveTodo, setChange } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
