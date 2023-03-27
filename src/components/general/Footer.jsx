import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import NttLogo from "../icon/NttLogo";

import nttMotto from "@assets/motto-logo.svg";
import StackRow from "../layout/StackRow";
import { Divider } from "../layout";
import ResponsiveContainer from "../layout/ResponsiveContainer";
import EmailSearchBar from "./SearchBar2";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    const { breakpoints } = useTheme();

    const StyledContainer = styled(Stack)({
        boxSizing: "border-box",
        backgroundColor: "#0059BC",
        height: "258px",
        color: "white",
        [breakpoints.only("mobile")]: {
            "& .responsive-container:nth-of-type(1)": {
                marginTop: "48px",
                marginBottom: "48px",
            },
            "& .MuiTypography-paragraph": {
                display: "none",
            },
        },
        [breakpoints.up("tablet")]: {
            height: "400px",
            "& .responsive-container:nth-of-type(1)": {
                marginTop: "65px",
                marginBottom: "65px",
            },
        },
        [breakpoints.up("desktop")]: {},
        "& .responsive-container": {
            display: "flex",
            "&:nth-of-type(1)": {
                flexGrow: 1,
                alignItems: "stretch",
            },
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
            <ResponsiveContainer>
                <Stack
                    flexDirection={"row"}
                    columnGap={"10vw"}
                    alignItems={"stretch"}
                >
                    <Stack justifyContent={"space-between"}>
                        <Stack rowGap={"7.5px"}>
                            <NttLogo fillColor={"#ffffff"} />
                            <img
                                height="10"
                                width="136.2px"
                                src={nttMotto}
                                alt="Ntt Motto"
                            />
                            <Typography marginTop="24px" paragraph>
                                Lorem ipsum dolor sit amet consectetur. Auctor
                                tempor pretium aliquam neque.
                            </Typography>
                        </Stack>
                        <EmailSearchBar />
                    </Stack>
                    <FooterLinks />
                </Stack>
            </ResponsiveContainer>
            <Divider />
            <ResponsiveContainer>
                <Stack flexDirection={"row"} justifyContent="space-between" flexGrow={1}>
                    <Typography component={"div"}>contact@nttdata.com</Typography>
                    <Typography component={"div"}>+3 9876 765 444</Typography>
                    <Typography component={"div"}>Son</Typography>
                </Stack>
            </ResponsiveContainer>
        </StyledContainer>
    );
};

export default Footer;