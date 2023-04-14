import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://todo-server-p2b3.onrender.com",
    baseUrl: "http://localhost:3636",
  }),
  endpoints: (builder) => ({}),
});
