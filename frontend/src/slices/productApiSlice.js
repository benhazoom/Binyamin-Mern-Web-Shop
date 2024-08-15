import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Extends the existing apiSlice by injecting additional endpoints
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Adds a getProducts query endpoint
    getProducts: builder.query({
      // Specifies the URL for the products data
      query: () => ({
        url: PRODUCTS_URL,
      }),
      providesTags: ["Products"],
      // Keeps unused data in the cache for 5 seconds
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

// Exports a custom hook for the getProducts query
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApiSlice;
