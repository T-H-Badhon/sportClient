import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

const BaseQuery = fetchBaseQuery({
  baseUrl: "https://sport-item-server.vercel.app/api/v1/",
  prepareHeaders: (Headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      Headers.set("authorization", token);
    }

    return Headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseQuery,
  tagTypes: ["products"],
  endpoints: () => ({}),
});
