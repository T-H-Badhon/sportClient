import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: (queries) => ({
        url: `products/`,
        method: "GET",
        params: queries,
      }),
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "products/add-product",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (args) => {
        return {
          url: `products/update-product/${args.id}`,
          method: "PATCH",
          body: args.productData,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (ids) => ({
        url: "products/delete",
        method: "DELETE",
        body: { ids: ids },
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useAllProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
