import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CartRes {
  success: boolean;
  cartList: CartList[];
  message: string;
}

export const cartItemsApi = createApi({
  reducerPath: "cartListApi",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXTAUTH_URL }), // test Next URL or "/"
  endpoints: (builder) => ({
    getCartItems: builder.query<CartRes, undefined>({
      query: () => ({
        url: "/api/cart",
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    addToCart: builder.mutation<CartRes, InputCartItems>({
      query: (data) => ({
        url: "/api/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetCartItemsQuery, useAddToCartMutation } = cartItemsApi;
