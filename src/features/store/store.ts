import { configureStore } from "@reduxjs/toolkit";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/apiSlice";

export const store = configureStore({
  reducer: {},
});
