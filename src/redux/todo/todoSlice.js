import { createSlice, nanoid } from "@reduxjs/toolkit";

// array of object [{}, {}, {}]
// label

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodoItem: (state, action) => {
      const payload = action.payload;
      state.todoList.push({
        label: payload,
        id: nanoid(5),
      });
    },
    deleteTodoItem: (state, action) => {
        const payload = action.payload;
        state.todoList = state.todoList.filter(i => i.id !==payload); 

    },
    editTodoItem: () => {},
  },
});

export const { addTodoItem, deleteTodoItem, editTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
