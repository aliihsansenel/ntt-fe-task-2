import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

function ResponsiveContainer({ children }) {
    const { breakpoints } = useTheme();

    const ModifiedBox = styled(Box)({
        maxWidth: 1440,
        [breakpoints.up("mobile")]: {
            marginLeft: "16px",
            marginRight: "16px",
        },
        [breakpoints.up("tablet")]: {
            marginLeft: "32px",
            marginRight: "32px",
        },
        [breakpoints.up("desktop")]: {
            marginLeft: "120px",
            marginRight: "120px",
        },
    });
    return (
        <ModifiedBox className="responsive-container">{children}</ModifiedBox>
    );
}

export default ResponsiveContainer;
