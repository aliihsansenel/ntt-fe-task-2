import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

function FooterLinks() {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Stack)({
        color: "black",
        alignSelf: "center",
        "& .stack-1": { rowGap: "12px", fontWeight: 500, fontSize: 14 },
        "& .stack-2": { rowGap: "12px", fontWeight: 400, fontSize: 14 },
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "98px",
    });

    return (
        <StyledContainer>
            {[1, 2].map((header) => (
                <Stack className="stack-1">
                    <Typography noWrap>Header {header}</Typography>
                    <Stack className="stack-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((subheader) => (
                            <Typography noWrap key={subheader}>
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
