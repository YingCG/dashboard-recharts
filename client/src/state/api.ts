// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from '@/state/types'
// @ts-ignore
import { kpis } from "@/data/kpis.js";
// @ts-ignore
import { products } from "@/data/products.js";
// @ts-ignore
import { transactions } from "@/data/transactions.js";



export const api = createApi({
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>[], void>(
            {
            query: () => kpis,
            providesTags: ["Kpis"],
                        }),
        getProducts: build.query<Array<GetProductsResponse>[], void>({
            query: () => products,
            providesTags: ["Products"],
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>[], void>({
            query: () => transactions,
            providesTags: ["Transactions"],
        }),
    }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),

});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;

useGetKpisQuery.useQuery = () => ({ data: kpis, error: null, status: 'fulfilled' });
useGetProductsQuery.useQuery = () => ({ data: products, error: null, status: 'fulfilled' });
useGetTransactionsQuery.useQuery = () => ({ data: transactions, error: null, status: 'fulfilled' });


// console.log('kpis:', kpis);
// console.log('products:', products);
// console.log('transactions:', transactions);
