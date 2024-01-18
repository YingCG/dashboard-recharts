import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Dashboard } from "@mui/icons-material"
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState("dashboard")

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
       
        <Typography variant="h4" fontSize="16px"> <Dashboard />Organizer</Typography>
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link to="/" onClick={() => setSelected("dashboard")} style={{color: selected === "dashboard"? "inherit": palette.grey[700]}}>Dashboard</Link>
            </Box>
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link to="/predictions" onClick={() => setSelected("predictions")} style={{color: selected === "predictions"? "inherit": palette.grey[700]}}>Predictions</Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar