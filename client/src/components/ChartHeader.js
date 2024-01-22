import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FlexBetween from './FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';
const ChartHeader = ({ icon, title, subtitle }) => {
    const { palette } = useTheme();
    return (_jsx(FlexBetween, { color: palette.grey[400], margin: "1.5rem 1rem 0 1rem", children: _jsxs(FlexBetween, { children: [icon, _jsxs(Box, { width: '100%', children: [_jsx(Typography, { variant: 'h4', mb: '-0.1rem', children: title }), _jsx(Typography, { variant: 'h6', color: palette.primary.light, children: subtitle })] })] }) }));
};
export default ChartHeader;
