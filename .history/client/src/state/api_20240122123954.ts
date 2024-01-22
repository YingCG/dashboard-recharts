// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types'
import { kpis, products, transactions } from "@/data/data.js";

const baseUrl = "http://localhost:1337/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"], // Add "Transactions" to tagTypes
  endpoints: (build) => ({
    getKpis: build.query<GetKpisResponse, void>(
        console.log(kpis)
        {  
      query: () => kpis,
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<GetProductsResponse[], void>({ // Update to return an array of products
      query: () => products,
      providesTags: ["Products"],
    }),
    getTransactions: build.query<GetTransactionsResponse[], void>({ // Update to return an array of transactions
      query: () => transactions,
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
console.log('kpis:', kpis);
console.log('products:', products);
console.log('transactions:', transactions);