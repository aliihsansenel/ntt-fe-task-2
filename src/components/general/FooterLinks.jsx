import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

function FooterLinks() {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Stack)({
        color: "white",
        alignSelf: "center",
        "& .stack-1": { rowGap: "24px", fontWeight: 500, fontSize: 24 },
        "& .stack-2": { rowGap: "12px", fontWeight: 400, fontSize: 20 },
        [breakpoints.only("mobile")]: {
            display: "none",
        },
        [breakpoints.down("desktop")]: {
            "& .stack-1": { rowGap: "12px" },
            "& .stack-2": { display: "none" },
        },
        [breakpoints.up("desktop")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "116px",
        },
    });

    return (
        <StyledContainer>
            {[1, 2, 3].map((title) => (
                <Stack className="stack-1">
                    <Typography>Title {title}</Typography>
                    <Stack className="stack-2">
                        {[1, 2, 3, 4].map((subtitle) => (
                            <Typography key={subtitle}>
                                Subtitle {subtitle}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            ))}
        </StyledContainer>
    );
}

export default FooterLinks;
