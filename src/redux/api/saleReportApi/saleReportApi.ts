import { baseApi } from "../baseApi";

const saleReportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminSalesReport: builder.query({
      query: (queries) => ({
        url: `sales/sale-report/`,
        method: "GET",
        params: queries,
      }),
    }),
    managerSalesReport: builder.query({
      query: (queries) => ({
        url: `sales/sale-report/my-branch`,
        method: "GET",
        params: queries,
      }),
    }),
  }),
});

export const { useAdminSalesReportQuery, useManagerSalesReportQuery } =
  saleReportApi;
