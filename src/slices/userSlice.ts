import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface UserRes {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  image: string | null;
  created_at: Date;
  updated_at: Date;
}
interface UserData {
  name: string;
  emailOrPhone: string;
  password: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["heart"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXTAUTH_URL }),
  endpoints: (builder) => ({
    getProfile: builder.query<User, undefined>({
      query: () => ({
        url: "/api/user/profile",
        method: "GET",
      }),
      providesTags: ["heart"],
    }),
    putProfile: builder.mutation<User, InputProfile>({
      query: (data) => ({
        url: "/api/user/profile",
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["heart"],
    }),
    registerUser: builder.mutation<UserRes, UserData>({
      query: (data) => ({
        url: "/api/register",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetProfileQuery,
  usePutProfileMutation,
} = userApi;
