import React from 'react'
import FlexBetween from './FlexBetween'
import { Box, Typography, useTheme } from '@mui/material'
import { Margin } from '@mui/icons-material'

type Props = {
    icon? : React.ReactNode;
    title: string;
    subtitle?: string
}

const ChartHeader = ({icon, title, subtitle }: Props) => {
    const {palette} = useTheme()

  return (
   <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
        <FlexBetween>
            {icon}
            <Box width='100%'>
                <Typography variant='h4' mb='-0.1rem' >
                    {title}
                </Typography>
                <Typography variant='h6' color={palette.primary[300]}>{subtitle}</Typography>
            </Box>
        </FlexBetween>
     </FlexBetween>
  )
}

export default ChartHeader