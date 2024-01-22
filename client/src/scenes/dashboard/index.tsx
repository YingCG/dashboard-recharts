import DashboardBox from '@/components/DashboardBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Row1 from './Row1'
import Row2 from './Row2'


const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"d b f"
"d e f"
"d e f"

`
const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"

`
const Dashboard = () => {

    const isAboveMediumScreen = useMediaQuery("(min-width:860px)")
    const {palette} = useTheme();

  return (
    <Box 
    width="100%" 
    height="100%" 
    display="grid" 
    gap="1.5rem" 
    sx={ isAboveMediumScreen? { gridTemplateColumns: "repeat(3, minmax(370, 1fr))",
         gridTemplateRows: "repeat(6, minmax(60px, 1fr))", 
         gridTemplateAreas: gridTemplateLargeScreens}
        : { gridAutoColumns: "1fr",
            gridAutoRows: "80px", 
            gridTemplateAreas: gridTemplateSmallScreens}
        } >
      
      <Row1/>
       <Row2/>
        <DashboardBox gridArea="g"></DashboardBox>
        <DashboardBox gridArea="h"></DashboardBox>
        <DashboardBox gridArea="i"></DashboardBox>
        <DashboardBox gridArea="j"></DashboardBox>
    </Box>
  )
}

export default Dashboard
