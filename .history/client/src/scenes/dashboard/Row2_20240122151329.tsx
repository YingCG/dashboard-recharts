import ChartHeader from '@/components/ChartHeader'
import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween';
import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart, Cell, ScatterChart, Scatter, } from 'recharts';
import { GetKpisResponse, GetProductsResponse } from '@/state/types';
import {kpis} from "@/data/kpis.js";
import {products} from "@/data/products.js"

const pieData = [
  {name: "Group A", value: 600},
  {name: "Group B", value: 400},
]
type Props = {}
const Row2 = (props: Props) => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[300]]
    const data: GetKpisResponse[] = kpis

    const  products: GetProductsResponse[]  = products

    console.log('Row2 data:', data)

    const operationalExpenses = useMemo(() => {
        return(
          data &&
          data[0].monthlyData.map(
              ({ month, operationalExpenses, nonOperationalExpenses }) => {
                return {
                  name: month.substring(0, 3),
                  "Operational Expenses": operationalExpenses,
                  "Non Operational Expenses": nonOperationalExpenses,
                };
              }
            )
          );
        }, [data]);
      
        const productExpenseData = useMemo(() => {
          return (
            productData &&
            productData.map(({ _id, price, expense }) => {
              return {
                id: _id,
                price: price,
                expense: expense,
              };
            })
          );
        }, [productData]);

  return (
    <>
        <DashboardBox gridArea="d">
        <ChartHeader title="Operational vs Non-Operational Expenses" />

        <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={operationalExpenses}
            margin={{  top: 15,  right: 25,  left: -10,  bottom: 60,  }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3}/>
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px'}}/>
            <YAxis tickLine={false} axisLine={{strokeWidth: '0'}} style={{ fontSize: '10px'}} />
            <Tooltip />
            <Line type="monotone" dataKey="Non-Operational Expenses" stroke={palette.tertiary[500]} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
        </LineChart>
        </ResponsiveContainer>
        </DashboardBox>

        <DashboardBox gridArea="e">
          <ChartHeader title="Campaigns and Targets" />
          <FlexBetween>
            <PieChart width={110} height={100}  margin={{  top: 0,  right: -10,  left: -10,  bottom: 0,  }} >
              <Pie
                stroke='none'
                data={pieData}
                innerRadius={18}
                outerRadius={38}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
              <Typography variant="h5">Target Sales</Typography>
              <Typography m="0.3rem 0" variant="h3" color={palette.primary[600]}>
                83
              </Typography>
              <Typography variant="h6">
                Finance goals of the campaign that is desired
              </Typography>
            </Box>
            <Box  flexBasis="40%">
              <Typography variant="h5">Loses in Revenue</Typography>
              <Typography m="0.3rem 0" variant="h3" color={palette.primary[600]}>
                Losses are down 25%
              </Typography>
              <Typography variant="h6">
                Profit Margins
              </Typography>
              <Typography variant="h6">
                Margins are up by 30% from last month.
              </Typography>
            </Box>
          </FlexBetween>
        </DashboardBox>

        <DashboardBox gridArea="f">
        <ChartHeader title="Product Prices vs Expenses" />

        <ResponsiveContainer width="100%" height="100%">
        <ScatterChart 
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[300]} opacity={0.3}/>
          <XAxis type="number" dataKey="price" name="price" axisLine={false} style={{fontSize: "10px"}} tickFormatter={(v) => `$${v}`}/>
          <YAxis type="number"  dataKey="expense" name="expense" axisLine={false} tickLine={false} style={{fontSize: "10px"}}  tickFormatter={(v) => `$${v}`} />
          <Tooltip formatter={(v) => `$${v}`} />
          <Scatter name="Product Expense Ratio" data={productExpenseData} fill={palette.tertiary[500]} opacity={0.7} />
        </ScatterChart>
      </ResponsiveContainer>
        </DashboardBox>
    </>
  )
}

export default Row2