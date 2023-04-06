import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_LINK } from "../../api/apis";
const LIMIT_LINK: any = new URL(
  "https://6347eca8db76843976b5e973.mockapi.io/todos"
);
const LIMIT_LINK2: any = new URL(
  "https://6347eca8db76843976b5e973.mockapi.io/todos"
);
function LinkParams(
  LIMIT_LINK: any,
  limit: number = 5,
  page: string | number = 2
) {
  if (page === 2) {
  }
  LIMIT_LINK.searchParams.append("limit", limit);
  LIMIT_LINK.searchParams.append("page", page);
  console.log(LIMIT_LINK.href);

  return LIMIT_LINK.href;
}
function LinkNewParams(LIMIT_LINK: any, page: string | number) {
  LIMIT_LINK.searchParams.delete("limit");
  LIMIT_LINK.searchParams.delete("page");
  LIMIT_LINK.searchParams.append("limit", 10);
  LIMIT_LINK.searchParams.append("page", `${page}`);
  console.log(LIMIT_LINK.href);

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
      query: (page: string | number) => LinkNewParams(LIMIT_LINK2, page),
      transformResponse: (res: any) => {
        return res;
      },
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation({
      query: (todo: any) => ({
        url: "/todos",
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

    updateTodo: builder.mutation({
      query: (todo: any) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
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
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;

export const fetchNewData = async (page: string | number) => {
  LIMIT_LINK.searchParams.delete("limit");
  LIMIT_LINK.searchParams.delete("page");
  LIMIT_LINK.searchParams.append("limit", 10);
  LIMIT_LINK.searchParams.append("page", `${page}`);
  const res = await fetch(LIMIT_LINK);
  const data = await res.json();
  return data;
};
