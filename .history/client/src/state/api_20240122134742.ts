// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types'
import {kpis}  from "@/data/kpisData.js";
import { products } from "@/data/productsData.js";
import { transactions } from "@/data/transactionsData.js";

const kpisData = {kpis}

export const api = createApi({
    //   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"], // Add "Transactions" to tagTypes
    endpoints: (build) => ({
        getKpis: build.query<GetKpisResponse, void>({
            query: () => {
                console.log('kpis:', kpis);
                return kpis;
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
/* The commented out code `// console.log('kpis:', kpis); // console.log('products:', products); //
console.log('transactions:', transactions);` is printing the values of the variables `kpis`,
`products`, and `transactions` to the console. It is used for debugging purposes to check the values
of these variables. */
console.log('kpis:', kpis);
console.log('products:', products);
console.log('transactions:', transactions);