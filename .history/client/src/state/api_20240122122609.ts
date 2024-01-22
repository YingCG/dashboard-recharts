import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {GetKpisResponse, GetProductsResponse, GetTransactionsResponse} from './types'
import { kpis, products, transactions } from "@/data/data.js";

const baseUrl = "http://localhost:1337/"

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products"],
    endpoints: (build) => ({
        getKpis: build.query<GetKpisResponse, void>({
          query: () => kpis,
          providesTags: ["Kpis"],
        }),
        getProducts: build.query<GetProductsResponse, void>({
          query: () => products,
          providesTags: ["Products"],
        }),
        getTransactions: build.query<GetTransactionsResponse, void>({ 
            query: () => transactions,
            providesTags: ["Transactions"],
          }),
      }),
})

export const {useGetKpisQuery, useGetProductsQuery} = api;

