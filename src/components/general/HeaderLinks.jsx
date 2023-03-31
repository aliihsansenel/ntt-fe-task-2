import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

function FooterLinks() {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Stack)({
        color: "black",
        alignSelf: "center",
        "& .stack-1": { rowGap: "24px", fontWeight: 500, fontSize: 24 },
        "& .stack-2": { rowGap: "12px", fontWeight: 400, fontSize: 20 },
        // [breakpoints.only("mobile")]: {
        //     display: "none",
        // },
        // [breakpoints.down("desktop")]: {
        //     "& .stack-1": { rowGap: "12px" },
        //     "& .stack-2": { display: "none" },
        // },
        [breakpoints.up("desktop")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "116px",
        },
    });

    return (
        <StyledContainer>
            // todo
            {[1].map((header) => (
                <Stack className="stack-1">
                    <Typography>Header {header}</Typography>
                    <Stack className="stack-2">
                        {[1, 2, 3, 4].map((subheader) => (
                            <Typography key={subheader}>
                                Header {subheader}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            ))}
        </StyledContainer>
    );
}

export default FooterLinks;
