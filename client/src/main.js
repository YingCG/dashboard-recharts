import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {},
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(Provider, { store: store, children: _jsx(App, {}) }));
