import { createTheme, ThemeProvider } from '@mui/material';
import React from "react";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            desktop: 1440,
        },
    },
});

function ThemeComponent({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeComponent;
