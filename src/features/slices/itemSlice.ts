import { createSlice } from "@reduxjs/toolkit";

export interface itemSlice {
  items: [];
  todoType: string | null;
  action: "Add" | "Edit";
}

const initialState: itemSlice = {
  items: [],
  todoType: null,
  action: "Add",
};
const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {
    setItems(state: any, action: any) {
      state.items = action.payload;
    },
    setTodoType(state: any, action: any) {
      state.todoType = action.payload;
    },
    addTodoToItems(state: any, action: any) {
      state.items = [action.payload, ...state.items];
    },
    hndleAction(state: any, action: any) {
      state.action = action.payload;
    },
  },
});
export const { setItems } = itemSlice.actions;
export const { setTodoType } = itemSlice.actions;
export const { addTodoToItems } = itemSlice.actions;
export const { hndleAction } = itemSlice.actions;
export default itemSlice.reducer;
