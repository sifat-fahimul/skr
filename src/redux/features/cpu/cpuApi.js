import { apiSlice } from "../api/apiSlice";

export const cpuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all cpu list
    getAllCpu: builder.query({
      query: () => `/api/Cpu`,
    }),

    // get single cpu
    getCpu: builder.query({
      query: (id) => `/api/Cpu/${id}`,
    }),

    //  create cpu api function
    createCpu: builder.mutation({
      query: (data) => ({
        url: `/api/Cpu`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const cpu = await queryFulfilled;
          // pessimistic update
          dispatch(
            apiSlice.util.updateQueryData("getAllCpu", undefined, (draft) => {
              draft.push(cpu.data);
            })
          );
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetCpuQuery, useGetAllCpuQuery, useCreateCpuMutation } =
  cpuApi;
