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


export const store = configureStore({
  reducer: {},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

