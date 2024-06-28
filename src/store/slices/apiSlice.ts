import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ProductType } from "@/types/types";

const api = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: builder => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => "products",
    }),
    getProduct: builder.query<ProductType, string>({
      query: id => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = api;

export { api };
