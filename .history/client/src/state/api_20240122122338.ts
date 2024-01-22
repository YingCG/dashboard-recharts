import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {GetKpisResponse, GetProductsResponse} from './types'
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
      }),
})

export const {useGetKpisQuery, useGetProductsQuery} = api;

