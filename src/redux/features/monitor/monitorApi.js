import { apiSlice } from "../api/apiSlice";

export const monitorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get monitor list
    getAllMonitor: builder.query({
      query: () => `/api/Monitor`,
    }),

    // get single monitor
    getMonitor: builder.query({
      query: (id) => `/api/Monitor/${id}`,
    }),

    // crete monitor
    createMonitor: builder.mutation({
      query: (data) => ({
        url: `/api/Monitor`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const Monitor = await queryFulfilled;
          // pessimistic update
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllMonitor",
              undefined,
              (draft) => {
                draft.push(Monitor.data);
              }
            )
          );
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useGetMonitorQuery,
  useGetAllMonitorQuery,
  useCreateMonitorMutation,
} = monitorApi;
