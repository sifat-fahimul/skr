import { apiSlice } from "../api/apiSlice";

export const printerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get printer list
    getAllPrinter: builder.query({
      query: () => `/api/Printer`,
    }),

    // get single printer
    getPrinter: builder.query({
      query: (id) => `/api/Printer/${id}`,
    }),

    // crete printer
    createPrinter: builder.mutation({
      query: (data) => ({
        url: `/api/Printer`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const printer = await queryFulfilled;
          // pessimistic update
          dispatch(
            apiSlice.util.updateQueryData(
              "getAllPrinter",
              undefined,
              (draft) => {
                draft.push(printer.data);
              }
            )
          );
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useGetPrinterQuery,
  useGetAllPrinterQuery,
  useCreatePrinterMutation,
} = printerApi;
