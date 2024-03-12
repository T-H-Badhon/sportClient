import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (registerData) => ({
        url: "user/register",
        method: "POST",
        body: registerData,
      }),
    }),
    allBranch: builder.query({
      query: () => ({
        url: "user/branches",
        method: "GET",
      }),
    }),
  }),
});

export const { useSignUpMutation, useAllBranchQuery } = userApi;
