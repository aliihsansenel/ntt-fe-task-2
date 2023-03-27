import React from "react";

import ProductCardGrid from "./ProductCardGrid";
import { Box, Stack, Typography, Button, useTheme } from "@mui/material";

import StackRow from "../layout/StackRow";
import favIcon from "@assets/fav-black-icon.svg";
import { styled } from "@mui/system";

const ProductCardArea = () => {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Box)({
        maxWidth: 1200,
        [breakpoints.only("mobile")]: {
            margin: "48px 16px 0",
        },
        [breakpoints.only("tablet")]: {
            margin: "48px 32px 0",
        },
        [breakpoints.up("desktop")]: {
            margin: "48px 120px 0",
        },
        "& .MuiTypography-h1": {
            fontWeight: 500,
            fontSize: "min(2em, calc(1em + 0.8vw))",
        },
        "& .MuiButton-contained": {
            padding: "4px 8px",
        },
    });
    return (
        <StyledContainer>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <Typography variant="h1">Content Title Goes Here</Typography>
                <StackRow sx={{ columnGap: "20px" }}>
                    <StackRow sx={{ columnGap: "8px" }}>
                        <img
                            src={favIcon}
                            height={24}
                            width={24}
                            alt="Filter favorites"
                        />
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            lineHeight={"19px"}
                        >
                            0 ÜRÜN
                        </Typography>
                    </StackRow>
                    <Button variant="contained" disableElevation>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            lineHeight={"19px"}
                        >
                            Beğenilenler
                        </Typography>
                    </Button>
                </StackRow>
            </Stack>
            <ProductCardGrid />
        </StyledContainer>
    );
};

export default ProductCardArea;
