import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ChartHeader from '@/components/ChartHeader';
import DashboardBox from '@/components/DashboardBox';
import { useTheme } from "@mui/material";
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
// @ts-ignore
import { kpis } from "@/data/kpis.js";
const Row1 = () => {
    // @ts-ignore
    const { palette } = useTheme();
    const data = kpis;
    //console.log('Row1 data:', data);
    const revenueExpenses = useMemo(() => {
        return (data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
            // console.log('revenueExpenses:', data);
            return {
                name: month.substring(0, 3),
                revenue: parseFloat(revenue.substring(1)),
                expenses: parseFloat(expenses.substring(1))
            };
        }));
    }, [data]);
    console.log('revenueExpenses:', revenueExpenses);
    const revenueProfit = useMemo(() => {
        return (data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
            // console.log('revenueProfit:', data);
            const revenueAsNumber = parseFloat(revenue.substring(1));
            const expensesAsNumber = parseFloat(expenses.substring(1));
            return {
                name: month.substring(0, 3),
                revenue: revenueAsNumber,
                profit: (revenueAsNumber - expensesAsNumber).toFixed(2),
            };
        }));
    }, [data]);
    const revenue = useMemo(() => {
        return (data &&
            data[0].monthlyData.map(({ month, revenue }) => {
                // console.log('revenue:',  data[0].monthlyData[0].month);
                // console.log('revenue:', data[0].monthlyData[0].revenue);
                return {
                    name: month.substring(0, 3),
                    revenue: parseFloat(revenue.substring(1)),
                };
            }));
    }, [data]);
    return (_jsxs(_Fragment, { children: [_jsxs(DashboardBox, { gridArea: "a", children: [_jsx(ChartHeader, { title: 'Revenue and Expensed', subtitle: 'this show the revenue and expensed of the month' }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { width: 500, height: 400, data: revenueExpenses, margin: {
                                top: 15,
                                right: 25,
                                left: -10,
                                bottom: 60,
                            }, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "colorRevenue", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: palette.primary.light, stopOpacity: 0.5 }), _jsx("stop", { offset: "95%", stopColor: palette.primary.light, stopOpacity: 0 })] }), _jsxs("linearGradient", { id: "colorExpenses", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: palette.primary.light, stopOpacity: 0.5 }), _jsx("stop", { offset: "95%", stopColor: palette.primary.light, stopOpacity: 0 })] })] }), _jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: '10px' } }), _jsx(YAxis, { tickLine: false, axisLine: { strokeWidth: '0' }, style: { fontSize: '10px' }, domain: [8000, 23000] }), _jsx(Tooltip, {}), _jsx(Area, { type: "monotone", dataKey: "revenue", dot: true, stroke: palette.primary.main, fillOpacity: 1, fill: "url(#colorRevenue)" }, "revenue"), _jsx(Area, { type: "monotone", dataKey: "expenses", dot: true, stroke: palette.primary.main, fillOpacity: 1, fill: "url(#colorExpenses)" }, "expenses")] }) })] }), _jsxs(DashboardBox, { gridArea: "b", children: [_jsx(ChartHeader, { title: "Profit and Revenue", subtitle: "top line represents revenue, bottom line represents expenses" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { width: 500, height: 300, data: revenueProfit, margin: { top: 15, right: 25, left: -10, bottom: 60, }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: '10px' } }), _jsx(YAxis, { tickLine: false, axisLine: { strokeWidth: '0' }, style: { fontSize: '10px' } }), _jsx(Tooltip, {}), _jsx(Legend, { height: 20, wrapperStyle: { margin: "0 0 10px 0" } }), _jsx(Line, { type: "monotone", dataKey: "profit", stroke: palette.grey[100], activeDot: { r: 8 } }), _jsx(Line, { type: "monotone", dataKey: "revenue", stroke: palette.primary.main })] }) })] }), _jsxs(DashboardBox, { gridArea: "c", children: [_jsx(ChartHeader, { title: "Revenue Month by Month", subtitle: "graph representing the revenue month by month" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { width: 500, height: 300, data: revenue, margin: {
                                top: 17,
                                right: 15,
                                left: -5,
                                bottom: 58,
                            }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "colorRevenue", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: palette.primary.dark, stopOpacity: 0.8 }), _jsx("stop", { offset: "95%", stopColor: palette.primary.dark, stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { vertical: false, stroke: palette.grey[100] }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { axisLine: false, tickLine: false, style: { fontSize: "10px" } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "revenue", fill: "url(#colorRevenue)" })] }) })] })] }));
};
export default Row1;
