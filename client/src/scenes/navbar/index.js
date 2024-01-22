import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dashboard } from "@mui/icons-material";
import { Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
const Navbar = () => {
    const { palette } = useTheme();
    // const [selected, setSelected] = useState("dashboard")
    return (_jsx(FlexBetween, { mb: "0.25rem", p: "0.5rem 0rem", color: palette.grey[300], children: _jsxs(Typography, { variant: "h4", fontSize: "16px", children: [" ", _jsx(Dashboard, {}), "Dashboard"] }) }));
};
export default Navbar;
