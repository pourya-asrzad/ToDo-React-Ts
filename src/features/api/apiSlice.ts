import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LINK } from "../../api/apis";
import { number } from "yup";
import { string } from "yup";
const LIMIT_LINK: any = new URL(
  "https://6347eca8db76843976b5e973.mockapi.io/todos"
);
function LinkParams(
  LIMIT_LINK: any,
  limit: number = 10,
  page: string | number = 2
) {
  if (page === 2) {
  }
  LIMIT_LINK.searchParams.append("limit", limit);
  LIMIT_LINK.searchParams.append("page", page);

  return LIMIT_LINK.href;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
  }),
  tagTypes: ["Todos"],
  endpoints: (builder: any) => ({
    getTodos: builder.query({
      query: () => API_LINK,
      transformResponse: (res: any) =>
        res.sort((a: any, b: any) => b.createdAt - a.createdAt),
      providesTags: ["Todos"],
    }),
    getNewData: builder.query({
      query: (page: number) => {
        return API_LINK + `?limit=10&page=${page}`;
      },
      providesTags: ["Todos"],
    }),
    fetchTodoLength: builder.query({
      query: () => API_LINK,
      transformResponse: (res: any) => {
        return res.length;
      },
    }),
    addTodo: builder.mutation({
      query: (todo: any) => ({
        url: API_LINK,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    getData: builder.query({
      query: () => LinkParams(LIMIT_LINK),
      transformResponse: (res: any) => {
        return res;
      },
      providesTags: ["Todos"],
    }),
    getSingleData: builder.query({
      query: (id: string | number) => `/${id}`,
      transformResponse: (res: any) => {
        return res;
      },
      providesTags: ["Todos"],
    }),

    UpdateTodo: builder.mutation({
      query: (todo: any) => ({
        url: API_LINK + `/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id: number | string) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetDataQuery,
  useGetNewDataQuery,
  useGetSingleDataQuery,
  useFetchTodoLengthQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
