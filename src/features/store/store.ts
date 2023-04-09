import { configureStore } from "@reduxjs/toolkit";






import itemReducer from '../slices/itemSlice'
import { apiSlice } from "../api/apiSlice";
export const store = configureStore({
  reducer: {
    itemSlice:itemReducer,
    [apiSlice.reducerPath] : apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware:any) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>
