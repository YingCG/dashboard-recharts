import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
function App() {
    const theme = useMemo(() => createTheme(themeSettings), []);
    return (_jsx("div", { className: "app", children: _jsx(BrowserRouter, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsxs(Box, { width: '100%', height: '100%', padding: '1rem 2rem 4rem 2rem', children: [_jsx(Navbar, {}), _jsx(Routes, { children: _jsx(Route, { path: '/', element: _jsx(Dashboard, {}) }) })] })] }) }) }));
}
export default App;
