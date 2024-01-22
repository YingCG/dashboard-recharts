import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types'
import { kpis, products, transactions } from "@/data/data.js";

export const api = createApi({
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<GetKpisResponse, void>({
            query: () => {
                // Mock data for testing
                const mockKpis: GetKpisResponse = {
                    kpis: kpis,  // Assign the mock data to the property
                };
                console.log('kpis:', mockKpis);
                return mockKpis;
            },
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<GetProductsResponse[], void>({
            query: () => products,
            providesTags: ["Products"],
        }),
        getTransactions: build.query<GetTransactionsResponse[], void>({
            query: () => transactions,
            providesTags: ["Transactions"],
        }),
    }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;