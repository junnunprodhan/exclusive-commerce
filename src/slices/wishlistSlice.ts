import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Res {
  success: boolean;
  wishlist: Wishlist[];
  message: string;
}
export const wishlistApi = createApi({
  reducerPath: "wishlist",
  tagTypes: ["heart"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXTAUTH_URL }), // test Next URL or "/"
  endpoints: (builder) => ({
    getWishlist: builder.query<Res, undefined>({
      query: (data) => ({
        url: `/api/wishlist`,
        method: "GET",
      }),
      providesTags: ["heart"],
    }),
    useAddToWishlist: builder.mutation<Res, InputWishlist>({
      query: (data) => ({
        url: "/api/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["heart"],
    }),
  }),
});

export const { useGetWishlistQuery, useUseAddToWishlistMutation } = wishlistApi;
