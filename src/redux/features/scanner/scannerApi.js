import { apiSlice } from "../api/apiSlice";

export const scannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get Scanner list
    getAllScanner: builder.query({
      query: () => `/api/Scanner`,
    }),

    // get single Scanner
    getScanner: builder.query({
      query: (id) => `/api/Scanner/${id}`,
    }),

    // crete Scanner
    createScanner: builder.mutation({
      query: (data) => ({
        url: `/api/Scanner`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const scanner = await queryFulfilled;
          // pessimistic update
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllScanner",
              undefined,
              (draft) => {
                draft.push(scanner.data);
              }
            )
          );
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useGetAllScannerQuery,
  useGetScannerQuery,
  useCreateScannerMutation,
} = scannerApi;
