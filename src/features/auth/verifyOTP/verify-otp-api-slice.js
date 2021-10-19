import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../../constants";

export const apiSlice = createApi({
  reducerPath: "verifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/api`,
    prepareHeaders(headers) {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    verifyOTP: builder.query({
      query: () => `/auths/verify`,
    }),
  }),
});

export const { useVerifyOTPQuery } = apiSlice;
