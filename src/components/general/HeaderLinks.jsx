import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

function HeaderLinks() {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Stack)({
        color: "black",
        alignSelf: "center",
        "& .stack-1, .stack-2": { rowGap: "12px", fontWeight: 500, fontSize: 14 },
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "98px",
    });

    return (
        <StyledContainer>
            {[1, 2].map((header) => (
                <Stack className="stack-1">
                    <Typography noWrap fontWeight={500} >Header {header}</Typography>
                    <Stack className="stack-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((subheader) => (
                            <Typography noWrap key={subheader} fontWeight={400}>
                                Subheader {subheader}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            ))}
        </StyledContainer>
    );
}

export default HeaderLinks;
