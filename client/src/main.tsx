import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// @ts-ignore
import { kpis } from "@/data/kpis.js";
// @ts-ignore
import { products } from "@/data/products.js";
// @ts-ignore
import { transactions } from "@/data/transactions.js";
import { api } from "@/state/api";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "@/state/api";  // Updated import


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// const { data: kpisData } = useGetKpisQuery();
// const { data: productsData } = useGetProductsQuery();
// const { data: transactionsData } = useGetTransactionsQuery();

// console.log('kpis:', kpisData);
// console.log('products:', productsData);
// console.log('transactions:', transactionsData);