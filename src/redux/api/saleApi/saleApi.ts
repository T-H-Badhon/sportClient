import { baseApi } from "../baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sellProduct: builder.mutation({
      query: (productData) => ({
        url: "sales/",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useSellProductMutation } = saleApi;
