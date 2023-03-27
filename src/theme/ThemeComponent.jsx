import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            desktop: 1440,
        },
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        backgroundColor: "#0059BC",
                    },
                },
            ],
        },
    },
});

function ThemeComponent({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeComponent;
