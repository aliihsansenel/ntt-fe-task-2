import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

function ResponsiveContainer({ children }) {
    const { breakpoints } = useTheme();

    const ModifiedBox = styled(Box)({
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
        [breakpoints.up("xl")]: {
            marginLeft: "max(120px, auto)",
            marginRight: "max(120px, auto)",
        },
    });
    return (
        <ModifiedBox className="responsive-container">{children}</ModifiedBox>
    );
}

export default ResponsiveContainer;
