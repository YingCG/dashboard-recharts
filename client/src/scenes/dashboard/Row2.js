import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ChartHeader from '@/components/ChartHeader';
import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/FlexBetween';
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart, Cell, ScatterChart, Scatter, } from 'recharts';
// @ts-ignore
import { kpis } from "@/data/kpis.js";
// @ts-ignore
import { products } from "@/data/products.js";
const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
];
const Row2 = () => {
    // @ts-ignore
    const { palette } = useTheme();
    // @ts-ignore
    const pieColors = [palette.primary[800], palette.primary[300]];
    const data = kpis;
    const productsData = products;
    // console.log('Row2 data:', data)
    const operationalExpenses = useMemo(() => {
        return (data &&
            data[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
                return {
                    name: month.substring(0, 3),
                    "Operational Expenses": parseFloat(operationalExpenses.substring(1)),
                    "Non Operational Expenses": parseFloat(nonOperationalExpenses.substring(1)),
                };
            }));
    }, [data]);
    const productExpenseData = useMemo(() => {
        return (productsData &&
            productsData.map(({ _id, price, expense }) => {
                return {
                    id: _id,
                    price: parseFloat(price.substring(1)),
                    expense: parseFloat(expense.substring(1)),
                };
            }));
    }, [productsData]);
    return (_jsxs(_Fragment, { children: [_jsxs(DashboardBox, { gridArea: "d", children: [_jsx(ChartHeader, { title: "Operational vs Non-Operational Expenses" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { width: 500, height: 300, data: operationalExpenses, margin: { top: 15, right: 25, left: -10, bottom: 60, }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: '10px' } }), _jsx(YAxis, { tickLine: false, axisLine: { strokeWidth: '0' }, style: { fontSize: '10px' } }), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "Non-Operational Expenses", stroke: palette.primary.main, activeDot: { r: 8 } }), _jsx(Line, { type: "monotone", dataKey: "Operational Expenses", stroke: palette.primary.main })] }) })] }), _jsxs(DashboardBox, { gridArea: "e", children: [_jsx(ChartHeader, { title: "Campaigns and Targets" }), _jsxs(FlexBetween, { children: [_jsx(PieChart, { width: 100, height: 200, margin: { top: 0, right: 0, left: 20, bottom: 0, }, children: _jsx(Pie, { stroke: 'none', data: pieData, innerRadius: 18, outerRadius: 38, paddingAngle: 10, dataKey: "value", children: pieData.map((_entry, index) => (_jsx(Cell, { fill: pieColors[index] }, `cell-${index}`))) }) }), _jsxs(Box, { ml: "-0.7rem", flexBasis: "40%", textAlign: "center", paddingRight: "1rem", children: [_jsx(Typography, { variant: "h5", children: "Target Sales" }), _jsx(Typography, { m: "0.3rem 0", variant: "h3", color: palette.primary.main, children: "83" }), _jsx(Typography, { variant: "h6", children: "Finance goals of the campaign that is desired" })] }), _jsxs(Box, { flexBasis: "40%", children: [_jsx(Typography, { variant: "h5", children: "Loses in Revenue" }), _jsx(Typography, { m: "0.3rem 0", variant: "h3", color: palette.primary.main, children: "Losses are down 25%" }), _jsx(Typography, { variant: "h6", children: "Profit Margins" }), _jsx(Typography, { variant: "h6", children: "Margins are up by 30% from last month." })] })] })] }), _jsxs(DashboardBox, { gridArea: "f", children: [_jsx(ChartHeader, { title: "Product Prices vs Expenses" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(ScatterChart, { margin: {
                                top: 20,
                                right: 25,
                                bottom: 40,
                                left: -10,
                            }, children: [_jsx(CartesianGrid, { stroke: palette.grey[300], opacity: 0.3 }), _jsx(XAxis, { type: "number", dataKey: "price", name: "price", axisLine: false, style: { fontSize: "10px" }, tickFormatter: (v) => `$${v}` }), _jsx(YAxis, { type: "number", dataKey: "expense", name: "expense", axisLine: false, tickLine: false, style: { fontSize: "10px" }, tickFormatter: (v) => `$${v}` }), _jsx(Tooltip, { formatter: (v) => `$${v}` }), _jsx(Scatter, { name: "Product Expense Ratio", data: productExpenseData, fill: palette.grey[100] })] }) })] })] }));
};
export default Row2;
